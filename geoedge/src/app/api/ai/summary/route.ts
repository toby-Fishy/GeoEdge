import { NextResponse } from 'next/server';
import { generateRiskSummary } from '@/lib/gemini';

export async function POST(request: Request) {
  try {
    const { query, context } = await request.json();
    
    if (!query) {
      return NextResponse.json({ summary: 'No query provided for analysis.' });
    }

    // Convert context to string if it's an array of articles
    let contextText = '';
    if (Array.isArray(context)) {
      contextText = context.map((a: any) => `${a.title || ''} - ${a.source || ''} (${a.date || ''}): ${a.snippet || ''}`).join('\n');
    } else if (typeof context === 'string') {
      contextText = context;
    }

    const summary = await generateRiskSummary(query, contextText || 'No additional context available.');
    return NextResponse.json({ summary });
  } catch (error) {
    console.error('Error in AI summary API:', error);
    return NextResponse.json({ summary: 'The AI analytical engine is currently experiencing high demand. The intelligence feed and risk indicators are available below.' });
  }
}
