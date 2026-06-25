import { GlobeIcon } from "./Icons";

export default function CountryProfile({ profile, loading }: { profile: any | null; loading: boolean }) {
  if (loading) {
    return (
      <section className="glass-panel rounded-2xl p-6">
        <div className="flex gap-4 items-center mb-6 animate-pulse">
          <div className="w-16 h-12 bg-slate-800 rounded shadow-md" />
          <div className="space-y-2 w-full">
            <div className="h-6 bg-slate-800 rounded w-1/2" />
            <div className="h-4 bg-slate-800 rounded w-1/3" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 animate-pulse">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="space-y-1">
              <div className="h-3 bg-slate-800 rounded w-1/2" />
              <div className="h-4 bg-slate-800 rounded w-3/4" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!profile) return null;

  const formatNumber = (num: number) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B";
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    return num.toLocaleString();
  };

  return (
    <section className="glass-panel rounded-2xl p-6 relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-800/50">
      <div className="flex gap-4 items-center mb-6">
        <div className="w-16 h-12 relative rounded overflow-hidden shadow-md border border-slate-700 shrink-0">
          {profile.flag ? (
            <img src={profile.flag} alt={`Flag of ${profile.name}`} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-slate-800 flex items-center justify-center">
              <GlobeIcon className="w-6 h-6 text-slate-500" />
            </div>
          )}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">{profile.name}</h2>
          <p className="text-slate-400 text-sm flex items-center gap-1">
            <GlobeIcon className="w-3 h-3" />
            {profile.region} {profile.capital && `• ${profile.capital}`}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-4 gap-x-2">
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Population</p>
          <p className="text-slate-200 font-medium">{profile.population ? formatNumber(profile.population) : "Unknown"}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">GDP</p>
          <p className="text-slate-200 font-medium">{profile.gdp || "Unknown"}</p>
        </div>
        <div className="col-span-2">
          <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Government Type</p>
          <p className="text-slate-200 font-medium">{profile.governmentType || "Unknown"}</p>
        </div>
      </div>
    </section>
  );
}
