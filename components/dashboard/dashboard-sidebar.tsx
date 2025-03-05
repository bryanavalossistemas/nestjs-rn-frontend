"use client";

import * as React from "react";
import { Boxes, MonitorCog, Store } from "lucide-react";
import { NavMain } from "@/components/dashboard/nav-main";
import { NavUser } from "@/components/dashboard/nav-user";
import { TeamSwitcher } from "@/components/dashboard/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export default function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const data = {
    user: {
      name: "Alicia Loa y Pardo",
      email: "representacionesnataly@gmail.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "Tienda",
        logo: Store,
        plan: "Enterprise",
      },
      {
        name: "Sistema",
        logo: MonitorCog,
        plan: "Startup",
      },
    ],
    navMain: [
      {
        title: "Inventario",
        icon: Boxes,
        url: "/dashboard/inventory",
        isActive: pathname.includes("/dashboard/inventory"),
        items: [
          {
            title: "Categorías",
            url: "/dashboard/inventory/categories",
            isActive: pathname === "/dashboard/inventory/categories",
          },
          {
            title: "Productos",
            url: "/dashboard/inventory/products",
            isActive: pathname === "/dashboard/inventory/products",
          },
        ],
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
