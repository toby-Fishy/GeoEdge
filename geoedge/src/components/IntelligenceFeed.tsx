import { ExternalLinkIcon } from "./Icons";

export default function IntelligenceFeed({ articles, loading }: { articles: any[]; loading: boolean }) {
  if (loading) {
    return (
      <section className="col-span-1 md:col-span-2 space-y-4">
        <h2 className="text-xl font-bold text-white mb-6">Live Intelligence Feed</h2>
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="glass-panel p-5 rounded-xl animate-pulse">
            <div className="h-4 bg-slate-800 rounded w-1/4 mb-3"></div>
            <div className="h-5 bg-slate-800 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-slate-800 rounded w-full"></div>
          </div>
        ))}
      </section>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <section className="col-span-1 md:col-span-2">
        <h2 className="text-xl font-bold text-white mb-6">Live Intelligence Feed</h2>
        <div className="glass-panel p-8 rounded-xl text-center text-slate-400">
          No recent intelligence found for this query.
        </div>
      </section>
    );
  }

  return (
    <section className="col-span-1 md:col-span-2">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        Live Intelligence Feed
      </h2>
      <div className="space-y-4">
        {articles.map((article, i) => (
          <a 
            key={i} 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block glass-panel p-5 rounded-xl hover:bg-slate-800/50 hover:border-slate-600 transition-all group"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
                <span className="text-accent-blue">{article.source || "News"}</span>
                {article.country && (
                  <>
                    <span>•</span>
                    <span>{article.country}</span>
                  </>
                )}
                <span>•</span>
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
              <ExternalLinkIcon className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-blue transition-colors line-clamp-2">
              {article.title}
            </h3>
            
            {article.summary && (
              <p className="text-sm text-slate-300 border-l-2 border-accent-amber pl-3 italic">
                {article.summary}
              </p>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
