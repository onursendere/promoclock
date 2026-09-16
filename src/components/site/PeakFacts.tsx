import { Check, ExternalLink, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { Dictionary as UiDictionary } from "@/lib/i18n/dictionaries";
import { PEAK_AFFECTED_PLANS } from "@/data/claude";

/** Answer-first summary of Claude's peak hours: extractable by search and AI engines. */
export function PeakFacts({ dict, source }: { dict: UiDictionary; source: { label: string; url: string } }) {
  const { home } = dict.hub;
  return (
    <Card className="shadow-xs">
      <CardHeader>
        <p className="peak-answer text-base leading-relaxed text-pretty">{home.peakAnswer}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <dl className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {home.peakFacts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-0.5 bg-card px-4 py-3">
              <dt className="text-xs text-muted-foreground">{fact.label}</dt>
              <dd className="font-medium">{fact.value}</dd>
            </div>
          ))}
          <div className="flex flex-col gap-1.5 bg-card px-4 py-3">
            <dt className="text-xs text-muted-foreground">{home.affectedPlans}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {PEAK_AFFECTED_PLANS.map((plan) => (
                <Badge key={plan.name} variant={plan.affected ? "secondary" : "outline"} className="gap-1">
                  {plan.affected ? <Check className="text-success" /> : <Minus className="text-muted-foreground" />}
                  {plan.name}
                </Badge>
              ))}
            </dd>
          </div>
        </dl>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        <a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-foreground hover:underline">
          {dict.hub.common.sources}: {source.label}
          <ExternalLink className="size-3" aria-hidden="true" />
        </a>
      </CardFooter>
    </Card>
  );
}
