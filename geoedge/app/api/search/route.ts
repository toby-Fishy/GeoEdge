import {
  generateAISummary,
  getMockCountryData,
  getMockNews,
  getMockRisks,
} from "@/app/lib/ai";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return Response.json(
      { error: "Search query is required" },
      { status: 400 }
    );
  }

  try {
    // Fetch all data in parallel
    const [summary, country, news, risks] = await Promise.all([
      generateAISummary(query),
      getMockCountryData(query),
      Promise.resolve(getMockNews(query)),
      Promise.resolve(getMockRisks(query)),
    ]);

    return Response.json({
      summary,
      country,
      news,
      risks,
    });
  } catch (error) {
    console.error("API error:", error);
    return Response.json(
      { error: "Failed to process search" },
      { status: 500 }
    );
  }
}
