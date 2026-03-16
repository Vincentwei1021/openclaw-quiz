import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "隐私政策 | 龙虾懂你" };
export default function PrivacyPage() {
  return (
    <><header className="border-b border-lobster-200/60 bg-white"><nav className="mx-auto flex max-w-4xl items-center px-4 py-3 sm:px-6"><Link href="/" className="text-xl font-bold text-gray-900">🦞 龙虾懂你</Link></nav></header>
    <main className="px-4 py-12 sm:px-6 sm:py-16"><div className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900">隐私政策</h1>
      <p className="mt-2 text-sm text-gray-400">更新：2026年3月16日</p>
      <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
        <h2 className="text-xl font-bold text-gray-900">数据收集</h2>
        <p>龙虾懂你是 100% 客户端应用，所有测验逻辑在你的浏览器中运行。我们不收集、存储或传输任何个人信息。你的测验答案和结果不会发送到任何服务器。</p>
        <h2 className="text-xl font-bold text-gray-900">广告</h2>
        <p>本站通过 Google AdSense 展示广告。<a href="https://adssettings.google.com" className="text-lobster-600 hover:underline" target="_blank" rel="noopener noreferrer">管理广告偏好</a></p>
        <h2 className="text-xl font-bold text-gray-900">联系</h2>
        <p><a href="mailto:privacy@toolboxlite.com" className="text-lobster-600 hover:underline">privacy@toolboxlite.com</a></p>
      </div>
    </div></main></>
  );
}
