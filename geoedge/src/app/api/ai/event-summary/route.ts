import { NextResponse } from 'next/server';
import { generateEventSummaries } from '@/lib/gemini';

export async function POST(request: Request) {
  try {
    const { headlines } = await request.json();
    
    if (!headlines || !Array.isArray(headlines)) {
      return NextResponse.json({ error: 'Headlines array is required' }, { status: 400 });
    }

    const summaries = await generateEventSummaries(headlines);
    return NextResponse.json({ summaries });
  } catch (error) {
    console.error('Error in AI event summary API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
