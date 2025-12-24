// src/components/sections/OrderStatusSection.jsx
import DonutChart from "../ui/DonutChart";
import { orderStatusData } from "../../data/dashboardData";

export default function OrderStatusSection() {
  // "All" ni olib tashladik — faqat statuslar
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Order Status</h3>
        <div className="flex gap-2">
          <select className="text-xs border rounded px-2 py-1 bg-white">
            <option>All Categories</option>
          </select>
          <input
            type="text"
            placeholder="2023"
            className="text-xs border rounded px-2 py-1 w-16"
          />
        </div>
      </div>
      <DonutChart data={orderStatusData} />
    </div>
  );
}