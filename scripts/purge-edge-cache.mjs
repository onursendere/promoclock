#!/usr/bin/env node
// Purges Cloudflare's cache for promoclock.co after a deploy, so the edge drops the previous release's
// pages at once instead of after their edge lifetime (docs/edge-cache.md), then waits until the edge
// serves the new build. Run it right after the container swap (or the cPanel upload).
//
//   CLOUDFLARE_API_TOKEN=… node scripts/purge-edge-cache.mjs
//
// The token needs only Zone → Cache Purge → Purge for promoclock.co. Without one, purge everything
// from the dashboard (Caching → Configuration) or the Cloudflare API, then run `npm run audit:edge-cache`.

const ZONE_ID = process.env.CLOUDFLARE_ZONE_ID ?? "1903bae9c5fecca86d4e33b4ccf1f6c5"; // promoclock.co
const TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const SITE = "https://promoclock.co";
const PROBE = "/en/";

if (!TOKEN) {
  console.error("CLOUDFLARE_API_TOKEN is not set (a token with Zone → Cache Purge for promoclock.co).");
  process.exit(1);
}

const res = await fetch(`https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/purge_cache`, {
  method: "POST",
  headers: { authorization: `Bearer ${TOKEN}`, "content-type": "application/json" },
  body: JSON.stringify({ purge_everything: true }),
});
const result = await res.json().catch(() => ({}));
if (!res.ok || !result.success) {
  console.error(`Purge failed (${res.status}): ${JSON.stringify(result.errors ?? result)}`);
  process.exit(1);
}
console.log(`Purged everything in zone ${ZONE_ID}.`);

// The edge serves the new build once its Last-Modified matches the origin's (a query string is a
// separate cache key, so that request reaches the origin).
const lastModified = async (url) => (await fetch(url)).headers.get("last-modified");
for (let attempt = 1; attempt <= 10; attempt++) {
  const [edge, origin] = await Promise.all([lastModified(SITE + PROBE), lastModified(`${SITE}${PROBE}?purge-check=${Date.now()}`)]);
  if (edge && edge === origin) {
    console.log(`Edge serves the current build of ${PROBE} (Last-Modified ${edge}).`);
    process.exit(0);
  }
  await new Promise((r) => setTimeout(r, 3_000));
}
console.error(`Edge still serves an older ${PROBE} than the origin after 30 s.`);
process.exit(1);
