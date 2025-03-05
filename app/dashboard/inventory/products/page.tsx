import DashboardHeader from "@/components/dashboard/dashboard-header";

export default function ProductsPage() {
  return (
    <>
      <DashboardHeader
        breadcrumb={{
          page: {
            label: "Productos",
          },
        }}
      />
      <div className="flex flex-1">hola mundo</div>
    </>
  );
}
