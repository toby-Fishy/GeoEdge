function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function fetchArticles(query: string): Promise<any[]> {
  try {
    const gdeltQuery = `${query} sourcelang:english`;
    const res = await fetch(`https://api.gdeltproject.org/api/v2/doc/doc?query=${encodeURIComponent(gdeltQuery)}&mode=artlist&format=json&maxrecords=15&sort=datedesc`);
    if (!res.ok) return [];
    const text = await res.text();
    if (!text || text.includes('Please limit requests')) return [];
    const data = JSON.parse(text);
    return data.articles || [];
  } catch (error) {
    console.error('Error fetching GDELT articles:', error);
    return [];
  }
}

export async function fetchToneChart(query: string): Promise<any[]> {
  try {
    await delay(5500); // GDELT requires 5s between requests
    const res = await fetch(`https://api.gdeltproject.org/api/v2/doc/doc?query=${encodeURIComponent(query)}&mode=tonechart&format=json&timespan=4320`);
    if (!res.ok) return [];
    const text = await res.text();
    if (!text || text.includes('Please limit requests')) return [];
    const data = JSON.parse(text);
    return data.timeline || [];
  } catch (error) {
    console.error('Error fetching GDELT tone chart:', error);
    return [];
  }
}

export async function fetchTimeline(query: string): Promise<any[]> {
  try {
    await delay(5500); // GDELT requires 5s between requests
    const res = await fetch(`https://api.gdeltproject.org/api/v2/doc/doc?query=${encodeURIComponent(query)}&mode=timelinevol&format=json&timespan=4320`);
    if (!res.ok) return [];
    const text = await res.text();
    if (!text || text.includes('Please limit requests')) return [];
    const data = JSON.parse(text);
    return data.timeline || [];
  } catch (error) {
    console.error('Error fetching GDELT timeline:', error);
    return [];
  }
}
