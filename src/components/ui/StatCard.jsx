// src/components/ui/StatCard.jsx
export default function StatCard({ title, value, change, icon, color }) {
  const isPositive = change.startsWith("+");

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="flex gap-5 items-start">
               <div className={``}>
          <img
            src={icon}
            alt={title}
            className=" object-contain"
          />
        </div>
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>

       
      </div>

      <p
        className={`text-xs mt-2 ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        {change} from last month
      </p>
    </div>
  );
}
