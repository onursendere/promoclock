#!/usr/bin/env node
// Reads the JSON-LD on every sitemap URL the way Google does and fails on anything Search Console's
// Enhancements reports would flag: unparsable blocks, and invalid items or "Missing field" warnings in
// the reports this site can appear in (Image metadata, Events, Breadcrumbs). It also checks Article,
// FAQ and Organization basics, which the Rich Results Test shows. SoftwareApplication is not checked:
// Google's app rich result needs user ratings we don't publish, and it has no Search Console report.
// Run it against production after a deploy, since Cloudflare rewrites HTML at the edge.
//
//   node scripts/audit-structured-data.mjs                  # https://promoclock.co
//   BASE=http://127.0.0.1:18302 node scripts/audit-structured-data.mjs

const BASE = (process.env.BASE ?? "https://promoclock.co").replace(/\/$/, "");
const UA = "Mozilla/5.0 (compatible; PromoClockAudit/1.0; +https://promoclock.co)";
const CONCURRENCY = 8;
// Sitemaps and structured data use the production origin; when auditing another host, fetch it there.
const toBase = (url) => url.replace(/^https:\/\/promoclock\.co/, BASE);

async function get(url) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(toBase(url), { redirect: "manual", headers: { "user-agent": UA } });
      return { status: res.status, body: await res.text() };
    } catch (error) {
      if (attempt === 3) return { status: 0, body: "", error: String(error) };
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

const unescape = (s) => s?.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const attr = (tag, name) => tag.match(new RegExp(`\\s${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, "i"))?.slice(1).find((v) => v !== undefined);

/** Every image URL the page shows (<img src>, srcset candidates), absolute. */
function pageImages(html, pageUrl) {
  const urls = new Set();
  for (const [tag] of html.matchAll(/<(?:img|source)\b[^>]*>/gi)) {
    const candidates = [attr(tag, "src"), ...(unescape(attr(tag, "srcset")) ?? "").split(",").map((c) => c.trim().split(/\s+/)[0])];
    for (const src of candidates) if (src) urls.add(new URL(unescape(src), pageUrl).toString());
  }
  return urls;
}

/** Every object with an @type, at any depth; objects holding only an @id are references. */
function collect(value, out = []) {
  if (Array.isArray(value)) value.forEach((v) => collect(v, out));
  else if (value && typeof value === "object") {
    if (value["@type"]) out.push(value);
    for (const [key, v] of Object.entries(value)) if (key !== "@context") collect(v, out);
  }
  return out;
}

const types = (node) => [].concat(node?.["@type"] ?? []);
const is = (node, ...names) => types(node).some((t) => names.includes(t));
const isEvent = (node) => types(node).some((t) => /Event$|^Festival$|^Hackathon$/.test(t));
const empty = (v) => v === undefined || v === null || v === "" || (Array.isArray(v) && v.length === 0);
const missing = (node, fields) => fields.filter((f) => empty(node[f]));

// Image metadata: Google lists any of these that is absent as a "Missing field" issue.
const IMAGE_METADATA = ["contentUrl", "creator", "creditText", "copyrightNotice", "license", "acquireLicensePage"];

// 1. Sitemap URLs.
const index = await get("https://promoclock.co/sitemap-index.xml");
const sitemapUrls = new Set();
for (const [, loc] of index.body.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const map = await get(unescape(loc));
  for (const [, url] of map.body.matchAll(/<loc>([^<]+)<\/loc>/g)) sitemapUrls.add(unescape(url));
}
if (sitemapUrls.size === 0) {
  console.error(`No URLs found in ${BASE}/sitemap-index.xml`);
  process.exit(1);
}

// 2. Every sitemap page's structured data.
const problems = [];
const problem = (kind, url, detail) => problems.push({ kind, url, detail });
const counts = {};
const breadcrumbTargets = new Map();

await pool([...sitemapUrls], async (url) => {
  const page = await get(url);
  if (page.status !== 200) return problem("page did not load", url, `${page.status} ${page.error ?? ""}`);
  const blocks = [...page.body.matchAll(/<script\b[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
  if (blocks.length === 0) return problem("no structured data", url);

  const nodes = [];
  for (const block of blocks) {
    if (/__cf_email__|cdn-cgi\/l\/email-protection|\[email(?:&#160;|\s)protected\]/.test(block)) {
      problem("Cloudflare rewrote an email address inside JSON-LD", url);
    }
    try {
      collect(JSON.parse(block), nodes);
    } catch (error) {
      problem("Unparsable structured data", url, String(error.message ?? error).slice(0, 120));
    }
  }
  // Fullest copy of each @id, so references resolve.
  const ids = new Map();
  for (const node of nodes) {
    const id = node["@id"];
    if (id && Object.keys(node).length > (ids.get(id) ? Object.keys(ids.get(id)).length : 0)) ids.set(id, node);
  }
  const resolve = (v) => (v && typeof v === "object" && !Array.isArray(v) && v["@id"] && !v["@type"] ? (ids.get(v["@id"]) ?? v) : v);
  const images = pageImages(page.body, url);
  const seen = new Set();
  let faqPages = 0;

  for (const node of nodes) {
    if (node["@id"] && seen.has(node["@id"])) continue;
    if (node["@id"]) seen.add(node["@id"]);
    for (const t of types(node)) counts[t] = (counts[t] ?? 0) + 1;
    const label = node["@id"] ?? node.name ?? node.headline ?? types(node).join("/");

    if (is(node, "ImageObject") && IMAGE_METADATA.some((f) => node[f] !== undefined)) {
      const gaps = missing(node, IMAGE_METADATA);
      if (node.creator && empty(resolve(node.creator)?.name)) gaps.push("creator.name");
      if (gaps.length) problem("Image metadata: missing field", url, `${gaps.join(", ")} — ${label}`);
      if (node.contentUrl && !images.has(node.contentUrl)) {
        problem("Image metadata: contentUrl is not an image shown on the page", url, node.contentUrl);
      }
    }

    // Google: only in-person events, never sales, discounts, coupons or deadlines (manual-action risk).
    if (isEvent(node)) {
      const gaps = missing(node, ["name", "startDate", "location", "description", "endDate", "eventStatus", "image", "offers", "organizer", "performer"]);
      const location = resolve(node.location);
      if (location && !is(location, "Place")) gaps.push("location must be a Place (online-only events aren't supported)");
      else if (location && empty(location.address)) gaps.push("location.address");
      problem("Event (Google supports only in-person events, never promotions or deadlines)", url, `${label}: ${gaps.join(", ") || "check it is a real in-person event"}`);
    }

    if (is(node, "BreadcrumbList")) {
      const items = [].concat(node.itemListElement ?? []).map(resolve);
      if (items.length === 0) problem("Breadcrumbs: missing field", url, "itemListElement");
      items.forEach((li, i) => {
        const item = typeof li?.item === "string" ? li.item : (li?.item?.["@id"] ?? li?.item?.url);
        const gaps = [];
        if (li?.position !== i + 1) gaps.push(`position (got ${li?.position}, expected ${i + 1})`);
        if (empty(li?.name ?? li?.item?.name)) gaps.push("name");
        if (!item && i < items.length - 1) gaps.push("item");
        if (gaps.length) problem("Breadcrumbs: missing or invalid field", url, `#${i + 1}: ${gaps.join(", ")}`);
        if (item && !/^https:\/\/promoclock\.co\//.test(item)) problem("Breadcrumbs: item is not an absolute promoclock.co URL", url, item);
        else if (item && !sitemapUrls.has(item)) breadcrumbTargets.set(item, url);
      });
    }

    if (is(node, "Article", "NewsArticle", "BlogPosting")) {
      const gaps = missing(node, ["headline", "image", "datePublished", "dateModified", "author"]);
      for (const author of [].concat(node.author ?? []).map(resolve)) {
        if (empty(author?.name)) gaps.push("author.name");
        if (empty(author?.url)) gaps.push("author.url");
      }
      if (gaps.length) problem("Article: missing field", url, `${gaps.join(", ")} — ${label}`);
    }

    if (is(node, "FAQPage")) {
      faqPages++;
      const questions = [].concat(node.mainEntity ?? []).map(resolve);
      if (questions.length === 0) problem("FAQ: missing field", url, "mainEntity");
      for (const q of questions) {
        if (empty(q?.name) || empty(resolve(q?.acceptedAnswer)?.text)) problem("FAQ: question without name or answer text", url, q?.name ?? "?");
      }
    }

    if (is(node, "Organization") && node["@id"] && (empty(node.name) || empty(node.url) || empty(node.logo))) {
      problem("Organization: missing name, url or logo", url, label);
    }
  }
  if (faqPages > 1) problem("FAQ: more than one FAQPage on the page", url, String(faqPages));
});

// 3. Breadcrumb links outside the sitemap must still be indexable pages.
await pool([...breadcrumbTargets.keys()], async (target) => {
  const r = await get(target);
  if (r.status !== 200) problem("Breadcrumbs: item is not a 200 page", breadcrumbTargets.get(target), `${target} (${r.status})`);
});

const summary = Object.entries(counts)
  .sort((a, b) => b[1] - a[1])
  .map(([t, n]) => `${t} ${n}`)
  .join(", ");
console.log(`${BASE}: ${sitemapUrls.size} sitemap URLs checked.\nTypes: ${summary}`);
if (problems.length === 0) {
  console.log("No structured data problems found.");
} else {
  const byKind = Object.groupBy(problems, (p) => p.kind);
  for (const [kind, list] of Object.entries(byKind)) {
    console.log(`\n${kind} (${list.length})`);
    for (const p of list.slice(0, 20)) console.log(`  ${p.url}  ${p.detail ?? ""}`);
    if (list.length > 20) console.log(`  … ${list.length - 20} more`);
  }
  process.exitCode = 1;
}
