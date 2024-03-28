import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://findupai.com"),
  title: "FindUP - Home",
  description:
    "Next-Gen AI for Alpha Finder, Move Faster Than The Market Itself",
  twitter: {
    card: "summary_large_image",
    site: "@_findupai",
    title: "FindUP - Home",
    description:
      "Next-Gen AI for Alpha Finder, Move Faster Than The Market Itself",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "FindUP",
      },
    ],
  },
  authors: [
    {
      name: "FindUP",
      url: "https://findupai.com",
    },
  ],
  keywords: [
    "FindUP",
    "Crypto",
    "AI",
    "Next-Gen",
    "Finder",
    "Market",
    "Trading",
    "Signals",
    "Insights",
    "Alpha",
    "Beta",
    "Insider",
    "Trading",
    "Signals",
    "Bitcoin",
    "Ethereum",
    "Solana",
    "Avalanche",
    "Polygon",
    "DeFi",
    "NFT",
    "Cryptocurrency",
  ],
  openGraph: {
    siteName: "FindUP",
    type: "website",
    title: "FindUP - Home",
    description:
      "Next-Gen AI for Alpha Finder, Move Faster Than The Market Itself",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "FindUP",
      },
    ],
  },
  applicationName: "FindUP",
  category: "Crypto",
  icons: {
    apple: {
      url: "/images/logo.png",
      sizes: "180x180",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body
        style={{
          fontFamily: "Mako",
        }}
      >
        {children}
      </body>
    </html>
  );
}
