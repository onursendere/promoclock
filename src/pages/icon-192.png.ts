import type { APIRoute } from "astro";
import { logoPng } from "@/lib/logo";

/** Small app icon for the web app manifest (the 512 px one is /logo.png). */
export const GET: APIRoute = () => new Response(logoPng(192), { headers: { "Content-Type": "image/png" } });
