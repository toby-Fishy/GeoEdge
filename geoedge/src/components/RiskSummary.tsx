import { EyeIcon } from "./Icons";

export default function RiskSummary({ summary, loading }: { summary: string | null; loading: boolean }) {
  return (
    <section className="glass-panel rounded-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-accent-blue" />
      <div className="flex items-center gap-2 mb-4 text-accent-blue font-semibold uppercase tracking-wider text-sm">
        <EyeIcon className="w-5 h-5" />
        <h2>Risk Summary</h2>
      </div>
      
      {loading ? (
        <div className="space-y-3 animate-pulse">
          <div className="h-4 bg-slate-800 rounded w-full"></div>
          <div className="h-4 bg-slate-800 rounded w-11/12"></div>
          <div className="h-4 bg-slate-800 rounded w-full"></div>
          <div className="h-4 bg-slate-800 rounded w-4/5"></div>
        </div>
      ) : summary ? (
        <p className="text-slate-300 text-lg leading-relaxed font-light">
          {summary}
        </p>
      ) : (
        <p className="text-slate-500 italic">No summary available.</p>
      )}
    </section>
  );
}
