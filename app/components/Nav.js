"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/portfolio", label: "portfolio" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

const RESUME_HREF = "/Yael-Chen-Zion-Resume.pdf";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Nav() {
  const pathname = usePathname() || "/";

  return (
    <header style={{ background: "var(--paper)", borderBottom: "1px solid var(--line)" }}>
      <div
        className="wrap nav-bar"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px var(--gutter)",
        }}
      >
        <Link
          href="/"
          className="nav-logo"
          style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16, color: "var(--ink)" }}
        >
          yael chen zion
        </Link>
        <nav className="nav-links" style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {links.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={active ? "nav-pill nav-pill-active" : "nav-pill"}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: active ? "var(--ink)" : "var(--ink-soft)",
                }}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href={RESUME_HREF}
            download
            className="nav-pill nav-pill-accent"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: 12,
              color: "var(--terracotta)",
            }}
          >
            resume
          </a>
        </nav>
      </div>
    </header>
  );
}
