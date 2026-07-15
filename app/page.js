import Link from "next/link";
import { WaveRule } from "./components/Motif";
import HeroCtas from "./components/HeroCtas";

const services = [
  {
    title: "brand voice development",
    body: "Your brand has a personality. I help you find it, define it, and make sure it holds up across every channel — from your homepage headline to your AI chatbot responses. I've built voice systems for brands from the ground up, and I know how to make them actually stick.",
  },
  {
    title: "ai & automation systems",
    body: "I don't just use AI to write faster, I build the infrastructure that makes it work. Voice agents, automated content pipelines, knowledge bases that plug into a whole team's workflow — I design the systems that let AI produce on-brand work at scale, not just review it after the fact.",
  },
  {
    title: "content strategy & copywriting",
    body: "Good content doesn't happen by accident. I turn your content into a real business channel, then write marketing copy, landing pages, and product pages that perform. Everything I do is rooted in insights, SEO, and a clear point of view.",
  },
  {
    title: "ux writing & content design",
    body: "The best UX copy is invisible. It moves people through an experience so naturally they don't notice it's working. I write with the full user journey in mind, collaborating closely with design and product teams.",
  },
];

export default function Home() {
  return (
    <>
      <section className="wrap hero-grid hero">
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
          <HeroCtas className="hero-cta hero-cta--inline" />
        </div>
        <div className="hero-photo">
          <div className="hero-photo-circle">
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: -12,
                borderRadius: "50%",
                border: "1.5px dashed var(--terracotta)",
              }}
            />
            <img
              src="/images/yael-portrait.jpg"
              alt="Yael Chen Zion"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center 50%",
                display: "block",
              }}
            />
          </div>
          <HeroCtas className="hero-cta hero-cta--stacked" />
        </div>
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
        <div className="row-4">
          {services.map((s) => (
            <div key={s.title} className="card">
              <p style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.3, marginBottom: 12, whiteSpace: "pre-line" }}>{s.title}</p>
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
            I&rsquo;ve spent 6+ years making brand voice scalable. So every headline, email, and automated
            response sounds like you wrote it.
          </p>
          <Link href="/about" className="btn" style={{ whiteSpace: "nowrap" }}>
            about me
          </Link>
        </div>
      </section>
    </>
  );
}
