export default function AISummary({
  summary,
  loading,
}: {
  summary: string;
  loading: boolean;
}) {
  return (
    <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-2xl">🤖</span>
        <h3 className="text-xl font-semibold text-slate-900">AI Summary</h3>
      </div>

      {loading ? (
        <div className="space-y-3">
          <div className="h-4 w-full rounded bg-blue-200 animate-pulse" />
          <div className="h-4 w-5/6 rounded bg-blue-200 animate-pulse" />
          <div className="h-4 w-4/5 rounded bg-blue-200 animate-pulse" />
          <div className="h-4 w-3/4 rounded bg-blue-200 animate-pulse" />
        </div>
      ) : summary ? (
        <p className="leading-relaxed text-slate-800">{summary}</p>
      ) : (
        <p className="text-slate-600">No summary available.</p>
      )}
    </div>
  );
}
