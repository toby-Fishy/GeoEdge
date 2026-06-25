interface RiskLevel {
  category: string;
  level: "low" | "moderate" | "high" | "critical";
  description: string;
}

const getRiskColor = (level: "low" | "moderate" | "high" | "critical") => {
  switch (level) {
    case "low":
      return "bg-green-100 text-green-800 border-green-300";
    case "moderate":
      return "bg-yellow-100 text-yellow-800 border-yellow-300";
    case "high":
      return "bg-orange-100 text-orange-800 border-orange-300";
    case "critical":
      return "bg-red-100 text-red-800 border-red-300";
  }
};

const getRiskIcon = (level: "low" | "moderate" | "high" | "critical") => {
  switch (level) {
    case "low":
      return "✓";
    case "moderate":
      return "⚠";
    case "high":
      return "🔴";
    case "critical":
      return "🚨";
  }
};

export default function RiskIndicator({ risks }: { risks: RiskLevel[] }) {
  return (
    <div className="grid gap-3">
      {risks.map((risk, idx) => (
        <div
          key={idx}
          className={`rounded-lg border-2 p-4 ${getRiskColor(risk.level)}`}
        >
          <div className="flex items-start gap-3">
            <span className="text-xl">{getRiskIcon(risk.level)}</span>
            <div className="flex-1">
              <h4 className="font-semibold capitalize">{risk.category}</h4>
              <p className="text-sm opacity-90">{risk.description}</p>
            </div>
            <span className="ml-2 whitespace-nowrap rounded-full px-3 py-1 text-xs font-bold uppercase opacity-80">
              {risk.level}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
