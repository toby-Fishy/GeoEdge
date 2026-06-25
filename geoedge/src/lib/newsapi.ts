export async function fetchNews(query: string): Promise<any[]> {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      console.warn('NEWS_API_KEY not set.');
      return [];
    }
    const res = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=relevancy&pageSize=15&language=en&apiKey=${apiKey}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.articles || [];
  } catch (error) {
    console.error('Error fetching NewsAPI:', error);
    return [];
  }
}
