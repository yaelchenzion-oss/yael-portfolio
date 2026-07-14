"use client";

import { useState } from "react";
import Link from "next/link";
import { PinMark } from "./Motif";

// Tabbed view of the three portfolio collections. Clicking a tab swaps
// the collection shown below in place — no scroll — so the page stays
// short instead of one endless scroll.
const TABS = [
  { id: "brand-voice", num: "I", label: "Brand Voice", eyebrow: "Collection I — Brand Voice" },
  { id: "ai-automation", num: "II", label: "AI & Automation", eyebrow: "Collection II — AI & Automation" },
  { id: "copy-content", num: "III", label: "Copy & Content", eyebrow: "Collection III — Copy & Content" },
];

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

export default function PortfolioCollections({ brandVoice, systems, copy }) {
  const [active, setActive] = useState("brand-voice");

  const collections = {
    "brand-voice": brandVoice,
    "ai-automation": systems,
    "copy-content": copy,
  };
  const current = TABS.find((t) => t.id === active);
  const items = collections[active];

  return (
    <>
      <div className="collection-nav">
        <div className="wrap collection-nav-inner">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              aria-pressed={active === t.id}
              className={active === t.id ? "coll-link coll-link-active" : "coll-link"}
            >
              <span className="coll-num">{t.num}</span>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <section className="wrap" style={{ padding: "48px var(--gutter) 96px" }}>
        <p className="eyebrow" style={{ marginBottom: 20 }}>{current.eyebrow}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {items.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </section>
    </>
  );
}
