import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { ToolLogo } from "@/components/site/ToolLogo";
import type { Locale } from "@/lib/i18n/config";
import { format, type HubDictionary } from "@/lib/i18n/dictionaries";
import { localize, type ToolRecord } from "@/lib/deals";
import { localePath } from "@/lib/seo";

export function ToolCard({
  tool,
  liveCount,
  lang,
  hub,
}: {
  tool: ToolRecord;
  liveCount: number;
  lang: Locale;
  hub: HubDictionary;
}) {
  return (
    <Item
      variant="outline"
      asChild
      data-tool-card
      data-category={tool.category}
      data-live={liveCount > 0 ? "true" : "false"}
      data-search={`${tool.name} ${tool.vendor} ${tool.tagline.en}`.toLowerCase()}
      className="h-full bg-card transition-colors hover:bg-muted/50"
    >
      <a href={localePath(lang, `tools/${tool.slug}`)}>
        <ItemMedia>
          <ToolLogo slug={tool.slug} name={tool.name} />
        </ItemMedia>
        <ItemContent className="min-w-0">
          <ItemTitle className="flex-wrap">
            {tool.name}
            {liveCount > 0 && (
              <Badge variant="secondary" className="gap-1 text-success">
                <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
                {format(hub.tools.liveDeals, { count: liveCount })}
              </Badge>
            )}
          </ItemTitle>
          <ItemDescription className="line-clamp-2">{localize(tool.tagline, lang)}</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRight className="size-4 text-muted-foreground" aria-hidden="true" />
        </ItemActions>
      </a>
    </Item>
  );
}
