import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function generateRiskSummary(query: string, contextText: string): Promise<string> {
  if (!process.env.GEMINI_API_KEY) return 'Risk summary not available (missing API key).';
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
    const prompt = `Based on the following context, provide a 3-4 sentence analytical geopolitical risk briefing for "${query}".\n\nContext:\n${contextText}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error in generateRiskSummary:', error);
    return 'The AI analytical engine is currently processing high demand. Please retry this query shortly.';
  }
}

export async function generateWatchPoints(query: string, contextText: string): Promise<string[]> {
  if (!process.env.GEMINI_API_KEY) return [];
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
    const prompt = `Based on the following context, provide exactly 3 bullet points (just the text, no numbering or bullets) of key geopolitical watchpoints for "${query}". Return each on a new line.\n\nContext:\n${contextText}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text.split('\n').filter(line => line.trim().length > 0).map(line => line.replace(/^[\s\-\*\d\.]+/, '').trim()).slice(0, 3);
  } catch (error) {
    console.error('Error in generateWatchPoints:', error);
    return [];
  }
}

export async function generateEventSummaries(headlines: string[]): Promise<string[]> {
  if (!process.env.GEMINI_API_KEY || !headlines || !headlines.length) return headlines.map(() => '');
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
    const prompt = `For each of the following headlines, write exactly one sentence summarizing its geopolitical significance. Return the summaries separated by newlines, in the exact same order.\n\nHeadlines:\n${headlines.join('\n')}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const summaries = text.split('\n').filter(line => line.trim().length > 0).map(line => line.replace(/^[\s\-\*\d\.]+/, '').trim());
    
    // Ensure we return an array of the same length as headlines
    return headlines.map((_, i) => summaries[i] || '');
  } catch (error) {
    console.error('Error in generateEventSummaries:', error);
    return headlines.map(() => '');
  }
}

export async function inferGovernmentType(countryName: string): Promise<string> {
  if (!process.env.GEMINI_API_KEY) return 'Unknown';
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
    const prompt = `What is the current government type of ${countryName}? Reply with a short phrase only, e.g., "Federal Republic", "Constitutional Monarchy". Do not include any other text.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text().trim();
  } catch (error) {
    console.error('Error in inferGovernmentType:', error);
    return 'Unknown';
  }
}
