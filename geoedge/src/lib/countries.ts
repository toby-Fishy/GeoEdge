// Country profile data - embedded to avoid dependency on deprecated REST Countries API
// Covers all major geopolitical hotspots and commonly searched countries

interface CountryData {
  name: string;
  flag: string;
  population: number;
  capital: string;
  region: string;
  cca2: string;
  governmentType: string;
}

const COUNTRY_DATABASE: Record<string, CountryData> = {
  'usa': { name: 'United States', flag: 'https://flagcdn.com/w320/us.png', population: 334914895, capital: 'Washington, D.C.', region: 'Americas', cca2: 'US', governmentType: 'Federal Presidential Constitutional Republic' },
  'us': { name: 'United States', flag: 'https://flagcdn.com/w320/us.png', population: 334914895, capital: 'Washington, D.C.', region: 'Americas', cca2: 'US', governmentType: 'Federal Presidential Constitutional Republic' },
  'united states': { name: 'United States', flag: 'https://flagcdn.com/w320/us.png', population: 334914895, capital: 'Washington, D.C.', region: 'Americas', cca2: 'US', governmentType: 'Federal Presidential Constitutional Republic' },
  'america': { name: 'United States', flag: 'https://flagcdn.com/w320/us.png', population: 334914895, capital: 'Washington, D.C.', region: 'Americas', cca2: 'US', governmentType: 'Federal Presidential Constitutional Republic' },
  'uk': { name: 'United Kingdom', flag: 'https://flagcdn.com/w320/gb.png', population: 67886011, capital: 'London', region: 'Europe', cca2: 'GB', governmentType: 'Parliamentary Constitutional Monarchy' },
  'united kingdom': { name: 'United Kingdom', flag: 'https://flagcdn.com/w320/gb.png', population: 67886011, capital: 'London', region: 'Europe', cca2: 'GB', governmentType: 'Parliamentary Constitutional Monarchy' },
  'britain': { name: 'United Kingdom', flag: 'https://flagcdn.com/w320/gb.png', population: 67886011, capital: 'London', region: 'Europe', cca2: 'GB', governmentType: 'Parliamentary Constitutional Monarchy' },
  'england': { name: 'United Kingdom', flag: 'https://flagcdn.com/w320/gb.png', population: 67886011, capital: 'London', region: 'Europe', cca2: 'GB', governmentType: 'Parliamentary Constitutional Monarchy' },
  'china': { name: 'China', flag: 'https://flagcdn.com/w320/cn.png', population: 1425671352, capital: 'Beijing', region: 'Asia', cca2: 'CN', governmentType: 'Unitary One-Party Socialist Republic' },
  'russia': { name: 'Russia', flag: 'https://flagcdn.com/w320/ru.png', population: 144104080, capital: 'Moscow', region: 'Europe', cca2: 'RU', governmentType: 'Federal Semi-Presidential Republic' },
  'india': { name: 'India', flag: 'https://flagcdn.com/w320/in.png', population: 1428627663, capital: 'New Delhi', region: 'Asia', cca2: 'IN', governmentType: 'Federal Parliamentary Republic' },
  'taiwan': { name: 'Taiwan', flag: 'https://flagcdn.com/w320/tw.png', population: 23816775, capital: 'Taipei', region: 'Asia', cca2: 'TW', governmentType: 'Unitary Semi-Presidential Republic' },
  'iran': { name: 'Iran', flag: 'https://flagcdn.com/w320/ir.png', population: 87923432, capital: 'Tehran', region: 'Asia', cca2: 'IR', governmentType: 'Unitary Islamic Theocratic Republic' },
  'israel': { name: 'Israel', flag: 'https://flagcdn.com/w320/il.png', population: 9038309, capital: 'Jerusalem', region: 'Asia', cca2: 'IL', governmentType: 'Unitary Parliamentary Republic' },
  'palestine': { name: 'Palestine', flag: 'https://flagcdn.com/w320/ps.png', population: 5259068, capital: 'Ramallah', region: 'Asia', cca2: 'PS', governmentType: 'Semi-Presidential Republic' },
  'ukraine': { name: 'Ukraine', flag: 'https://flagcdn.com/w320/ua.png', population: 44134693, capital: 'Kyiv', region: 'Europe', cca2: 'UA', governmentType: 'Unitary Semi-Presidential Republic' },
  'germany': { name: 'Germany', flag: 'https://flagcdn.com/w320/de.png', population: 83240525, capital: 'Berlin', region: 'Europe', cca2: 'DE', governmentType: 'Federal Parliamentary Republic' },
  'france': { name: 'France', flag: 'https://flagcdn.com/w320/fr.png', population: 67390000, capital: 'Paris', region: 'Europe', cca2: 'FR', governmentType: 'Unitary Semi-Presidential Republic' },
  'japan': { name: 'Japan', flag: 'https://flagcdn.com/w320/jp.png', population: 125681593, capital: 'Tokyo', region: 'Asia', cca2: 'JP', governmentType: 'Parliamentary Constitutional Monarchy' },
  'south korea': { name: 'South Korea', flag: 'https://flagcdn.com/w320/kr.png', population: 51780579, capital: 'Seoul', region: 'Asia', cca2: 'KR', governmentType: 'Unitary Presidential Constitutional Republic' },
  'north korea': { name: 'North Korea', flag: 'https://flagcdn.com/w320/kp.png', population: 25887041, capital: 'Pyongyang', region: 'Asia', cca2: 'KP', governmentType: 'Unitary One-Party Socialist Republic' },
  'turkey': { name: 'Turkey', flag: 'https://flagcdn.com/w320/tr.png', population: 84339067, capital: 'Ankara', region: 'Asia', cca2: 'TR', governmentType: 'Unitary Presidential Constitutional Republic' },
  'saudi arabia': { name: 'Saudi Arabia', flag: 'https://flagcdn.com/w320/sa.png', population: 36408820, capital: 'Riyadh', region: 'Asia', cca2: 'SA', governmentType: 'Unitary Absolute Monarchy' },
  'saudi': { name: 'Saudi Arabia', flag: 'https://flagcdn.com/w320/sa.png', population: 36408820, capital: 'Riyadh', region: 'Asia', cca2: 'SA', governmentType: 'Unitary Absolute Monarchy' },
  'uae': { name: 'United Arab Emirates', flag: 'https://flagcdn.com/w320/ae.png', population: 9991089, capital: 'Abu Dhabi', region: 'Asia', cca2: 'AE', governmentType: 'Federal Constitutional Monarchy' },
  'brazil': { name: 'Brazil', flag: 'https://flagcdn.com/w320/br.png', population: 215353593, capital: 'Brasília', region: 'Americas', cca2: 'BR', governmentType: 'Federal Presidential Constitutional Republic' },
  'mexico': { name: 'Mexico', flag: 'https://flagcdn.com/w320/mx.png', population: 128932753, capital: 'Mexico City', region: 'Americas', cca2: 'MX', governmentType: 'Federal Presidential Constitutional Republic' },
  'canada': { name: 'Canada', flag: 'https://flagcdn.com/w320/ca.png', population: 38005238, capital: 'Ottawa', region: 'Americas', cca2: 'CA', governmentType: 'Federal Parliamentary Constitutional Monarchy' },
  'australia': { name: 'Australia', flag: 'https://flagcdn.com/w320/au.png', population: 25788215, capital: 'Canberra', region: 'Oceania', cca2: 'AU', governmentType: 'Federal Parliamentary Constitutional Monarchy' },
  'pakistan': { name: 'Pakistan', flag: 'https://flagcdn.com/w320/pk.png', population: 220892331, capital: 'Islamabad', region: 'Asia', cca2: 'PK', governmentType: 'Federal Parliamentary Republic' },
  'afghanistan': { name: 'Afghanistan', flag: 'https://flagcdn.com/w320/af.png', population: 40099462, capital: 'Kabul', region: 'Asia', cca2: 'AF', governmentType: 'Unitary Theocratic Emirate' },
  'iraq': { name: 'Iraq', flag: 'https://flagcdn.com/w320/iq.png', population: 41179351, capital: 'Baghdad', region: 'Asia', cca2: 'IQ', governmentType: 'Federal Parliamentary Republic' },
  'syria': { name: 'Syria', flag: 'https://flagcdn.com/w320/sy.png', population: 21324367, capital: 'Damascus', region: 'Asia', cca2: 'SY', governmentType: 'Unitary Semi-Presidential Republic' },
  'egypt': { name: 'Egypt', flag: 'https://flagcdn.com/w320/eg.png', population: 104258327, capital: 'Cairo', region: 'Africa', cca2: 'EG', governmentType: 'Unitary Semi-Presidential Republic' },
  'nigeria': { name: 'Nigeria', flag: 'https://flagcdn.com/w320/ng.png', population: 218541212, capital: 'Abuja', region: 'Africa', cca2: 'NG', governmentType: 'Federal Presidential Republic' },
  'south africa': { name: 'South Africa', flag: 'https://flagcdn.com/w320/za.png', population: 59308690, capital: 'Pretoria', region: 'Africa', cca2: 'ZA', governmentType: 'Unitary Parliamentary Republic' },
  'ethiopia': { name: 'Ethiopia', flag: 'https://flagcdn.com/w320/et.png', population: 120283026, capital: 'Addis Ababa', region: 'Africa', cca2: 'ET', governmentType: 'Federal Parliamentary Republic' },
  'kenya': { name: 'Kenya', flag: 'https://flagcdn.com/w320/ke.png', population: 53771296, capital: 'Nairobi', region: 'Africa', cca2: 'KE', governmentType: 'Unitary Presidential Republic' },
  'sudan': { name: 'Sudan', flag: 'https://flagcdn.com/w320/sd.png', population: 44909353, capital: 'Khartoum', region: 'Africa', cca2: 'SD', governmentType: 'Federal Provisional Government' },
  'libya': { name: 'Libya', flag: 'https://flagcdn.com/w320/ly.png', population: 6871287, capital: 'Tripoli', region: 'Africa', cca2: 'LY', governmentType: 'Provisional Unity Government' },
  'somalia': { name: 'Somalia', flag: 'https://flagcdn.com/w320/so.png', population: 17066000, capital: 'Mogadishu', region: 'Africa', cca2: 'SO', governmentType: 'Federal Parliamentary Republic' },
  'yemen': { name: 'Yemen', flag: 'https://flagcdn.com/w320/ye.png', population: 30490640, capital: "Sana'a", region: 'Asia', cca2: 'YE', governmentType: 'Provisional Government' },
  'myanmar': { name: 'Myanmar', flag: 'https://flagcdn.com/w320/mm.png', population: 54409800, capital: 'Naypyidaw', region: 'Asia', cca2: 'MM', governmentType: 'Military Junta' },
  'venezuela': { name: 'Venezuela', flag: 'https://flagcdn.com/w320/ve.png', population: 28435943, capital: 'Caracas', region: 'Americas', cca2: 'VE', governmentType: 'Federal Presidential Republic' },
  'cuba': { name: 'Cuba', flag: 'https://flagcdn.com/w320/cu.png', population: 11326616, capital: 'Havana', region: 'Americas', cca2: 'CU', governmentType: 'Unitary One-Party Socialist Republic' },
  'colombia': { name: 'Colombia', flag: 'https://flagcdn.com/w320/co.png', population: 51265844, capital: 'Bogotá', region: 'Americas', cca2: 'CO', governmentType: 'Unitary Presidential Constitutional Republic' },
  'argentina': { name: 'Argentina', flag: 'https://flagcdn.com/w320/ar.png', population: 45195774, capital: 'Buenos Aires', region: 'Americas', cca2: 'AR', governmentType: 'Federal Presidential Constitutional Republic' },
  'poland': { name: 'Poland', flag: 'https://flagcdn.com/w320/pl.png', population: 37950802, capital: 'Warsaw', region: 'Europe', cca2: 'PL', governmentType: 'Unitary Parliamentary Republic' },
  'italy': { name: 'Italy', flag: 'https://flagcdn.com/w320/it.png', population: 59554023, capital: 'Rome', region: 'Europe', cca2: 'IT', governmentType: 'Unitary Parliamentary Republic' },
  'spain': { name: 'Spain', flag: 'https://flagcdn.com/w320/es.png', population: 47415750, capital: 'Madrid', region: 'Europe', cca2: 'ES', governmentType: 'Parliamentary Constitutional Monarchy' },
  'indonesia': { name: 'Indonesia', flag: 'https://flagcdn.com/w320/id.png', population: 273523621, capital: 'Jakarta', region: 'Asia', cca2: 'ID', governmentType: 'Unitary Presidential Constitutional Republic' },
  'philippines': { name: 'Philippines', flag: 'https://flagcdn.com/w320/ph.png', population: 109581078, capital: 'Manila', region: 'Asia', cca2: 'PH', governmentType: 'Unitary Presidential Constitutional Republic' },
  'vietnam': { name: 'Vietnam', flag: 'https://flagcdn.com/w320/vn.png', population: 97338579, capital: 'Hanoi', region: 'Asia', cca2: 'VN', governmentType: 'Unitary One-Party Socialist Republic' },
  'thailand': { name: 'Thailand', flag: 'https://flagcdn.com/w320/th.png', population: 69799978, capital: 'Bangkok', region: 'Asia', cca2: 'TH', governmentType: 'Parliamentary Constitutional Monarchy' },
  'singapore': { name: 'Singapore', flag: 'https://flagcdn.com/w320/sg.png', population: 5685807, capital: 'Singapore', region: 'Asia', cca2: 'SG', governmentType: 'Unitary Parliamentary Republic' },
  'malaysia': { name: 'Malaysia', flag: 'https://flagcdn.com/w320/my.png', population: 32365999, capital: 'Kuala Lumpur', region: 'Asia', cca2: 'MY', governmentType: 'Federal Parliamentary Constitutional Monarchy' },
  'greece': { name: 'Greece', flag: 'https://flagcdn.com/w320/gr.png', population: 10715549, capital: 'Athens', region: 'Europe', cca2: 'GR', governmentType: 'Unitary Parliamentary Republic' },
  'sweden': { name: 'Sweden', flag: 'https://flagcdn.com/w320/se.png', population: 10099265, capital: 'Stockholm', region: 'Europe', cca2: 'SE', governmentType: 'Parliamentary Constitutional Monarchy' },
  'finland': { name: 'Finland', flag: 'https://flagcdn.com/w320/fi.png', population: 5530719, capital: 'Helsinki', region: 'Europe', cca2: 'FI', governmentType: 'Unitary Parliamentary Republic' },
  'norway': { name: 'Norway', flag: 'https://flagcdn.com/w320/no.png', population: 5379475, capital: 'Oslo', region: 'Europe', cca2: 'NO', governmentType: 'Parliamentary Constitutional Monarchy' },
  'netherlands': { name: 'Netherlands', flag: 'https://flagcdn.com/w320/nl.png', population: 17441139, capital: 'Amsterdam', region: 'Europe', cca2: 'NL', governmentType: 'Parliamentary Constitutional Monarchy' },
  'belgium': { name: 'Belgium', flag: 'https://flagcdn.com/w320/be.png', population: 11589623, capital: 'Brussels', region: 'Europe', cca2: 'BE', governmentType: 'Federal Parliamentary Constitutional Monarchy' },
  'switzerland': { name: 'Switzerland', flag: 'https://flagcdn.com/w320/ch.png', population: 8654622, capital: 'Bern', region: 'Europe', cca2: 'CH', governmentType: 'Federal Semi-Direct Democracy' },
  'austria': { name: 'Austria', flag: 'https://flagcdn.com/w320/at.png', population: 9006398, capital: 'Vienna', region: 'Europe', cca2: 'AT', governmentType: 'Federal Parliamentary Republic' },
  'portugal': { name: 'Portugal', flag: 'https://flagcdn.com/w320/pt.png', population: 10305564, capital: 'Lisbon', region: 'Europe', cca2: 'PT', governmentType: 'Unitary Semi-Presidential Republic' },
  'romania': { name: 'Romania', flag: 'https://flagcdn.com/w320/ro.png', population: 19286123, capital: 'Bucharest', region: 'Europe', cca2: 'RO', governmentType: 'Unitary Semi-Presidential Republic' },
  'hungary': { name: 'Hungary', flag: 'https://flagcdn.com/w320/hu.png', population: 9749763, capital: 'Budapest', region: 'Europe', cca2: 'HU', governmentType: 'Unitary Parliamentary Republic' },
  'czech republic': { name: 'Czech Republic', flag: 'https://flagcdn.com/w320/cz.png', population: 10708981, capital: 'Prague', region: 'Europe', cca2: 'CZ', governmentType: 'Unitary Parliamentary Republic' },
  'czechia': { name: 'Czech Republic', flag: 'https://flagcdn.com/w320/cz.png', population: 10708981, capital: 'Prague', region: 'Europe', cca2: 'CZ', governmentType: 'Unitary Parliamentary Republic' },
  'denmark': { name: 'Denmark', flag: 'https://flagcdn.com/w320/dk.png', population: 5831404, capital: 'Copenhagen', region: 'Europe', cca2: 'DK', governmentType: 'Parliamentary Constitutional Monarchy' },
  'ireland': { name: 'Ireland', flag: 'https://flagcdn.com/w320/ie.png', population: 4994724, capital: 'Dublin', region: 'Europe', cca2: 'IE', governmentType: 'Unitary Parliamentary Republic' },
  'new zealand': { name: 'New Zealand', flag: 'https://flagcdn.com/w320/nz.png', population: 5084300, capital: 'Wellington', region: 'Oceania', cca2: 'NZ', governmentType: 'Parliamentary Constitutional Monarchy' },
  'chile': { name: 'Chile', flag: 'https://flagcdn.com/w320/cl.png', population: 19116201, capital: 'Santiago', region: 'Americas', cca2: 'CL', governmentType: 'Unitary Presidential Constitutional Republic' },
  'peru': { name: 'Peru', flag: 'https://flagcdn.com/w320/pe.png', population: 32971854, capital: 'Lima', region: 'Americas', cca2: 'PE', governmentType: 'Unitary Presidential Constitutional Republic' },
  'lebanon': { name: 'Lebanon', flag: 'https://flagcdn.com/w320/lb.png', population: 6825445, capital: 'Beirut', region: 'Asia', cca2: 'LB', governmentType: 'Unitary Parliamentary Republic' },
  'jordan': { name: 'Jordan', flag: 'https://flagcdn.com/w320/jo.png', population: 10203134, capital: 'Amman', region: 'Asia', cca2: 'JO', governmentType: 'Unitary Parliamentary Constitutional Monarchy' },
  'qatar': { name: 'Qatar', flag: 'https://flagcdn.com/w320/qa.png', population: 2881053, capital: 'Doha', region: 'Asia', cca2: 'QA', governmentType: 'Unitary Semi-Constitutional Monarchy' },
  'kuwait': { name: 'Kuwait', flag: 'https://flagcdn.com/w320/kw.png', population: 4328550, capital: 'Kuwait City', region: 'Asia', cca2: 'KW', governmentType: 'Unitary Constitutional Monarchy' },
  'bahrain': { name: 'Bahrain', flag: 'https://flagcdn.com/w320/bh.png', population: 1501635, capital: 'Manama', region: 'Asia', cca2: 'BH', governmentType: 'Unitary Constitutional Monarchy' },
  'oman': { name: 'Oman', flag: 'https://flagcdn.com/w320/om.png', population: 5106626, capital: 'Muscat', region: 'Asia', cca2: 'OM', governmentType: 'Unitary Absolute Monarchy' },
  'morocco': { name: 'Morocco', flag: 'https://flagcdn.com/w320/ma.png', population: 36910560, capital: 'Rabat', region: 'Africa', cca2: 'MA', governmentType: 'Unitary Parliamentary Constitutional Monarchy' },
  'algeria': { name: 'Algeria', flag: 'https://flagcdn.com/w320/dz.png', population: 44616624, capital: 'Algiers', region: 'Africa', cca2: 'DZ', governmentType: 'Unitary Semi-Presidential Republic' },
  'tunisia': { name: 'Tunisia', flag: 'https://flagcdn.com/w320/tn.png', population: 11818619, capital: 'Tunis', region: 'Africa', cca2: 'TN', governmentType: 'Unitary Presidential Republic' },
  'bangladesh': { name: 'Bangladesh', flag: 'https://flagcdn.com/w320/bd.png', population: 164689383, capital: 'Dhaka', region: 'Asia', cca2: 'BD', governmentType: 'Unitary Parliamentary Republic' },
  'sri lanka': { name: 'Sri Lanka', flag: 'https://flagcdn.com/w320/lk.png', population: 21919000, capital: 'Sri Jayawardenepura Kotte', region: 'Asia', cca2: 'LK', governmentType: 'Unitary Semi-Presidential Republic' },
  'nepal': { name: 'Nepal', flag: 'https://flagcdn.com/w320/np.png', population: 29136808, capital: 'Kathmandu', region: 'Asia', cca2: 'NP', governmentType: 'Federal Parliamentary Republic' },
};

export function fetchCountryProfile(query: string): CountryData | null {
  const lower = query.toLowerCase().trim();
  return COUNTRY_DATABASE[lower] || null;
}

export async function fetchGDP(countryCode: string): Promise<string | null> {
  try {
    const res = await fetch(`https://api.worldbank.org/v2/country/${countryCode}/indicator/NY.GDP.MKTP.CD?format=json&per_page=5`);
    if (!res.ok) return null;
    const data = await res.json();
    if (data && data[1] && data[1].length > 0) {
      const mostRecent = data[1].find((entry: any) => entry.value !== null);
      if (mostRecent && mostRecent.value) {
        const val = mostRecent.value;
        if (val >= 1e12) return `$${(val / 1e12).toFixed(2)} Trillion`;
        if (val >= 1e9) return `$${(val / 1e9).toFixed(2)} Billion`;
        if (val >= 1e6) return `$${(val / 1e6).toFixed(2)} Million`;
        return `$${val.toLocaleString()}`;
      }
    }
    return null;
  } catch (error) {
    console.error('Error fetching GDP:', error);
    return null;
  }
}
