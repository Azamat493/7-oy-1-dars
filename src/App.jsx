// src/App.jsx
import MainLayout from "./components/layout/MainLayout";
import StatsSection from "./components/sections/StatsSection";
import OrderStatusSection from "./components/sections/OrderStatusSection";
import RecentActivitiesSection from "./components/sections/RecentActivitiesSection";
import RecentOrders from "./components/ui/RecentOrders";
import RecentTransactions from "./components/ui/RecentTransactions";
import TopSellingProducts from "./components/ui/TopSellingProducts";
import RevenueChart from "./components/ui/RevenueChart";
import PersonsTable from "./components/ui/PersonsTable";

export default function App() {
  return (
    <MainLayout>
      <StatsSection />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="space-y-6">
          <OrderStatusSection />
        </div>
        <div className="space-y-6">
          <RecentActivitiesSection />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <RecentOrders />
        <RecentTransactions />
      </div>
      <div>
        <TopSellingProducts />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <RevenueChart/>
        <PersonsTable/>
      </div>
    </MainLayout>
  );
}
