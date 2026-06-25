"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import RiskSummary from "@/components/RiskSummary";
import IntelligenceFeed from "@/components/IntelligenceFeed";
import RiskIndicators from "@/components/RiskIndicators";
import WhatToWatch from "@/components/WhatToWatch";
import CountryProfile from "@/components/CountryProfile";
import Watchlist from "@/components/Watchlist";
import Link from "next/link";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<string | null>(null);
  const [watchPoints, setWatchPoints] = useState<string[] | null>(null);

  useEffect(() => {
    if (!query) return;

    let mounted = true;
    setLoading(true);
    setSummary(null);
    setWatchPoints(null);
    setData(null);

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const json = await res.json();
        
        if (mounted) {
          setData(json);
          setLoading(false);
          
          // Now trigger AI generation based on context
          if (json.articles && json.articles.length > 0) {
            fetchAI(json);
          }
        }
      } catch (err) {
        console.error("Search error:", err);
        if (mounted) setLoading(false);
      }
    };

    const fetchAI = async (contextData: any) => {
      try {
        // Fetch Summary
        fetch("/api/ai/summary", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query, context: contextData.articles })
        }).then(res => {
          if (!res.ok) throw new Error("Summary API failed");
          return res.json();
        }).then(data => {
          if (mounted) setSummary(data.summary || "Summary generation failed due to API limits.");
        }).catch(() => {
          if (mounted) setSummary("Summary generation failed due to API limits.");
        });

        // Fetch Watch Points
        fetch("/api/ai/watch", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query, context: contextData.articles })
        }).then(res => {
          if (!res.ok) throw new Error("Watch API failed");
          return res.json();
        }).then(data => {
          if (mounted) setWatchPoints(data.points || []);
        }).catch(() => {
          if (mounted) setWatchPoints([]);
        });
      } catch (e) {
        console.error("AI error:", e);
        if (mounted) {
          setSummary("Summary generation failed due to API limits.");
          setWatchPoints([]);
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [query]);

  if (!query) {
    return <div className="p-8 text-center text-white">No query provided.</div>;
  }

  return (
    <div className="min-h-screen bg-navy text-slate-300">
      <header className="sticky top-0 z-50 bg-navy/80 backdrop-blur-md border-b border-slate-800/50 p-4">
        <div className="max-w-6xl mx-auto flex items-center gap-6">
          <Link href="/" className="font-bold text-xl text-white tracking-tight hidden md:block">
            GeoEdge
          </Link>
          <div className="flex-1">
            <SearchBar defaultValue={query} />
          </div>
          <Watchlist query={query} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 md:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <RiskSummary summary={summary} loading={loading || (!summary && data?.articles?.length > 0)} />
            {data?.countryProfile && (
              <div className="md:hidden">
                <CountryProfile profile={data.countryProfile} loading={loading} />
              </div>
            )}
            <IntelligenceFeed articles={data?.articles || []} loading={loading} />
          </div>
          
          <div className="col-span-1 space-y-6">
            {data?.countryProfile && (
              <div className="hidden md:block">
                <CountryProfile profile={data.countryProfile} loading={loading} />
              </div>
            )}
            <RiskIndicators scores={data?.riskScores} loading={loading} />
            <WhatToWatch points={watchPoints} loading={loading || (!watchPoints && data?.articles?.length > 0)} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy text-slate-300 p-8 text-center">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}

