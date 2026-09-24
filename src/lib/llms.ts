import { CITY_SCHEDULES, PEAK_HOURS } from "@/data/claude";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { i18n } from "@/lib/i18n/config";
import { getDealStatus, partitionDeals, type DealRecord, type ToolRecord } from "@/lib/deals";
import { AUTHOR, BUILD_TIME, SITE_URL } from "@/lib/site";
import { localePath } from "@/lib/seo";
import { startingPriceLabel, type ToolProfile } from "@/lib/profiles";

const day = (ms: number) => new Date(ms).toISOString().slice(0, 10);
const url = (path: string) => `${SITE_URL}${path}`;

function dealLine(deal: DealRecord, tools: Map<string, ToolRecord>): string {
  const tool = tools.get(deal.tool)?.name ?? deal.tool;
  const startKnown = deal.startKnown !== false;
  const window = deal.endsAt
    ? startKnown
      ? `${day(deal.startsAt)} → ${day(deal.endsAt)}`
      : `until ${day(deal.endsAt)}`
    : deal.ongoing
      ? "ongoing"
      : `since ${day(deal.startsAt)}`;
  const code = deal.code ? ` Code: ${deal.code}.` : "";
  return `- **${tool}: ${deal.headline.en}** — ${deal.value.en} for ${deal.audience.en} (${window}).${code} Details: ${url(localePath("en", `deals/${deal.id}`))} · Source: ${deal.sourceUrl} (verified ${day(deal.verifiedAt)})`;
}

function peakSection(): string {
  const h = (n: number) => `${String(n).padStart(2, "0")}:00`;
  return [
    "## Claude peak hours",
    `- Peak (5-hour session limits drain faster): weekdays ${h(PEAK_HOURS.startUtc)}–${h(PEAK_HOURS.endUtc)} UTC`,
    "- Off-peak (normal speed): weekday evenings/nights and all weekend",
    `- In effect since ${PEAK_HOURS.since}; weekly limits are not affected`,
    "- Claude Code on Pro and Max has been exempt from the peak-hour reduction since 2026-05-06",
    PEAK_HOURS.documented
      ? "- Documented in Anthropic's Help Center"
      : "- Not explicitly documented in Anthropic's current Help Center; treat as last officially described",
  ].join("\n");
}

export function buildLlmsTxt(tools: ToolRecord[], deals: DealRecord[]): string {
  const map = new Map(tools.map((t) => [t.slug, t]));
  const claude = deals.filter((d) => d.tool === "claude").sort((a, b) => b.startsAt - a.startsAt);
  const { live, upcoming } = partitionDeals(deals.filter((d) => d.tool !== "claude"), BUILD_TIME);

  return `# PromoClock
> Live Claude peak-hours clock and usage-limit changes, plus verified promotions for ${tools.length} popular AI tools. Updated daily (last build ${day(BUILD_TIME)}).

PromoClock is a free, independent site by ${AUTHOR.name} (Digiwings). It is not affiliated with Anthropic or any tool listed. Some outbound links are affiliate links; listings are never paid.

${peakSection()}

## Latest Claude changes
${claude.slice(0, 5).map((d) => dealLine(d, map)).join("\n")}

## Live AI deals (${live.length})
${live.map((d) => dealLine(d, map)).join("\n") || "- None right now"}
${upcoming.length ? `\n## Upcoming\n${upcoming.map((d) => dealLine(d, map)).join("\n")}\n` : ""}
## Pages
- Claude Watch (home): ${url(localePath("en"))}
- All AI deals: ${url(localePath("en", "deals"))}
- AI tools directory: ${url(localePath("en", "tools"))}
- Tool profiles: ${url(localePath("en", "tools"))}<slug>/ — summary, pricing, platforms, FAQ, alternatives (${tools.length} tools)
- Promo calendar: ${url(localePath("en", "calendar"))}
- About & methodology: ${url(localePath("en", "about"))}
- Affiliate disclosure: ${url(localePath("en", "affiliate-disclosure"))}
- Languages: ${i18n.locales.join(", ")} (e.g. ${url(localePath("tr"))})

## API (JSON, CORS enabled, 60 requests/minute per IP)
- GET ${url("/api/status")} — live Claude peak-hours status (the only public endpoint; deals are not offered via API)

## Links
- Full reference: ${url("/llms-full.txt")}
- Source code: ${AUTHOR.repo}
- Author: ${AUTHOR.x}
- Agency: ${AUTHOR.agency}
`;
}

/** Profile facts for llms-full.txt; only verified values, English text. */
function profileLines(tool: ToolRecord, profile: ToolProfile, tools: Map<string, ToolRecord>, dict: ReturnType<typeof getDictionary>): string {
  const { toolPage } = dict.hub;
  const price = startingPriceLabel(profile.pricing, "en", toolPage);
  const pricing = [
    `Free plan: ${profile.pricing.freePlan ? "yes" : "no"}`,
    ...(profile.pricing.freeTrial ? ["free trial"] : []),
    ...(price ? [`From ${price} (as of ${day(profile.pricing.asOf)})`] : []),
  ].join(" · ");
  return [
    `- **${tool.name}** (${tool.vendor}) — ${profile.summary}`,
    `  - ${pricing}. ${profile.pricing.summary}`,
    `  - Platforms: ${profile.platforms.map((p) => toolPage.platformNames[p]).join(", ")}`,
    `  - Best for: ${profile.bestFor.join("; ")}`,
    `  - Alternatives: ${profile.alternatives.map((slug) => tools.get(slug)?.name ?? slug).join(", ")}`,
    `  - Reviewed: ${day(profile.reviewedAt)} · Website: ${tool.website} · Page: ${url(localePath("en", `tools/${tool.slug}`))}`,
  ].join("\n");
}

export function buildLlmsFullTxt(tools: ToolRecord[], deals: DealRecord[], profiles: Map<string, ToolProfile> = new Map()): string {
  const map = new Map(tools.map((t) => [t.slug, t]));
  const dict = getDictionary("en");
  const byCategory = new Map<string, ToolRecord[]>();
  for (const tool of tools) {
    byCategory.set(tool.category, [...(byCategory.get(tool.category) ?? []), tool]);
  }
  const { live, upcoming, archive } = partitionDeals(deals, BUILD_TIME);
  const describe = (d: DealRecord) =>
    `### ${map.get(d.tool)?.name ?? d.tool}: ${d.title.en}\n- Page: ${url(localePath("en", `deals/${d.id}`))}\n- Offer: ${d.value.en}\n- Who: ${d.audience.en}\n- Type: ${dict.hub.kinds[d.kind]}\n- Window: ${day(d.startsAt)}${d.endsAt ? ` → ${day(d.endsAt)}` : " (open-ended)"}\n${d.scope ? `- Scope: ${d.scope.en}\n` : ""}${d.code ? `- Code: ${d.code}\n` : ""}- Status at build: ${getDealStatus(d, BUILD_TIME)}\n- Source: ${d.sourceLabel} — ${d.sourceUrl}\n- Verified: ${day(d.verifiedAt)}\n\n${d.summary.en}${d.steps?.length ? `\n\nHow to get it:\n${d.steps.map((s, i) => `${i + 1}. ${s.en}`).join("\n")}` : ""}${d.terms?.length ? `\n\nGood to know:\n${d.terms.map((s) => `- ${s.en}`).join("\n")}` : ""}`;

  const ref = new Date(BUILD_TIME);
  const schedule = CITY_SCHEDULES.map(({ city, ianaTimezone }) => {
    const at = (h: number) =>
      new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: ianaTimezone }).format(
        Date.UTC(ref.getUTCFullYear(), ref.getUTCMonth(), ref.getUTCDate(), h),
      );
    return `| ${city} | ${ianaTimezone} | ${at(PEAK_HOURS.startUtc)}–${at(PEAK_HOURS.endUtc)} |`;
  }).join("\n");

  return `# PromoClock — Complete Reference
> Generated ${new Date(BUILD_TIME).toISOString()} from the same data as ${SITE_URL}

${buildLlmsTxt(tools, deals).split("\n").slice(2).join("\n")}

${peakSection()}

### Peak hours by city (at build date, DST-aware)
| City | Timezone | Peak (weekdays) |
|------|----------|-----------------|
${schedule}

## Deals — live (${live.length})
${live.map(describe).join("\n\n") || "None right now."}

## Deals — upcoming (${upcoming.length})
${upcoming.map(describe).join("\n\n") || "None scheduled."}

## Deals — archive (${archive.length})
${archive.map(describe).join("\n\n") || "None."}

## Tracked AI tools (${tools.length})
${[...byCategory.entries()]
  .map(
    ([category, list]) =>
      `### ${dict.hub.categories[category as ToolRecord["category"]]}\n${list
        .map((t) => {
          const profile = profiles.get(t.slug);
          return profile
            ? profileLines(t, profile, map, dict)
            : `- **${t.name}** (${t.vendor}) — ${t.tagline.en} ${t.website} · ${url(localePath("en", `tools/${t.slug}`))}`;
        })
        .join("\n")}`,
  )
  .join("\n\n")}

## FAQ
${dict.faq.items.map((item) => `Q: ${item.question}\nA: ${item.answer}`).join("\n\n")}

## API example
\`\`\`bash
curl -s ${SITE_URL}/api/status
\`\`\`

## Technical
- Astro 7 static site with React islands and shadcn/ui, Tailwind CSS 4
- One PHP JSON endpoint (/api/status), behind Cloudflare
- Rebuilt daily; deal status is derived from start/end dates
`;
}
