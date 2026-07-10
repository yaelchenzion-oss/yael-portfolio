import { PinMark } from "../components/Motif";

export const metadata = { title: "Contact — Yael Chen Zion" };

export default function Contact() {
  return (
    <section className="wrap" style={{ padding: "clamp(56px, 10vw, 96px) var(--gutter) 96px" }}>
      <p className="eyebrow" style={{ marginBottom: 16 }}>Get in touch</p>
      <h1 style={{ fontSize: "clamp(28px, 4.2vw, 44px)", lineHeight: 1.25, maxWidth: 620, marginBottom: 40 }}>
        let&rsquo;s talk about what your brand wants to <span className="accent">say</span>.
      </h1>

      <div className="card" style={{ padding: 32, maxWidth: 460 }}>
        <PinMark />

        <p className="eyebrow" style={{ marginBottom: 10 }}>Email</p>
        <a href="mailto:yaelchenzion@gmail.com" style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>
          yaelchenzion@gmail.com
        </a>

        <hr className="rule" style={{ margin: "24px 0" }} />

        <p className="eyebrow" style={{ marginBottom: 10 }}>Phone</p>
        <a href="tel:6508155051" style={{ fontFamily: "var(--font-display)", fontSize: 18 }}>
          (650) 815-5051
        </a>

        <hr className="rule" style={{ margin: "24px 0" }} />

        <p className="eyebrow" style={{ marginBottom: 10 }}>LinkedIn</p>
        <a href="https://linkedin.com/in/yaelchenzion" target="_blank" rel="noreferrer" style={{ fontSize: 15 }}>
          linkedin.com/in/yaelchenzion
        </a>

        <hr className="rule" style={{ margin: "24px 0" }} />

        <p className="eyebrow" style={{ marginBottom: 10 }}>Resume</p>
        <a href="/Yael-Chen-Zion-Resume.docx" download className="btn" style={{ padding: "10px 20px" }}>
          download resume
        </a>
      </div>
    </section>
  );
}
