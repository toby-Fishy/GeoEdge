import Link from "next/link";
import { GlobeIcon } from "./Icons";

const SUGGESTIONS = [
  "Iran sanctions",
  "Taiwan strait",
  "Russian energy",
  "UK election risk",
  "Red Sea shipping"
];

export default function SuggestedSearches() {
  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="flex items-center gap-2 text-sm text-slate-400 font-medium uppercase tracking-wider">
        <GlobeIcon className="w-4 h-4" />
        <span>Suggested Themes</span>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {SUGGESTIONS.map((q) => (
          <Link
            key={q}
            href={`/search?q=${encodeURIComponent(q)}`}
            className="px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-accent-blue/50 hover:bg-accent-blue/10 text-slate-300 hover:text-white text-sm transition-all shadow-sm"
          >
            {q}
          </Link>
        ))}
      </div>
    </div>
  );
}
