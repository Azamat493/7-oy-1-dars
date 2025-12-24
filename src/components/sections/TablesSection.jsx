// src/components/sections/TablesSection.jsx
import { recentOrders, topSelling, persons } from "../../data/dashboardData";

function Table({ title, headers, rows, renderRow }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100">
      <h3 className="font-semibold mb-3">{title}</h3>
      <table className="w-full text-xs">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            {headers.map((h, i) => (
              <th key={i} className="pb-2">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-50">
              {renderRow(row)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TablesSection() {
  return (
    <div className="space-y-6">
      <Table
        title="Recent Orders"
        headers={["ORDER ID", "PRODUCTS", "CHANNEL", "CUSTOMER", "TOTAL"]}
        rows={recentOrders}
        renderRow={(row) => (
          <>
            <td className="py-2">{row.id}</td>
            <td>{row.product}</td>
            <td>
              <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">{row.channel}</span>
            </td>
            <td>{row.customer}</td>
            <td>{row.total}</td>
          </>
        )}
      />

      <Table
        title="Top Selling Products"
        headers={["PRODUCT NAME", "SELLS", "CATEGORY", "REVENUE"]}
        rows={topSelling}
        renderRow={(row) => (
          <>
            <td className="py-2">{row.name}</td>
            <td>{row.sells}</td>
            <td>{row.category}</td>
            <td>{row.revenue}</td>
          </>
        )}
      />

      <Table
        title="Persons"
        headers={["NAME", "EMAIL", "ROLE"]}
        rows={persons}
        renderRow={(row) => (
          <>
            <td className="py-2">{row.name}</td>
            <td>{row.email}</td>
            <td>
              <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">{row.role}</span>
            </td>
          </>
        )}
      />
    </div>
  );
}