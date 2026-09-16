import { CalendarClock, Globe, Layers, Tag } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface Stat {
  label: string;
  value: string;
  icon: "tag" | "layers" | "calendar" | "globe";
  href?: string;
}

const icons: Record<Stat["icon"], LucideIcon> = { tag: Tag, layers: Layers, calendar: CalendarClock, globe: Globe };

export function StatCards({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = icons[stat.icon];
        const card = (
          <Card className="h-full py-3 shadow-xs transition-colors [--card-spacing:--spacing(3.5)] hover:bg-muted/40">
            <CardHeader>
              <CardDescription className="truncate">{stat.label}</CardDescription>
              <CardTitle className="text-2xl font-semibold tracking-tight tabular-nums">{stat.value}</CardTitle>
              <CardAction>
                <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
              </CardAction>
            </CardHeader>
          </Card>
        );
        return stat.href ? (
          <a key={stat.label} href={stat.href} className="block">
            {card}
          </a>
        ) : (
          <div key={stat.label}>{card}</div>
        );
      })}
    </div>
  );
}
