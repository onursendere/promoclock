---
title: "Claude Peak Hours Explained (2026): Times in Your Time Zone and What Changes"
metaTitle: "Claude Peak Hours 2026: Your Time Zone and What Changes"
metaDescription: "Claude peak hours run weekdays 13:00–19:00 UTC, when 5-hour session limits drain faster. See the window in 9 cities and how to plan heavy work around it."
excerpt: "Claude's peak hours are weekdays from 13:00 to 19:00 UTC (09:00–15:00 in New York until November 1, 2026). During that window, 5-hour session limits on Free, Pro, Max and Team plans drain faster; weekly limits don't change. Weekends are off-peak, Enterprise is unaffected, and Claude Code on Pro and Max has been exempt since May 6, 2026."
category: guides
featured: true
publishedAt: 2026-10-04
updatedAt: 2026-10-04
image:
  src: "../images/claude-peak-hours.jpg"
  alt: "Close-up of a white wall clock with a red second hand against a light blue wall"
  credit: "CHUTTERSNAP / Unsplash"
  creditUrl: "https://unsplash.com/photos/white-round-wall-clock-at-225-saFcXkj0xog"
  license: "https://unsplash.com/license"
tools: [claude]
keyTakeaways:
  - "Claude's peak hours run Monday to Friday from 13:00 to 19:00 UTC; every other hour, including all of Saturday and Sunday, is off-peak."
  - "During Claude peak hours, 5-hour session limits on Free, Pro, Max and Team plans drain faster, while weekly limits stay exactly the same."
  - "Claude peak hours took effect on March 27, 2026, the final day of a two-week promotion that doubled off-peak limits from March 13."
  - "Claude Code on Pro and Max has been exempt from the peak-hour reduction since May 6, 2026; Enterprise plans were never affected."
  - "In New York, Claude peak hours are 09:00–15:00 EDT until November 1, 2026; in London, 14:00–20:00 BST until October 25, 2026."
faq:
  - q: "Are Claude peak hours on weekends?"
    a: "No. Claude peak hours apply Monday to Friday only, from 13:00 to 19:00 UTC. Saturday and Sunday are off-peak around the clock in UTC, so session limits drain at normal speed all weekend. In East Asia, the Friday window runs into early Saturday local time: until 04:00 in Tokyo and Seoul and 03:00 in Beijing."
  - q: "Do Claude peak hours affect the weekly limit?"
    a: "No. Claude peak hours only change how fast the rolling 5-hour session limit drains on Free, Pro, Max and Team plans. Weekly limits on paid plans are the same during and outside peak hours, so moving heavy work off-peak stretches each session, not your total weekly allowance."
  - q: "Why does Claude hit the limit faster in the afternoon?"
    a: "In Europe and the Middle East, the afternoon overlaps Claude's peak window, 13:00–19:00 UTC on weekdays. During that window, Anthropic makes 5-hour session limits on Free, Pro, Max and Team plans drain faster, so the same work uses more of your session. In London, peak hours are 14:00–20:00 BST until October 25, 2026."
  - q: "Is Claude Code affected by peak hours?"
    a: "Not on Pro or Max. Since May 6, 2026, Anthropic has exempted Claude Code on Pro and Max from the peak-hour reduction, and the same update doubled Claude Code's 5-hour limits on paid plans. Chat on those plans is still affected, and Anthropic did not announce the exemption for Team plans."
  - q: "When will Claude peak hours end?"
    a: "Anthropic has not announced an end date. Claude peak hours have applied since March 27, 2026, and as of October 2026 there is no official schedule for removing them. PromoClock's live clock and its free /api/status endpoint will reflect any new window or end date Anthropic announces."
  - q: "What is the best time to use Claude?"
    a: "Any time outside 13:00–19:00 UTC on weekdays, or any time on the weekend. That means before 09:00 or after 15:00 in New York until November 1, 2026, before 14:00 or after 20:00 in London until October 25, and the whole working day in India, China, Japan and Korea."
howTo:
  name: "How to plan Claude work around peak hours"
  steps:
    - name: "Find your local peak window"
      text: "Convert 13:00–19:00 UTC on weekdays to your time zone with the table in this guide or PromoClock's live clock, and note the coming clock changes on October 25 (EU) and November 1, 2026 (US)."
    - name: "Sort your tasks by weight"
      text: "Long documents, large uploads, Research, long conversations and multi-step agent tasks use the most session allowance; quick questions use the least."
    - name: "Move heavy work off-peak"
      text: "Schedule the heavy tasks before or after the peak window on weekdays, or on the weekend, when 5-hour session limits drain at normal speed."
    - name: "Use Claude Code during peak on Pro or Max"
      text: "Claude Code on Pro and Max has been exempt from the peak-hour reduction since May 6, 2026, so coding sessions are a good use of the peak window."
    - name: "Watch your meters and automate the check"
      text: "Track your session and weekly usage in Claude under Settings > Usage, and poll GET https://promoclock.co/api/status from a shell prompt or bot to see when the window flips."
sources:
  - https://www.anthropic.com/news/higher-limits-spacex
  - https://claude.com/pricing
  - https://support.claude.com/en/articles/11049741-what-is-the-max-plan
  - https://support.claude.com/en/articles/9797557-usage-limit-best-practices
  - https://support.claude.com/en/articles/17274727-artifact-usage-promotion
  - https://www.theregister.com/2026/03/26/anthropic_tweaks_usage_limits/
  - https://www.xda-developers.com/claude-doubled-every-users-usage-limits-for-two-weeks/
---
Claude's peak hours are weekdays from 13:00 to 19:00 UTC. During that 6-hour window, 5-hour session limits on Free, Pro, Max and Team plans drain faster than usual, while weekly limits stay the same; weekday evenings, nights and the whole weekend are off-peak. This guide covers the rules as of October 2026, the window in 9 cities, and a simple plan for scheduling heavy work around it.

## What are Claude peak hours?

Claude peak hours are a fixed weekday window, 13:00–19:00 UTC, when Anthropic makes your 5-hour session allowance run out faster. The window has applied since March 27, 2026.

- **Peak:** Monday to Friday, 13:00–19:00 UTC.
- **Off-peak:** every other weekday hour, plus all of Saturday and Sunday (UTC).
- **End date:** none announced. Anthropic has not said when, or whether, the window will be lifted.

We track the window live on [Claude Watch](/), PromoClock's home page. It shows whether Claude is in peak hours right now, the window in your local time and a countdown to the next switch.

## What exactly changes during Claude peak hours?

Only the speed of the 5-hour session limit changes: the same work uses a bigger share of your session allowance during peak hours. Weekly limits, prices and model access stay the same.

Claude meters usage in two layers. Every plan has a session limit that resets on a rolling 5-hour window, and paid plans add a weekly limit on top, according to [Anthropic's pricing page](https://claude.com/pricing). Peak hours touch only the first layer.

When the change was announced, Anthropic's Thariq Shihipar said overall weekly limits would stay the same and only their distribution across the week would change, [The Register reported](https://www.theregister.com/2026/03/26/anthropic_tweaks_usage_limits/) on March 26, 2026. He estimated that about 7% of users would hit session limits they would not have hit before, particularly on Pro.

Anthropic has never published the peak-hour drain rate, or how many tokens a 5-hour session holds. Treat any precise "peak multiplier" you see quoted online as a guess.

## When did Claude peak hours start, and what has changed since?

Claude peak hours took effect on March 27, 2026, the last day of a two-week off-peak promotion. Since then, Anthropic has added one permanent exemption for Claude Code and run several separate boosts.

- **March 13–27, 2026:** [the off-peak 2x promotion](/deals/claude-march-2026-offpeak-2x/) doubled session limits outside 8 AM–2 PM ET on weekdays and all weekend, for Free, Pro, Max and Team. It has ended.
- **March 27, 2026:** [peak hours took effect](/deals/claude-peak-hours-introduced/). Session limits now drain faster on weekdays from 13:00 to 19:00 UTC.
- **May 6, 2026:** Anthropic [doubled Claude Code's 5-hour limits and removed the peak-hour reduction for Claude Code on Pro and Max](/deals/claude-code-5h-limits-doubled/), per its [official announcement](https://www.anthropic.com/news/higher-limits-spacex).
- **October 1–15, 2026:** [the artifact usage promotion](/deals/claude-artifact-usage-promo-oct-2026/) makes the next 10 chat messages after you create or edit an artifact count 50% less toward the 5-hour limit on Pro, Max and Team. It is live as of October 4, 2026 and runs until 11:59 PM PT on October 15.

For every other session and weekly limit change this year, see our guide to [Claude usage limits](/blog/claude-usage-limits/).

## Which Claude plans are affected by peak hours?

Free, Pro, Max and Team plans are affected by Claude peak hours; Enterprise plans are not. Claude Code on Pro and Max is exempt.

| Plan | Chat, desktop, mobile and Cowork | Claude Code |
|---|---|---|
| Free | Affected | Not included in Free |
| Pro | Affected | Exempt since May 6, 2026 |
| Max 5x and Max 20x | Affected | Exempt since May 6, 2026 |
| Team | Affected | No exemption announced |
| Enterprise | Not affected | Not affected |

The Claude Code exemption is narrower than it sounds. On the same Pro or Max account, a long chat at 15:00 UTC still drains the session faster, while a Claude Code run at the same moment does not.

Upgrading does not remove peak hours either. Max 5x ($100/month) and Max 20x ($200/month) give 5 or 20 times Pro's per-session usage, according to [Anthropic's Max plan article](https://support.claude.com/en/articles/11049741-what-is-the-max-plan), but chat on Max still follows the peak window. Our [Claude Pro vs Max comparison](/blog/claude-pro-vs-max/) covers when the bigger plan is worth it, and the [Claude tool page](/tools/claude/) lists current prices.

## What time are Claude peak hours in my time zone?

Claude peak hours are 13:00–19:00 UTC, which is 09:00–15:00 in New York and 14:00–20:00 in London until the clocks change this fall.

| City | Now (summer time) | After clocks change |
|---|---|---|
| New York | 09:00–15:00 EDT | 08:00–14:00 EST (from Nov 1) |
| San Francisco | 06:00–12:00 PDT | 05:00–11:00 PST (from Nov 1) |
| London | 14:00–20:00 BST | 13:00–19:00 GMT (from Oct 25) |
| Paris / Berlin | 15:00–21:00 CEST | 14:00–20:00 CET (from Oct 25) |
| Istanbul | 16:00–22:00 | No change (UTC+3) |
| New Delhi | 18:30–00:30 IST | No change |
| Beijing | 21:00–03:00 CST | No change |
| Tokyo / Seoul | 22:00–04:00 | No change |
| São Paulo | 10:00–16:00 | No change (UTC−3) |

EU clocks go back on October 25, 2026 and US clocks on November 1, 2026. The UTC window stays put, so the local window moves one hour earlier in those places.

Two details catch people out:

- **Late-night windows cross midnight.** In New Delhi, Beijing, Tokyo and Seoul, Friday's window ends early on Saturday local time. Saturday 00:00–04:00 in Tokyo still counts as peak.
- **The original wording had two versions.** The announcement gave the window as 5–11 AM PT and 1–7 PM GMT, The Register reported. Those match only while California is on standard time; until November 1, 2026, 5 AM PDT is 12:00 UTC. We use 13:00–19:00 UTC. If you are on the US West Coast and want a margin, treat 05:00–12:00 PDT as peak until November 1, when both versions line up again.

## Is the 13:00–19:00 UTC window still official?

The window was announced officially in March 2026, but Anthropic's current Help Center no longer spells it out. As of October 2026, the Help Center articles we checked on the Max plan, usage best practices and usage credits describe 5-hour sessions and weekly limits without naming a peak window.

Here is how PromoClock handles that gap:

- We keep showing the last officially described window, weekdays 13:00–19:00 UTC, on the clock, in the API and in this guide.
- We say openly that it is no longer documented in the Help Center, rather than presenting it as current policy text.
- We check Anthropic's Help Center, blog and staff announcements whenever limits change, and we will update the clock, the API and this guide if Anthropic announces a new window or an end date.

Our [About page](/about/) explains how we verify sources and dates.

## How do I check whether Claude is in peak hours today?

Open [PromoClock's home page](/): the live clock shows whether Claude is in peak or off-peak hours today, your local window and a countdown to the next switch. Developers can query the same status as JSON.

![PromoClock's Claude Watch showing Claude off-peak, a countdown to the next switch and the next peak window in local time](../images/claude-watch-peak-hours.jpg)

The endpoint is `GET https://promoclock.co/api/status`. It is free, CORS-enabled and limited to 60 requests per minute per IP, and it is the only public PromoClock API. The response includes:

- `status`: `peak` or `off_peak`, plus a boolean `isPeak`.
- `nextChange`: the next switch as an ISO 8601 timestamp, and `minutesUntilChange`.
- `label`: a short, human-readable status line.

```bash
curl -s https://promoclock.co/api/status
```

The [Developer tools section](/#developer-tools) on the home page has copy-ready curl and zsh snippets, including one that puts a red or green dot in your shell prompt. A Slack or Discord bot can poll the endpoint once a minute and post when `status` flips.

Inside Claude, Settings > Usage shows how much of your own session and weekly limits you have used, according to Anthropic's [usage best practices](https://support.claude.com/en/articles/9797557-usage-limit-best-practices).

## How should you schedule heavy Claude work around peak hours?

Move your heaviest Claude work outside 13:00–19:00 UTC on weekdays, and keep the peak window for short questions. Weekends are off-peak everywhere.

Anthropic lists what makes a task heavy: message length, attachment size, conversation length, tools such as Research and web search, model choice, effort level, artifacts and multi-step tasks like running code or browsing. Those are the jobs to move.

What that means by region:

- **US East Coast:** peak is 09:00–15:00 EDT. Start heavy work before 09:00 or after 15:00; from November 1, 2026, before 08:00 or after 14:00 EST.
- **US West Coast:** peak is 06:00–12:00 PDT, so afternoons and evenings are off-peak.
- **Europe and Turkey:** peak covers afternoons and early evenings. Mornings are the best time for long documents and Research.
- **India:** peak is 18:30–00:30 IST, so the working day is off-peak.
- **China, Japan and Korea:** peak falls late at night, so the whole working day is off-peak.
- **Brazil:** peak is 10:00–16:00 in São Paulo. Use early mornings and evenings for heavy work.

On Pro or Max, flip the order during peak: run Claude Code tasks, which are exempt, and save long chats for later. If you hit the session cap mid-peak, the cap lifts when your 5-hour window resets.

## Bottom line

Claude peak hours cost you session allowance, never weekly allowance. Here is what we recommend:

- **Casual users on Free or Pro:** you can mostly ignore the window. If you hit the cap during peak, wait for your 5-hour reset.
- **Heavy chat users in Europe, Turkey or Brazil:** put long documents and Research in the morning, before peak starts.
- **US users:** do big jobs early in the morning on the East Coast and in the afternoon on the West Coast, and recheck your times after November 1.
- **Developers on Pro or Max:** use the peak window for Claude Code and do long chats off-peak.
- **Team admins:** Anthropic has not announced a Claude Code exemption for Team, so schedule batch work off-peak.

Check [Claude Watch](/) before a long session. It is the fastest way to know where you stand.
