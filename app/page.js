import Link from "next/link";

const services = [
  {
    title: "Brand Voice Development",
    body: "Your brand has a personality. I help you find it, define it, and make sure it holds up across every channel — from your homepage headline to your AI chatbot responses. I've built voice systems for brands from the ground up, and I know how to make them actually stick.",
  },
  {
    title: "Content Strategy",
    body: "Good content doesn't happen by accident. I build the systems, workflows, and frameworks that turn content into a real business channel — rooted in audience research, SEO, and a clear point of view.",
  },
  {
    title: "Marketing Copywriting",
    body: "Whether it's a product page, a landing page, or an ad that needs to stop someone mid-scroll — I write copy that sounds human and performs. Strategy and creativity, working together.",
  },
  {
    title: "UX Writing & Content Design",
    body: "The best UX copy is invisible. It moves people through an experience so naturally they don't notice it's working. I write with the full user journey in mind, collaborating closely with design and product teams.",
  },
];

export default function Home() {
  return (
    <>
      <section className="wrap" style={{ paddingTop: "clamp(72px, 14vw, 140px)", paddingBottom: 88 }}>
        <p className="eyebrow" style={{ marginBottom: 28 }}>
          Copywriter · Content Strategist · San Francisco Bay Area
        </p>
        <h1 style={{ fontSize: "clamp(36px, 6.5vw, 76px)", lineHeight: 1.1, marginBottom: 14 }}>
          Hi, I&rsquo;m Yael.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 6.5vw, 76px)",
            lineHeight: 1.15,
            maxWidth: 900,
            marginBottom: 44,
          }}
        >
          <span style={{ fontStyle: "italic", color: "var(--blue)" }}>
            I help brands figure out what they want to say
          </span>{" "}
          — and make sure every word, everywhere, sounds like them.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/portfolio" className="btn">See my work</Link>
          <Link href="/about" className="btn btn-accent">About me</Link>
        </div>
      </section>

      <hr className="seam" />

      <section className="wrap" style={{ padding: "80px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 40, flexWrap: "wrap", gap: 12 }}>
          <p className="eyebrow">What I do</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {services.map((s) => (
            <div key={s.title} className="piece">
              <h3 style={{ fontSize: 20, marginBottom: 12 }}>{s.title}</h3>
              <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.7 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="seam" />

      <section className="wrap" style={{ padding: "80px 0 100px" }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(22px, 3.2vw, 34px)",
            lineHeight: 1.5,
            maxWidth: 720,
            marginBottom: 40,
          }}
        >
          I&rsquo;m a content strategist and copywriter with 6+ years of experience building brand voices,
          content systems, and the kind of copy that actually does something. My background is in art
          and design, which means I think in systems and aesthetics at the same time.
        </p>
        <Link href="/about" className="btn">About me</Link>
      </section>
    </>
  );
}
