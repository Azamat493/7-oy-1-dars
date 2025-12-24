// src/components/ui/DonutChart.jsx
export default function DonutChart({ data }) {
  const total = Object.values(data).reduce((a, b) => a + b, 0);
  const colors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6"];
  const labels = Object.keys(data);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 36 36" className="w-full h-full">
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="2"
          />
          {labels.map((label, i) => {
            const percent = (data[label] / total) * 100;
            const strokeDasharray = (percent / 100) * 94; // 2πr ≈ 94
            const offset = labels
              .slice(0, i)
              .reduce((sum, l) => sum + (data[l] / total) * 94, 0);
            return (
              <circle
                key={label}
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke={colors[i]}
                strokeWidth="2"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={94 - offset}
                transform="rotate(-90 18 18)"
                strokeLinecap="round"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
          {total}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {labels.map((label, i) => (
          <div key={label} className="flex items-center text-xs">
            <span
              className="w-3 h-3 rounded-full mr-1"
              style={{ backgroundColor: colors[i] }}
            ></span>
            {label}: {data[label]}
          </div>
        ))}
      </div>
    </div>
  );
}