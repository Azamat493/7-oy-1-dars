// src/components/ui/BarChart.jsx
export default function BarChart({ data }) {
  const max = Math.max(...data.map(d => d.value));
  return (
    <div className="flex items-end h-40 gap-2 px-2">
      {data.map((item, i) => (
        <div key={i} className="flex flex-col items-center flex-1">
          <div
            className="w-full bg-indigo-600 rounded-t"
            style={{ height: `${(item.value / max) * 100}%` }}
          ></div>
          <span className="text-xs mt-1 text-gray-500">{item.month}</span>
        </div>
      ))}
    </div>
  );
}