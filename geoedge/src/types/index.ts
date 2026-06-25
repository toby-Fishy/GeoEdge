export interface Article {
  title: string;
  source: string;
  date: string;
  url: string;
  country?: string;
  snippet?: string;
  summary?: string;
}

export interface CountryProfile {
  name: string;
  flag: string;
  population: number;
  capital: string;
  region: string;
  gdp?: string;
  governmentType?: string;
}

export interface RiskScores {
  politicalStability: number;
  economicDisruption: number;
  conflictEscalation: number;
  regulatorySanctions: number;
}

export interface SearchResponse {
  articles: Article[];
  countryProfile: CountryProfile | null;
  riskScores: RiskScores;
}
