export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: "1.5px dashed var(--terracotta)", marginTop: 120 }}>
      <div
        className="wrap"
        style={{
          padding: "36px var(--gutter) 48px",
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p className="eyebrow" style={{ color: "var(--ink-faint)" }}>
          © {year} Yael Chen Zion
        </p>
        <div style={{ display: "flex", gap: 24 }}>
          <a className="eyebrow" href="mailto:yaelchenzion@gmail.com" style={{ color: "var(--ink)" }}>
            Email
          </a>
          <a
            className="eyebrow"
            href="https://linkedin.com/in/yaelchenzion"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--ink)" }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
