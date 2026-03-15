import { NextResponse } from "next/server";

export function GET() {
  const content = `# PromoClock — Complete Reference
> Real-time tracker for Claude's March 2026 off-peak promotion (2x limits)
> Built by Onur Sendere (@onursendere) — https://promoclock.co

## Overview
PromoClock is a free, independent, open-source web application that provides real-time promotion status tracking for Anthropic's Claude March 2026 off-peak promotion. It automatically detects the user's timezone and displays whether doubled (2x) message and context limits are currently active.

## Promotion Details
- **Promotion name**: Claude March 2026 Off-Peak Promotion
- **Period**: March 13, 2026 00:00 UTC — March 28, 2026 06:59 UTC
- **Benefit**: 2x message and context limits during off-peak hours
- **Off-peak bonus**: Does NOT count against weekly usage limits (independent pool)

## Time Windows (UTC)
- **Peak hours** (standard 1x limits): Weekdays 12:00–18:00 UTC (8:00 AM – 2:00 PM ET)
- **Off-peak hours** (doubled 2x limits): Weekdays 18:00–12:00 UTC + entire weekends
- **US DST note**: DST started March 8, 2026. ET = EDT (UTC-4) during promotion.

## Eligible Plans
| Plan | Eligible | Notes |
|------|----------|-------|
| Free | Yes | Largest user base, benefits most from 2x capacity |
| Pro | Yes | Individual professionals and Claude Code developers |
| Max | Yes | Autonomous agents and heavy data processing |
| Team | Yes | SMB collaborative workspaces |
| Enterprise | No | Dedicated capacity with custom contracts |

## Available Platforms
- Web (claude.ai)
- Desktop (Mac / Windows)
- Mobile (iOS / Android)
- Claude Cowork
- Claude Code (Terminal)
- Excel & PowerPoint Add-ins

## Global Schedule (Peak Hours in Local Time)
| City | Timezone | Peak (1x) | Off-Peak (2x) |
|------|----------|-----------|----------------|
| New York | EDT (UTC-4) | 08:00–14:00 | 14:00–08:00 |
| San Francisco | PDT (UTC-7) | 05:00–11:00 | 11:00–05:00 |
| London | GMT (UTC+0) | 12:00–18:00 | 18:00–12:00 |
| Paris | CET (UTC+1) | 13:00–19:00 | 19:00–13:00 |
| Istanbul | TRT (UTC+3) | 15:00–21:00 | 21:00–15:00 |
| New Delhi | IST (UTC+5:30) | 17:30–23:30 | 23:30–17:30 |
| Tokyo | JST (UTC+9) | 21:00–03:00 | 03:00–21:00 |
| Seoul | KST (UTC+9) | 21:00–03:00 | 03:00–21:00 |
| Beijing | CST (UTC+8) | 20:00–02:00 | 02:00–20:00 |
| São Paulo | BRT (UTC-3) | 09:00–15:00 | 15:00–09:00 |

## API Endpoints

### GET /api/status
Returns JSON with current promotion status:
\`\`\`json
{
  "status": "active",
  "isOffPeak": true,
  "isPeak": false,
  "isWeekend": false,
  "limitsMultiplier": 2,
  "emoji": "🟢",
  "label": "2X — Off-peak limits active",
  "nextChange": "2026-03-15T12:00:00.000Z",
  "minutesUntilChange": 120,
  "peakWindowUTC": "12:00–18:00 weekdays",
  "timestamp": "2026-03-15T10:00:00.000Z"
}
\`\`\`

### GET /api/calendar?tz=Europe/London
Returns ICS calendar file with all peak/off-peak events for the promotion period (March 13–27). Includes reminders/alarms.

## Terminal Integration
\`\`\`bash
# One-liner for shell prompt
curl -s https://promoclock.co/api/status | python3 -c "import sys,json;d=json.load(sys.stdin);print(d['emoji'],d['label'])"

# ZSH prompt integration
claude_status() { curl -s https://promoclock.co/api/status | python3 -c "import sys,json;d=json.load(sys.stdin);print(d['emoji'])" 2>/dev/null || echo '⏳'; }
RPROMPT='$(claude_status)'
\`\`\`

## Technical Stack
- Next.js 16 (App Router, SSG + dynamic API routes)
- TypeScript, Tailwind CSS v4, Framer Motion
- 10 languages: en, hi, ja, fr, pt, ko, es, de, zh-CN, tr
- Deployed on Docker + Caddy (Hetzner) with Cloudflare CDN

## FAQ
Q: What is the Claude March 2026 off-peak promotion?
A: Anthropic launched a promotion from March 13 to March 27, 2026 that doubles message and context limits during off-peak hours.

Q: When exactly are off-peak hours?
A: All times outside of weekday 8:00 AM to 2:00 PM Eastern Time. Weekday evenings/nights plus entire weekends.

Q: Does off-peak usage count against weekly limits?
A: No. The bonus pool is completely independent from standard weekly allocation.

Q: Which plans are eligible?
A: Free, Pro, Max, and Team. Enterprise is excluded.

Q: Who built PromoClock?
A: Onur Sendere (@onursendere on X). It is an independent project, not affiliated with Anthropic.

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
