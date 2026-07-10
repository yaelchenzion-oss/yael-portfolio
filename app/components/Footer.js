export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: "1px solid var(--ink)" }}>
      <div
        className="wrap"
        style={{
          padding: "28px var(--gutter)",
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontSize: 12, color: "var(--ink-soft)" }}>© {year} yael chen zion</p>
        <div style={{ display: "flex", gap: 20 }}>
          <a href="mailto:yaelchenzion@gmail.com" style={{ fontSize: 12, color: "var(--ink)" }}>
            email
          </a>
          <a
            href="https://linkedin.com/in/yaelchenzion"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: 12, color: "var(--ink)" }}
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
