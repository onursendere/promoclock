import type { APIRoute } from "astro";
import { getDeals, getPosts, getTools } from "@/lib/content";
import { buildLlmsTxt } from "@/lib/llms";

export const GET: APIRoute = async () => {
  const [tools, deals, posts] = await Promise.all([getTools(), getDeals(), getPosts("en")]);
  return new Response(buildLlmsTxt(tools, deals, posts), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
