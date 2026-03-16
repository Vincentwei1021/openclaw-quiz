import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "使用条款 | 龙虾懂你" };
export default function TermsPage() {
  return (
    <><header className="border-b border-lobster-200/60 bg-white"><nav className="mx-auto flex max-w-4xl items-center px-4 py-3 sm:px-6"><Link href="/" className="text-xl font-bold text-gray-900">🦞 龙虾懂你</Link></nav></header>
    <main className="px-4 py-12 sm:px-6 sm:py-16"><div className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900">使用条款</h1>
      <p className="mt-2 text-sm text-gray-400">更新：2026年3月16日</p>
      <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
        <h2 className="text-xl font-bold text-gray-900">服务说明</h2>
        <p>龙虾懂你是一个免费的趣味互动测验，仅供娱乐目的。测验结果不构成任何专业建议。</p>
        <h2 className="text-xl font-bold text-gray-900">免责声明</h2>
        <p>服务按「现状」提供。测验结果基于简单算法，不代表 AI 的真实了解程度。</p>
        <h2 className="text-xl font-bold text-gray-900">联系</h2>
        <p><a href="mailto:legal@toolboxlite.com" className="text-lobster-600 hover:underline">legal@toolboxlite.com</a></p>
      </div>
    </div></main></>
  );
}
