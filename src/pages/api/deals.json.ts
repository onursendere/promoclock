import type { APIRoute } from "astro";
import { getDeals, getTools } from "@/lib/content";
import { absoluteUrl, localePath } from "@/lib/seo";
import { BUILD_TIME } from "@/lib/site";
import { ENDING_SOON_MS, NEWS_FRESH_MS } from "@/lib/deals";

const iso = (ms: number | undefined) => (ms === undefined ? null : new Date(ms).toISOString());

/** Full deal dataset; /api/deals.php filters it by server time. */
export const GET: APIRoute = async () => {
  const [deals, tools] = await Promise.all([getDeals(), getTools()]);
  const bySlug = new Map(tools.map((t) => [t.slug, t]));
  const payload = {
    generatedAt: new Date(BUILD_TIME).toISOString(),
    rules: { endingSoonMs: ENDING_SOON_MS, newsFreshMs: NEWS_FRESH_MS },
    deals: deals.map((d) => ({
      id: d.id,
      tool: d.tool,
      toolName: bySlug.get(d.tool)?.name ?? d.tool,
      toolUrl: absoluteUrl(localePath("en", `tools/${d.tool}`)),
      kind: d.kind,
      title: d.title.en,
      summary: d.summary.en,
      scope: d.scope?.en ?? null,
      code: d.code ?? null,
      regions: d.regions ?? null,
      startsAt: iso(d.startsAt),
      startKnown: d.startKnown !== false,
      endsAt: iso(d.endsAt),
      ongoing: Boolean(d.ongoing),
      verifiedAt: iso(d.verifiedAt),
      source: { label: d.sourceLabel, url: d.sourceUrl },
    })),
  };
  return new Response(JSON.stringify(payload, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
