"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import AISummary from "@/components/AISummary";
import CountryOverview from "@/components/CountryOverview";
import RiskIndicator from "@/components/RiskIndicator";
import NewsFeed from "@/components/NewsFeed";

interface SearchResult {
  summary: string;
  country: {
    name: string;
    region: string;
    population: string;
    government: string;
    capital: string;
    gdp?: string;
  };
  news: Array<{
    id: string;
    title: string;
    source: string;
    date: string;
    summary: string;
    category: "politics" | "conflict" | "economy" | "diplomacy";
  }>;
  risks: Array<{
    category: string;
    level: "low" | "moderate" | "high" | "critical";
    description: string;
  }>;
}

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResult | null>(null);
  const [loading, setLoading] = useState(!!query);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error("Failed to fetch results");

        const data = await response.json();
        setResults(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An error occurred while searching"
        );
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-8 max-w-2xl">
          <SearchBar />
        </div>

        {!query ? (
          <div className="rounded-lg bg-white p-8 text-center shadow">
            <p className="text-slate-600">Enter a search query to get started.</p>
          </div>
        ) : error ? (
          <div className="rounded-lg bg-red-50 p-6 text-red-800 shadow">
            <h3 className="mb-2 font-semibold">Error</h3>
            <p>{error}</p>
          </div>
        ) : loading ? (
          <div className="space-y-6">
            <div className="h-64 rounded-lg bg-slate-200 animate-pulse" />
            <div className="h-48 rounded-lg bg-slate-200 animate-pulse" />
            <div className="h-96 rounded-lg bg-slate-200 animate-pulse" />
          </div>
        ) : results ? (
          <div className="space-y-8">
            {/* AI Summary */}
            <AISummary summary={results.summary} loading={false} />

            {/* Country Overview */}
            <CountryOverview country={results.country} />

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Risk Indicators */}
              <div className="lg:col-span-1">
                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  Risk Assessment
                </h3>
                <RiskIndicator risks={results.risks} />
              </div>

              {/* News Feed */}
              <div className="lg:col-span-2">
                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  Political News Feed
                </h3>
                <NewsFeed news={results.news} />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}
