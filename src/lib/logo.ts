import { Resvg } from "@resvg/resvg-js";

/** The PromoClock mark (violet disc, white chevron) as a square PNG. */
export function logoPng(size: number): Uint8Array<ArrayBuffer> {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="46" fill="#5B43B0"/>
    <path d="M40 30 L62 50 L40 70" fill="none" stroke="#fff" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  return new Uint8Array(new Resvg(svg, { fitTo: { mode: "width", value: size } }).render().asPng());
}
