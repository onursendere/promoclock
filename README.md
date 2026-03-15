# PromoClock

Real-time tracker for the Claude March 2026 off-peak promotion. Instantly shows whether your limits are doubled based on your local timezone.

**Live:** [promoclock.co](https://promoclock.co)

## Features

### Core Features
- **Real-time timezone detection** — automatically reads your device timezone via `Intl.DateTimeFormat`
- **Instant status display** — shows if you're in the 2x limit off-peak window right now
- **Countdown timer** — live countdown to the next status change
- **10 languages** — English, Hindi, Japanese, French, Portuguese, Korean, Spanish, German, Chinese (Simplified), Turkish
- **Global schedule table** — peak/off-peak hours for 10 major cities
- **Animated badge** — subtle shimmer effect on promotion badge

### Developer Tools
- **JSON API** (`/api/status`) — real-time promotion status for terminal integration
- **Calendar sync** (`/api/calendar`) — downloadable .ics file with all peak/off-peak blocks and reminders
- **Web push notifications** — browser notifications with sound alerts on status changes
- **Terminal prompt integration** — ZSH/Bash snippets to show 🟢 2X or 🔴 1X in your prompt

### SEO & Discoverability
- **GEO-optimized** — JSON-LD schema (SoftwareApplication, FAQPage, HowTo), semantic HTML, hreflang tags
- **LLM-friendly** — `/llms.txt` and `/llms-full.txt` for AI discoverability
- **Sitemap & robots.txt** — proper indexing directives for search engines and LLM crawlers

## Promotion Details

- **Period:** March 13 – March 27, 2026 (11:59 PM PT)
- **Peak hours:** Weekdays 8:00 AM – 2:00 PM ET (12:00 – 18:00 UTC)
- **Off-peak (2x limits):** All other weekday hours + entire weekend
- **Eligible plans:** Free, Pro, Max, Team
- **DST note:** US Daylight Saving Time started March 8, 2026 → ET = EDT (UTC-4)

## API Usage

### JSON Status Endpoint

```bash
curl https://promoclock.co/api/status
```

Response:
```json
{
  "emoji": "🟢",
  "label": "2X — Off-peak limits active",
  "limitsMultiplier": 2,
  "isOffPeak": true,
  "nextChange": "2026-03-16T18:00:00.000Z",
  "minutesUntilChange": 960
}
```

### Terminal Prompt Integration

Add to your `~/.zshrc`:
```bash
claude_status() {
  local status=$(curl -s https://promoclock.co/api/status | jq -r '.emoji + " " + (.limitsMultiplier | tostring) + "X"')
  echo "$status"
}

PROMPT='$(claude_status) %~ %# '
```

### Calendar Sync

Download .ics file with all promotion events:
```bash
curl -O https://promoclock.co/api/calendar
```

Or visit in browser to add to Google Calendar, Apple Calendar, or Outlook.

## Tech Stack

- Next.js 16 (App Router, standalone output)
- Tailwind CSS v4
- Framer Motion
- TypeScript
- Docker (multi-stage build)

## Development

```bash
npm install
npm run dev
```

## Docker

```bash
docker build -t promoclock .
docker run -p 3000:3000 promoclock
```

## Disclaimer

PromoClock is an independent project and is not affiliated with Anthropic or Claude. For informational purposes only.

## Author

Built by [Onur Sendere](https://github.com/onursendere) · [Digiwings](https://digiwings.co.uk/)
