import type { APIRoute } from "astro";
import { Resvg } from "@resvg/resvg-js";

/** Square logo for Organization schema and app icons. */
export const GET: APIRoute = () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="46" fill="#5B43B0"/>
    <path d="M40 30 L62 50 L40 70" fill="none" stroke="#fff" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 512 } }).render().asPng();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
