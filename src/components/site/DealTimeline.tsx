import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemSeparator, ItemTitle } from "@/components/ui/item";
import type { Locale } from "@/lib/i18n/config";
import type { HubDictionary } from "@/lib/i18n/dictionaries";
import { localize, type DealRecord } from "@/lib/deals";
import { formatDate } from "@/lib/time";
import { Fragment } from "react";

export function DealTimeline({ deals, lang, hub }: { deals: DealRecord[]; lang: Locale; hub: HubDictionary }) {
  return (
    <Card className="py-2 shadow-xs">
      <ItemGroup>
        {deals.map((deal, i) => {
          const date = new Date(deal.startsAt);
          return (
            <Fragment key={deal.id}>
              {i > 0 && <ItemSeparator />}
              <Item className="items-start">
                <ItemMedia className="w-14 flex-col gap-0 rounded-md border bg-muted/50 py-1.5 text-center">
                  <span className="text-[10px] font-medium text-muted-foreground uppercase">
                    {formatDate(deal.startsAt, lang, { day: undefined, year: undefined, month: "short" })}
                  </span>
                  <span className="font-mono text-lg leading-tight font-semibold">{date.getUTCDate()}</span>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle className="line-clamp-none">{localize(deal.title, lang)}</ItemTitle>
                  <ItemDescription className="line-clamp-none">{localize(deal.summary, lang)}</ItemDescription>
                  <a
                    href={deal.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex w-fit items-center gap-1 text-xs text-muted-foreground hover:text-foreground hover:underline"
                  >
                    {deal.sourceLabel}
                    <ExternalLink className="size-3" aria-hidden="true" />
                  </a>
                </ItemContent>
                <ItemActions className="hidden sm:flex">
                  <Badge variant="outline">{hub.kinds[deal.kind]}</Badge>
                </ItemActions>
              </Item>
            </Fragment>
          );
        })}
      </ItemGroup>
    </Card>
  );
}
