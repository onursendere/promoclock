---
title: "Claude Usage Limits Explained (2026): 5-Hour Sessions, Weekly Caps and Resets"
metaTitle: "Claude Usage Limits 2026: 5-Hour, Weekly Caps and Resets"
metaDescription: "Claude usage limits reset every 5 hours, plus a weekly cap on paid plans. See how Pro and Max compare, every 2026 change and how to make your limits last."
excerpt: "Claude's usage limits reset on a rolling 5-hour session, and paid plans add a weekly cap. Chat and Claude Code share one pool. Pro gives at least 5x Free's per-session usage; Max 5x and Max 20x give 5 and 20 times Pro. Sessions drain faster on weekdays 13:00–19:00 UTC, and usage credits let paid plans keep working at API rates."
category: guides
publishedAt: 2026-10-04
updatedAt: 2026-10-04
image:
  src: "../images/claude-usage-limits.jpg"
  alt: "Hourglass with dark sand running through it on a desk against a grey textured wall"
  credit: "Alexandar Todov / Unsplash"
  creditUrl: "https://unsplash.com/photos/clear-hour-glass-AMzC2RVurO4"
  license: "https://unsplash.com/license"
tools: [claude]
keyTakeaways:
  - "Every Claude plan has a usage limit that resets on a rolling 5-hour session window, and paid plans add a weekly limit on top."
  - "Claude Pro gives at least 5x Free's usage per 5-hour session; Max 5x ($100/month) and Max 20x ($200/month) give 5 and 20 times Pro's."
  - "Claude on web, desktop and mobile and Claude Code draw from one shared usage pool, so a long coding session uses the same allowance as a long chat."
  - "Since September 14, 2026, Claude Code weekly limits are permanently 25% above the pre-promotion baseline, after a temporary +50% boost ended that day."
  - "When a Pro or Max plan reaches its limit, usage credits keep Claude working at standard API rates instead of waiting for the reset."
faq:
  - q: "How many messages can I send on Claude Pro?"
    a: "Anthropic does not publish a fixed message count for Claude Pro. Usage depends on message length, attachment size, conversation length, tools, model choice, effort level and artifacts. Anthropic's pricing page only says Pro gives at least 5x more usage per 5-hour session than Free, and Pro also has a weekly limit."
  - q: "Does Claude Max have a weekly limit?"
    a: "Yes. Claude Max 5x and Max 20x have a weekly usage limit that applies across all models, on top of the session limit that resets every five hours. According to Anthropic's Help Center, the weekly limit resets at a fixed time each week assigned to your account."
  - q: "Does Claude Code share limits with the Claude app?"
    a: "Yes. Claude Code is included in all paid plans and shares the same usage pool as chat on web, desktop and mobile, according to Anthropic's pricing page. On May 6, 2026, Anthropic doubled Claude Code's 5-hour limits on paid plans and exempted Claude Code on Pro and Max from peak hours."
  - q: "How much did Claude Code's weekly limit change on September 14, 2026?"
    a: "Since September 14, 2026, standard Claude Code weekly limits are permanently 25% above the pre-promotion baseline. A temporary +50% boost that began on May 13 ended the same day, so on a baseline of 100, capacity went from 150 during the promotion to 125, about 17% less."
  - q: "Are Claude usage credits worth it?"
    a: "Claude usage credits make sense if you hit your Pro or Max limit occasionally and can't wait for the reset. They bill at standard API rates, need prepaid funds and accept a monthly spending cap. If you hit the weekly limit most weeks, a bigger plan is usually the simpler fix."
  - q: "Can I see how much Claude usage I have left?"
    a: "Yes. In Claude, open Settings > Usage to see how much of your 5-hour session limit and weekly limit you have used and when each resets. Anthropic's usage best-practices article recommends checking this page to monitor your consumption."
howTo:
  name: "How to make Claude's usage limits last longer"
  steps:
    - name: "Schedule heavy work off-peak"
      text: "Run long documents, Research and big uploads outside 13:00–19:00 UTC on weekdays, or on the weekend, when 5-hour session limits drain at normal speed."
    - name: "Keep conversations short and focused"
      text: "Start a new chat for a new topic, plan your request first and combine related questions into one specific message."
    - name: "Put reference files in a Project"
      text: "Upload documents you reuse to a Project, where Anthropic says cached content counts less against your limits."
    - name: "Match the model to the task"
      text: "Use Sonnet or Haiku for routine work and save Opus and Fable for hard problems; on Max, Fable can use at most 50% of your weekly limit."
    - name: "Monitor usage and plan for overflow"
      text: "Check Settings > Usage for reset times, and turn on usage credits with a monthly cap if you can't wait for the reset."
sources:
  - https://claude.com/pricing
  - https://support.claude.com/en/articles/11049741-what-is-the-max-plan
  - https://support.claude.com/en/articles/9797557-usage-limit-best-practices
  - https://support.claude.com/en/articles/12429409-manage-usage-credits-for-paid-claude-plans
  - https://support.claude.com/en/articles/15424964-claude-fable-models-on-your-plan
  - https://www.anthropic.com/news/higher-limits-spacex
  - https://support.claude.com/en/articles/17274727-artifact-usage-promotion
  - https://support.claude.com/en/articles/17152539-cloud-sessions-bonus-credit-promotion
  - https://support.claude.com/en/articles/15400594-claude-cowork-june-2026-usage-promotion
  - https://x.com/ClaudeDevs/status/2093742321473065266
  - https://www.theregister.com/2026/03/26/anthropic_tweaks_usage_limits/
---
Claude's usage limits work in two layers: a session limit that resets on a rolling 5-hour window on every plan, and a weekly limit on top for paid plans. Chat and Claude Code draw from the same pool, and sessions drain faster on weekdays from 13:00 to 19:00 UTC. Here is how the limits work as of October 2026, every change Anthropic made this year, and how to make them last.

## How do Claude's usage limits work?

Claude's usage limits reset on a rolling 5-hour session window, and paid plans add weekly limits on top, according to [Anthropic's pricing page](https://claude.com/pricing). There is no fixed message count.

Three rules cover most of it:

- **Session limit:** every plan, Free included, has an allowance per 5-hour session.
- **Weekly limit:** paid plans also have a weekly cap. On Max, it applies across all models.
- **One pool:** Claude on web, desktop and mobile and Claude Code share the same usage. A long coding session eats into the same allowance as a long chat.

How much a message costs depends on what you ask. Anthropic's [usage best practices](https://support.claude.com/en/articles/9797557-usage-limit-best-practices) list message length, file attachment size, current conversation length, tools such as Research and web search, model choice, effort level, artifacts, and multi-step tasks like running code or browsing websites.

## When does Claude's limit reset?

Claude's session limit resets every five hours, and the weekly limit resets at a fixed time each week that is assigned to your account. Both reset times appear in Claude under Settings > Usage.

The weekly reset is not the same for everyone, so a friend's reset day tells you nothing about yours. Anthropic describes the weekly timing in its [Max plan article](https://support.claude.com/en/articles/11049741-what-is-the-max-plan). If you hit the session limit, waiting for the next 5-hour reset is enough. If you hit the weekly limit, a session reset doesn't help until the weekly reset arrives.

## How do Claude plans compare on usage?

Claude Pro gives at least 5x Free's usage per 5-hour session, and Max multiplies Pro by 5 or 20. Prices below are Anthropic's, as of October 2026.

| Plan | Price | Usage per 5-hour session | Claude Code | Usage credits |
|---|---|---|---|---|
| Free | $0 | Baseline | No | No |
| Pro | $20/month, or $17/month billed yearly ($200 up front) | At least 5x Free | Yes | Yes |
| Max 5x | $100/month | 5x Pro | Yes | Yes |
| Max 20x | $200/month | 20x Pro | Yes | Yes |

Max is billed monthly only. Team Standard seats cost $25/month, or $20/month billed annually, and Team and seat-based Enterprise plans have their own usage-credit settings.

Our [Claude Pro vs Max comparison](/blog/claude-pro-vs-max/) walks through which tier fits which workload.

## What are Claude Code's usage limits?

Claude Code uses the same 5-hour and weekly limits as chat, but Anthropic has changed them separately several times in 2026. As of October 2026, Claude Code has doubled 5-hour limits, a permanent weekly boost and a peak-hours exemption on Pro and Max.

- **5-hour limits:** on May 6, 2026, Anthropic [doubled Claude Code's 5-hour limits](/deals/claude-code-5h-limits-doubled/) on paid plans, per its [official announcement](https://www.anthropic.com/news/higher-limits-spacex).
- **Peak hours:** the same update removed the peak-hour reduction for Claude Code on Pro and Max.
- **Weekly limits:** a [+50% weekly boost](/deals/claude-code-weekly-plus50-2026/) ran from May 13 to September 14, 2026. It was replaced by a [permanent +25%](/deals/claude-code-weekly-plus25-permanent/). On a baseline of 100, that is 100 before, 150 during the promotion and 125 now.
- **Cloud sessions:** individual Pro subscribers get $100 and Max subscribers $250 in [Claude Code cloud credit](/deals/claude-code-cloud-credit-2026/), which cloud sessions use before plan limits. Claim it by October 7, 2026; unused credit expires on November 4, 2026.

Claude Code is not part of the Free plan.

## How do peak hours affect Claude's usage limits?

During Claude peak hours, weekdays 13:00–19:00 UTC, the 5-hour session limit drains faster on Free, Pro, Max and Team plans. Weekly limits are not affected.

[Peak hours took effect on March 27, 2026](/deals/claude-peak-hours-introduced/). At the time, Anthropic's Thariq Shihipar estimated that about 7% of users would hit session limits they would not have hit before, [The Register reported](https://www.theregister.com/2026/03/26/anthropic_tweaks_usage_limits/).

Enterprise plans are not affected, and Claude Code on Pro and Max is exempt. Our [Claude peak hours guide](/blog/claude-peak-hours/) converts the window into 9 time zones, and [Claude Watch](/) shows whether it applies right now.

## What changed in Claude's usage limits in 2026?

We count 9 limit changes and promotions in 2026, 4 of them for Claude Code alone. Two promotions are live as of October 4, 2026.

| Date | Change | Plans | Status |
|---|---|---|---|
| March 13–27, 2026 | [Session limits doubled](/deals/claude-march-2026-offpeak-2x/) outside weekday peak hours and all weekend | Free, Pro, Max, Team | Ended |
| March 27, 2026 | Peak hours: 5-hour limits drain faster on weekdays 13:00–19:00 UTC | Free, Pro, Max, Team | In effect |
| May 6, 2026 | Claude Code 5-hour limits doubled; Claude Code on Pro and Max exempt from peak hours | Pro, Max, Team, seat-based Enterprise | Permanent |
| May 13 – September 14, 2026 | Claude Code weekly limits +50% | Pro, Max, Team, seat-based Enterprise | Ended |
| June 5 – July 5, 2026 | [Cowork 5-hour limit doubled](/deals/claude-cowork-june-2026-2x/) | Pro, Max, Team, legacy Enterprise | Ended |
| July 2026 | Fable 5 moved to usage credits on Pro and Team standard seats | Pro, Team standard seats | In effect |
| September 14, 2026 | Claude Code weekly limits permanently +25% over the pre-promotion baseline | Pro, Max, Team, seat-based Enterprise | Permanent |
| September 23 – October 7, 2026 | Claude Code cloud credit: $100 (Pro) or $250 (Max) | Individual Pro and Max | Live |
| October 1–15, 2026 | [50% less session usage after creating or editing artifacts](/deals/claude-artifact-usage-promo-oct-2026/) | Pro, Max, Team | Live |

The artifact promotion applies to the next 10 chat messages after you create or edit an artifact and ends at 11:59 PM PT on October 15. It excludes Claude Code, the API and Free and Enterprise plans, according to [Anthropic's promotion page](https://support.claude.com/en/articles/17274727-artifact-usage-promotion).

## Does the model you pick change how fast you hit the limit?

Yes. Anthropic lists model choice as a factor in usage, and its Fable models use limits faster than other Claude models.

- **Fable 5 and Fable 5.1 on Max:** included, but you can spend at most 50% of your weekly limit on Fable models at no extra cost, says Anthropic's [Fable plan article](https://support.claude.com/en/articles/15424964-claude-fable-models-on-your-plan). Team and Enterprise premium seats work the same way.
- **Fable on Pro and Team standard seats:** not included in plan limits since July 2026. You can still use Fable with usage credits.
- **Opus:** included on Pro and Max, but not on Free.
- **Sonnet and Haiku:** Anthropic calls Haiku its most efficient model and suggests Haiku or the latest Sonnet for most tasks in its usage-credits article.

Our recommendation: make Sonnet your default, switch to Opus or Fable only for problems Sonnet can't solve, and lower the effort level for routine tasks.

## What can you do when you hit Claude's usage limit?

When you hit Claude's usage limit, you can wait for the reset, change how you work, turn on usage credits or move to a bigger plan.

1. **Check which limit you hit.** Settings > Usage shows whether it is the session or weekly limit and when it resets.
2. **Wait out peak hours.** If it is a weekday between 13:00 and 19:00 UTC, the next session will stretch further after 19:00 UTC.
3. **Switch models.** On Max, reaching the Fable cap doesn't stop Claude; switch to another model.
4. **Turn on usage credits.** See below.
5. **Upgrade if it keeps happening.** Hitting the weekly limit most weeks is a sign you need Max 5x or Max 20x.

### How do Claude usage credits work?

Claude usage credits let Pro, Max 5x and Max 20x subscribers keep working after reaching their plan limits, billed at standard API rates. Anthropic's [usage credits article](https://support.claude.com/en/articles/12429409-manage-usage-credits-for-paid-claude-plans) explains the setup:

- Go to Settings > Usage, click Enable, add a payment method and prepay funds.
- Set a monthly spending cap and, if you want, auto-reload when the balance runs low.
- Credits cover Claude conversations, Claude Code and Research.
- Anthropic also lists buying usage bundles as an option.

Credits show up as separate line items on your bill. If you are watching costs, our guide to [saving money on AI subscriptions](/blog/save-money-on-ai-subscriptions/) covers yearly billing and other ways to pay less.

## How can you make Claude's usage limits last longer?

The biggest wins are timing, shorter conversations and the right model. These tips come from Anthropic's guidance and the 2026 changes above:

- **Work off-peak.** Long documents, Research and big uploads cost less of your session outside 13:00–19:00 UTC on weekdays.
- **Start fresh chats.** Conversation length counts, so open a new chat when the topic changes.
- **Batch your questions.** Plan the request, write one specific message and combine related questions.
- **Use Projects for reference files.** Anthropic says cached content in projects counts less against your limits.
- **Pick the lighter model.** Default to Sonnet and lower the effort level for simple work.
- **Use tools on purpose.** Research and web search add usage, so turn them on when the answer needs them.
- **Use live promotions.** Through October 15, 2026, building with artifacts on Pro, Max or Team costs 50% less session usage.

## Bottom line

Claude's limits are a 5-hour session plus a weekly cap, and timing matters as much as your plan.

- **Free users:** keep chats short and work outside peak hours; Pro is the step up if you hit the cap daily.
- **Pro users:** use Sonnet by default and add usage credits for rare overflow days. Claude Code users get the peak-hours exemption.
- **Heavy Pro users who hit weekly limits:** Max 5x ($100/month) gives 5 times Pro's session usage.
- **Max users:** watch the 50% Fable cap and claim the $250 cloud credit by October 7, 2026.
- **Teams:** Anthropic has not announced a peak-hours exemption for Claude Code on Team, so schedule large runs off-peak.

We track every Claude limit change as it happens on [Claude Watch](/).
