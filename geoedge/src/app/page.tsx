import SearchBar from "@/components/SearchBar";
import SuggestedSearches from "@/components/SuggestedSearches";
import RecentSearches from "@/components/RecentSearches";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-4xl mx-auto space-y-12 relative z-10 text-center mt-[-10vh]">
        <div className="space-y-6">
          <div className="inline-flex items-center justify-center p-3 bg-slate-900/50 border border-slate-800 rounded-2xl mb-4 shadow-xl">
            <span className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent-blue flex items-center justify-center">
                <span className="text-white text-sm">GE</span>
              </div>
              GeoEdge
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 tracking-tight">
            Institutional-grade<br />geopolitical intelligence. Free.
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Analyze any country, conflict, leader, or theme. Get real-time AI briefings, live intelligence feeds, and quantified risk indicators.
          </p>
        </div>

        <SearchBar />

        <div className="space-y-8 pt-8 border-t border-slate-800/50 max-w-2xl mx-auto">
          <RecentSearches />
          <SuggestedSearches />
        </div>
      </div>
    </main>
  );
}
