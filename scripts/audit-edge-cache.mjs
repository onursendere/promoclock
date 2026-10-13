#!/usr/bin/env node
// Checks the Cloudflare HTML edge cache (docs/edge-cache.md) on a sample of pages: one per locale and
// section from the sitemap.
//
//   node scripts/audit-edge-cache.mjs                                # production, after the deploy purge
//   BASE=http://127.0.0.1:18302 node scripts/audit-edge-cache.mjs    # test container, before the swap
//
// Against a test container it checks what the origin promises: pages carry the edge-only
// Cloudflare-CDN-Cache-Control header and browsers get max-age=0, the language redirect at "/" carries
// no cache header, /api/status keeps its contract header, and every /_astro asset the LIVE site's
// pages reference is still served, so the swap can't break pages that Cloudflare or a browser tab
// still holds.
// Against production it checks what Cloudflare does with that: pages come from the edge on repeat
// (with an Age), browsers still get max-age=0 and never see the edge header, the edge holds the
// current build (same Last-Modified as a cache-busted fetch from the origin, so the purge ran), every
// asset those pages reference loads, "/" still redirects by cookie and Accept-Language, and
// /api/status is cached by its own s-maxage only.

const LIVE = "https://promoclock.co";
const BASE = (process.env.BASE ?? LIVE).replace(/\/$/, "");
const EDGE = BASE === LIVE;
const UA = "Mozilla/5.0 (compatible; PromoClockAudit/1.0; +https://promoclock.co)";
const CONCURRENCY = 6;
const BROWSER_CACHE = "public, max-age=0, must-revalidate";
const EDGE_CACHE = /^max-age=\d+, stale-while-revalidate=\d+, stale-if-error=\d+$/;
const STATUS_CACHE = /^public, s-maxage=\d+, stale-while-revalidate=10$/;
/** Served from Cloudflare's cache (UPDATING = stale copy while it revalidates in the background). */
const FROM_CACHE = new Set(["HIT", "UPDATING", "REVALIDATED"]);

const problems = [];
const problem = (url, detail) => problems.push(`${url}  ${detail}`);

async function get(url, headers = {}) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, { redirect: "manual", headers: { "user-agent": UA, ...headers } });
      const body = /html|xml|css|json/.test(res.headers.get("content-type") ?? "") ? await res.text() : (await res.arrayBuffer(), "");
      return { status: res.status, headers: res.headers, body };
    } catch (error) {
      if (attempt === 3) return { status: 0, headers: new Headers(), body: "", error: String(error) };
    }
  }
}

async function pool(items, fn) {
  let next = 0;
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (next < items.length) await fn(items[next++]);
    }),
  );
}

const cacheStatus = (r) => r.headers.get("cf-cache-status") ?? "none";
const assetRefs = (text) => [...text.matchAll(/\/_astro\/[^"'\s)>?#&\\]+/g)].map((m) => m[0]);

// 1. Sample: every locale home, plus the first sitemap URL of each section index and detail page type
// (/<locale>/<section>/ and /<locale>/<section>/<slug>/).
const index = await get(`${BASE}/sitemap-index.xml`);
const urls = [];
for (const [, loc] of index.body.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const map = await get(loc.replace(LIVE, BASE));
  for (const [, url] of map.body.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.push(new URL(url).pathname);
}
if (urls.length === 0) {
  console.error(`No URLs found in ${BASE}/sitemap-index.xml`);
  process.exit(1);
}
const groups = new Map();
for (const path of urls) {
  const parts = path.split("/").filter(Boolean);
  const key = parts.slice(0, 2).join("/") + (parts.length > 2 ? "/*" : "");
  if (!groups.has(key)) groups.set(key, path);
}
const sample = [...groups.values()];

// 2. Pages.
const assets = new Set();
await pool(sample, async (path) => {
  const first = await get(BASE + path);
  if (first.status !== 200) return problem(path, `status ${first.status} ${first.error ?? ""}`);
  const cacheControl = first.headers.get("cache-control");
  const edgeHeader = first.headers.get("cloudflare-cdn-cache-control");
  if (cacheControl !== BROWSER_CACHE) problem(path, `browsers get Cache-Control "${cacheControl}", expected "${BROWSER_CACHE}"`);

  if (!EDGE) {
    if (!edgeHeader || !EDGE_CACHE.test(edgeHeader)) problem(path, `Cloudflare-CDN-Cache-Control is "${edgeHeader}"`);
    // The page the visitor may still hold: the live one, cached at the edge or in their browser.
    const live = await get(LIVE + path);
    for (const ref of assetRefs(live.body)) assets.add(ref);
    for (const ref of assetRefs(first.body)) assets.add(ref);
    return;
  }

  if (edgeHeader) problem(path, "Cloudflare-CDN-Cache-Control reaches the browser (should be stripped at the edge)");
  for (const ref of assetRefs(first.body)) assets.add(ref);
  let repeat = await get(BASE + path);
  if (!FROM_CACHE.has(cacheStatus(repeat))) repeat = await get(BASE + path);
  if (!FROM_CACHE.has(cacheStatus(repeat))) problem(path, `not served from the edge on repeat: cf-cache-status ${cacheStatus(first)} then ${cacheStatus(repeat)}`);
  else if (repeat.headers.get("age") === null) problem(path, "cached copy has no Age header");
  // A query string is a separate cache key, so this one comes from the origin.
  const origin = await get(`${BASE}${path}?edge-audit=${Date.now()}`);
  const edgeBuild = repeat.headers.get("last-modified");
  const originBuild = origin.headers.get("last-modified");
  if (edgeBuild !== originBuild) problem(path, `edge holds an older build (Last-Modified ${edgeBuild}, origin ${originBuild}): purge the cache`);
});

// 3. Every hashed asset those pages (and their stylesheets) reference loads.
const stylesheets = [...assets].filter((a) => a.endsWith(".css"));
await pool(stylesheets, async (css) => {
  for (const ref of assetRefs((await get(BASE + css)).body)) assets.add(ref);
});
const missing = [];
await pool([...assets], async (asset) => {
  const r = await get(BASE + asset);
  if (r.status !== 200) missing.push(`${asset} (${r.status})`);
});
if (missing.length) problem("/_astro/", `${missing.length} referenced asset(s) not served: ${missing.slice(0, 5).join(", ")}${missing.length > 5 ? " …" : ""}`);

// 4. "/" picks the language per visitor, so it must never be cached.
const redirects = [
  [{ "accept-language": "de-DE,de;q=0.9" }, "/de/"],
  [{ "accept-language": "ja" }, "/ja/"],
  [{ cookie: "LOCALE=fr" }, "/fr/"],
  [{}, "/en/"],
];
for (let round = 0; round < 2; round++) {
  for (const [headers, target] of redirects) {
    const r = await get(`${BASE}/`, headers);
    const location = r.headers.get("location")?.replace(/^https?:\/\/[^/]+/, "");
    if (r.status !== 302 || location !== target) problem("/", `${JSON.stringify(headers)} → ${r.status} ${location}, expected 302 ${target}`);
    if (r.headers.get("cache-control") || r.headers.get("cloudflare-cdn-cache-control")) problem("/", "language redirect carries a cache header");
    if (EDGE && FROM_CACHE.has(cacheStatus(r))) problem("/", `language redirect served from the edge cache (${cacheStatus(r)})`);
  }
}

// 5. /api/status: its own header, untouched (Browser Cache TTL must not add a max-age).
const status = await get(`${BASE}/api/status`);
const statusCache = status.headers.get("cache-control");
if (status.status !== 200) problem("/api/status", `status ${status.status}`);
else {
  if (!STATUS_CACHE.test(statusCache ?? "")) problem("/api/status", `Cache-Control is "${statusCache}"`);
  if (status.headers.get("cloudflare-cdn-cache-control")) problem("/api/status", "unexpected Cloudflare-CDN-Cache-Control");
  const body = JSON.parse(status.body);
  const age = Date.now() - Date.parse(body.timestamp);
  if (age > 75_000) problem("/api/status", `response is ${Math.round(age / 1000)} s old`);
  if (Date.parse(body.nextChange) < Date.now() - 1_000) problem("/api/status", `cached past its change: nextChange ${body.nextChange}`);
  if (EDGE && cacheStatus(status) === "DYNAMIC") problem("/api/status", "not eligible for the edge cache (cf-cache-status DYNAMIC)");
}

console.log(`${BASE}: ${sample.length} pages (of ${urls.length}) and ${assets.size} assets checked${EDGE ? " through Cloudflare" : " (origin; assets from the live pages too)"}.`);
if (problems.length === 0) {
  console.log("No edge cache problems found.");
} else {
  console.log(`\n${problems.length} problem(s):`);
  for (const p of problems.slice(0, 40)) console.log(`  ${p}`);
  if (problems.length > 40) console.log(`  … ${problems.length - 40} more`);
  process.exitCode = 1;
}
