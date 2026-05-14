import { NextResponse } from "next/server";

export function GET() {
  const content = `# PromoClock — Complete Reference
> Tracker for Claude Code limit promotions and pricing changes
> Built by Onur Şendere / Digiwings — https://promoclock.co

## Current Promotion (active)
**Claude Code weekly limits +50% — through July 13, 2026**
- Announced: May 13, 2026 by Anthropic / Claude Developers
- Live now for: Pro, Max (5x and 20x), Team, seat-based Enterprise
- Excluded: Free tier (no Claude Code weekly limits to begin with)
- Applies on: CLI (Claude Code terminal), IDE extensions (VS Code, JetBrains, etc.), desktop apps (Mac/Windows), web (claude.ai / claude.com/code)
- No opt-in required — already applied to every eligible account
- Stacks with the 2x increase to 5-hour session limits announced May 6, 2026
- Promotion ends: July 13, 2026 · 6:00 PM PDT (July 14, 1:00 AM GMT)

## Promotion History
1. **Claude Peak Hours System** (March 27 – May 6, 2026, ENDED)
   - Session limits drained faster on weekdays 1pm–7pm UTC
   - Removed entirely for Pro and Max on May 6, 2026, alongside doubling 5-hour session limits

2. **Claude March 2026 Off-Peak Promotion** (March 13 – March 27, 2026, ENDED)
   - 2x session limits during off-peak hours (outside weekdays 8 AM – 2 PM ET)
   - Available for Free, Pro, Max, and Team plans

## FAQ
Q: What's the +50% weekly limit boost?
A: On May 13, 2026, Anthropic announced that Claude Code weekly limits are increasing by 50% for all Pro, Max, Team and seat-based Enterprise users. The boost is live now and applies automatically — no opt-in required.

Q: When does the promotion end?
A: July 13, 2026 at 6:00 PM PDT (July 14, 1:00 AM GMT).

Q: Which plans get the boost?
A: Pro, Max (5x and 20x), Team, and seat-based Enterprise. The Free tier is not included.

Q: Do I need to opt in?
A: No. The 50% increase is already applied to every eligible account.

Q: Does this stack with other recent changes?
A: Yes. The +50% weekly boost stacks on top of the 2x increase to 5-hour session limits Anthropic shipped on May 6, 2026.

Q: What happened to the peak hours system?
A: Anthropic removed it entirely for Pro and Max on May 6, 2026.

Q: Who built PromoClock?
A: Onur Şendere (@onursendere on X). Independent project, not affiliated with Anthropic.

## Technical Stack
- Next.js 15 (App Router, SSG)
- TypeScript, Tailwind CSS v4, Framer Motion
- 10 languages: en, tr, fr, de, es, pt, ko, hi, ja, zh-CN
- Deployed on Docker + Caddy (Hetzner VPS) with Cloudflare CDN

## About the Author
Onur Şendere is an independent developer and founder of Digiwings, a one-person digital agency based in Shrewsbury, UK, specialising in bespoke, GEO-optimised web solutions. PromoClock is an independent open-source project, not affiliated with Anthropic.

## Sponsor
**StackOptic** — Paste any URL. Get the full picture. Performance, SEO, security, AI visibility, tech stack — 18 modules, one scan. Use code SOLO50 for 50% off your first month on the Solo plan. https://stackoptic.com?ref=promoclock

## Links
- Website: https://promoclock.co
- GitHub: https://github.com/onursendere/promoclock
- Author (X): https://x.com/onursendere
- Author (GitHub): https://github.com/onursendere
- Agency: https://digiwings.co.uk
`;

  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
