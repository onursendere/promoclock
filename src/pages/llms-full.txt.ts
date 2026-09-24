import type { APIRoute } from "astro";
import { getDeals, getToolProfiles, getTools } from "@/lib/content";
import { buildLlmsFullTxt } from "@/lib/llms";

export const GET: APIRoute = async () => {
  const [tools, deals, profiles] = await Promise.all([getTools(), getDeals(), getToolProfiles()]);
  return new Response(buildLlmsFullTxt(tools, deals, profiles), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
