import type { APIRoute } from "astro";
import { IS_STAGING, SITE_URL } from "@/lib/site";

/**
 * /go/<slug>/ outbound redirects stay crawlable on purpose: blocking them here made Google report
 * "Blocked by robots.txt". They answer 302 with X-Robots-Tag: noindex (see the .htaccess generator).
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
