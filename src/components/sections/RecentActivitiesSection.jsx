import { recentActivities } from "../../data/dashboardData";

export default function RecentActivitiesSection() {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className=" font-semibold text-lg leading-[133%] text-[color:var(--light-text-text-primary)] font-family">
          Recent Activities
        </h3>
        <div className="flex gap-2">
          <button className="font-medium text-sm leading-[157%] text-[color:var(--light-text-text-primary)] font-family border border-[color:var(--border-light)] px-4 py-2 rounded-xl border-solid">
            Message
          </button>
          <button className="font-medium text-sm leading-[157%] text-[color:var(--light-text-text-primary)] font-family border border-[color:var(--border-light)] px-4 py-2 rounded-xl border-solid">
            Email
          </button>
        </div>
      </div>
      <div className="space-y-3">
        {recentActivities.map((item) => (
          <div key={item.id} className="flex gap-3">
            <span className="text-xl">📨</span>
            <div>
              <p className="text-sm">
                <span className="font-medium">{item.user}</span> {item.action}
              </p>
              <p className="text-xs text-gray-500">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
