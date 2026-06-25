import { TrendingUpIcon } from "./Icons";

export default function WhatToWatch({ points, loading }: { points: string[] | null; loading: boolean }) {
  return (
    <section className="glass-panel rounded-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-2xl pointer-events-none" />
      <div className="flex items-center gap-2 mb-4 text-accent-blue font-semibold uppercase tracking-wider text-sm">
        <TrendingUpIcon className="w-5 h-5" />
        <h2>What To Watch (30-90 Days)</h2>
      </div>

      {loading ? (
        <ul className="space-y-4 animate-pulse">
          {[1, 2, 3].map(i => (
            <li key={i} className="flex gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-slate-700 shrink-0" />
              <div className="space-y-2 w-full">
                <div className="h-4 bg-slate-800 rounded w-full" />
                <div className="h-4 bg-slate-800 rounded w-4/5" />
              </div>
            </li>
          ))}
        </ul>
      ) : points && points.length > 0 ? (
        <ul className="space-y-4">
          {points.map((point, i) => (
            <li key={i} className="flex gap-3 text-slate-300">
              <div className="w-2 h-2 mt-2 rounded-full bg-accent-blue shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              <p className="leading-relaxed">{point}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-500 italic">Watchlist points unavailable.</p>
      )}
    </section>
  );
}
