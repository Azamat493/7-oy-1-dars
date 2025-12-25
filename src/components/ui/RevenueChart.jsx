import React, { useEffect, useState } from "react";
import { Select, DatePicker } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { name: "Jan", value: 589.12 },
  { name: "Feb", value: 840.2 },
  { name: "Mar", value: 698.0 },
  { name: "Apr", value: 203.0 },
  { name: "May", value: 400.01 },
  { name: "Jun", value: 920.12 },
  { name: "Jul", value: 398.0 },
  { name: "Aug", value: 882.0 },
  { name: "Sep", value: 390.0 },
  { name: "Oct", value: 910.0 },
  { name: "Nov", value: 410.12 },
  { name: "Dec", value: 840.2 },
];

const tabs = ["Revenue", "Orders", "Customers"];

export default function RevenueCard() {
  const [activeTab, setActiveTab] = useState("Revenue");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const totalRevenue = revenueData
    .reduce((sum, item) => sum + item.value, 0)
    .toFixed(2);

  const handleMonthChange = (date, dateString) => {
    console.log("Selected month:", dateString);
  };

  return (
    <div className="w-full bg-white  py-8">
      <div className="max-w-[1440px] overflow-x-auto scrollbar-custom mx-auto px-4">
        <div className="rounded-xl  min-w-max bg-white border border-gray-200 p-6 shadow-sm">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex bg-white rounded-xl p-1 w-fit border border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm rounded-lg transition ${
                      activeTab === tab
                        ? "bg-[#F3F4F6] text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Select
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  style={{ width: 170 }}
                  className="!text-gray-900 !border-gray-200"
                  popupClassName="light-select-dropdown"
                  options={[
                    { value: "All Categories", label: "All Categories" },
                    { value: "Electronics", label: "Electronics" },
                    { value: "Clothing", label: "Clothing" },
                    { value: "Beauty", label: "Beauty" },
                  ]}
                />
                <DatePicker
                  picker="month"
                  onChange={handleMonthChange}
                  placeholder="Jun 2023"
                  style={{ width: 140 }}
                  className="!border-gray-200"
                  popupClassName="light-datepicker-dropdown"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h2 className="text-lg font-semibold text-gray-900">
                {activeTab}
              </h2>
              <p className="text-sm text-gray-500">
                Total Revenue:{" "}
                <span className="text-gray-900 font-semibold">
                  ${totalRevenue}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-6 h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <XAxis
                  dataKey="name"
                  stroke="#6B7280"
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  stroke="#6B7280"
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                  domain={[0, 1000]}
                  tickFormatter={(value) => `${value}.00`}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  formatter={(value) => [`$${value.toFixed(2)}`, "Revenue"]}
                  labelStyle={{ color: "#111827" }}
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                    color: "#111827",
                    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                  }}
                />
                <Bar
                  dataKey="value"
                  fill="#4F46E5"
                  radius={[6, 6, 0, 0]}
                  label={{
                    position: "top",
                    fill: "#111827",
                    fontSize: 12,
                    fontWeight: "bold",
                    formatter: (value) => `$${value.toFixed(2)}`,
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 text-center text-sm text-gray-500">• 2023</div>
        </div>
      </div>
    </div>
  );
}
