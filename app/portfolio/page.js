import Link from "next/link";
import { brandVoiceWork, copyWork, systemsWork } from "../lib/portfolioData";
import { PinMark } from "../components/Motif";

export const metadata = { title: "Portfolio — Yael Chen Zion" };

function ProjectCard({ p }) {
  return (
    <Link href={`/portfolio/${p.slug}`} className="card-link" style={{ display: "block", color: "inherit" }}>
      <div className="card" style={{ height: "100%", boxSizing: "border-box", cursor: "pointer" }}>
        <PinMark />
        {p.draft && (
          <span className="eyebrow" style={{ color: "var(--terracotta)", fontSize: 10, display: "block", marginBottom: 12 }}>
            samples coming
          </span>
        )}
        <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, textTransform: "lowercase" }}>{p.title}</p>
        <p style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.65, marginBottom: 18 }}>{p.summary}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  return (
    <>
      <section className="wrap" style={{ padding: "clamp(56px, 10vw, 96px) var(--gutter) 40px" }}>
        <p className="eyebrow" style={{ marginBottom: 16 }}>Portfolio</p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.25, maxWidth: 640, marginBottom: 16 }}>
          selected <span className="accent">works</span>, for your review.
        </h1>
        <p style={{ color: "var(--ink-soft)", fontSize: 16, maxWidth: 560 }}>
          brand voice, creative strategy, and the ai systems built to scale it.
        </p>
      </section>

      <section className="wrap" style={{ padding: "0 var(--gutter) 72px" }}>
        <p className="eyebrow" style={{ marginBottom: 20 }}>Collection I — Brand Voice</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {brandVoiceWork.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </section>

      <div className="wrap" style={{ padding: "0 var(--gutter) 40px" }}>
        <hr className="rule" />
      </div>

      <section className="wrap" style={{ padding: "0 var(--gutter) 72px" }}>
        <p className="eyebrow" style={{ marginBottom: 20 }}>Collection II — Copy &amp; Content</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {copyWork.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </section>

      <div className="wrap" style={{ padding: "0 var(--gutter) 40px" }}>
        <hr className="rule" />
      </div>

      <section className="wrap" style={{ padding: "0 var(--gutter) 96px" }}>
        <p className="eyebrow" style={{ marginBottom: 20 }}>Collection III — AI &amp; Automation</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {systemsWork.map((p) => (
            <div key={p.slug} className="card card-static">
              <PinMark />
              <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 14, textTransform: "lowercase" }}>{p.title}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14, color: "var(--ink-soft)", marginBottom: 18 }}>
                <p><strong style={{ color: "var(--ink)" }}>problem: </strong>{p.problem}</p>
                <p><strong style={{ color: "var(--ink)" }}>approach: </strong>{p.approach}</p>
                <p><strong style={{ color: "var(--ink)" }}>result: </strong>{p.result}</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
