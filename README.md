# PromoClock

PromoClock started as a real-time tracker for the Claude March 2026 off-peak promotion (2x session limits, March 13–27, 2026). When that promotion ended, the site evolved into a permanent awareness tool: Claude's session limits drain faster during peak hours (weekdays 1pm–7pm GMT), and most users don't know when those hours are in their timezone.

**Live:** [promoclock.co](https://promoclock.co)

## What it does

Instantly tells you whether Claude's session limits are draining at normal speed or faster, based on your local timezone. No setup needed — open the page and you know.

- **Peak hours (weekdays 13:00–19:00 UTC / 5am–11am PT):** session limits drain faster
- **Off-peak (evenings, nights, weekends):** normal speed
- **Weekly limits are unchanged** — only the rate of consumption within a session differs

## Features

### Core
- **Real-time timezone detection** — reads your device timezone automatically via `Intl.DateTimeFormat`
- **Instant status display** — clear peak/off-peak badge with live countdown to next change
- **Global schedule table** — DST-aware local times for 10 major cities (IANA timezone names)
- **10 languages** — English, Turkish, French, German, Spanish, Portuguese, Korean, Hindi, Japanese, Chinese (Simplified)
- **Promotion history archive** — documents the March 2026 2x promotion for reference

### Developer Tools
- **JSON API** (`/api/status`) — real-time peak hours status, rate-limited at 60 req/min per IP
- **Terminal prompt integration** — ZSH/Bash snippets to show status in your prompt or statusline
- **Browser notifications** — sound alert when Claude switches to off-peak mode

### SEO & Discoverability
- **GEO-optimized** — JSON-LD schema (SoftwareApplication, FAQPage, HowTo), semantic HTML, hreflang tags
- **LLM-friendly** — `/llms.txt` and `/llms-full.txt` for AI discoverability
- **Sitemap & robots.txt** — proper indexing directives

## API

```bash
curl https://promoclock.co/api/status
```

Response:
```json
{
  "status": "peak",
  "isPeak": true,
  "isOffPeak": false,
  "isWeekend": false,
  "sessionLimitSpeed": "faster_than_normal",
  "emoji": "🔴",
  "label": "Peak Hours — Limits Drain Faster",
  "peakHours": "Weekdays 5am–11am PT / 1pm–7pm GMT",
  "nextChange": "2026-03-27T19:00:00.000Z",
  "minutesUntilChange": 334,
  "timestamp": "2026-03-27T13:25:00.000Z",
  "note": "No known end date for peak hours adjustment. Weekly limits unchanged."
}
```

Rate limit: 60 requests/minute per IP. Returns `429` with `Retry-After` header when exceeded.

## Tech Stack

- Next.js 16 (App Router, standalone output)
- Tailwind CSS v4
- Framer Motion
- TypeScript
- Docker (multi-stage build), deployed on Hetzner

## Development

```bash
npm install
npm run dev
```

## Docker

```bash
docker build -t promoclock .
docker run --network host -e PORT=3001 -e HOSTNAME=0.0.0.0 promoclock
```

## Disclaimer

PromoClock is an independent project and is not affiliated with Anthropic or Claude. For informational purposes only.

## Author

Built by [Onur Sendere](https://github.com/onursendere) · [Digiwings](https://digiwings.co.uk/)
