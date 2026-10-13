import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";

export function NotFound({ title, body, cta, href }: { title: string; body: string; cta: string; href: string }) {
  return (
    <Empty className="min-h-[60dvh]">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Compass />
        </EmptyMedia>
        <EmptyTitle className="text-2xl font-semibold">
          <h1>404 · {title}</h1>
        </EmptyTitle>
        <EmptyDescription>{body}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button asChild>
          <a href={href}>
            <ArrowLeft data-icon="inline-start" />
            {cta}
          </a>
        </Button>
      </EmptyContent>
    </Empty>
  );
}
