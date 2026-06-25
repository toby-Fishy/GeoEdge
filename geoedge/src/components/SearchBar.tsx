"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "./Icons";

export default function SearchBar({ defaultValue = "" }: { defaultValue?: string }) {
  const [query, setQuery] = useState(defaultValue);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Save to recent searches
      try {
        const recent = JSON.parse(localStorage.getItem("recent_searches") || "[]");
        const newRecent = [query, ...recent.filter((q: string) => q !== query)].slice(0, 10);
        localStorage.setItem("recent_searches", JSON.stringify(newRecent));
      } catch (err) {
        console.error("Error saving recent search", err);
      }
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto relative group">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-accent-blue transition-colors">
        <SearchIcon className="w-5 h-5" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search countries, leaders, or geopolitical themes..."
        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl py-4 pl-12 pr-24 text-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 transition-all shadow-lg backdrop-blur-md"
        autoComplete="off"
        spellCheck="false"
      />
      <div className="absolute inset-y-0 right-2 flex items-center">
        <button
          type="submit"
          className="bg-accent-blue hover:bg-accent-blue/90 text-white px-5 py-2 rounded-xl text-sm font-medium transition-colors"
        >
          Analyze
        </button>
      </div>
    </form>
  );
}
