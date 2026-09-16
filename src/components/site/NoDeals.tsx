import { ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia } from "@/components/ui/empty";

export function NoDeals({ message, href, label }: { message: string; href: string; label: string }) {
  return (
    <Empty className="border bg-card">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Tag />
        </EmptyMedia>
        <EmptyDescription>{message}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm" asChild>
          <a href={href}>
            {label}
            <ArrowRight data-icon="inline-end" />
          </a>
        </Button>
      </EmptyContent>
    </Empty>
  );
}
