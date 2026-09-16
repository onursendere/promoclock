import type { APIRoute } from "astro";
import { PEAK_HOURS } from "@/data/claude";

/** Build-time config consumed by /api/status.php so the peak rule has one source. */
export const GET: APIRoute = () =>
  new Response(JSON.stringify({ peakHours: PEAK_HOURS }, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
