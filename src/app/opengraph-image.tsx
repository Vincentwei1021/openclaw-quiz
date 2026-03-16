import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "龙虾懂你 — 测测你的AI龙虾有多懂你";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: "linear-gradient(135deg, #7f1d1d 0%, #dc2626 50%, #f87171 100%)", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif" }}>
        <div style={{ fontSize: 96, marginBottom: 16 }}>🦞</div>
        <div style={{ fontSize: 56, fontWeight: 800, color: "#ffffff", marginBottom: 12 }}>龙虾懂你</div>
        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.8)" }}>测测你的 AI 龙虾有多了解你</div>
        <div style={{ marginTop: 32, background: "rgba(255,255,255,0.15)", borderRadius: 12, padding: "10px 28px", fontSize: 20, color: "rgba(255,255,255,0.9)" }}>10 个问题 · 2 分钟 · 生成专属懂你指数</div>
      </div>
    ),
    { ...size }
  );
}
