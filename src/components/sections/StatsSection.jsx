import StatCard from "../ui/StatCard";
import { statsData } from "../../data/dashboardData";

export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {statsData.map((stat) => (
        <StatCard key={stat.id} {...stat} />
      ))}
    </div>
  );
}
