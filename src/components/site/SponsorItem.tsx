import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Kbd } from "@/components/ui/kbd";
import type { UiDictionary } from "@/lib/i18n/dictionaries";

const HREF = "https://stackoptic.com?ref=promoclock&utm_source=promoclock&utm_campaign=solo50";

export function SponsorItem({ dict }: { dict: UiDictionary }) {
  const s = dict.sponsors;
  return (
    <Item variant="outline" className="flex-wrap bg-card shadow-xs sm:flex-nowrap">
      <ItemMedia className="rounded-lg border bg-white px-3 py-2">
        <img src="/stackoptic-logo.png" alt="StackOptic" width="120" height="28" loading="lazy" className="h-6 w-auto" />
      </ItemMedia>
      <ItemContent className="min-w-48">
        <ItemTitle className="flex-wrap">
          {s.stackopticHeadline}
          <Badge variant="outline" className="text-muted-foreground">
            {dict.hub.home.sponsored}
          </Badge>
        </ItemTitle>
        <ItemDescription>{s.stackopticSub}</ItemDescription>
      </ItemContent>
      <ItemActions className="w-full flex-wrap sm:w-auto">
        <Badge className="bg-primary/10 text-primary">{s.stackopticPromoBadge}</Badge>
        <span className="text-sm text-muted-foreground">{s.stackopticPromo}</span>
        <Kbd className="font-mono tracking-widest">{s.stackopticCode}</Kbd>
        <Button size="sm" variant="outline" asChild>
          <a href={HREF} target="_blank" rel="noopener sponsored">
            StackOptic
            <ArrowUpRight data-icon="inline-end" />
          </a>
        </Button>
      </ItemActions>
    </Item>
  );
}
