import type { APIRoute, GetStaticPaths } from "astro";
import { getDeals, getTools } from "@/lib/content";
import { getDealStatus, isLive } from "@/lib/deals";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { renderOgImage, type OgCard } from "@/lib/og";
import { BUILD_TIME } from "@/lib/site";

/** One English share image per page type; every language reuses it. */
export const getStaticPaths: GetStaticPaths = async () => {
  const dict = getDictionary("en");
  const [tools, deals] = await Promise.all([getTools(), getDeals()]);
  const liveDeals = deals.filter((d) => isLive(getDealStatus(d, BUILD_TIME)));
  const liveLabel = (n: number) => `${n} live deal${n === 1 ? "" : "s"}`;

  const pages: { route: string; card: OgCard }[] = [
    {
      route: "home",
      card: {
        eyebrow: "Claude Watch",
        title: "Claude peak hours, limit changes & live AI deals",
        subtitle: `One clock for Claude's limits and verified promos across ${tools.length} AI tools.`,
        badge: liveLabel(liveDeals.length),
      },
    },
    {
      route: "deals",
      card: { eyebrow: "AI deals", title: "Live AI deals & student offers", subtitle: dict.hub.deals.subtitle, badge: liveLabel(liveDeals.length) },
    },
    {
      route: "tools",
      card: { eyebrow: "AI tools", title: `${tools.length} popular AI tools, one clock`, subtitle: dict.hub.home.toolsSubtitle },
    },
    {
      route: "calendar",
      card: { eyebrow: "Promo calendar", title: "AI promo deadlines, launches & sales", subtitle: dict.hub.calendar.subtitle },
    },
    {
      route: "affiliate-disclosure",
      card: { eyebrow: "Transparency", title: "Affiliate disclosure", subtitle: "How PromoClock uses partner links — and why they never decide what we list." },
    },
    {
      route: "about",
      card: { eyebrow: "About", title: "How PromoClock verifies AI deals", subtitle: dict.hub.about.intro },
    },
    ...deals.map((deal) => {
      const tool = tools.find((t) => t.slug === deal.tool)!;
      const live = isLive(getDealStatus(deal, BUILD_TIME));
      return {
        route: `deals/${deal.id}`,
        card: {
          eyebrow: `${tool.name} · ${dict.hub.kinds[deal.kind]}`,
          title: deal.headline.en,
          subtitle: `${deal.value.en} · ${deal.audience.en}`,
          badge: live ? "Live" : undefined,
          initials: tool.name.slice(0, 2).toUpperCase(),
        },
      };
    }),
    ...tools.map((tool) => {
      const count = liveDeals.filter((d) => d.tool === tool.slug).length;
      return {
        route: `tools/${tool.slug}`,
        card: {
          eyebrow: `${dict.hub.categories[tool.category]} · ${tool.vendor}`,
          title: `${tool.name} promos & deals`,
          subtitle: tool.tagline.en,
          badge: count > 0 ? liveLabel(count) : undefined,
          initials: tool.name
            .replace(/[^\p{L}\p{N} ]/gu, " ")
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((w) => w[0])
            .join("")
            .toUpperCase(),
        },
      };
    }),
  ];
  return pages.map(({ route, card }) => ({ params: { route }, props: { card } }));
};

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgImage(props.card as OgCard);
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
