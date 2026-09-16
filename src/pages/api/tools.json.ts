import type { APIRoute } from "astro";
import { getTools } from "@/lib/content";
import { outboundUrl } from "@/lib/outbound";
import { goPath } from "@/lib/deals";
import { absoluteUrl, localePath } from "@/lib/seo";

/** Public tool list; also read at build end to generate /go/ 302 rules in .htaccess. */
export const GET: APIRoute = async () => {
  const tools = await getTools();
  const payload = tools.map((t) => ({
    slug: t.slug,
    name: t.name,
    vendor: t.vendor,
    category: t.category,
    website: t.website,
    page: absoluteUrl(localePath("en", `tools/${t.slug}`)),
    go: goPath(t.slug),
    outbound: outboundUrl(t),
  }));
  return new Response(JSON.stringify(payload, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
