export const metadata = { title: "About — Yael Chen Zion" };

export default function About() {
  return (
    <section className="wrap" style={{ padding: "clamp(56px, 10vw, 96px) 0 96px" }}>
      <p className="eyebrow" style={{ marginBottom: 18 }}>About</p>
      <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", maxWidth: 700, marginBottom: 20 }}>
        A little content and copy, a little systems and strategy.
      </h1>
      <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 22, color: "var(--blue)", marginBottom: 48 }}>
        I&rsquo;m here to make your content work harder.
      </p>

      <div style={{ maxWidth: 680, display: "flex", flexDirection: "column", gap: 24, fontSize: 18, lineHeight: 1.75 }}>
        <p>
          I&rsquo;m a content strategist and copywriter with 6+ years of experience building brand voices,
          content systems, and the kind of copy that actually does something.
        </p>
        <p>
          My background is in art and design, which means I think in systems and aesthetics at the same
          time — I care as much about how something feels as whether it works. I&rsquo;ve spent my career
          at the intersection of creativity and strategy: building voice guides from scratch, scaling
          content through AI and automation, and making sure the writing holds up whether it&rsquo;s on a
          product page, a press release, or a chatbot.
        </p>
        <p>
          I believe brand voice is infrastructure, not decoration. And I love the challenge of building
          it — clearly, consistently, and at scale.
        </p>
      </div>

      <hr className="seam" style={{ margin: "56px 0" }} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, maxWidth: 680 }}>
        <div>
          <p className="eyebrow" style={{ marginBottom: 8 }}>Education</p>
          <p style={{ fontSize: 15 }}>
            BFA, Fashion Design (minor in Fine Art) — Parsons School of Design, New York
          </p>
        </div>
        <div>
          <p className="eyebrow" style={{ marginBottom: 8 }}>Based in</p>
          <p style={{ fontSize: 15 }}>San Carlos, California — SF Bay Area</p>
        </div>
        <div>
          <p className="eyebrow" style={{ marginBottom: 8 }}>Contact</p>
          <p style={{ fontSize: 15 }}>
            <a href="mailto:yaelchenzion@gmail.com" style={{ color: "var(--ink)" }}>yaelchenzion@gmail.com</a>
            <br />
            <a href="tel:6508155051" style={{ color: "var(--ink)" }}>(650) 815-5051</a>
          </p>
        </div>
      </div>
    </section>
  );
}
