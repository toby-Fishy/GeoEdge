# GeoEdge 🌐
> **Institutional-Grade Geopolitical Intelligence & Risk Indicators.**
> Analyze any country, conflict, leader, or theme in real-time with live intelligence feeds, custom risk indices, and AI analytical briefings.
---
## Key Features
- **🌐 Real-Time Intel Feed**: Live global articles aggregated from **NewsAPI** and the **GDELT Project** (Global Database of Events, Language, and Tone).
- **🛡️ Dynamic Risk Indexing**: Algorithmic scoring (1.0 to 10.0) mapping stability, economic disruption, conflict escalation, and regulatory/sanctions exposure based on news frequency, sentiment polarity, and recent media spikes.
- **🤖 LLM briefings (Gemini)**: Instant analytical summaries, threat alerts, and watchlist recommendations using the high-performance `gemini-2.5-flash-lite` model.
- **📊 World Bank Integration**: Automatic mapping of macroeconomic metadata (GDP, Population, Government type) for searched sovereign nations.
- **✨ Glassmorphic UI**: Tailored aesthetic layout utilising custom dark-mode gradients, interactive risk dials, and fully responsive layouts.
---
## Technical Stack
- **Framework**: [Next.js 14/15](https://nextjs.org/) (App Router & Serverless API Routes)
- **Styling**: TailwindCSS & Custom Vanilla CSS Tokens
- **AI Engine**: `@google/generative-ai` (utilizing `gemini-2.5-flash-lite`)
- **Data Integrations**: 
  - GDELT Project API
  - NewsAPI
  - World Bank Data API
---
## Local Setup
### 1. Clone the project and install dependencies
```bash
npm install
2. Configure Environment Variables
Create a file named .env.local in the root directory and configure the following variables:

env


GEMINI_API_KEY=your_gemini_api_key
NEWS_API_KEY=your_news_api_key
3. Run the Development Server
bash


npm run dev
Open http://localhost:3000 in your browser to view the application.
