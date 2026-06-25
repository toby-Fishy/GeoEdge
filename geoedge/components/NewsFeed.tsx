export interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  summary: string;
  category: "politics" | "conflict" | "economy" | "diplomacy";
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "politics":
      return "bg-blue-100 text-blue-800";
    case "conflict":
      return "bg-red-100 text-red-800";
    case "economy":
      return "bg-green-100 text-green-800";
    case "diplomacy":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-slate-100 text-slate-800";
  }
};

export default function NewsFeed({ news }: { news: NewsItem[] }) {
  return (
    <div className="space-y-4">
      {news.length === 0 ? (
        <div className="rounded-lg bg-slate-100 p-8 text-center">
          <p className="text-slate-600">No news available at this time.</p>
        </div>
      ) : (
        news.map((item) => (
          <div
            key={item.id}
            className="border-l-4 border-blue-500 bg-white p-4 shadow"
          >
            <div className="mb-2 flex items-center justify-between gap-3">
              <div className="flex gap-2">
                <span
                  className={`rounded-full px-2 py-1 text-xs font-semibold capitalize ${getCategoryColor(
                    item.category
                  )}`}
                >
                  {item.category}
                </span>
              </div>
              <span className="text-xs text-slate-500">{item.date}</span>
            </div>
            <h4 className="mb-2 font-semibold text-slate-900">{item.title}</h4>
            <p className="mb-2 text-sm text-slate-700">{item.summary}</p>
            <p className="text-xs text-slate-500">Source: {item.source}</p>
          </div>
        ))
      )}
    </div>
  );
}
