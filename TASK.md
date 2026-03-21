# TASK: Design Upgrade — Lobster Quiz (龙虾懂你)

## Objective
Transform from "fun toy quiz" to a **polished, branded interactive experience** using shadcn/ui. Think: Typeform's elegance meets quiz.buzzfeed.com's engagement. This is a Chinese-language site — all UI text stays in Chinese.

## ⚠️ CRITICAL: Preserve All Functionality
- Quiz game: 10 questions, 4 options each, scoring, result card with share
- Intro → Quiz → Result flow
- Share button (navigator.share + clipboard fallback)
- FeedbackWidget (floating button + form)
- AdSense script in layout.tsx head
- ALL SEO metadata, JSON-LD structured data, sitemap, robots
- Privacy + Terms pages
- OG image generation

## Step 1: Install Dependencies

```bash
npx shadcn@latest init --defaults
npx shadcn@latest add button card badge progress separator
npm install next-themes lucide-react
npx shadcn@latest add sonner
```

## Step 2: Design System

### Brand Identity
Lobster red/coral as brand accent — NOT flat red, use a warm, refined coral.
- Brand: oklch(0.62 0.2 18) — warm coral red
- Brand muted: brand / 10%

### Color Palette (oklch)
Light mode:
- Background: warm off-white oklch(0.99 0.003 80) instead of gradient
- Foreground: near-black
- Cards: white with subtle warm tint
- Muted: warm gray

Dark mode:
- Background: deep warm black oklch(0.14 0.01 30)
- Cards: oklch(0.18 0.01 30)
- Brand: lighter coral for contrast

### Typography
- Keep Plus Jakarta Sans for headings (already loaded)
- Inter for body
- Larger heading sizes, tighter tracking
- Use font-heading class for headings

### Layout
- Max width: max-w-2xl for quiz content (keep focused)
- Generous vertical rhythm

## Step 3: Component Architecture

### layout.tsx
- Wrap with ThemeProvider from next-themes
- Add Toaster from sonner
- Keep AdSense script exactly as-is
- Keep FeedbackWidget
- Add dark mode class support

### page.tsx
Restructure: separate Header and Footer into proper components (currently inline in page.tsx).
- Header: sticky, backdrop-blur, border-b, brand color logo "🦞 龙虾懂你"
  - Add ThemeToggle button
  - Nav: 隐私 | 条款 (keep existing links)
- Footer: clean, minimal, border-t

### QuizGame.tsx — INTRO phase
- Large lobster emoji with subtle CSS float animation (NOT bouncing)
- Title: "龙虾懂你" — text-4xl font-bold text-brand (heading font)
- Subtitle: muted-foreground, text-lg
- "10 个问题 · 2 分钟" — use Badge component
- CTA button: "🦞 开始测试" — large, brand color, shadcn Button size="lg" with hover:brightness-110 and active:scale-[0.97]
- Subtle fade-up stagger animation (like QR Forge hero)

### QuizGame.tsx — QUIZ phase
- Progress: use shadcn Progress component or a custom bar with brand color fill
  - Show "问题 X / 10" and percentage
  - Smooth width transition
- Question card: clean Card component with generous padding
  - 🦞 emoji + question text with good typography
- Option buttons: full-width cards/buttons with:
  - Border that highlights on hover (border-brand)
  - Subtle background change on hover (bg-brand-muted)
  - Active press scale-[0.98]
  - Smooth transition between questions (fade animation)

### QuizGame.tsx — RESULT phase
- Score Card: Beautiful gradient header with brand color (keep gradient)
  - Score number: large, white, bold
  - Use Card component for the outer container
- Result body:
  - Emoji + title + description with good spacing
  - 龙虾说 quote box: use brand-muted bg with brand border
- Score progress bar: brand color fill with smooth animation
- Action buttons: Share (brand bg) + Restart (outline brand)
- Entrance animation: scale-in for the card

### About section (page.tsx)
- Clean typography, proper heading hierarchy
- Use text-brand for emphasis instead of text-gray-900

### FeedbackWidget
- Redesign using Card component
- Brand color floating button (48px, round)
- Keep all API logic

## Step 4: Dark Mode
- ThemeProvider + ThemeToggle in header
- All lobster-* colors must have dark mode equivalents via CSS variables
- Quiz option buttons work in both modes
- Result card gradient works in dark mode

## Step 5: Animations (MORE than QR Forge)
- Intro: stagger fade-up (emoji → title → subtitle → badge → CTA), 100ms intervals
- Lobster emoji: gentle float animation (not bouncy)
- Quiz transition: fade + slide for question changes
- Option select: brief scale pulse on selected option
- Progress bar: smooth animated width
- Result card: scale-in entrance
- Score bar: animated fill from 0 to final width (1s duration)
- Cards hover: shadow transition with brand tint

## Step 6: Final
```bash
npm run build
```
Fix ALL errors. This MUST build cleanly.

## What NOT to do
- Don't change quiz data or scoring logic
- Don't change question/option text
- Don't remove sharing functionality
- Don't add dark mode if it breaks the quiz experience — skip it if it complicates things too much
