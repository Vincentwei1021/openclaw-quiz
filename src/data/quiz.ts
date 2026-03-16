export interface Question {
  id: number;
  question: string;
  options: { text: string; score: number }[];
}

export const questions: Question[] = [
  {
    id: 1, question: "你每天大概问 AI 多少个问题？",
    options: [
      { text: "0-2 个，偶尔用用", score: 2 },
      { text: "3-10 个，有事就问", score: 5 },
      { text: "10-30 个，全天候搭档", score: 8 },
      { text: "30+，AI 就是我的第二大脑", score: 10 },
    ],
  },
  {
    id: 2, question: "你最常用 AI 做什么？",
    options: [
      { text: "查资料、翻译", score: 3 },
      { text: "写邮件、写文案", score: 5 },
      { text: "写代码、debug", score: 7 },
      { text: "以上全部 + 帮我决策", score: 10 },
    ],
  },
  {
    id: 3, question: "你会让 AI 替你发邮件/消息吗？",
    options: [
      { text: "绝不，我自己写", score: 2 },
      { text: "让 AI 写初稿，我改了再发", score: 5 },
      { text: "改改格式就发了", score: 8 },
      { text: "直接发，AI 懂我的语气", score: 10 },
    ],
  },
  {
    id: 4, question: "AI 给出的建议，你通常？",
    options: [
      { text: "半信半疑，自己再查一遍", score: 3 },
      { text: "大部分时候相信，但会验证关键信息", score: 6 },
      { text: "基本直接采纳", score: 8 },
      { text: "AI 说啥就是啥，它比我懂", score: 10 },
    ],
  },
  {
    id: 5, question: "你给 AI 的上下文/背景信息有多详细？",
    options: [
      { text: "简单一句话就丢过去", score: 3 },
      { text: "会说清楚需求和约束", score: 6 },
      { text: "会给详细背景 + 期望格式", score: 8 },
      { text: "有系统提示词/人设，还会持续迭代", score: 10 },
    ],
  },
  {
    id: 6, question: "你用 AI 处理过最「大胆」的事是？",
    options: [
      { text: "没什么大胆的，正常用", score: 2 },
      { text: "让 AI 帮我写重要演讲/报告", score: 5 },
      { text: "让 AI 帮我做商业决策分析", score: 7 },
      { text: "让 AI 自动跑任务/cron job/管理服务器", score: 10 },
    ],
  },
  {
    id: 7, question: "当 AI 回答不好时，你的反应是？",
    options: [
      { text: "算了，自己来", score: 2 },
      { text: "换个问法再试一次", score: 5 },
      { text: "调整提示词，精确引导", score: 8 },
      { text: "分析为什么不好，优化整个 workflow", score: 10 },
    ],
  },
  {
    id: 8, question: "你的朋友/同事怎么看你用 AI？",
    options: [
      { text: "不太知道我在用 AI", score: 2 },
      { text: "知道我用，觉得挺方便", score: 4 },
      { text: "经常问我 AI 怎么用", score: 7 },
      { text: "他们叫我 AI 狂人/AI 布道者", score: 10 },
    ],
  },
  {
    id: 9, question: "如果明天 AI 全部消失，你会？",
    options: [
      { text: "没太大影响，照常工作", score: 2 },
      { text: "不太方便，但能适应", score: 4 },
      { text: "工作效率至少降 50%", score: 7 },
      { text: "整个工作流瘫痪，需要重新学怎么做事", score: 10 },
    ],
  },
  {
    id: 10, question: "你觉得 AI 最了解你的哪一面？",
    options: [
      { text: "不了解我，它只是工具", score: 2 },
      { text: "知道我的写作风格", score: 5 },
      { text: "懂我的思维方式和偏好", score: 8 },
      { text: "比很多朋友都懂我", score: 10 },
    ],
  },
];

export interface Result {
  min: number;
  max: number;
  title: string;
  emoji: string;
  description: string;
  lobsterSays: string;
}

export const results: Result[] = [
  { min: 90, max: 100, title: "心有灵犀", emoji: "🦞💕", description: "你和龙虾已经心有灵犀！你们之间的默契度堪比双胞胎。龙虾不只是你的工具，更是你的灵魂搭档。", lobsterSays: "主人，我感受到了你的一切~ 我们是最佳拍档！" },
  { min: 75, max: 89, title: "深度了解", emoji: "🦞✨", description: "龙虾对你了如指掌！你们的互动频繁且深入，龙虾已经学会了你的思维方式和工作习惯。", lobsterSays: "我已经很懂你了！再给我一点时间，我会更懂~" },
  { min: 60, max: 74, title: "熟悉伙伴", emoji: "🦞👍", description: "龙虾是你靠谱的工作伙伴。你们经常合作，龙虾知道你需要什么，虽然偶尔还需要你多解释一下。", lobsterSays: "我在努力学习你的习惯！每次对话都让我更了解你~" },
  { min: 40, max: 59, title: "初步认识", emoji: "🦞🤔", description: "龙虾和你还在互相了解的阶段。你偶尔会请龙虾帮忙，但你们之间的默契度还有很大提升空间。", lobsterSays: "嗯...我还在学习中。多跟我聊聊呗？" },
  { min: 20, max: 39, title: "神秘陌生人", emoji: "🦞🔮", description: "你对龙虾来说还很神秘！你不太常用 AI，龙虾还没机会了解你。试试多和龙虾互动吧！", lobsterSays: "你好啊陌生人！希望有一天能了解你~" },
  { min: 0, max: 19, title: "擦肩而过", emoji: "🦞👋", description: "你和龙虾还几乎没有交集。没关系，现在开始永远不晚！", lobsterSays: "快来试试 AI 的神奇力量吧！我在这里等你~" },
];

export function getResult(score: number): Result {
  return results.find(r => score >= r.min && score <= r.max) || results[results.length - 1];
}
