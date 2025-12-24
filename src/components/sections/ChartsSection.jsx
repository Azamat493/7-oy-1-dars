// src/components/sections/ChartsSection.jsx
import BarChart from "../ui/BarChart";
import { revenueData } from "../../data/dashboardData";

export default function ChartsSection() {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button className="text-xs bg-gray-100 px-3 py-1 rounded">Revenue</button>
          <button className="text-xs border px-3 py-1 rounded">Orders</button>
          <button className="text-xs border px-3 py-1 rounded">Customers</button>
        </div>
        <div className="flex gap-2">
          <select className="text-xs border rounded px-2 py-1">
            <option>All Categories</option>
          </select>
          <input
            type="text"
            placeholder="Jun 2023"
            className="text-xs border rounded px-2 py-1 w-20"
          />
        </div>
      </div>
      <BarChart data={revenueData} />
    </div>
  );
}