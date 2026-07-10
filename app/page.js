import Link from "next/link";
import { Orbit, WaveRule } from "./components/Motif";

const services = [
  {
    title: "brand voice development",
    body: "your brand has a personality. i help you find it, define it, and make sure it holds up across every channel — from your homepage headline to your ai chatbot responses. i've built voice systems for brands from the ground up, and i know how to make them actually stick.",
  },
  {
    title: "content strategy",
    body: "good content doesn't happen by accident. i build the systems, workflows, and frameworks that turn content into a real business channel — rooted in audience research, seo, and a clear point of view.",
  },
  {
    title: "marketing copywriting",
    body: "whether it's a product page, a landing page, or an ad that needs to stop someone mid-scroll — i write copy that sounds human and performs. strategy and creativity, working together.",
  },
  {
    title: "ux writing & content design",
    body: "the best ux copy is invisible. it moves people through an experience so naturally they don't notice it's working. i write with the full user journey in mind, collaborating closely with design and product teams.",
  },
];

export default function Home() {
  return (
    <>
      <section
        className="wrap hero-grid"
        style={{ padding: "clamp(56px, 10vw, 96px) var(--gutter) 40px" }}
      >
        <div>
          <p className="eyebrow" style={{ marginBottom: 20 }}>
            Copywriter · Content Strategist · San Francisco Bay Area
          </p>
          <h1 style={{ fontSize: "clamp(32px, 4.2vw, 46px)", lineHeight: 1.3, marginBottom: 28, maxWidth: 680 }}>
            hi, i&rsquo;m{" "}
            <span className="accent" style={{ fontSize: "1.15em" }}>
              yael
            </span>{" "}
            — i help brands figure out what they want to say, and make sure{" "}
            <span className="accent">every word, everywhere</span>, sounds like them.
          </h1>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/portfolio" className="btn">
              see my work
            </Link>
            <Link href="/about" className="btn btn-outline">
              about me
            </Link>
          </div>
        </div>
        <Orbit size={180} style={{ justifySelf: "center" }} className="hero-motif" />
      </section>

      <div className="wrap">
        <div
          style={{
            borderTop: "1px solid var(--ink)",
            borderBottom: "1px solid var(--ink)",
            padding: "16px 0",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 11, color: "var(--ink-soft)" }}>currently writing for</span>
          <span style={{ fontSize: 11, fontWeight: 600, color: "var(--ink)" }}>
            ashley digital (nectar · dreamcloud · awara · siena · newton baby)
          </span>
        </div>
      </div>

      <section className="wrap" style={{ padding: "72px var(--gutter)" }}>
        <p className="eyebrow" style={{ marginBottom: 12 }}>
          What I do
        </p>
        <WaveRule width={100} height={26} style={{ display: "block", marginBottom: 28 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 20 }}>
          {services.map((s) => (
            <div key={s.title} className="card">
              <p style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.3, marginBottom: 12 }}>{s.title}</p>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--ink-soft)" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ padding: "0 var(--gutter) 96px" }}>
        <div
          className="callout-grid"
          style={{
            borderRadius: 24,
            background: "var(--surface-warm)",
            padding: "clamp(28px, 5vw, 56px)",
          }}
        >
          <p style={{ fontSize: "clamp(18px, 2.2vw, 24px)", lineHeight: 1.6 }}>
            i&rsquo;m a content strategist and copywriter with 6+ years of experience building brand voices,
            content systems, and the kind of copy that actually does something. my background is in art and
            design, which means i think in systems and aesthetics at the same time.
          </p>
          <Link href="/about" className="btn" style={{ whiteSpace: "nowrap" }}>
            about me
          </Link>
        </div>
      </section>
    </>
  );
}
