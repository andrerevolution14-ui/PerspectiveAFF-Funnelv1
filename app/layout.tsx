import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "Stop Burning Ad Spend | The 2026 Mobile Friction Audit",
  description: "Calculate your invisible revenue leak. Discover why traditional landing pages are losing 80% of mobile traffic and how to fix your conversion gap.",
  keywords: [
    "ad spend leak calculator",
    "mobile conversion audit",
    "landing page friction finder",
    "stop burning ad budget",
    "conversion rate optimization 2026",
    "mobile-first funnel strategy",
    "interactive marketing audit"
  ],
  authors: [{ name: "Perspective Bridge" }],
  openGraph: {
    title: "The 2026 Funnel Reality Check - Calculate Your Revenue Leak",
    description: "Your traditional landing page is costing you thousands. Calculate your exact mobile friction loss and see why 80% of your traffic is bouncing.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Perspective Bridge - Mobile-First Funnel Calculator"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Losing 70% of Your Ad Spend to Mobile Friction",
    description: "Calculate your revenue leak and discover why interactive funnels convert 3x better than traditional landing pages.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
