import type { APIRoute } from "astro";
import { getDeals, getTools } from "@/lib/content";
import { buildLlmsFullTxt } from "@/lib/llms";

export const GET: APIRoute = async () => {
  const [tools, deals] = await Promise.all([getTools(), getDeals()]);
  return new Response(buildLlmsFullTxt(tools, deals), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
