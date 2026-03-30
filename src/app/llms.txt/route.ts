import { NextResponse } from "next/server";

export function GET() {
  const content = `# PromoClock
> Real-time Claude peak hours tracker — know instantly when session limits drain faster

## What is PromoClock?
PromoClock is a free, independent, open-source web app that shows in real time whether Claude's session limits are currently draining faster than normal (peak hours) or at normal speed (off-peak). Auto-detects your timezone. No setup needed. Built by Onur Şendere / Digiwings.

## Key Facts
- Peak hours (limits drain faster): Weekdays 1pm–7pm UTC (13:00–19:00 UTC)
- Off-peak (normal speed): Weekday evenings/nights + entire weekends
- Weekly limits: Unchanged — only the drain rate is affected
- Active since: March 27, 2026. No known end date.
- Affected plans: Free, Pro, Max, Team (Enterprise excluded)
- Platforms: Web, Desktop, Mobile, Claude Cowork, Claude Code, Excel/PowerPoint add-ins
- Languages: 10 (en, tr, fr, de, es, pt, ko, hi, ja, zh-CN)

## API
- Status: GET https://promoclock.co/api/status (JSON, rate-limited 60 req/min)

## Links
- Website: https://promoclock.co
- GitHub: https://github.com/onursendere/promoclock
- Author: https://x.com/onursendere
- Agency: https://digiwings.co.uk
- Full reference: https://promoclock.co/llms-full.txt
`;

  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
