import type { APIRoute } from "astro";
import { IS_STAGING, SITE_URL } from "@/lib/site";

/**
 * Nothing is disallowed on purpose: a robots.txt block shows up in Search Console as "Blocked by
 * robots.txt". Keep URLs out of the index with noindex instead, and don't link to URLs that aren't pages.
 */
export const GET: APIRoute = () => {
  const body = IS_STAGING
    ? "User-agent: *\nDisallow: /\n"
    : `User-agent: *
Allow: /

# AI crawlers are welcome — see /llms.txt
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: CCBot
Allow: /

Sitemap: ${SITE_URL}/sitemap-index.xml

# LLM content files
# ${SITE_URL}/llms.txt
# ${SITE_URL}/llms-full.txt
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
