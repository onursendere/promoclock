import type { APIRoute } from "astro";
import { getTools } from "@/lib/content";
import { toolPath } from "@/lib/seo";

/**
 * Build-only list of legacy /go/<slug>/ targets. integrations/cpanel-htaccess.mjs turns it into
 * 301 rules and then deletes the file from dist/, so it is never published.
 *
 * Each old URL moves to the tool's English profile, not to the tool's own site: Search Console
 * judges a redirect by its destination, so a vendor page that is noindex (chat.mistral.ai) or
 * answers Googlebot with 403 would keep the old URL in "Excluded by 'noindex' tag" or an error row.
 */
export const GET: APIRoute = async () => {
  const tools = await getTools();
  const payload = tools.map((t) => ({ slug: t.slug, target: toolPath("en", t.slug) }));
  return new Response(JSON.stringify(payload), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
