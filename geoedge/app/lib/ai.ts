import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GEOEDGE_API_KEY || ""
);

export async function generateAISummary(query: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `You are a geopolitical analyst. Provide a concise 3-4 paragraph summary about the current political situation, key issues, and important context for: "${query}". 
    
    Focus on:
    - Current political situation
    - Key political figures or parties
    - Major issues or conflicts
    - International relations
    
    Keep it factual, balanced, and suitable for news consumers.`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return text;
  } catch (error) {
    console.error("Error generating AI summary:", error);
    return "Unable to generate summary at this time.";
  }
}

export async function getMockCountryData(query: string) {
  // Mock data - in production, this would call real APIs
  const countryDatabase: Record<
    string,
    {
      name: string;
      region: string;
      population: string;
      government: string;
      capital: string;
      gdp?: string;
    }
  > = {
    ukraine: {
      name: "Ukraine",
      region: "Eastern Europe",
      population: "41.2 million",
      government: "Semi-presidential system",
      capital: "Kyiv",
      gdp: "$376.7 billion (2021)",
    },
    israel: {
      name: "Israel",
      region: "Middle East",
      population: "9.2 million",
      government: "Parliamentary democracy",
      capital: "Jerusalem",
      gdp: "$523 billion (2021)",
    },
    china: {
      name: "China",
      region: "East Asia",
      population: "1.4 billion",
      government: "One-party state",
      capital: "Beijing",
      gdp: "$17.96 trillion (2021)",
    },
    usa: {
      name: "United States",
      region: "North America",
      population: "331 million",
      government: "Federal presidential system",
      capital: "Washington, D.C.",
      gdp: "$22.94 trillion (2021)",
    },
  };

  const key = query.toLowerCase().split(" ")[0];
  return (
    countryDatabase[key] || {
      name: query,
      region: "Unknown",
      population: "N/A",
      government: "N/A",
      capital: "N/A",
    }
  );
}

export function getMockNews(query: string) {
  // Mock news data - in production, this would call real news APIs
  return [
    {
      id: "1",
      title: `Political developments in ${query}`,
      source: "International News Agency",
      date: new Date().toLocaleDateString(),
      summary:
        "Latest developments and political situation affecting the region.",
      category: "politics" as const,
    },
    {
      id: "2",
      title: `Economic impact on ${query}`,
      source: "Financial Times",
      date: new Date(Date.now() - 86400000).toLocaleDateString(),
      summary:
        "Economic indicators and financial market reactions to recent political events.",
      category: "economy" as const,
    },
    {
      id: "3",
      title: `International response to ${query} situation`,
      source: "Reuters",
      date: new Date(Date.now() - 172800000).toLocaleDateString(),
      summary:
        "Global leaders and international organizations respond to recent developments.",
      category: "diplomacy" as const,
    },
  ];
}

export function getMockRisks(query: string) {
  return [
    {
      category: "Political Stability",
      level: "moderate" as const,
      description: "Moderate political tensions and ongoing negotiations",
    },
    {
      category: "Economic Health",
      level: "moderate" as const,
      description: "Stable economic fundamentals with some market volatility",
    },
    {
      category: "International Relations",
      level: "high" as const,
      description: "Elevated diplomatic tensions with neighboring regions",
    },
    {
      category: "Human Rights",
      level: "low" as const,
      description: "Generally stable human rights situation",
    },
  ];
}
