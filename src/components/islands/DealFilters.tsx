import { useEffect, useState } from "react";
import { SearchX } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia } from "@/components/ui/empty";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {
  /** CSS selector of the container holding [data-deal-card] elements. */
  root: string;
  allLabel: string;
  emptyLabel: string;
  options: { value: string; label: string; count: number }[];
  total: number;
}

/** Filters server-rendered deal cards by kind without re-rendering them. */
export default function DealFilters({ root, allLabel, emptyLabel, options, total }: Props) {
  const [kind, setKind] = useState("all");
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    const container = document.querySelector(root);
    if (!container) return;
    let visible = 0;
    container.querySelectorAll<HTMLElement>("[data-deal-item]").forEach((item) => {
      const card = item.querySelector<HTMLElement>("[data-deal-card]");
      const match = kind === "all" || card?.dataset.kind === kind;
      item.hidden = !match;
      if (match && !item.hasAttribute("data-ended")) visible += 1;
    });
    container.querySelectorAll<HTMLElement>("[data-deal-section]").forEach((section) => {
      section.hidden = !section.querySelector("[data-deal-item]:not([hidden])");
    });
    setEmpty(visible === 0);
  }, [kind, root]);

  return (
    <div className="flex flex-col gap-6">
      <Tabs value={kind} onValueChange={setKind}>
        <ScrollArea className="w-full whitespace-nowrap">
          <TabsList className="w-max">
            <TabsTrigger value="all">
              {allLabel}
              <Badge variant="secondary" className="ml-1 font-mono">
                {total}
              </Badge>
            </TabsTrigger>
            {options.map((option) => (
              <TabsTrigger key={option.value} value={option.value}>
                {option.label}
                <Badge variant="secondary" className="ml-1 font-mono">
                  {option.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Tabs>
      {empty && (
        <Empty className="border">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <SearchX />
            </EmptyMedia>
            <EmptyDescription>{emptyLabel}</EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
    </div>
  );
}
