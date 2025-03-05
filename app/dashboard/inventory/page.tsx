import DashboardHeader from "@/components/dashboard/dashboard-header";

export default function InventoryPage() {
  return (
    <>
      <DashboardHeader
        breadcrumb={{
          page: {
            label: "Inventario",
          },
        }}
      />
      <div className="flex flex-1">Inventario</div>
    </>
  );
}
