# PromoClock API: Claude peak hours

A free JSON API that tells you whether Claude is in **peak hours** right now, when session limits drain faster, and when that changes next. Status lines, shell prompts, menu bar apps and bots use it.

```
GET https://promoclock.co/api/status
```

No key, no account. Free for non-commercial use under the [API terms](API_TERMS.md).

> PromoClock started as a live clock for Claude's peak hours. The site at [promoclock.co](https://promoclock.co) has since grown into a hub for AI tool deals, and its source is no longer public. This repository holds what you need for the API: documentation, terms, the endpoint's code and its contract tests.

## Quick start

```bash
curl -s -A "my-app/1.0 (+https://github.com/me/my-app)" https://promoclock.co/api/status | jq -r '"\(.emoji) \(.label)"'
```

```
🟢 Off-Peak — Normal Speed
```

## Response

```json
{
  "status": "off_peak",
  "isPeak": false,
  "isOffPeak": true,
  "isWeekend": false,
  "sessionLimitSpeed": "normal",
  "emoji": "🟢",
  "label": "Off-Peak — Normal Speed",
  "peakHours": "Weekdays 1pm–7pm UTC / 6:00 AM–12:00 PM PDT",
  "nextChange": "2026-10-21T13:00:00.000Z",
  "minutesUntilChange": 192,
  "timestamp": "2026-10-21T09:47:27.373Z",
  "utcHour": 9,
  "utcDay": 3,
  "note": "No known end date for peak hours adjustment. Weekly limits unchanged."
}
```

| Field | Type | Meaning |
| --- | --- | --- |
| `status` | string | `"peak"` or `"off_peak"` |
| `isPeak` | boolean | `true` during peak hours |
| `isOffPeak` | boolean | Always the opposite of `isPeak` |
| `isWeekend` | boolean | `true` on Saturday and Sunday (UTC). Weekends are always off-peak. |
| `sessionLimitSpeed` | string | `"faster_than_normal"` during peak hours, otherwise `"normal"` |
| `emoji` | string | 🔴 during peak hours, 🟢 otherwise |
| `label` | string | Short text for people to read |
| `peakHours` | string | The peak window in UTC and Pacific time |
| `nextChange` | string | When the status flips next (ISO 8601, UTC) |
| `minutesUntilChange` | number | Whole minutes until `nextChange`, rounded down |
| `timestamp` | string | When this response was generated (ISO 8601, UTC) |
| `utcHour` | number | UTC hour at `timestamp`, 0–23 |
| `utcDay` | number | UTC weekday at `timestamp`, 0 = Sunday … 6 = Saturday |
| `note` | string | Extra context for people to read |

Field names and types are stable, and the [contract tests](tests/contract.test.ts) guard them. The text in `label`, `peakHours` and `note` may change, so don't parse it; use the boolean and date fields instead.

## Peak hours

- Peak hours run on weekdays (Monday to Friday) from **13:00 to 19:00 UTC**. That is 6 AM–12 PM in Pacific daylight time and 5 AM–11 AM in Pacific standard time.
- All other hours, and all of Saturday and Sunday, are off-peak.
- This window was announced on March 27, 2026. If it changes, the API follows and `peakHours` shows the new window.

## Caching and limits

- **CORS** is open (`Access-Control-Allow-Origin: *`), so browser apps can call the API directly.
- **Caching:** responses may come from Cloudflare's cache and can be up to 60 seconds old, but never from before the last status change. `Cache-Control` says how long each response stays fresh.
- **Polling:** ask at most once a minute per device. Better still, schedule the next request for `nextChange`.
- **Rate limit:** 60 requests per minute per IP address. Above that the API answers `429 Too Many Requests` with a `Retry-After` header and `{"error": "Too many requests", "retryAfter": <seconds>}`.
- **User-Agent:** send your app's name, version and a link, for example `my-app/1.2 (+https://github.com/me/my-app)`.

## Examples

### zsh prompt

Shows 🔴 or 🟢 on the right of your prompt and asks the API at most once a minute.

```zsh
# ~/.zshrc
zmodload zsh/datetime zsh/stat
claude_status() {
  local cache=${TMPDIR:-/tmp}/claude-status
  local -a mtime
  zstat -A mtime +mtime -- $cache 2>/dev/null
  if (( EPOCHSECONDS - ${mtime[1]:-0} >= 60 )); then
    curl -sf -m 3 -A "zsh-prompt/1.0 (+https://promoclock.co)" https://promoclock.co/api/status |
      python3 -c 'import sys,json; print(json.load(sys.stdin)["emoji"])' >| $cache 2>/dev/null ||
      print '⏳' >| $cache
  fi
  print -rn -- "$(<$cache)"
}
setopt PROMPT_SUBST
RPROMPT='$(claude_status)'
```

### JavaScript (Node.js 18+)

```js
const res = await fetch("https://promoclock.co/api/status", {
  headers: { "User-Agent": "my-app/1.0 (+https://github.com/me/my-app)" },
});
if (!res.ok) throw new Error(`PromoClock API: HTTP ${res.status}`);
const s = await res.json();
console.log(`${s.emoji} ${s.label} · changes in ${s.minutesUntilChange} min`);

// Ask again when the status flips, not on a short timer.
const nextCheckInMs = Math.max(Date.parse(s.nextChange) - Date.now(), 60_000);
```

In a browser, leave out the `User-Agent` header; the browser sends its own.

### Python

```python
import json
import urllib.request

req = urllib.request.Request(
    "https://promoclock.co/api/status",
    headers={"User-Agent": "my-app/1.0 (+https://github.com/me/my-app)"},
)
with urllib.request.urlopen(req, timeout=5) as r:
    s = json.load(r)

print(s["emoji"], s["label"], f"· changes in {s['minutesUntilChange']} min")
```

## Terms of use

The API is free for non-commercial use under the [API terms](API_TERMS.md). In short:

- Credit PromoClock with a link to https://promoclock.co wherever you show the data. If there is no room on screen, put the credit in your README or About screen.
- Commercial use needs written permission. Email [info@promoclock.co](mailto:info@promoclock.co) or contact [@onursendere on X](https://x.com/onursendere).
- Send a `User-Agent` with your app's name and a link, and ask at most once a minute.

PromoClock is independent and not affiliated with Anthropic. Don't present the data as official Anthropic information.

## Used by

Open-source projects that call the API, as of October 2026:

| Project | What it is |
| --- | --- |
| [AI Usage for Windows](https://github.com/datell1357/AI-Usage-for-Windows) | Windows tray app for AI coding subscription usage |
| [Cirrondly Desk Community](https://github.com/cirrondly/cirrondly-desk-community) | macOS menu bar app that tracks AI coding tool usage |
| [Codex Pet Meter](https://github.com/rain2day/codex-pet-meter) | Floating Codex usage overlay that also shows Claude's peak-hours state |
| [monitoring-claude](https://github.com/xavinsky/monitoring-claude) | Self-hosted Claude Code quota tracking with systemd and a dashboard |
| [Prism](https://github.com/mttmcknn/prism) | Status line for Claude Code, with a peak-hours plugin |
| [Sidekick Agent Hub](https://github.com/cesarandreslopez/sidekick-agent-hub) | Session monitor for AI coding agents in VS Code and the terminal |
| [tokmon](https://github.com/DavidIlie/tokmon) | Terminal dashboard for Claude Code usage and costs |
| [UsageWatch](https://github.com/Taznc/UsageWatch) | Tray app for Claude, Codex and Cursor usage limits |

If your project follows the terms, open a pull request to add it here.

## What's in this repository

| File | What it is |
| --- | --- |
| [`api/status.php`](api/status.php) | The endpoint, as it runs on promoclock.co |
| [`api/_ratelimit.php`](api/_ratelimit.php) | The per-IP rate limit and the JSON headers |
| [`api/claude.json`](api/claude.json) | The peak window the endpoint reads |
| [`src/claude.ts`](src/claude.ts) | The same peak-hours rule in TypeScript, used by the tests |
| [`tests/contract.test.ts`](tests/contract.test.ts) | Contract tests: field names and types, values, rate limit |
| [`router.php`](router.php) | Router for PHP's built-in server, to run the endpoint locally |

To run the contract tests (Node.js 22.12+):

```bash
npm install
npm test
```

By default the tests call the live API. To test a local copy instead, start it with `npm run serve` (needs PHP 8) and run:

```bash
API_BASE_URL=http://127.0.0.1:8000 npm test
```

## License

The code in this repository is source-available under a non-commercial, no-derivatives license; see [LICENSE](LICENSE). Use of the API is covered by the [API terms](API_TERMS.md).

Built by [Onur Şendere](https://x.com/onursendere) · [Digiwings](https://digiwings.co.uk)
