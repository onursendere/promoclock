import { NextResponse } from "next/server";

export function GET() {
  const content = `# PromoClock
> Tracker for Claude Code limit promotions and pricing changes

## What is PromoClock?
PromoClock is a free, independent web app that helps Claude Code users keep up with Anthropic's frequent limit and pricing changes. Built by Onur Şendere / Digiwings. Not affiliated with Anthropic.

## Current Promotion (active)
- **Claude Code weekly limits +50%** — through July 13, 2026 · 6:00 PM PDT (July 14, 1:00 AM GMT)
- Live for: Pro, Max (5x / 20x), Team, seat-based Enterprise
- Excluded: Free tier
- Applies on: CLI, IDE extensions, desktop, web
- No opt-in required
- Stacks with the 2x 5-hour session limit increase from May 6, 2026
- Announced: May 13, 2026 by Anthropic / Claude Developers
- Languages: 10 (en, tr, fr, de, es, pt, ko, hi, ja, zh-CN)

## Promotion History (archived)
- Claude Peak Hours System (March 27 – May 6, 2026): faster drain on weekdays 1pm–7pm UTC; removed for Pro/Max on May 6, 2026.
- Claude March 2026 Off-Peak Promotion (March 13 – March 27, 2026): 2x limits during off-peak hours.

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
