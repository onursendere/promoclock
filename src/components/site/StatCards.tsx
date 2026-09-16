import { CalendarClock, Globe, Layers, Tag } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface Stat {
  label: string;
  value: string;
  footnote: string;
  icon: "tag" | "layers" | "calendar" | "globe";
}

const icons: Record<Stat["icon"], LucideIcon> = { tag: Tag, layers: Layers, calendar: CalendarClock, globe: Globe };

export function StatCards({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = icons[stat.icon];
        return (
          <Card key={stat.label} className="bg-linear-to-t from-primary/5 to-card shadow-xs">
            <CardHeader>
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-2xl font-semibold tracking-tight tabular-nums">{stat.value}</CardTitle>
              <CardAction>
                <span className="flex size-8 items-center justify-center rounded-md border bg-background text-muted-foreground">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
              </CardAction>
            </CardHeader>
            <CardFooter className="border-t-0 bg-transparent pt-0 text-xs text-muted-foreground">
              <span className="line-clamp-1">{stat.footnote}</span>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
