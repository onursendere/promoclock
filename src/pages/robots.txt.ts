import type { APIRoute } from "astro";
import { IS_STAGING, SITE_URL } from "@/lib/site";

/**
 * Nothing is disallowed on purpose: a robots.txt block shows up in Search Console as "Blocked by
 * robots.txt". Keep URLs out of the index with noindex instead, and don't link to URLs that aren't pages.
 */
/**
 * AI search, assistant and training crawlers, each named explicitly. They are already allowed by
 * "User-agent: *"; naming them documents the choice and answers audits that look for each one.
 */
const AI_AGENTS = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Claude-Web",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google
  "Google-Extended",
  "Gemini-Deep-Research",
  // Apple
  "Applebot",
  "Applebot-Extended",
  // Meta
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  // Others
  "DuckAssistBot",
  "Amazonbot",
  "MistralAI-User",
  "YouBot",
  "Bytespider",
  "CCBot",
] as const;

export const GET: APIRoute = () => {
  const body = IS_STAGING
    ? "User-agent: *\nDisallow: /\n"
    : `User-agent: *
Allow: /

# AI crawlers are welcome — see /llms.txt
${AI_AGENTS.map((agent) => `User-agent: ${agent}\nAllow: /\n`).join("\n")}
Sitemap: ${SITE_URL}/sitemap-index.xml

# LLM content files
# ${SITE_URL}/llms.txt
# ${SITE_URL}/llms-full.txt
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
