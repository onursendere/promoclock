import { ChevronRight } from "lucide-react";
import { Fragment } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemSeparator, ItemTitle } from "@/components/ui/item";
import type { Locale } from "@/lib/i18n/config";
import type { HubDictionary } from "@/lib/i18n/dictionaries";
import { localize, type DealRecord } from "@/lib/deals";
import { dealPath } from "@/lib/seo";
import { formatDate } from "@/lib/time";

export function DealTimeline({ deals, lang, hub }: { deals: DealRecord[]; lang: Locale; hub: HubDictionary }) {
  return (
    <Card className="py-1.5 shadow-xs">
      <ItemGroup>
        {deals.map((deal, i) => (
          <Fragment key={deal.id}>
            {i > 0 && <ItemSeparator />}
            <Item asChild className="rounded-none hover:bg-muted/50">
              <a href={dealPath(lang, deal.id)}>
                <ItemMedia className="w-12 flex-col gap-0 rounded-md border bg-muted/50 py-1 text-center">
                  <span className="text-[10px] font-medium text-muted-foreground uppercase">
                    {formatDate(deal.startsAt, lang, { day: undefined, year: undefined, month: "short" })}
                  </span>
                  <span className="text-base leading-tight font-semibold tabular-nums">{new Date(deal.startsAt).getUTCDate()}</span>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="line-clamp-1">{localize(deal.headline, lang)}</ItemTitle>
                  <ItemDescription className="line-clamp-1">
                    {hub.kinds[deal.kind]} · {localize(deal.audience, lang)}
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Badge variant="secondary" className="hidden sm:inline-flex">
                    {localize(deal.value, lang)}
                  </Badge>
                  <ChevronRight className="size-4 text-muted-foreground" aria-hidden="true" />
                </ItemActions>
              </a>
            </Item>
          </Fragment>
        ))}
      </ItemGroup>
    </Card>
  );
}
