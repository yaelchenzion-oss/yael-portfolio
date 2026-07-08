import Link from "next/link";
import { brandVoiceWork, copyWork, systemsWork } from "../lib/portfolioData";

export const metadata = { title: "Portfolio — Yael Chen Zion" };

function ProjectCard({ p }) {
  return (
    <Link href={`/portfolio/${p.slug}`} style={{ display: "block", color: "inherit" }}>
      <div className="piece" style={{ height: "100%", cursor: "pointer" }}>
        {p.draft && (
          <span className="eyebrow" style={{ color: "var(--terracotta)", fontSize: 10, display: "block", marginBottom: 12 }}>
            samples coming
          </span>
        )}
        <h3 style={{ fontSize: 19, marginBottom: 10 }}>{p.title}</h3>
        <p style={{ color: "var(--ink-soft)", fontSize: 14.5, lineHeight: 1.65, marginBottom: 18 }}>{p.summary}</p>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  return (
    <section className="wrap" style={{ padding: "clamp(56px, 10vw, 96px) 0 96px" }}>
      <p className="eyebrow" style={{ marginBottom: 18 }}>Portfolio</p>
      <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", maxWidth: 700, marginBottom: 20 }}>
        Selected works, for your review.
      </h1>
      <p style={{ color: "var(--ink-soft)", fontSize: 17, maxWidth: 620, marginBottom: 64 }}>
        Brand voice, creative strategy, and the AI systems built to scale it.
      </p>

      <p className="eyebrow" style={{ marginBottom: 24 }}>Collection I — Brand Voice</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginBottom: 72 }}>
        {brandVoiceWork.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>

      <hr className="seam" style={{ marginBottom: 56 }} />

      <p className="eyebrow" style={{ marginBottom: 24 }}>Collection II — Copy &amp; Content</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginBottom: 72 }}>
        {copyWork.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>

      <hr className="seam" style={{ marginBottom: 56 }} />

      <p className="eyebrow" style={{ marginBottom: 24 }}>Collection III — AI &amp; Automation</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        {systemsWork.map((p) => (
          <div key={p.slug} className="piece piece-static">
            <h3 style={{ fontSize: 19, marginBottom: 14 }}>{p.title}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14.5, color: "var(--ink-soft)", marginBottom: 18 }}>
              <p><strong style={{ color: "var(--ink)" }}>Problem: </strong>{p.problem}</p>
              <p><strong style={{ color: "var(--ink)" }}>Approach: </strong>{p.approach}</p>
              <p><strong style={{ color: "var(--ink)" }}>Result: </strong>{p.result}</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
