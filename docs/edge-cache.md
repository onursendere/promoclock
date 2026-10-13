# Edge cache (Cloudflare)

Pages are static per deploy, so Cloudflare serves them from its edge instead of asking the origin
(Hetzner VPS → Caddy → Docker/Apache) on every request. Browsers still revalidate every page load.

## Origin headers

Written by `integrations/cpanel-htaccess.mjs` for every `.html` response:

| Header | Value | For |
| --- | --- | --- |
| `Cache-Control` | `public, max-age=0, must-revalidate` | browsers: revalidate on every load (unchanged) |
| `Cloudflare-CDN-Cache-Control` | `max-age=3600, stale-while-revalidate=86400, stale-if-error=86400` | Cloudflare only; stripped before the response leaves the edge |

- The edge treats a page as fresh for an hour. After that it keeps answering from cache (`cf-cache-status: UPDATING`) while it revalidates in the background, for up to a day, and serves the cached page for a day if the origin is down.
- Not `s-maxage` in `Cache-Control`: on Cloudflare, `s-maxage` (like `must-revalidate`) turns off `stale-while-revalidate`, and browsers would see the edge policy.
- Every deploy purges the cache, so the hour only bounds how stale pages get if a purge is missed.
- `/api/status` is unchanged: `status.php` sends `Cache-Control: public, s-maxage=N, stale-while-revalidate=10` with N = min(60 s, time until the next peak/off-peak change), so a cached answer never crosses a change. The 429 answer sends `no-store`.
- The language redirect at `/` (cookie, then `Accept-Language`) sends no cache header and is excluded from the rule below.

## Cloudflare configuration (zone promoclock.co, Free plan)

Cache Rules (phase `http_request_cache_settings`, zone entrypoint ruleset):

```json
[
  {
    "ref": "html_pages_edge_cache",
    "description": "Pages: cache per origin Cloudflare-CDN-Cache-Control, browsers per origin Cache-Control",
    "expression": "(http.host eq \"promoclock.co\" and http.request.uri.path ne \"/\" and not starts_with(http.request.uri.path, \"/api/\") and (ends_with(http.request.uri.path, \"/\") or ends_with(http.request.uri.path, \".html\")))",
    "action": "set_cache_settings",
    "action_parameters": {
      "cache": true,
      "edge_ttl": { "mode": "bypass_by_default" },
      "browser_ttl": { "mode": "respect_origin" }
    }
  },
  {
    "ref": "api_status_edge_cache",
    "description": "/api/status: cache per origin s-maxage (at most 60 s, never across a change)",
    "expression": "(http.host eq \"promoclock.co\" and http.request.uri.path in {\"/api/status\" \"/api/status/\"})",
    "action": "set_cache_settings",
    "action_parameters": {
      "cache": true,
      "edge_ttl": { "mode": "bypass_by_default" },
      "browser_ttl": { "mode": "respect_origin" }
    }
  }
]
```

- `bypass_by_default`: cache only what the origin explicitly marks cacheable. Redirects, 410s, PHP errors and anything else without a cache header stay uncached.
- `browser_ttl: respect_origin` matters: the zone's Browser Cache TTL is 4 hours, and without it Cloudflare would rewrite `max-age=0` on cached pages (and add a max-age to `/api/status`) to 4 hours.
- Smart Tiered Cache is on (Caching → Tiered Cache), so a cache miss at one data center asks an upper tier near the origin before the origin.

To switch edge caching off, disable or delete the rules and purge everything. The origin headers can stay; without the rule, pages are `DYNAMIC` again.

## Deploys

Each deploy deletes the previous build's hashed `/_astro/*` files, while pages that Cloudflare (until the purge) or an open browser tab still hold point at them. Two safeguards:

1. **Keep the previous release's assets.** Build with `--build-arg PREVIOUS_IMAGE=promoclock:latest`. The Dockerfile copies the running image's own `/_astro` files (listed in `/var/www/release-assets.txt`) into the new image. Only one release is kept; a build without the argument carries nothing.
2. **Purge right after the swap**, then check:
   - With a token (Zone → Cache Purge → Purge, promoclock.co only): `CLOUDFLARE_API_TOKEN=… npm run purge:edge`. It purges everything and waits until the edge serves the new build.
   - Without one: purge everything from the Cloudflare dashboard (Caching → Configuration), or `POST /zones/1903bae9c5fecca86d4e33b4ccf1f6c5/purge_cache` with `{"purge_everything": true}`.

Checks:

- Before the swap, against the test container: `BASE=http://127.0.0.1:18302 npm run audit:edge-cache`. It verifies the headers and that every asset the live pages reference is served by the new container.
- After the purge, against production: `npm run audit:edge-cache`. It checks that pages are HITs on repeat with an `Age`, that browsers get `max-age=0` and never see the edge header, that the edge holds the current build, that referenced assets load, that `/` still redirects per visitor, and that `/api/status` keeps its header.

A rollback to an older image needs the same purge, since the edge may hold pages from the newer release.

The cPanel workflow (`.github/workflows/deploy.yml`) runs `npm run purge:edge` after a production upload. It refuses to deploy to production without the `CLOUDFLARE_PURGE_TOKEN` secret. The FTP upload does not keep the previous release's assets, so its purge has to follow the upload immediately.

Quick check by hand:

```bash
curl -sI https://promoclock.co/en/ | grep -iE '^(cf-cache-status|age|cache-control|last-modified)'
```
