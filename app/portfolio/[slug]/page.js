import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { allWork, brandVoiceWork, copyWork } from "../../lib/portfolioData";
import { PinMark } from "../../components/Motif";

export function generateStaticParams() {
  return allWork.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const item = allWork.find((p) => p.slug === params.slug);
  if (!item) return {};
  return { title: `${item.title} — Yael Chen Zion` };
}

function ProjectImage({ src, alt, style = {} }) {
  return <img src={src} alt={alt} style={{ width: "100%", display: "block", borderRadius: 16, ...style }} />;
}

function PitchCard({ label, children }) {
  return (
    <div className="card">
      <PinMark />
      <p className="eyebrow" style={{ marginBottom: 14 }}>{label}</p>
      <div style={{ fontSize: 15.5, lineHeight: 1.75, whiteSpace: "pre-line", color: "var(--ink)" }}>{children}</div>
    </div>
  );
}

function Section({ heading, body, body2, list, imageBefore, image, image2 }) {
  return (
    <div>
      {imageBefore && <ProjectImage src={imageBefore} alt={heading} style={{ marginBottom: 28 }} />}
      <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 22, color: "var(--teal)", marginBottom: 14 }}>
        {heading}
      </p>
      {body && (
        <div style={{ fontSize: 16.5, lineHeight: 1.8, whiteSpace: "pre-line", marginBottom: list || body2 ? 16 : 0 }}>
          {body}
        </div>
      )}
      {list && (
        <ul style={{ margin: "0 0 16px 0", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
          {list.map((item) => (
            <li key={item} style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--ink-soft)" }}>{item}</li>
          ))}
        </ul>
      )}
      {body2 && <div style={{ fontSize: 16.5, lineHeight: 1.8 }}>{body2}</div>}
      {image && <ProjectImage src={image} alt={`${heading} example`} style={{ marginTop: 28 }} />}
      {image2 && <ProjectImage src={image2} alt={`${heading} example 2`} style={{ marginTop: 16 }} />}
    </div>
  );
}

export default function ProjectPage({ params }) {
  const item = allWork.find((p) => p.slug === params.slug);
  if (!item) notFound();

  const collection = brandVoiceWork.some((p) => p.slug === item.slug)
    ? "Brand Voice"
    : copyWork.some((p) => p.slug === item.slug)
    ? "Copy & Content"
    : "AI & Automation";

  return (
    <section className="wrap" style={{ padding: "clamp(56px, 10vw, 96px) var(--gutter) 96px" }}>
      <Link
        href="/portfolio"
        className="eyebrow"
        style={{ color: "var(--ink-faint)", display: "inline-block", marginBottom: 32 }}
      >
        ← portfolio
      </Link>

      <p className="eyebrow" style={{ marginBottom: 14 }}>{collection}</p>
      <h1 style={{ fontSize: "clamp(28px, 4.2vw, 44px)", lineHeight: 1.2, maxWidth: 720, marginBottom: 24, textTransform: "lowercase" }}>
        {item.title}
      </h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 40 }}>
        {item.tags.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>

      {/* Hero image */}
      {item.heroImage ? (
        <ProjectImage src={item.heroImage} alt={item.title} style={{ borderRadius: 18, marginBottom: 56 }} />
      ) : (
        <div
          style={{
            width: "100%",
            aspectRatio: "16/6",
            background: "var(--paper-raised)",
            border: "1px solid var(--line)",
            borderRadius: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 56,
          }}
        >
          <p className="eyebrow" style={{ color: "var(--ink-faint)", fontSize: 10 }}>Hero image</p>
        </div>
      )}

      {/* AI systems: problem / approach / result as pinned cards */}
      {item.problem && (
        <>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-soft)", maxWidth: 680, marginBottom: 48 }}>
            {item.summary}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, maxWidth: 1000 }}>
            <PitchCard label="The Problem">{item.problem}</PitchCard>
            <PitchCard label="The Approach">{item.approach}</PitchCard>
            <PitchCard label="The Result">{item.result}</PitchCard>
          </div>
        </>
      )}

      {/* Rich sections */}
      {item.sections && (
        <div style={{ maxWidth: 680, display: "flex", flexDirection: "column", gap: 48 }}>
          {item.imageOnly && (
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-soft)" }}>{item.summary}</p>
          )}
          {item.sections.map((s, i) => (
            <React.Fragment key={s.heading}>
              <Section {...s} />
              {i === 0 && item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" className="btn" style={{ alignSelf: "flex-start" }}>
                  {item.linkLabel || "visit the site →"}
                </a>
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Gallery */}
      {item.galleryImages && (
        <div style={{ maxWidth: 680, display: "flex", flexDirection: "column", gap: 20, marginTop: item.sections ? 48 : 0 }}>
          {item.galleryImages.map((src, i) => (
            <ProjectImage key={i} src={src} alt={`${item.title} sample ${i + 1}`} />
          ))}
        </div>
      )}

      {/* imageOnly with no gallery yet */}
      {item.imageOnly && !item.galleryImages && (
        <p className="eyebrow" style={{ color: "var(--terracotta)", marginTop: 32 }}>Full samples coming soon.</p>
      )}

      {/* Draft items */}
      {item.draft && !item.sections && (
        <div style={{ maxWidth: 620 }}>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-soft)", marginBottom: 32 }}>{item.summary}</p>
          <p className="eyebrow" style={{ color: "var(--terracotta)" }}>Full case study coming soon.</p>
        </div>
      )}
    </section>
  );
}
