"use client";

import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 px-4">
      <div className="w-full max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-5xl font-bold text-slate-900">GeoEdge</h1>
          <p className="text-xl text-slate-600">
            Real-time geopolitical intelligence at your fingertips
          </p>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-lg">
          <SearchBar />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="mb-2 text-2xl">🌍</div>
            <h3 className="font-semibold text-slate-900">Global Coverage</h3>
            <p className="text-sm text-slate-600">
              Search any country or political region worldwide
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="mb-2 text-2xl">🤖</div>
            <h3 className="font-semibold text-slate-900">AI Summaries</h3>
            <p className="text-sm text-slate-600">
              Get instant AI-powered political analysis
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="mb-2 text-2xl">📰</div>
            <h3 className="font-semibold text-slate-900">Live News Feed</h3>
            <p className="text-sm text-slate-600">
              Stay updated with real-time political news
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
