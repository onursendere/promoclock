import { ArrowUpRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ToolLogo } from "@/components/site/ToolLogo";
import type { Locale } from "@/lib/i18n/config";
import { format, type HubDictionary } from "@/lib/i18n/dictionaries";
import { goPath, localize, type ToolRecord } from "@/lib/deals";
import { localePath } from "@/lib/seo";

export function ToolHero({
  tool,
  lang,
  hub,
  liveCount,
  summary,
}: {
  tool: ToolRecord;
  lang: Locale;
  hub: HubDictionary;
  liveCount: number;
  /** Profile summary (answer-first, 40–60 words); falls back to the one-line tagline. */
  summary?: string;
}) {
  return (
    <div className="border-b bg-muted/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-8 sm:gap-6 sm:px-6 sm:py-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={localePath(lang)}>PromoClock</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={localePath(lang, "tools")}>{hub.nav.tools}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{tool.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
          <ToolLogo slug={tool.slug} name={tool.name} size="lg" />
          <div className="flex min-w-0 flex-1 flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{hub.categories[tool.category]}</Badge>
              <Badge variant="outline">{tool.vendor}</Badge>
              {liveCount > 0 && (
                <Badge variant="outline" className="gap-1.5 text-success">
                  <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
                  {format(hub.tools.liveDeals, { count: liveCount })}
                </Badge>
              )}
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{tool.name}</h1>
            <p className="page-summary max-w-3xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              {summary ?? localize(tool.tagline, lang)}
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:shrink-0">
            <Button asChild className="w-full sm:w-auto">
              <a href={goPath(tool.slug)} target="_blank" rel={tool.affiliate ? "sponsored noopener" : "noopener"}>
                {format(hub.common.visit, { name: tool.name })}
                <ArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
            {tool.slug === "claude" && (
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <a href={localePath(lang)}>
                  <Clock data-icon="inline-start" />
                  {hub.claudeWatch.badge}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
