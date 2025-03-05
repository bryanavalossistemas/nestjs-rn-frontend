import DashboardHeader from "@/components/dashboard/dashboard-header";
import CreateCategoryForm from "@/components/dashboard/inventory/categories/create-category-form";

export default function CategoryCreatePage() {
  return (
    <>
      <DashboardHeader
        breadcrumb={{
          breadcrumbs: [
            {
              label: "Categorías",
              href: "/dashboard/inventory/categories",
            },
          ],
          page: {
            label: "Crear Categoría",
          },
        }}
      />
      <div className="mx-auto w-4/5">
        <CreateCategoryForm />
      </div>
    </>
  );
}
