#!/usr/bin/env node
// Crawls the site the way Google sees it (every sitemap URL plus every internal link, hreflang and
// canonical on those pages) and fails on anything Search Console would list as "not indexed" because
// of us: sitemap URLs that aren't indexable 200s, and links to redirects, errors or noindex pages.
// Run it against production after a deploy, since Cloudflare rewrites HTML at the edge
// (e.g. Email Obfuscation's /cdn-cgi/l/email-protection links).
//
//   node scripts/audit-indexing.mjs                  # https://promoclock.co
//   BASE=http://127.0.0.1:18302 node scripts/audit-indexing.mjs

const BASE = (process.env.BASE ?? "https://promoclock.co").replace(/\/$/, "");
const UA = "Mozilla/5.0 (compatible; PromoClockAudit/1.0; +https://promoclock.co)";
const CONCURRENCY = 8;
// Sitemaps list the production origin; when auditing another host, fetch it there instead.
const toBase = (url) => url.replace(/^https:\/\/promoclock\.co/, BASE);

async function get(url) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(toBase(url), { redirect: "manual", headers: { "user-agent": UA } });
      const type = res.headers.get("content-type") ?? "";
      const body = /html|xml/.test(type) ? await res.text() : (await res.arrayBuffer(), "");
      return { status: res.status, location: res.headers.get("location"), xRobots: res.headers.get("x-robots-tag") ?? "", type, body };
    } catch (error) {
      if (attempt === 3) return { status: 0, error: String(error), type: "", body: "" };
    }
  }
}

const attr = (tag, name) => tag.match(new RegExp(`\\s${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, "i"))?.slice(1).find((v) => v !== undefined);
const unescape = (s) => s?.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map((m) => m[0]);

function parse(html, pageUrl) {
  const head = html.split(/<\/head>/i)[0];
  const robots = tags(head, "meta")
    .filter((m) => /name\s*=\s*["'](robots|googlebot)["']/i.test(m))
    .map((m) => attr(m, "content") ?? "");
  const links = tags(head, "link");
  const canonical = links.filter((l) => /rel\s*=\s*["']canonical["']/i.test(l)).map((l) => unescape(attr(l, "href")));
  const hreflang = links
    .filter((l) => /rel\s*=\s*["']alternate["']/i.test(l) && /hreflang/i.test(l))
    .map((l) => ({ lang: attr(l, "hreflang"), href: unescape(attr(l, "href")) }));
  const anchors = [];
  for (const a of tags(html, "a")) {
    const href = unescape(attr(a, "href"));
    if (!href || /^(mailto|tel|javascript):/i.test(href)) continue;
    let url;
    try {
      url = new URL(href, pageUrl);
    } catch {
      continue;
    }
    if (!/^(www\.)?promoclock\.co$/.test(url.host)) continue;
    url.hash = "";
    anchors.push(url.toString());
  }
  return { robots, canonical, hreflang, anchors };
}

async function pool(items, fn) {
  let next = 0;
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (next < items.length) await fn(items[next++]);
    }),
  );
}

const isNoindex = (r) => [...(r.robots ?? []), r.xRobots ?? ""].some((v) => /noindex|none/i.test(v));

// 1. Sitemap URLs.
const index = await get("https://promoclock.co/sitemap-index.xml");
const sitemapUrls = new Set();
for (const [, loc] of index.body.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const map = await get(loc);
  for (const [, url] of map.body.matchAll(/<loc>([^<]+)<\/loc>/g)) sitemapUrls.add(unescape(url));
}
if (sitemapUrls.size === 0) {
  console.error(`No URLs found in ${BASE}/sitemap-index.xml`);
  process.exit(1);
}

// 2. Every sitemap page.
const pages = new Map();
await pool([...sitemapUrls], async (url) => {
  const r = await get(url);
  pages.set(url, { ...r, ...(r.status === 200 && r.type.includes("html") ? parse(r.body, url) : {}), body: undefined });
});

// 3. Everything those pages point at that isn't in the sitemap.
const linkedFrom = new Map();
for (const [from, p] of pages) {
  for (const to of [...(p.anchors ?? []), ...(p.canonical ?? []), ...(p.hreflang ?? []).map((h) => h.href)]) {
    if (!linkedFrom.has(to)) linkedFrom.set(to, []);
    linkedFrom.get(to).push(from);
  }
}
const targets = new Map();
await pool(
  [...linkedFrom.keys()].filter((url) => !pages.has(url)),
  async (url) => {
    const r = await get(url);
    targets.set(url, { ...r, robots: r.status === 200 && r.type.includes("html") ? parse(r.body, url).robots : [], body: undefined });
  },
);
const lookup = (url) => pages.get(url) ?? targets.get(url);

// 4. Problems: each one is a URL Search Console would list under "Why pages aren't indexed".
const problems = [];
const problem = (kind, url, detail) => problems.push({ kind, url, detail });
for (const [url, p] of pages) {
  if (p.status !== 200) problem("sitemap URL is not 200", url, `${p.status} ${p.location ?? p.error ?? ""}`);
  else if (isNoindex(p)) problem("sitemap URL is noindex", url, [...p.robots, p.xRobots].join(" | "));
  else if (p.canonical?.length !== 1 || p.canonical[0] !== url) problem("sitemap URL canonicalises elsewhere", url, p.canonical?.join(", "));
  for (const { lang, href } of p.hreflang ?? []) {
    const t = lookup(href);
    if (!t || t.status !== 200 || isNoindex(t)) problem("hreflang points at a non-indexable URL", url, `${lang} → ${href} (${t?.status})`);
    else if (t.hreflang && !t.hreflang.some((b) => b.href === url)) problem("hreflang is not reciprocal", url, `${lang} → ${href}`);
  }
}
for (const [url, t] of targets) {
  const from = linkedFrom.get(url);
  const where = `linked from ${from.length} page(s), e.g. ${from[0]}`;
  if (t.status >= 300 && t.status < 400) problem("link to a redirect", url, `${t.status} → ${t.location}; ${where}`);
  else if (t.status !== 200) problem("link to an error", url, `${t.status} ${t.error ?? ""}; ${where}`);
  else if (isNoindex(t)) problem("link to a noindex page", url, where);
}

const orphans = [...targets].filter(([, t]) => t.status === 200 && t.type.includes("html") && !isNoindex(t)).map(([url]) => url);
console.log(`${BASE}: ${pages.size} sitemap URLs, ${targets.size} other link targets checked.`);
if (orphans.length) console.log(`Note: ${orphans.length} linked HTML page(s) missing from the sitemap:\n  ${orphans.join("\n  ")}`);
if (problems.length === 0) {
  console.log("No indexing problems found.");
} else {
  const byKind = Object.groupBy(problems, (p) => p.kind);
  for (const [kind, list] of Object.entries(byKind)) {
    console.log(`\n${kind} (${list.length})`);
    for (const p of list.slice(0, 20)) console.log(`  ${p.url}  ${p.detail ?? ""}`);
    if (list.length > 20) console.log(`  … ${list.length - 20} more`);
  }
  process.exitCode = 1;
}
