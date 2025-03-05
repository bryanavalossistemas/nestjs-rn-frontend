import DashboardHeader from "@/components/dashboard/dashboard-header";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader
        breadcrumb={{
          page: {
            label: "Home",
          },
        }}
      />
      <div className="flex flex-1 p-4">Dashboard</div>
    </>
  );
}
