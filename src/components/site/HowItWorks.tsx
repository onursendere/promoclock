import { Clock, Eye, Radar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { UiDictionary } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";

const icons = [Radar, Clock, Eye];

export function HowItWorks({ dict, caseClass }: { dict: UiDictionary; caseClass: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {dict.howItWorks.steps.map((step, i) => {
        const Icon = icons[i] ?? Eye;
        return (
          <Card key={step.title} className="shadow-xs">
            <CardHeader className="gap-3">
              <span className="flex size-9 items-center justify-center rounded-md border bg-muted text-foreground">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <CardAction>
                <Badge variant="secondary" className="font-mono">
                  {String(i + 1).padStart(2, "0")}
                </Badge>
              </CardAction>
              <CardTitle className={cn("font-semibold", caseClass)}>{step.title}</CardTitle>
              <CardDescription className="leading-relaxed">{step.description}</CardDescription>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}
