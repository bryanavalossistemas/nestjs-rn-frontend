import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Fragment } from "react";
import { Separator } from "@/components/ui/separator";

interface Breadcrumb {
  breadcrumbs?: {
    label: string;
    href: string;
  }[];
  page: {
    label: string;
  };
}

export default function DashboardHeader({
  breadcrumb,
}: {
  breadcrumb: Breadcrumb;
}) {
  return (
    <header className="flex gap-x-2 mx-4 h-16 shrink-0 items-center transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumb.breadcrumbs &&
            breadcrumb.breadcrumbs.map((breadcrumb) => (
              <Fragment key={breadcrumb.href}>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink asChild>
                    <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
              </Fragment>
            ))}
          <BreadcrumbItem>
            <BreadcrumbPage>{breadcrumb.page.label}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
