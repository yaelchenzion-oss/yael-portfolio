export const metadata = { title: "Contact — Yael Chen Zion" };

export default function Contact() {
  return (
    <section className="wrap" style={{ padding: "clamp(56px, 10vw, 96px) 0 96px" }}>
      <p className="eyebrow" style={{ marginBottom: 18 }}>Get in touch</p>
      <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", maxWidth: 640, marginBottom: 32 }}>
        Let&rsquo;s talk about what your brand wants to say.
      </h1>
      <div className="piece" style={{ maxWidth: 480, padding: 32 }}>
        <p className="eyebrow" style={{ marginBottom: 10 }}>Email</p>
        <a href="mailto:yaelchenzion@gmail.com" style={{ fontSize: 20, fontFamily: "var(--font-display)" }}>
          yaelchenzion@gmail.com
        </a>
        <hr className="seam" style={{ margin: "24px 0" }} />
        <p className="eyebrow" style={{ marginBottom: 10 }}>Phone</p>
        <a href="tel:6508155051" style={{ fontSize: 18, fontFamily: "var(--font-display)" }}>
          (650) 815-5051
        </a>
        <hr className="seam" style={{ margin: "24px 0" }} />
        <p className="eyebrow" style={{ marginBottom: 10 }}>LinkedIn</p>
        <a
          href="https://linkedin.com/in/yaelchenzion"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: 16 }}
        >
          linkedin.com/in/yaelchenzion
        </a>
      </div>
    </section>
  );
}
