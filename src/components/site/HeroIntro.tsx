import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToolLogo } from "@/components/site/ToolLogo";
import type { HubDictionary } from "@/lib/i18n/dictionaries";
import type { ToolRecord } from "@/lib/deals";

export function HeroHeading({ hub }: { hub: HubDictionary }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <Badge variant="outline" className="h-7 gap-2 rounded-full px-3 text-sm font-normal">
        <span className="relative flex size-2" aria-hidden="true">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-success" />
        </span>
        {hub.home.heroEyebrow}
      </Badge>
      <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
        {hub.home.heroTitle}
      </h1>
    </div>
  );
}

export function HeroActions({
  hub,
  dealsHref,
  toolsHref,
  featuredTools,
  liveCount,
}: {
  hub: HubDictionary;
  dealsHref: string;
  toolsHref: string;
  featuredTools: ToolRecord[];
  liveCount: number;
}) {
  const { home } = hub;
  return (
    <div className="flex flex-col items-start gap-6">
      <p className="hero-summary max-w-lg text-lg text-pretty text-muted-foreground">{home.heroSubtitle}</p>
      <div className="flex w-full flex-col gap-3 min-[420px]:w-auto min-[420px]:flex-row">
        <Button size="lg" asChild className="h-11 px-5">
          <a href={dealsHref}>
            {home.ctaDeals}
            <Badge variant="secondary" className="ml-1 bg-primary-foreground/15 text-primary-foreground">
              {liveCount}
            </Badge>
            <ArrowRight data-icon="inline-end" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild className="h-11 px-5">
          <a href={toolsHref}>{home.ctaTools}</a>
        </Button>
      </div>
      <div className="flex -space-x-2">
        {featuredTools.map((tool) => (
          <ToolLogo key={tool.slug} slug={tool.slug} name={tool.name} size="sm" className="rounded-full ring-2 ring-background" />
        ))}
      </div>
    </div>
  );
}
