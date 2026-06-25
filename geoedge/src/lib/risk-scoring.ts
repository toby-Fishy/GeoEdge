import { RiskScores, Article } from '../types';

export function calculateRiskScores(
  articles: Article[] = [],
  query: string = ''
): RiskScores {
  // Base scores (baseline risk is 3.5/10 for neutral topics)
  let politicalStability = 3.5;
  let economicDisruption = 3.5;
  let conflictEscalation = 3.5;
  let regulatorySanctions = 3.5;

  try {
    const lowerQuery = query.toLowerCase();

    // 1. Analyze query terms for direct thematic weight
    if (lowerQuery.includes('war') || lowerQuery.includes('conflict') || lowerQuery.includes('military') || lowerQuery.includes('tension') || lowerQuery.includes('clash')) {
      conflictEscalation += 3.5;
      politicalStability += 1.5;
    }
    if (lowerQuery.includes('sanction') || lowerQuery.includes('tariff') || lowerQuery.includes('ban') || lowerQuery.includes('embargo') || lowerQuery.includes('blockade')) {
      regulatorySanctions += 4.5;
      economicDisruption += 3.0;
    }
    if (lowerQuery.includes('inflation') || lowerQuery.includes('recession') || lowerQuery.includes('trade war') || lowerQuery.includes('tariff')) {
      economicDisruption += 4.0;
    }
    if (lowerQuery.includes('election') || lowerQuery.includes('protest') || lowerQuery.includes('riot') || lowerQuery.includes('coup') || lowerQuery.includes('unrest')) {
      politicalStability += 3.5;
    }

    // 2. Analyze the actual articles (headlines + snippets)
    if (articles && articles.length > 0) {
      let politicalHits = 0;
      let economicHits = 0;
      let conflictHits = 0;
      let regulatoryHits = 0;
      
      let negativeSentimentCount = 0;
      let positiveSentimentCount = 0;

      // Sentiment keyword lists
      const negativeWords = ['kill', 'die', 'death', 'dead', 'warn', 'warning', 'threat', 'threaten', 'crisis', 'worsen', 'drop', 'plunge', 'fail', 'failure', 'arrest', 'accuse', 'protest', 'riot', 'clash', 'dispute', 'tensions', 'escalate', 'concern', 'anxiety', 'fears', 'sanctions', 'bomb', 'attack', 'strike'];
      const positiveWords = ['agree', 'agreement', 'peace', 'talks', 'diplomacy', 'growth', 'rise', 'boost', 'recovery', 'cooperation', 'alliance', 'support', 'benefit', 'stabilize', 'resolve', 'success', 'positive'];

      articles.forEach(article => {
        const textToAnalyze = `${article.title || ''} ${article.snippet || ''}`.toLowerCase();

        // Topic matching
        if (/protest|riot|unrest|coup|election|regime|opposition|government|parliament|corruption|strike|activist/.test(textToAnalyze)) {
          politicalHits++;
        }
        if (/inflation|gdp|recession|market|trade|tariff|currency|debt|energy|oil|gas|supply|economic|finance/.test(textToAnalyze)) {
          economicHits++;
        }
        if (/war|military|attack|troops|forces|missile|border|invasion|bomb|combat|violence|ceasefire|defense|nato|arms/.test(textToAnalyze)) {
          conflictHits++;
        }
        if (/sanction|ban|regulate|regulation|court|lawsuit|legal|violation|treaty|accord|restrict|investigation/.test(textToAnalyze)) {
          regulatoryHits++;
        }

        // Simple sentiment count
        negativeWords.forEach(word => {
          if (textToAnalyze.includes(word)) negativeSentimentCount++;
        });
        positiveWords.forEach(word => {
          if (textToAnalyze.includes(word)) positiveSentimentCount++;
        });
      });

      // Factor keyword hits relative to total articles (up to 4.5 points added dynamically)
      const totalArticles = articles.length;
      politicalStability += (politicalHits / totalArticles) * 4.5;
      economicDisruption += (economicHits / totalArticles) * 4.5;
      conflictEscalation += (conflictHits / totalArticles) * 4.5;
      regulatorySanctions += (regulatoryHits / totalArticles) * 4.5;

      // Factor in sentiment
      const sentimentScore = positiveSentimentCount - negativeSentimentCount;
      if (sentimentScore < 0) {
        // Negative tone increases general risk
        const sentimentPenalty = Math.min(2.5, Math.abs(sentimentScore) / totalArticles);
        politicalStability += sentimentPenalty;
        conflictEscalation += sentimentPenalty * 1.2;
        economicDisruption += sentimentPenalty * 0.8;
      } else if (sentimentScore > 0) {
        // Positive tone eases risk
        const sentimentBonus = Math.min(1.5, sentimentScore / totalArticles);
        politicalStability -= sentimentBonus;
        conflictEscalation -= sentimentBonus;
        economicDisruption -= sentimentBonus;
      }

      // Check temporal concentration (recent spikes)
      const now = new Date();
      let recentArticlesCount = 0;
      articles.forEach(article => {
        if (article.date) {
          const pubDate = new Date(article.date);
          const hoursDiff = (now.getTime() - pubDate.getTime()) / (1000 * 60 * 60);
          if (hoursDiff <= 48) {
            recentArticlesCount++;
          }
        }
      });
      if (recentArticlesCount / totalArticles > 0.5) {
        // More than 50% articles are within 48h
        politicalStability += 0.8;
        conflictEscalation += 1.0;
        economicDisruption += 0.5;
      }
    }
  } catch (error) {
    console.error('Error calculating risk scores:', error);
  }

  // Ensure bounds and keep 1 decimal
  const clamp = (val: number) => {
    const bounded = Math.max(1, Math.min(10, val));
    return parseFloat(bounded.toFixed(1));
  };

  return {
    politicalStability: clamp(politicalStability),
    economicDisruption: clamp(economicDisruption),
    conflictEscalation: clamp(conflictEscalation),
    regulatorySanctions: clamp(regulatorySanctions)
  };
}
