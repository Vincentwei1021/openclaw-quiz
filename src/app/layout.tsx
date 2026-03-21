import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import FeedbackWidget from "@/components/FeedbackWidget";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading", weight: ["400","500","600","700","800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://openclaw-quiz.vercel.app";

export const metadata: Metadata = {
  title: "龙虾懂你 — 测测你的 AI 龙虾有多懂你 🦞",
  description: "一个趣味互动测验：回答 10 个关于你使用 AI 习惯的问题，看看你的 OpenClaw 龙虾有多了解你！生成专属懂你指数和趣味评语。",
  keywords: ["OpenClaw", "龙虾懂你", "AI测验", "AI习惯测试", "OpenClaw quiz", "AI互动", "龙虾"],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "🦞 龙虾懂你 — 测测你的 AI 龙虾有多懂你",
    description: "趣味互动测验！10 个问题，看你的 OpenClaw 龙虾有多了解你。",
    url: siteUrl, siteName: "龙虾懂你", type: "website", locale: "zh_CN",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "龙虾懂你" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5881105388002876" crossOrigin="anonymous" strategy="afterInteractive" />
      </head>
      <body className={`${jakarta.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
          <FeedbackWidget />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
