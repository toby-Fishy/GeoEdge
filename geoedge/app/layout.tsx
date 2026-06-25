import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GeoEdge - Geopolitical Intelligence Search",
  description: "Search for geopolitical insights, country analysis, and political news in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <nav className="border-b border-slate-200 bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold text-blue-600">
                GeoEdge
              </a>
              <p className="text-sm text-slate-600">Geopolitical Intelligence</p>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
