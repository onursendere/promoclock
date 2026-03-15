import { NextResponse } from "next/server";

export function GET() {
  const content = `User-agent: *
Allow: /

Sitemap: https://promoclock.co/sitemap.xml

# LLM-friendly content
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

User-agent: Google-Extended
Allow: /

# LLM content files
# https://promoclock.co/llms.txt
# https://promoclock.co/llms-full.txt
`;

  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
