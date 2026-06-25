import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GeoEdge - Institutional-grade geopolitical intelligence",
  description: "A geopolitical risk search engine. Get AI-analysed intelligence, live feeds, and risk indicators for any country or geopolitical theme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-navy text-foreground">
        {children}
      </body>
    </html>
  );
}
