import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Kbd } from "@/components/ui/kbd";
import type { UiDictionary } from "@/lib/i18n/dictionaries";

const HREF = "https://stackoptic.com?ref=promoclock&utm_source=promoclock&utm_campaign=solo50";

export function SponsorItem({ dict }: { dict: UiDictionary }) {
  const s = dict.sponsors;
  return (
    <Item variant="outline" asChild className="bg-card shadow-xs transition-colors hover:bg-muted/40">
      <a href={HREF} target="_blank" rel="noopener sponsored">
        <ItemMedia className="rounded-md border bg-white px-2.5 py-1.5">
          <img src="/stackoptic-logo.png" alt="StackOptic" width="100" height="24" loading="lazy" className="h-5 w-auto" />
        </ItemMedia>
        <ItemContent className="min-w-0">
          <ItemTitle className="line-clamp-1">{s.stackopticHeadline}</ItemTitle>
          <ItemDescription className="line-clamp-1">
            <Badge variant="secondary" className="mr-1.5 text-primary">
              {s.stackopticPromoBadge}
            </Badge>
            {s.stackopticPromo}
          </ItemDescription>
        </ItemContent>
        <ItemActions className="hidden sm:flex">
          <span className="text-xs text-muted-foreground">{dict.hub.home.sponsored}</span>
          <Kbd className="font-mono tracking-widest">{s.stackopticCode}</Kbd>
          <ArrowUpRight className="size-4 text-muted-foreground" aria-hidden="true" />
        </ItemActions>
      </a>
    </Item>
  );
}
