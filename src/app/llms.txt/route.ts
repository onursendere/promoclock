import { NextResponse } from "next/server";

export function GET() {
  const content = `# PromoClock
> Real-time Claude peak hours tracker — know instantly when session limits drain faster

## What is PromoClock?
PromoClock is a free, independent, open-source web app that shows in real time whether Claude's session limits are currently draining faster than normal (peak hours) or at normal speed (off-peak). Auto-detects your timezone. No setup needed. Built by Onur Şendere / Digiwings.

## Key Facts — Peak Hours System
- Peak hours (limits drain faster): Weekdays 1pm–7pm UTC (13:00–19:00 UTC)
- Off-peak (normal speed): Weekday evenings/nights + entire weekends
- Weekly limits: Unchanged — only the drain rate is affected
- Active since: March 27, 2026.
- Currently affects: Claude.ai chat, Cowork, mobile, desktop apps, Excel/PowerPoint add-ins for Free, Pro, Max, Team (Enterprise excluded).
- Removed for Claude Code on Pro/Max only on May 6, 2026 (alongside 2x increase to Claude Code 5-hour session limits).

## Key Facts — Claude Code +50% Weekly Boost (separate, currently live)
- Effective: May 13, 2026 → July 13, 2026 (6PM PDT / July 14 1AM GMT)
- Eligible plans: Pro, Max, Team, seat-based Enterprise (Free not included)
- Scope: Claude Code only — CLI, IDE extensions, desktop, web. Does not affect Claude.ai chat / Cowork limits.
- Activation: Automatic, no opt-in required.
- Stacks with the May 6, 2026 doubling of Claude Code 5-hour session limits.
- Source: @ClaudeDevs announcement, May 13, 2026.

## Languages
10 supported: en, tr, fr, de, es, pt, ko, hi, ja, zh-CN

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
