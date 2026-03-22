import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import QuizGame from "@/components/QuizGame";

const schema = {
  "@context": "https://schema.org", "@type": "WebApplication",
  name: "龙虾懂你", url: "https://openclaw-quiz.vercel.app",
  description: "趣味互动测验：测测你的 OpenClaw 龙虾有多懂你。10 个问题，生成专属懂你指数。",
  applicationCategory: "EntertainmentApplication", operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  inLanguage: "zh-CN",
};

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary tracking-tight">
            🦞 龙虾懂你
          </Link>
          <div className="flex items-center gap-1">
            <Link href="/privacy" className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">隐私</Link>
            <Link href="/terms" className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">条款</Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="min-h-screen">
        <QuizGame />

        {/* About / SEO */}
        <section className="border-t border-border/60 px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground text-center mb-6 font-[family-name:var(--font-heading)]">关于龙虾懂你</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">龙虾懂你</strong>是一个趣味互动测验，灵感来自 <strong className="text-foreground">OpenClaw（龙虾）</strong>——一个新一代的 AI agent 平台。通过 10 个关于你日常使用 AI 习惯的问题，我们会计算出一个「懂你指数」，反映 AI 对你的了解程度。
              </p>
              <p>
                这个测验不仅仅是娱乐。它实际上反映了你与 AI 工具之间的<strong className="text-foreground">互动深度</strong>。研究表明，给 AI 更多上下文、更频繁地互动、更愿意信任 AI 的用户，往往能从 AI 中获得更大的生产力提升。
              </p>
              <h3 className="text-lg font-bold text-foreground pt-2 font-[family-name:var(--font-heading)]">什么是 OpenClaw？</h3>
              <p>
                OpenClaw 是一个开源的 AI agent 运行平台，可以通过各种消息渠道（Telegram、WhatsApp、Discord 等）与你互动。它能自动执行任务、管理工作流、连接各种工具和服务。OpenClaw 的标志性形象就是一只可爱的龙虾 🦞。
              </p>
              <h3 className="text-lg font-bold text-foreground pt-2 font-[family-name:var(--font-heading)]">懂你指数怎么算？</h3>
              <p>
                每道题有 4 个选项，根据你与 AI 的互动频率、深度、信任度和依赖度评分。总分按百分制换算：90+ 分代表你和 AI 已经心有灵犀，60-89 分说明你们是稳定的合作伙伴，40-59 分代表初步认识阶段，40 分以下说明你对 AI 还很陌生。
              </p>
              <h3 className="text-lg font-bold text-foreground pt-2 font-[family-name:var(--font-heading)]">分享你的结果</h3>
              <p>
                完成测验后，你可以一键分享你的懂你指数到社交媒体。看看你的朋友们和 AI 的关系如何？来一场「谁最懂龙虾」的比赛吧！
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
          <p>&copy; {new Date().getFullYear()} 龙虾懂你 &middot; OpenClaw Quiz</p>
          <div className="flex gap-2">
            <Link href="/" className="rounded-lg px-3 py-3 transition-colors hover:text-foreground">首页</Link>
            <Link href="/privacy" className="rounded-lg px-3 py-3 transition-colors hover:text-foreground">隐私</Link>
            <Link href="/terms" className="rounded-lg px-3 py-3 transition-colors hover:text-foreground">条款</Link>
          </div>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
