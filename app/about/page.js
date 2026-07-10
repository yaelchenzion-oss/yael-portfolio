import { PinMark } from "../components/Motif";

export const metadata = { title: "About — Yael Chen Zion" };

const facts = [
  {
    label: "Education",
    body: "bfa, fashion design (minor in fine art) — parsons school of design, new york",
  },
  {
    label: "Based in",
    body: "san carlos, california — sf bay area",
  },
];

export default function About() {
  return (
    <>
      <section className="wrap" style={{ padding: "clamp(56px, 10vw, 96px) var(--gutter) 40px" }}>
        <p className="eyebrow" style={{ marginBottom: 16 }}>About</p>
        <h1 style={{ fontSize: "clamp(28px, 4.2vw, 44px)", lineHeight: 1.25, maxWidth: 680, marginBottom: 20 }}>
          a little content and copy, a little <span className="accent">systems and strategy</span>.
        </h1>

        <div style={{ maxWidth: 680, display: "flex", flexDirection: "column", gap: 22, fontSize: 17, lineHeight: 1.75 }}>
          <p>
            i&rsquo;m a content strategist and copywriter with 6+ years of experience building brand voices,
            content systems, and the kind of copy that actually does something.
          </p>
          <p>
            my background is in art and design, which means i think in systems and aesthetics at the same time
            — i care as much about how something feels as whether it works. i&rsquo;ve spent my career at the
            intersection of creativity and strategy: building voice guides from scratch, scaling content
            through ai and automation, and making sure the writing holds up whether it&rsquo;s on a product
            page, a press release, or a chatbot.
          </p>
          <p>
            i believe brand voice is infrastructure, not decoration. and i love the challenge of building it —
            clearly, consistently, and at scale.
          </p>
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
