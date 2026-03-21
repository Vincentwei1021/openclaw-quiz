import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = { title: "使用条款 | 龙虾懂你" };

export default function TermsPage() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary tracking-tight">🦞 龙虾懂你</Link>
          <ThemeToggle />
        </nav>
      </header>
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold text-foreground font-[family-name:var(--font-heading)]">使用条款</h1>
          <p className="mt-2 text-sm text-muted-foreground">更新：2026年3月16日</p>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-heading)]">服务说明</h2>
            <p>龙虾懂你是一个免费的趣味互动测验，仅供娱乐目的。测验结果不构成任何专业建议。</p>
            <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-heading)]">免责声明</h2>
            <p>服务按「现状」提供。测验结果基于简单算法，不代表 AI 的真实了解程度。</p>
            <h2 className="text-xl font-bold text-foreground font-[family-name:var(--font-heading)]">联系</h2>
            <p><a href="mailto:legal@toolboxlite.com" className="text-primary hover:underline">legal@toolboxlite.com</a></p>
          </div>
        </div>
      </main>
    </>
  );
}
