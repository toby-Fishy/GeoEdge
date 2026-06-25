export interface CountryInfo {
  name: string;
  region: string;
  population: string;
  government: string;
  capital: string;
  gdp?: string;
}

export default function CountryOverview({
  country,
}: {
  country: CountryInfo;
}) {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold text-slate-900">{country.name}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-slate-600">Region</p>
          <p className="text-slate-900">{country.region}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-600">Capital</p>
          <p className="text-slate-900">{country.capital}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-600">Population</p>
          <p className="text-slate-900">{country.population}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-600">Government</p>
          <p className="text-slate-900">{country.government}</p>
        </div>
        {country.gdp && (
          <div className="md:col-span-2">
            <p className="text-sm font-semibold text-slate-600">GDP</p>
            <p className="text-slate-900">{country.gdp}</p>
          </div>
        )}
      </div>
    </div>
  );
}
