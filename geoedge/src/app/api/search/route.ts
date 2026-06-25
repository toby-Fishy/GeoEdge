import { NextResponse } from 'next/server';
import { fetchArticles } from '@/lib/gdelt';
import { fetchNews } from '@/lib/newsapi';
import { fetchCountryProfile, fetchGDP } from '@/lib/countries';
import { inferGovernmentType } from '@/lib/gemini';
import { calculateRiskScores } from '@/lib/risk-scoring';
import { SearchResponse, Article, CountryProfile } from '@/types';

function editDistance(s1: string, s2: string) {
  const s1Lower = s1.toLowerCase();
  const s2Lower = s2.toLowerCase();
  const costs = [];
  for (let i = 0; i <= s1Lower.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2Lower.length; j++) {
      if (i === 0) costs[j] = j;
      else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1Lower.charAt(i - 1) !== s2Lower.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2Lower.length] = lastValue;
  }
  return costs[s2Lower.length];
}

function similarity(s1: string, s2: string) {
  const longer = s1.length > s2.length ? s1 : s2;
  const shorter = s1.length > s2.length ? s2 : s1;
  if (longer.length === 0) return 1.0;
  return (longer.length - editDistance(longer, shorter)) / parseFloat(longer.length.toString());
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter "q" is required' }, { status: 400 });
  }

  try {
    // 1. Fetch articles from GDELT and NewsAPI in parallel
    // Country profile lookup is synchronous (embedded data)
    const rawCountry = fetchCountryProfile(query);
    
    const fetchPromises: Promise<any>[] = [
      fetchArticles(query),
      fetchNews(query),
    ];
    
    // If it's a country, also fetch GDP in parallel
    if (rawCountry) {
      fetchPromises.push(fetchGDP(rawCountry.cca2));
    }
    
    const results = await Promise.all(fetchPromises);
    const gdeltArticlesData = results[0];
    const newsApiArticlesData = results[1];
    const gdpData = rawCountry ? results[2] : null;

    let combinedArticles: Article[] = [];

    // Process GDELT articles
    if (gdeltArticlesData && gdeltArticlesData.length > 0) {
      const gdeltMapped = gdeltArticlesData.map((item: any) => ({
        title: item.title || '',
        source: item.domain || item.source || 'GDELT',
        date: item.seendate ? String(item.seendate) : new Date().toISOString(),
        url: item.url || '',
      })).filter((item: any) => item.title && item.url);
      combinedArticles = [...combinedArticles, ...gdeltMapped];
    }

    // Process NewsAPI articles
    if (newsApiArticlesData && newsApiArticlesData.length > 0) {
      const newsApiMapped = newsApiArticlesData.map((item: any) => ({
        title: item.title || '',
        source: item.source?.name || 'NewsAPI',
        date: item.publishedAt || new Date().toISOString(),
        url: item.url || '',
        snippet: item.description || ''
      })).filter((item: any) => item.title && item.url);
      
      combinedArticles = [...combinedArticles, ...newsApiMapped];
    }

    // Deduplicate articles by headline similarity
    const uniqueArticles: Article[] = [];
    for (const article of combinedArticles) {
      let isDuplicate = false;
      for (const existing of uniqueArticles) {
        if (similarity(article.title, existing.title) > 0.7) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        uniqueArticles.push(article);
      }
    }

    // Keep up to 15 articles
    const finalArticles = uniqueArticles.slice(0, 15);

    // 2. Build country profile if available
    let countryProfileData: CountryProfile | null = null;
    if (rawCountry) {
      countryProfileData = {
        name: rawCountry.name,
        flag: rawCountry.flag,
        population: rawCountry.population,
        capital: rawCountry.capital,
        region: rawCountry.region,
        gdp: gdpData || undefined,
        governmentType: rawCountry.governmentType
      };
    }

    // 3. Calculate Risk Scores from article headlines
    const riskScores = calculateRiskScores(finalArticles, query);

    const response: SearchResponse = {
      articles: finalArticles,
      countryProfile: countryProfileData,
      riskScores
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in search API:', error);
    return NextResponse.json({ 
      articles: [],
      countryProfile: null,
      riskScores: { politicalStability: 5, economicDisruption: 5, conflictEscalation: 5, regulatorySanctions: 5 }
    });
  }
}
