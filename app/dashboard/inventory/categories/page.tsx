import DashboardHeader from "@/components/dashboard/dashboard-header";
import Search from "@/components/ui/search";
import Table from "@/components/dashboard/inventory/categories/category-table";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import TableSkeleton from "@/components/ui/table-skeleton";

export default async function CategoriesPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <DashboardHeader
        breadcrumb={{
          page: {
            label: "Categorías",
          },
        }}
      />
      <div className="flex gap-x-2 mx-4">
        <Search placeholder="Buscar categoría..." />
        <Button asChild>
          <Link href="/dashboard/inventory/categories/create">
            <span>Crear Categoría</span>
            <PlusIcon strokeWidth={3} />
          </Link>
        </Button>
      </div>
      <div className="mx-4 mt-4">
        <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
          <Table query={query} currentPage={currentPage} />
        </Suspense>
      </div>
    </>
  );
}
