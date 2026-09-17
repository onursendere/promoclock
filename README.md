# PromoClock

**Claude Watch + live AI deals.** A live clock for Claude's peak hours and usage-limit changes, plus verified promotions, student offers and deadlines for 100 popular AI tools — in 10 languages.

Live at **[promoclock.co](https://promoclock.co)**.

## Stack

- [Astro 7](https://astro.build) static output with React islands
- [shadcn/ui](https://ui.shadcn.com) (Radix, Nova preset) on Tailwind CSS 4
- Content collections (`src/content/`) validated with Zod
- PHP JSON endpoints + generated `.htaccess` for cPanel (Apache/LiteSpeed), behind Cloudflare
- Vitest for the time-based logic; GitHub Actions for build and FTPS deploy

## Develop

Requires Node 22.12+.

```bash
npm install
npm run dev        # http://localhost:4321
npm test           # unit tests (vitest)
npm run build      # astro check + astro build → dist/
npm run preview    # serve dist/
npm run test:api   # API contract tests against dist/ (needs PHP)
```

## Where things live

| What | Where |
| --- | --- |
| Deals, promos, limit changes | `src/content/deals.yaml` |
| The 100 tools | `src/content/tools/*.md` |
| Promo calendar | `src/content/events.yaml` |
| Claude peak-hours window (single source) | `src/data/claude.ts` |
| Deal status, hero mode, sorting | `src/lib/deals.ts` |
| UI strings (10 languages) | `src/dictionaries/*.json` — `hub` section falls back to English |
| PHP API (Claude peak-hours status only) | `public/api/status.php` |
| `.htaccess` generator | `integrations/cpanel-htaccess.mjs` |

### Adding a deal

Append an entry to `src/content/deals.yaml` with `tool`, `kind`, `title.en`, `summary.en`, `startsAt`, optional `endsAt`, `verifiedAt`, `sourceUrl` and `sourceLabel`. Status (live, upcoming, ended) is derived from the dates — never set it by hand. The build fails if `tool` doesn't match a file in `src/content/tools/`.

Expired deals disappear two ways: on the next daily rebuild, and instantly in the browser (the card's timer hides it).

## API

The only public endpoint is `GET /api/status`: live Claude peak-hours status as JSON, CORS enabled, rate limited to 60 requests per minute per IP. It keeps the exact response shape of the original Next.js endpoint; `tests/api/contract.test.ts` runs the built PHP and fails CI if a field changes. Deals and tools are not offered via API (the old `/api/deals` and `/api/tools.json` answer `410 Gone`).

```bash
curl -s https://promoclock.co/api/status | python3 -c "import sys,json;d=json.load(sys.stdin);print(d['emoji'],d['label'])"
```

## Deploy

`.github/workflows/deploy.yml` builds and tests on every push, then uploads `dist/` over FTPS:

- `astro-hub` branch → staging (noindex)
- `main` and the daily 03:00 UTC schedule → production
- manual runs pick either target

Repository secrets: `CPANEL_FTP_SERVER`, `CPANEL_FTP_USERNAME`, `CPANEL_FTP_PASSWORD`, `CPANEL_DIR_PRODUCTION`, `CPANEL_DIR_STAGING`. Without them the workflow builds and tests only.

## License

Source-available, non-commercial, no derivatives — see [LICENSE](LICENSE).

PromoClock is an independent project and is not affiliated with Anthropic or any tool listed. Some outbound links may be affiliate links; see the affiliate disclosure on the site.

Built by [Onur Şendere](https://x.com/onursendere) · [Digiwings](https://digiwings.co.uk)
