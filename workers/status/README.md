# promoclock-status (Cloudflare Worker)

Serves `GET https://promoclock.co/api/status` — the live Claude peak-hours JSON
(replaces the old Next.js API route). Output shape is unchanged.

## Develop

```bash
cd workers/status
npx wrangler dev        # local; open the printed URL + /api/status
```

## Deploy

```bash
cd workers/status
npx wrangler login      # once, with the account that owns the promoclock.co zone
npx wrangler deploy     # publishes + binds the route in wrangler.toml
```

After deploy, the Worker route `promoclock.co/api/status*` intercepts before the
cPanel origin, so the static site can live entirely on cPanel.

## Rate limiting (1 req / 5 min / IP)

Add a Cloudflare **Rate limiting rule** (dashboard → Security → WAF → Rate
limiting rules):

- **When**: URI Path equals `/api/status`
- **Rate**: 1 request per **5 minutes**, counting by client IP
- **Action**: Block (returns 429)

This is done as a rule rather than in code because Cloudflare's in-Worker
`ratelimit` binding only supports 10s/60s periods.

## Verify

```bash
curl -s https://promoclock.co/api/status | jq .
# second rapid call (after the rule is live) should return HTTP 429
```
