import type { APIRoute } from "astro";
import { logoPng } from "@/lib/logo";

/** Square logo for Organization schema and app icons. */
export const GET: APIRoute = () => new Response(logoPng(512), { headers: { "Content-Type": "image/png" } });
