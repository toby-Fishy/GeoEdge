"use client";

import { useState, useEffect } from "react";
import { BookmarkIcon } from "./Icons";

export default function Watchlist({ query }: { query: string }) {
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {
    try {
      const watchlist = JSON.parse(localStorage.getItem("geoedge_watchlist") || "[]");
      setIsWatched(watchlist.includes(query));
    } catch (e) {
      console.error(e);
    }
  }, [query]);

  const toggleWatch = () => {
    try {
      const watchlist = JSON.parse(localStorage.getItem("geoedge_watchlist") || "[]");
      let newWatchlist;
      if (isWatched) {
        newWatchlist = watchlist.filter((q: string) => q !== query);
      } else {
        newWatchlist = [...watchlist, query];
      }
      localStorage.setItem("geoedge_watchlist", JSON.stringify(newWatchlist));
      setIsWatched(!isWatched);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <button
      onClick={toggleWatch}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
        isWatched 
          ? "bg-accent-blue/20 text-accent-blue border border-accent-blue/50" 
          : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
      }`}
    >
      <BookmarkIcon className={`w-4 h-4 ${isWatched ? "fill-accent-blue" : ""}`} />
      {isWatched ? "Watching" : "Add to Watchlist"}
    </button>
  );
}
