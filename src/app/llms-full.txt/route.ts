import { NextResponse } from "next/server";

export function GET() {
  const content = `# PromoClock — Complete Reference
> Real-time tracker for Claude's peak hours — session limits drain faster during peak time
> Built by Onur Şendere (@onursendere) — https://promoclock.co

## Overview
PromoClock is a free, independent, open-source web application that shows in real time whether Claude's session limits are currently draining faster than normal (peak hours) or at normal speed (off-peak). It automatically detects the user's timezone and displays a live countdown to the next status change.

## Peak Hours System
- **Peak hours**: Weekdays 13:00–19:00 UTC (session limits drain faster than usual)
- **Off-peak hours**: Weekday evenings/nights + entire weekends (normal speed)
- **Weekly limits**: Unchanged — only the drain rate during peak hours is affected
- **No known end date** for this adjustment (active since March 27, 2026)

## Affected Plans
| Plan | Affected | Notes |
|------|----------|-------|
| Free | Yes | Session limits drain faster during peak hours |
| Pro | Yes | ~7% of users may hit limits they wouldn't otherwise |
| Max | Yes | Schedule agents and data processing for off-peak |
| Team | Yes | Coordinate heavy workloads to off-peak windows |
| Enterprise | No | Dedicated capacity and custom contracts |

## Available Platforms
- Web (claude.ai)
- Desktop (Mac / Windows)
- Mobile (iOS / Android)
- Claude Cowork
- Claude Code (Terminal)
- Excel & PowerPoint Add-ins

## Global Schedule (Peak Hours — faster drain — in local time)
Times are computed dynamically by the website using IANA timezones (DST-aware).
Reference: Peak = weekdays 13:00–19:00 UTC

| City | Timezone | Peak (faster drain) |
|------|----------|---------------------|
| New York | EDT (UTC-4, summer) | 09:00–15:00 |
| San Francisco | PDT (UTC-7, summer) | 06:00–12:00 |
| London | BST (UTC+1, summer) | 14:00–20:00 |
| Paris | CEST (UTC+2, summer) | 15:00–21:00 |
| Istanbul | TRT (UTC+3, no DST) | 16:00–22:00 |
| New Delhi | IST (UTC+5:30, no DST) | 18:30–00:30 |
| Tokyo | JST (UTC+9, no DST) | 22:00–04:00 |
| Seoul | KST (UTC+9, no DST) | 22:00–04:00 |
| Beijing | CST (UTC+8, no DST) | 21:00–03:00 |
| São Paulo | BRT (UTC-3, no DST) | 10:00–16:00 |

Note: Summer times shown above (Northern Hemisphere DST active). The website schedule table always shows current correct local times.

## API Endpoints

### GET /api/status
Returns JSON with current peak hours status:
\`\`\`json
{
  "status": "peak",
  "isPeak": true,
  "isOffPeak": false,
  "isWeekend": false,
  "sessionLimitSpeed": "faster_than_normal",
  "emoji": "�",
  "label": "Peak Hours — Limits Drain Faster",
  "peakHours": "Weekdays 1pm–7pm UTC / 6:00 AM–12:00 PM PDT",
  "nextChange": "2026-03-30T19:00:00.000Z",
  "minutesUntilChange": 42,
  "timestamp": "2026-03-30T18:18:00.000Z",
  "utcHour": 18,
  "utcDay": 1,
  "note": "No known end date for peak hours adjustment. Weekly limits unchanged."
}
\`\`\`

Rate limit: 60 requests per minute per IP. Returns 429 with Retry-After header when exceeded.
Cache-Control: public, s-maxage up to 60s.

## Terminal Integration
\`\`\`bash
# One-liner for shell prompt
curl -s https://promoclock.co/api/status | python3 -c "import sys,json;d=json.load(sys.stdin);print(d['emoji'],d['label'])"

# ZSH prompt integration
claude_status() { curl -s https://promoclock.co/api/status | python3 -c "import sys,json;d=json.load(sys.stdin);print(d['emoji'])" 2>/dev/null || echo '⏳'; }
RPROMPT='\$(claude_status)'

# Fish shell
function claude_status
  curl -s https://promoclock.co/api/status | python3 -c "import sys,json;d=json.load(sys.stdin);print(d['emoji'])" 2>/dev/null || echo '⏳'
end
\`\`\`

## Technical Stack
- Next.js 15 (App Router, SSG + dynamic API routes)
- TypeScript, Tailwind CSS v4, Framer Motion
- 10 languages: en, tr, fr, de, es, pt, ko, hi, ja, zh-CN
- Deployed on Docker + Caddy (Hetzner VPS) with Cloudflare CDN

## FAQ
Q: What is the peak hours system?
A: Since March 27, 2026, Claude session limits drain faster during weekday peak hours (13:00–19:00 UTC). Outside these hours — weekday evenings, nights, and all weekend — limits drain at normal speed. Weekly limits are unchanged.

Q: When exactly are peak hours?
A: Weekdays 1:00 PM to 7:00 PM UTC. The website auto-detects your timezone and shows your local equivalent.

Q: Which plans are affected?
A: Free, Pro, Max, and Team. Enterprise is not affected.

Q: Is there an end date?
A: No known end date as of the time of writing.

Q: Who built PromoClock?
A: Onur Şendere (@onursendere on X). Independent project, not affiliated with Anthropic.

## Links
- Website: https://promoclock.co
- GitHub: https://github.com/onursendere/promoclock
- Author: https://x.com/onursendere
- Agency: https://digiwings.co.uk
`;

  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
