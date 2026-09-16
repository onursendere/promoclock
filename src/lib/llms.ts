import { CITY_SCHEDULES, PEAK_HOURS } from "@/data/claude";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { i18n } from "@/lib/i18n/config";
import { getDealStatus, isLive, partitionDeals, type DealRecord, type ToolRecord } from "@/lib/deals";
import { AUTHOR, BUILD_TIME, SITE_URL } from "@/lib/site";
import { localePath } from "@/lib/seo";

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
  return `- **${tool}** — ${deal.title.en} (${window}).${code} Source: ${deal.sourceUrl} (verified ${day(deal.verifiedAt)})`;
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
- Promo calendar: ${url(localePath("en", "calendar"))}
- Affiliate disclosure: ${url(localePath("en", "affiliate-disclosure"))}
- Languages: ${i18n.locales.join(", ")} (e.g. ${url(localePath("tr"))})

## API (JSON, CORS enabled, 60 requests/minute per IP)
- GET ${url("/api/status")} — live Claude peak-hours status
- GET ${url("/api/deals")}?status=active|upcoming|ended|all&tool=<slug> — deals filtered by current time
- GET ${url("/api/tools.json")} — tracked tools

## Links
- Full reference: ${url("/llms-full.txt")}
- Source code: ${AUTHOR.repo}
- Author: ${AUTHOR.x}
- Agency: ${AUTHOR.agency}
`;
}

export function buildLlmsFullTxt(tools: ToolRecord[], deals: DealRecord[]): string {
  const map = new Map(tools.map((t) => [t.slug, t]));
  const dict = getDictionary("en");
  const byCategory = new Map<string, ToolRecord[]>();
  for (const tool of tools) {
    byCategory.set(tool.category, [...(byCategory.get(tool.category) ?? []), tool]);
  }
  const { live, upcoming, archive } = partitionDeals(deals, BUILD_TIME);
  const describe = (d: DealRecord) =>
    `### ${map.get(d.tool)?.name ?? d.tool}: ${d.title.en}\n- Type: ${dict.hub.kinds[d.kind]}\n- Window: ${day(d.startsAt)}${d.endsAt ? ` → ${day(d.endsAt)}` : " (open-ended)"}\n${d.scope ? `- Scope: ${d.scope.en}\n` : ""}${d.code ? `- Code: ${d.code}\n` : ""}- Status at build: ${getDealStatus(d, BUILD_TIME)}\n- Source: ${d.sourceLabel} — ${d.sourceUrl}\n- Verified: ${day(d.verifiedAt)}\n\n${d.summary.en}`;

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
        .map((t) => `- **${t.name}** (${t.vendor}) — ${t.tagline.en} ${t.website} · ${url(localePath("en", `tools/${t.slug}`))}`)
        .join("\n")}`,
  )
  .join("\n\n")}

## FAQ
${dict.faq.items.map((item) => `Q: ${item.question}\nA: ${item.answer}`).join("\n\n")}

## API examples
\`\`\`bash
curl -s ${SITE_URL}/api/status
curl -s "${SITE_URL}/api/deals?status=active"
curl -s "${SITE_URL}/api/deals?tool=claude&status=all"
\`\`\`

## Technical
- Astro 7 static site with React islands and shadcn/ui, Tailwind CSS 4
- PHP JSON endpoints on cPanel, behind Cloudflare
- Rebuilt daily; deal status is derived from start/end dates
`;
}
