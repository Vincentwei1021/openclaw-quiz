"use client";
import { useState, useCallback } from "react";
import { questions, getResult } from "@/data/quiz";

export default function QuizGame() {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [phase, setPhase] = useState<"intro" | "quiz" | "result">("intro");
  const [animating, setAnimating] = useState(false);

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
  };

  const shareText = phase === "result"
    ? `🦞 我的龙虾懂你指数：${totalScore}分！${result.emoji} ${result.title}\n\n${result.lobsterSays}\n\n来测测你的 → quiz.toolboxlite.com`
    : "";

  const handleShare = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: "龙虾懂你", text: shareText, url: "https://quiz.toolboxlite.com" }); } catch {}
    } else {
      try { await navigator.clipboard.writeText(shareText); alert("已复制到剪贴板！"); } catch {}
    }
  };

  // INTRO
  if (phase === "intro") {
    return (
      <section className="px-4 py-12 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-lg text-center animate-fade-in">
          <div className="text-7xl mb-6 animate-bounce-soft">🦞</div>
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            龙虾懂你
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            测测你的 AI 龙虾（OpenClaw）有多了解你
          </p>
          <p className="mt-2 text-sm text-gray-400">
            10 个问题 · 2 分钟 · 生成你的专属懂你指数
          </p>
          <button onClick={startQuiz}
            className="mt-8 rounded-2xl bg-lobster-600 px-10 py-4 text-lg font-bold text-white shadow-lg shadow-lobster-600/25 transition-all hover:bg-lobster-700 hover:scale-105">
            🦞 开始测试
          </button>
        </div>
      </section>
    );
  }

  // QUIZ
  if (phase === "quiz") {
    const q = questions[current];
    const progress = ((current) / questions.length) * 100;
    return (
      <section className="px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-lg">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-500">问题 {current + 1} / {questions.length}</span>
              <span className="text-sm font-bold text-lobster-600">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
              <div className="h-full rounded-full bg-lobster-500 transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Question */}
          <div className="animate-fade-in" key={q.id}>
            <div className="mb-6">
              <span className="text-3xl">🦞</span>
              <h2 className="mt-2 text-xl font-bold text-gray-900">{q.question}</h2>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <button key={i} onClick={() => selectOption(opt.score)} disabled={animating}
                  className="w-full rounded-xl border-2 border-gray-200 bg-white px-5 py-4 text-left text-sm font-medium text-gray-700 transition-all hover:border-lobster-400 hover:bg-lobster-50 hover:text-lobster-700 disabled:opacity-50 active:scale-[0.98]">
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // RESULT
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-lg animate-fade-in">
        {/* Score Card */}
        <div className="rounded-3xl bg-white border-2 border-lobster-200 shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-lobster-500 via-lobster-600 to-lobster-500 px-6 py-8 text-center">
            <p className="text-lobster-100 text-sm tracking-wider mb-2">你的龙虾懂你指数</p>
            <div className="text-6xl font-extrabold text-white">{totalScore}</div>
            <p className="text-lobster-200 text-xs mt-1">满分 100</p>
          </div>

          {/* Result */}
          <div className="px-6 py-6 text-center">
            <div className="text-4xl mb-2">{result.emoji}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{result.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{result.description}</p>
            <div className="rounded-xl bg-lobster-50 border border-lobster-200 px-5 py-4">
              <p className="text-sm text-lobster-700 italic">
                🦞 龙虾说：&ldquo;{result.lobsterSays}&rdquo;
              </p>
            </div>
          </div>

          {/* Score breakdown */}
          <div className="px-6 pb-6">
            <div className="h-3 rounded-full bg-gray-200 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-lobster-400 to-lobster-600 transition-all duration-1000" style={{ width: `${totalScore}%` }} />
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-400">
              <span>陌生人</span>
              <span>心有灵犀</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={handleShare}
            className="rounded-full bg-lobster-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-lobster-700">
            📤 分享结果
          </button>
          <button onClick={restart}
            className="rounded-full border border-lobster-300 bg-white px-6 py-3 text-sm font-bold text-lobster-700 transition-colors hover:bg-lobster-50">
            🔄 重新测试
          </button>
        </div>
      </div>
    </section>
  );
}
