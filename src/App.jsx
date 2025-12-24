// src/App.jsx
import MainLayout from "./components/layout/MainLayout";
import StatsSection from "./components/sections/StatsSection";
import OrderStatusSection from "./components/sections/OrderStatusSection";
import RecentActivitiesSection from "./components/sections/RecentActivitiesSection";
import TablesSection from "./components/sections/TablesSection";
import ChartsSection from "./components/sections/ChartsSection";

export default function App() {
  return (
    <MainLayout>
      <StatsSection />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="space-y-6">
          <OrderStatusSection />
          {/* Recent Orders o'rniga qisqartirilgan jadval */}
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <h3 className="font-semibold mb-3">Recent Orders</h3>
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span>275936</span>
                <span className="text-gray-500">iPhone 15...</span>
                <span>$400.00</span>
              </div>
              <div className="flex justify-between">
                <span>415368</span>
                <span className="text-gray-500">White Denim...</span>
                <span>$151.00</span>
              </div>
            </div>
            <button className="text-indigo-600 text-xs mt-3">View all →</button>
          </div>
        </div>

        <div className="space-y-6">
          <RecentActivitiesSection />
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <h3 className="font-semibold mb-3">Recent Transactions</h3>
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span>#123-456</span>
                <span className="text-gray-500">iPhone 15...</span>
                <span>$40.00</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <h3 className="font-semibold mb-3">Top Selling Products</h3>
              <div className="text-sm space-y-2">
                {[
                  { name: "iPhone 15 Pro Max", revenue: "$6,240" },
                  { name: "White Denim T-Shirt", revenue: "$2,085" },
                ].map((p, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-gray-600">{p.name}</span>
                    <span>{p.revenue}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <h3 className="font-semibold mb-3">Persons</h3>
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Luisa Winters</span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <ChartsSection />
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <h3 className="font-semibold mb-3">Top Selling Products</h3>
          <div className="text-sm space-y-2">
            {[
              { name: "iPhone 15 Pro Max", sells: 156, revenue: "$6,240" },
              { name: "White Denim T-Shirt", sells: 139, revenue: "$2,085" },
            ].map((p, i) => (
              <div key={i} className="flex justify-between">
                <span>{p.name}</span>
                <span>{p.revenue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}