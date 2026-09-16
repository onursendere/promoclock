import { readFile } from "node:fs/promises";
import path from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const fontFile = (pkg: string, file: string) => readFile(path.join(process.cwd(), "node_modules/@fontsource", pkg, "files", file));

let fonts: Promise<Parameters<typeof satori>[1]["fonts"]> | undefined;
function loadFonts() {
  fonts ??= Promise.all([
    fontFile("geist", "geist-latin-400-normal.woff"),
    fontFile("geist", "geist-latin-600-normal.woff"),
    fontFile("lora", "lora-latin-700-normal.woff"),
  ]).then(([regular, semibold, serif]) => [
    { name: "Geist", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Geist", data: semibold, weight: 600 as const, style: "normal" as const },
    { name: "Lora", data: serif, weight: 700 as const, style: "normal" as const },
  ]);
  return fonts;
}

export interface OgCard {
  eyebrow: string;
  title: string;
  subtitle: string;
  badge?: string;
  initials?: string;
}

export async function renderOgImage(card: OgCard): Promise<Buffer<ArrayBuffer>> {
  const svg = await satori(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#F5F0EB",
        fontFamily: "Geist",
        color: "#0D0C0B",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", padding: "64px 72px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="52" height="52" viewBox="0 0 100 100">
            <circle cx="78" cy="18" r="8" fill="#8B9A6B" />
            <circle cx="46" cy="50" r="42" fill="#D4C5A9" />
            <path d="M34 30 L58 50 L34 70" stroke="#4A4458" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          </svg>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 600 }}>
            <span style={{ color: "#4A3A7F" }}>Promo</span>
            <span>Clock</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28, marginTop: 64 }}>
          {card.initials && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 132,
                height: 132,
                borderRadius: 32,
                background: "#ECE6F5",
                color: "#4A3A7F",
                fontSize: 56,
                fontWeight: 600,
              }}
            >
              {card.initials}
            </div>
          )}
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ display: "flex", fontSize: 24, fontWeight: 600, letterSpacing: 3, color: "#55574F" }}>
              {card.eyebrow.toUpperCase()}
            </div>
            <div style={{ display: "flex", fontFamily: "Lora", fontSize: card.title.length > 42 ? 60 : 72, lineHeight: 1.08, marginTop: 12 }}>
              {card.title}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#55574F", marginTop: 24, lineHeight: 1.35 }}>{card.subtitle}</div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "26px 72px",
          background: "#4A3A7F",
          color: "#FFFFFF",
          fontSize: 26,
        }}
      >
        <span style={{ fontWeight: 600 }}>promoclock.co</span>
        {card.badge && (
          <span style={{ display: "flex", padding: "8px 18px", borderRadius: 999, background: "rgba(255,255,255,0.16)", fontWeight: 600 }}>
            {card.badge}
          </span>
        )}
      </div>
    </div>,
    { width: 1200, height: 630, fonts: await loadFonts() },
  );
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
  return Buffer.from(png);
}
