import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(251, 249, 245, 0.9)",
        backdropFilter: "blur(6px)",
        borderBottom: "1.5px dashed var(--terracotta)",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px var(--gutter)",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 19,
            color: "var(--blue)",
            letterSpacing: "-0.01em",
          }}
        >
          Yael Chen Zion
        </Link>
        <nav style={{ display: "flex", gap: 28 }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="eyebrow"
              style={{ color: "var(--ink)" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
