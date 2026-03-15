# PromoClock

Real-time tracker for the Claude March 2026 off-peak promotion. Instantly shows whether your limits are doubled based on your local timezone.

**Live:** [promoclock.co](https://promoclock.co)

## Features

- **Real-time timezone detection** — automatically reads your device timezone via `Intl.DateTimeFormat`
- **Instant status display** — shows if you're in the 2x limit off-peak window right now
- **Countdown timer** — live countdown to the next status change
- **10 languages** — English, Hindi, Japanese, French, Portuguese, Korean, Spanish, German, Chinese (Simplified), Turkish
- **Global schedule table** — peak/off-peak hours for 10 major cities
- **GEO-optimized** — JSON-LD schema (SoftwareApplication, FAQPage, HowTo), semantic HTML, hreflang tags
- **Minimalist design** — warm, calm aesthetic inspired by wellness/spiritual design patterns

## Promotion Details

- **Period:** March 13 – March 27, 2026 (11:59 PM PT)
- **Peak hours:** Weekdays 8:00 AM – 2:00 PM ET (12:00 – 18:00 UTC)
- **Off-peak (2x limits):** All other weekday hours + entire weekend
- **Eligible plans:** Free, Pro, Max, Team
- **DST note:** US Daylight Saving Time started March 8, 2026 → ET = EDT (UTC-4)

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
