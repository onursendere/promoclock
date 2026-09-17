import type { APIRoute } from "astro";
import { getTools } from "@/lib/content";
import { outboundUrl } from "@/lib/outbound";

/**
 * Build-only list of /go/<slug>/ targets. integrations/cpanel-htaccess.mjs turns it into
 * 302 rules and then deletes the file from dist/, so it is never published.
 */
export const GET: APIRoute = async () => {
  const tools = await getTools();
  const payload = tools.map((t) => ({ slug: t.slug, outbound: outboundUrl(t) }));
  return new Response(JSON.stringify(payload), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
