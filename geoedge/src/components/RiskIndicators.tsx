import { AlertTriangleIcon } from "./Icons";

interface IndicatorProps {
  label: string;
  score: number;
}

function IndicatorBar({ label, score }: IndicatorProps) {
  // Score 1-10
  const getColor = (s: number) => {
    if (s <= 3) return "bg-emerald-500";
    if (s <= 6) return "bg-accent-amber";
    return "bg-rose-500";
  };

  const color = getColor(score);
  const percentage = (score / 10) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end">
        <span className="text-sm font-medium text-slate-300">{label}</span>
        <span className={`text-lg font-bold ${color.replace('bg-', 'text-')}`}>
          {score.toFixed(1)}
        </span>
      </div>
      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function RiskIndicators({ 
  scores, 
  loading 
}: { 
  scores: any | null; 
  loading: boolean 
}) {
  return (
    <section className="glass-panel rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-6 text-accent-amber font-semibold uppercase tracking-wider text-sm">
        <AlertTriangleIcon className="w-5 h-5" />
        <h2>Risk Indicators</h2>
      </div>

      {loading ? (
        <div className="space-y-6 animate-pulse">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between">
                <div className="w-32 h-4 bg-slate-800 rounded" />
                <div className="w-8 h-4 bg-slate-800 rounded" />
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full" />
            </div>
          ))}
        </div>
      ) : scores ? (
        <div className="space-y-6">
          <IndicatorBar label="Political Stability Risk" score={scores.politicalStability || 1.0} />
          <IndicatorBar label="Economic Disruption Risk" score={scores.economicDisruption || 1.0} />
          <IndicatorBar label="Conflict Escalation Risk" score={scores.conflictEscalation || 1.0} />
          <IndicatorBar label="Regulatory/Sanctions Risk" score={scores.regulatorySanctions || 1.0} />
        </div>
      ) : (
        <p className="text-slate-500 italic">Scores unavailable.</p>
      )}
    </section>
  );
}
