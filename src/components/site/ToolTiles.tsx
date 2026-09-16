import { ToolLogo } from "@/components/site/ToolLogo";
import type { Locale } from "@/lib/i18n/config";
import type { ToolRecord } from "@/lib/deals";
import { toolPath } from "@/lib/seo";

/** Logo grid: scannable, one line per tool. */
export function ToolTiles({ tools, lang, live }: { tools: ToolRecord[]; lang: Locale; live: Record<string, number> }) {
  return (
    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
      {tools.map((tool) => (
        <li key={tool.slug}>
          <a
            href={toolPath(lang, tool.slug)}
            className="flex h-full items-center gap-2.5 rounded-lg border bg-card p-2.5 text-sm font-medium shadow-xs transition-colors hover:bg-muted/50"
          >
            <ToolLogo slug={tool.slug} name={tool.name} size="sm" />
            <span className="min-w-0 flex-1 truncate">{tool.name}</span>
            {(live[tool.slug] ?? 0) > 0 && <span className="size-2 shrink-0 rounded-full bg-success" aria-label="Live deal" />}
          </a>
        </li>
      ))}
    </ul>
  );
}
