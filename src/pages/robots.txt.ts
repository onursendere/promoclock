import type { APIRoute } from "astro";
import { IS_STAGING, SITE_URL } from "@/lib/site";

export const GET: APIRoute = () => {
  const body = IS_STAGING
    ? "User-agent: *\nDisallow: /\n"
    : `User-agent: *
Allow: /
Disallow: /go/

# AI crawlers are welcome — see /llms.txt
User-agent: GPTBot
Allow: /
Disallow: /go/

User-agent: ChatGPT-User
Allow: /
Disallow: /go/

User-agent: ClaudeBot
Allow: /
Disallow: /go/

User-agent: Claude-Web
Allow: /
Disallow: /go/

User-agent: anthropic-ai
Allow: /
Disallow: /go/

User-agent: PerplexityBot
Allow: /
Disallow: /go/

User-agent: Google-Extended
Allow: /
Disallow: /go/

User-agent: Amazonbot
Allow: /
Disallow: /go/

User-agent: CCBot
Allow: /
Disallow: /go/

Sitemap: ${SITE_URL}/sitemap-index.xml

# LLM content files
# ${SITE_URL}/llms.txt
# ${SITE_URL}/llms-full.txt
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
