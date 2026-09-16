import { ArrowUpRight, Copy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const HREF = "https://stackoptic.com?ref=promoclock&utm_source=promoclock&utm_campaign=solo50";

/** Featured sponsor. Stays clearly labelled as sponsored. */
export function SponsorBanner({ dict }: { dict: Dictionary }) {
  const s = dict.sponsors;
  const { common, home } = dict.hub;
  return (
    <Card className="relative gap-0 overflow-hidden py-0 shadow-md ring-2 ring-primary/25">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/15 via-primary/5 to-transparent" />
      <CardContent className="relative flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-center lg:gap-8">
        <div className="flex items-center justify-between gap-3 lg:flex-col lg:items-start">
          <a href={HREF} target="_blank" rel="noopener sponsored" className="flex h-14 items-center rounded-xl border bg-white px-4 shadow-xs">
            <img src="/stackoptic-logo.png" alt="StackOptic" width="140" height="32" loading="lazy" className="h-8 w-auto" />
          </a>
          <Badge variant="outline" className="bg-background/80 text-muted-foreground">
            {home.sponsored}
          </Badge>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="h-7 px-3 text-sm font-bold tracking-wide">{s.stackopticPromoBadge}</Badge>
            <span className="text-sm font-medium text-primary">{s.stackopticPromo}</span>
          </div>
          <p className="text-xl font-semibold tracking-tight text-balance sm:text-2xl">{s.stackopticHeadline}</p>
          <p className="text-pretty text-muted-foreground">{s.stackopticSub}</p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row lg:w-72 lg:flex-col">
          <InputGroup className="h-11 bg-background sm:flex-1 lg:flex-none">
            <InputGroupAddon>{common.code}</InputGroupAddon>
            <InputGroupInput
              readOnly
              value={s.stackopticCode}
              aria-label={common.code}
              className="font-mono text-base font-bold tracking-[0.2em]"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="xs" data-copy={s.stackopticCode} data-copied-label={common.copied}>
                <Copy />
                <span data-copy-label>{common.copy}</span>
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <Button size="lg" asChild className="h-11 px-5 text-base sm:flex-1 lg:flex-none">
            <a href={HREF} target="_blank" rel="noopener sponsored">
              {s.stackopticCta}
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
