import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment, type ReactNode } from "react";

export function PageHeader({
  crumbs,
  title,
  description,
  children,
}: {
  crumbs: { label: string; href?: string }[];
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="border-b bg-muted/30">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 sm:py-14">
        <Breadcrumb>
          <BreadcrumbList>
            {crumbs.map((crumb, i) => (
              <Fragment key={crumb.label}>
                {i > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {crumb.href ? (
                    <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex max-w-3xl flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h1>
          {description && <p className="page-summary text-lg text-pretty text-muted-foreground">{description}</p>}
        </div>
        {children}
      </div>
    </div>
  );
}
