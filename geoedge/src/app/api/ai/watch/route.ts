import { NextResponse } from 'next/server';
import { generateWatchPoints } from '@/lib/gemini';

export async function POST(request: Request) {
  try {
    const { query, context } = await request.json();
    
    if (!query) {
      return NextResponse.json({ points: [] });
    }

    // Convert context to string if it's an array of articles
    let contextText = '';
    if (Array.isArray(context)) {
      contextText = context.map((a: any) => `${a.title || ''} - ${a.source || ''} (${a.date || ''}): ${a.snippet || ''}`).join('\n');
    } else if (typeof context === 'string') {
      contextText = context;
    }

    const watchPoints = await generateWatchPoints(query, contextText || 'No additional context available.');
    return NextResponse.json({ points: watchPoints });
  } catch (error) {
    console.error('Error in AI watch API:', error);
    return NextResponse.json({ points: [] });
  }
}
