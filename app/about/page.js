import { PinMark } from "../components/Motif";

export const metadata = { title: "About — Yael Chen Zion" };

const built = [
  "The end-to-end content system for Nectar, DreamCloud, and Newton Baby blogs, with SEO structure, metadata, and a custom AI illustration pipeline. Publishing cadence increased 5x as a result",
  "An AI-assisted content system that took the product marketing team's output from 20 to 100 pieces/month without adding headcount",
  "First-ever brand voice guides at Ashley Digital (formerly Resident Home), Mayven, and Haia — replacing freelanced, inconsistent messaging with a system that cut revision rounds and sharpened brand identity",
];

const facts = [
  {
    label: "Education",
    body: "BFA, fashion design (minor in fine art) — Parsons School of Design, New York",
  },
  {
    label: "Based in",
    body: "San Carlos, California — SF Bay Area",
  },
];

export default function About() {
  return (
    <>
      <section className="wrap" style={{ padding: "clamp(56px, 10vw, 96px) var(--gutter) 40px" }}>
        <p className="eyebrow" style={{ marginBottom: 16 }}>About</p>
        <h1 style={{ fontSize: "clamp(28px, 4.2vw, 44px)", lineHeight: 1.25, maxWidth: 680, marginBottom: 20 }}>
          a little <span className="accent">content and copy</span>, a little{" "}
          <span className="accent">systems and strategy</span>.
        </h1>

        <div style={{ maxWidth: 680, display: "flex", flexDirection: "column", gap: 22, fontSize: 17, lineHeight: 1.75 }}>
          <p>
            I&rsquo;m a content strategist and copywriter with 6+ years of experience building brand voices,
            content systems, and the kind of copy that actually does something.
          </p>
          <p>
            My background is in art and design, which means I think in systems and aesthetics at the same time
            — I care as much about how something feels as whether it works. I&rsquo;ve spent my career at the
            intersection of creativity and strategy: building voice guides from scratch, scaling content
            through AI and automation, and making sure the writing holds up whether it&rsquo;s on a product
            page, a press release, or a chatbot.
          </p>
          <p>
            I believe brand voice is infrastructure, not decoration. And I love the challenge of building it —
            clearly, consistently, and at scale.
          </p>
        </div>
      </section>

      <div className="wrap" style={{ padding: "0 var(--gutter) 40px" }}>
        <hr className="rule" />
      </div>

      <section className="wrap" style={{ padding: "0 var(--gutter) 40px" }}>
        <p className="eyebrow" style={{ marginBottom: 24 }}>What I&rsquo;ve built</p>
        <div style={{ maxWidth: 680, display: "flex", flexDirection: "column", gap: 20 }}>
          {built.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 14, fontSize: 16, lineHeight: 1.7 }}>
              <span style={{ color: "var(--ink-faint)", flexShrink: 0 }}>—</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="wrap" style={{ padding: "0 var(--gutter) 40px" }}>
        <hr className="rule" />
      </div>

      <section className="wrap" style={{ padding: "0 var(--gutter) 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, maxWidth: 720 }}>
          {facts.map((f) => (
            <div key={f.label} className="card" style={{ padding: 22 }}>
              <PinMark />
              <p className="eyebrow" style={{ marginBottom: 10 }}>{f.label}</p>
              <p style={{ fontSize: 14.5, lineHeight: 1.6 }}>{f.body}</p>
            </div>
          ))}
          <div className="card" style={{ padding: 22 }}>
            <PinMark />
            <p className="eyebrow" style={{ marginBottom: 10 }}>Contact</p>
            <p style={{ fontSize: 14.5, lineHeight: 1.6 }}>
              <a href="mailto:yaelchenzion@gmail.com" style={{ color: "var(--ink)" }}>yaelchenzion@gmail.com</a>
              <br />
              <a href="tel:6508155051" style={{ color: "var(--ink)" }}>(650) 815-5051</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
