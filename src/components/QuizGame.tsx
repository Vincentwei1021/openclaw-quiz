"use client";
import { useState, useCallback, useEffect } from "react";
import { questions, getResult } from "@/data/quiz";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2, RotateCcw } from "lucide-react";
import { toast } from "sonner";

export default function QuizGame() {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [phase, setPhase] = useState<"intro" | "quiz" | "result">("intro");
  const [animating, setAnimating] = useState(false);
  const [scoreAnimated, setScoreAnimated] = useState(false);

  const totalScore = Math.round((scores.reduce((a, b) => a + b, 0) / (questions.length * 10)) * 100);
  const result = getResult(totalScore);

  const startQuiz = () => setPhase("quiz");

  const selectOption = useCallback((score: number) => {
    if (animating) return;
    setAnimating(true);
    const newScores = [...scores, score];
    setScores(newScores);

    setTimeout(() => {
      if (current + 1 >= questions.length) {
        setPhase("result");
      } else {
        setCurrent(current + 1);
      }
      setAnimating(false);
    }, 300);
  }, [current, scores, animating]);

  const restart = () => {
    setCurrent(0);
    setScores([]);
    setPhase("intro");
    setScoreAnimated(false);
  };

  useEffect(() => {
    if (phase === "result") {
      const t = setTimeout(() => setScoreAnimated(true), 200);
      return () => clearTimeout(t);
    }
  }, [phase]);

  const shareText = phase === "result"
    ? `🦞 我的龙虾懂你指数：${totalScore}分！${result.emoji} ${result.title}\n\n${result.lobsterSays}\n\n来测测你的 → quiz.toolboxlite.com`
    : "";

  const handleShare = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: "龙虾懂你", text: shareText, url: "https://quiz.toolboxlite.com" }); } catch { /* user cancelled */ }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        toast.success("已复制到剪贴板！");
      } catch { /* clipboard failed */ }
    }
  };

  // ── INTRO ──
  if (phase === "intro") {
    return (
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="animate-fade-up stagger-1 animate-float text-8xl mb-8">🦞</div>
          <h1 className="animate-fade-up stagger-2 font-[family-name:var(--font-heading)] text-4xl font-extrabold text-primary sm:text-5xl tracking-tight">
            龙虾懂你
          </h1>
          <p className="animate-fade-up stagger-3 mt-4 text-lg text-muted-foreground">
            测测你的 AI 龙虾（OpenClaw）有多了解你
          </p>
          <div className="animate-fade-up stagger-4 mt-4">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              10 个问题 &middot; 2 分钟
            </Badge>
          </div>
          <div className="animate-fade-up stagger-5 mt-10">
            <Button
              size="lg"
              onClick={startQuiz}
              className="h-12 rounded-2xl bg-primary px-10 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-110 active:scale-[0.97]"
            >
              🦞 开始测试
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // ── QUIZ ──
  if (phase === "quiz") {
    const q = questions[current];
    const progress = (current / questions.length) * 100;
    return (
      <section className="px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-2xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">问题 {current + 1} / {questions.length}</span>
              <span className="text-sm font-bold text-primary">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="animate-slide-fade" key={q.id}>
            <Card className="mb-6 border-0 shadow-sm ring-1 ring-border/50">
              <CardContent className="pt-6 pb-6">
                <span className="text-3xl">🦞</span>
                <h2 className="mt-3 text-xl font-bold text-foreground font-[family-name:var(--font-heading)]">{q.question}</h2>
              </CardContent>
            </Card>

            {/* Options */}
            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => selectOption(opt.score)}
                  disabled={animating}
                  className="w-full rounded-xl border-2 border-border bg-card px-5 py-4 text-left text-sm font-medium text-card-foreground transition-all hover:border-primary hover:bg-brand-muted dark:hover:bg-brand-muted-dark hover:text-primary disabled:opacity-50 active:scale-[0.98]"
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── RESULT ──
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-2xl animate-scale-in">
        {/* Score Card */}
        <Card className="overflow-hidden border-0 shadow-xl ring-1 ring-primary/20">
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-primary via-primary/90 to-primary px-6 py-8 text-center">
            <p className="text-primary-foreground/70 text-sm tracking-wider mb-2">你的龙虾懂你指数</p>
            <div className="text-6xl font-extrabold text-primary-foreground">{totalScore}</div>
            <p className="text-primary-foreground/50 text-xs mt-1">满分 100</p>
          </div>

          {/* Result Body */}
          <CardContent className="px-6 py-6 text-center">
            <div className="text-4xl mb-2">{result.emoji}</div>
            <h3 className="text-2xl font-bold text-foreground mb-3 font-[family-name:var(--font-heading)]">{result.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">{result.description}</p>
            <div className="rounded-xl bg-brand-muted dark:bg-brand-muted-dark border border-primary/20 px-5 py-4">
              <p className="text-sm text-primary italic">
                🦞 龙虾说：&ldquo;{result.lobsterSays}&rdquo;
              </p>
            </div>
          </CardContent>

          {/* Score Bar */}
          <div className="px-6 pb-6">
            <div className="h-3 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary transition-all duration-1000 ease-out"
                style={{
                  width: scoreAnimated ? `${totalScore}%` : "0%",
                  animation: scoreAnimated ? undefined : undefined,
                }}
              />
            </div>
            <div className="flex justify-between mt-1 text-xs text-muted-foreground">
              <span>陌生人</span>
              <span>心有灵犀</span>
            </div>
          </div>
        </Card>

        {/* Actions */}
        <div className="mt-6 flex justify-center gap-3">
          <Button
            onClick={handleShare}
            className="rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-sm transition-all hover:brightness-110 active:scale-[0.97]"
          >
            <Share2 className="size-4 mr-1.5" />
            分享结果
          </Button>
          <Button
            variant="outline"
            onClick={restart}
            className="rounded-full border-primary/30 px-6 py-3 font-bold text-primary transition-all hover:bg-brand-muted dark:hover:bg-brand-muted-dark active:scale-[0.97]"
          >
            <RotateCcw className="size-4 mr-1.5" />
            重新测试
          </Button>
        </div>
      </div>
    </section>
  );
}
