import { NextResponse } from "next/server";

export function GET() {
  const content = `# PromoClock
> Real-time tracker for Claude's March 2026 off-peak promotion (2x limits)

## What is PromoClock?
PromoClock is a free, open-source tool that helps Claude users worldwide instantly check whether they are currently in the off-peak promotion window with doubled message and context limits.

## Key Facts
- Promotion period: March 13–27, 2026
- Peak hours (standard limits): Weekdays 8:00 AM – 2:00 PM ET (12:00–18:00 UTC)
- Off-peak hours (2x limits): All other times including entire weekends
- Eligible plans: Free, Pro, Max, Team (Enterprise excluded)
- Available on: Web, Desktop, Mobile, Claude Cowork, Claude Code, Excel/PowerPoint add-ins

## API
- Status endpoint: https://promoclock.co/api/status (JSON)
- Calendar sync: https://promoclock.co/api/calendar (ICS)

## Links
- Website: https://promoclock.co
- GitHub: https://github.com/onursendere/promoclock
- Full details: https://promoclock.co/llms-full.txt
`;

  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
