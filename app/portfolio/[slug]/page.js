import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { allWork, brandVoiceWork, copyWork } from "../../lib/portfolioData";

export function generateStaticParams() {
  return allWork.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const item = allWork.find((p) => p.slug === params.slug);
  if (!item) return {};
  return { title: `${item.title} — Yael Chen Zion` };
}

function ProjectImage({ src, alt, style = {} }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", display: "block", borderRadius: 2, ...style }}
    />
  );
}

function ImageSlot({ label, aspectRatio = "16/7", style = {} }) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio,
        background: "var(--paper-raised)",
        border: "1.5px dashed var(--line)",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        ...style,
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink-faint)" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <p className="eyebrow" style={{ color: "var(--ink-faint)", fontSize: 10 }}>{label}</p>
    </div>
  );
}

function Section({ heading, body, body2, list, imageBefore, image, image2, title }) {
  return (
    <div>
      {imageBefore && (
        <ProjectImage src={imageBefore} alt={heading} style={{ marginBottom: 28 }} />
      )}
      <p className="eyebrow" style={{ marginBottom: 14 }}>{heading}</p>
      {body && (
        <div style={{ fontSize: 17, lineHeight: 1.8, whiteSpace: "pre-line", marginBottom: list || body2 ? 16 : 0 }}>
          {body}
        </div>
      )}
      {list && (
        <ul style={{ margin: "0 0 16px 0", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
          {list.map((item) => (
            <li key={item} style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink-soft)" }}>{item}</li>
          ))}
        </ul>
      )}
      {body2 && (
        <div style={{ fontSize: 17, lineHeight: 1.8 }}>{body2}</div>
      )}
      {image && (
        <ProjectImage src={image} alt={`${heading} example`} style={{ marginTop: 28 }} />
      )}
      {image2 && (
        <ProjectImage src={image2} alt={`${heading} example 2`} style={{ marginTop: 16 }} />
      )}
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
    <section className="wrap" style={{ padding: "clamp(56px, 10vw, 96px) 0 96px" }}>
      <Link href="/portfolio" className="eyebrow" style={{ color: "var(--ink-faint)", display: "inline-block", marginBottom: 40 }}>
        ← Portfolio
      </Link>

      <p className="eyebrow" style={{ marginBottom: 14 }}>
        {collection}
      </p>
      <h1 style={{ fontSize: "clamp(28px, 4.5vw, 48px)", maxWidth: 700, marginBottom: 20 }}>{item.title}</h1>

      <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 48 }}>
        {item.tags.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>

      <hr className="seam" style={{ marginBottom: 48 }} />

      {/* Hero image */}
      {item.heroImage ? (
        <ProjectImage src={item.heroImage} alt={item.title} style={{ marginBottom: 56 }} />
      ) : (
        <ImageSlot label="Hero image" aspectRatio="16/6" style={{ marginBottom: 56 }} />
      )}

      {/* AI systems */}
      {item.problem && (
        <div style={{ maxWidth: 680, display: "flex", flexDirection: "column", gap: 40 }}>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-soft)" }}>{item.summary}</p>
          <Section heading="The Problem" body={item.problem} />
          <Section heading="The Approach" body={item.approach} />
          <Section heading="The Result" body={item.result} />
        </div>
      )}

      {/* Rich sections */}
      {item.sections && (
        <div style={{ maxWidth: 680, display: "flex", flexDirection: "column", gap: 48 }}>
          {item.imageOnly && (
            <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--ink-soft)" }}>{item.summary}</p>
          )}
          {item.sections.map((s, i) => (
            <React.Fragment key={s.heading}>
              <Section {...s} title={item.title} />
              {i === 0 && item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" className="btn" style={{ alignSelf: "flex-start" }}>
                  {item.linkLabel || "Visit the site →"}
                </a>
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Gallery — shown after sections (or standalone for imageOnly with no sections) */}
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
          <ImageSlot label="Samples coming soon" aspectRatio="4/3" style={{ maxWidth: 560, marginBottom: 32 }} />
          <p className="eyebrow" style={{ color: "var(--terracotta)" }}>Full case study coming soon.</p>
        </div>
      )}
    </section>
  );
}
