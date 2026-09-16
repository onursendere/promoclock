import { Check, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemSeparator, ItemTitle } from "@/components/ui/item";
import type { UiDictionary } from "@/lib/i18n/dictionaries";
import { Fragment } from "react";

export function Eligibility({ dict }: { dict: UiDictionary }) {
  const e = dict.eligibility;
  return (
    <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
      <Card className="py-2 shadow-xs">
        <ItemGroup>
          {e.plans.map((plan, i) => (
            <Fragment key={plan.name}>
              {i > 0 && <ItemSeparator />}
              <Item>
                <ItemMedia variant="icon">
                  <span
                    className={
                      plan.status
                        ? "flex size-8 items-center justify-center rounded-md bg-success/10 text-success"
                        : "flex size-8 items-center justify-center rounded-md bg-muted text-muted-foreground"
                    }
                  >
                    {plan.status ? <Check /> : <Minus />}
                  </span>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{plan.name}</ItemTitle>
                  <ItemDescription className="line-clamp-none">{plan.description}</ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Badge variant={plan.status ? "secondary" : "outline"}>{plan.status ? e.eligible : e.notEligible}</Badge>
                </ItemActions>
              </Item>
            </Fragment>
          ))}
        </ItemGroup>
      </Card>
      <Card className="shadow-xs">
        <CardHeader>
          <CardTitle>{e.platforms.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {e.platforms.items.map((item) => (
            <Badge key={item} variant="outline" className="h-7 px-2.5 text-sm font-normal">
              {item}
            </Badge>
          ))}
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">{e.note}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
