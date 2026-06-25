"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TrendingUpIcon } from "./Icons";

export default function RecentSearches() {
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("recent_searches");
      if (stored) {
        setRecent(JSON.parse(stored).slice(0, 3));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  if (recent.length === 0) return null;

  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="flex items-center gap-2 text-sm text-slate-400 font-medium uppercase tracking-wider">
        <TrendingUpIcon className="w-4 h-4" />
        <span>Recent Searches</span>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {recent.map((q) => (
          <Link
            key={q}
            href={`/search?q=${encodeURIComponent(q)}`}
            className="px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 hover:border-slate-500 hover:bg-slate-700/50 text-slate-300 text-sm transition-colors"
          >
            {q}
          </Link>
        ))}
      </div>
    </div>
  );
}
