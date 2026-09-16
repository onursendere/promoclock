import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToolLogo } from "@/components/site/ToolLogo";
import type { HubDictionary } from "@/lib/i18n/dictionaries";
import type { ToolRecord } from "@/lib/deals";

export function HeroIntro({
  hub,
  dealsHref,
  toolsHref,
  featuredTools,
  toolCount,
  liveCount,
}: {
  hub: HubDictionary;
  dealsHref: string;
  toolsHref: string;
  featuredTools: ToolRecord[];
  toolCount: number;
  liveCount: number;
}) {
  const { home, nav } = hub;
  return (
    <div className="flex flex-col items-start gap-6">
      <Badge variant="outline" className="h-7 gap-2 rounded-full px-3 text-sm font-normal">
        <span className="relative flex size-2" aria-hidden="true">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-success" />
        </span>
        {home.heroEyebrow}
      </Badge>
      <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
        {home.heroTitle}
      </h1>
      <p className="max-w-xl text-lg text-pretty text-muted-foreground">{home.heroSubtitle}</p>
      <div className="flex flex-wrap gap-3">
        <Button size="lg" asChild className="h-10 px-4">
          <a href={dealsHref}>
            {home.ctaDeals}
            <ArrowRight data-icon="inline-end" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild className="h-10 px-4">
          <a href={toolsHref}>{home.ctaTools}</a>
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {featuredTools.map((tool) => (
            <ToolLogo key={tool.slug} slug={tool.slug} name={tool.name} size="sm" className="rounded-full ring-2 ring-background" />
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{toolCount}</span> {nav.tools} ·{" "}
          <span className="font-medium text-foreground">{liveCount}</span> {home.statsLive.toLowerCase()}
        </p>
      </div>
    </div>
  );
}
