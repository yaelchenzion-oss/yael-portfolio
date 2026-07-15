"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";

// Hero CTA pair, rendered both inline (desktop) and below the portrait
// (mobile) — see the .hero-cta variants in globals.css. Clicks fire a
// custom "cta_click" Vercel Analytics event so we can see which one pulls.
export default function HeroCtas({ className }) {
  return (
    <div className={className}>
      <Link
        href="/portfolio"
        className="btn"
        onClick={() => track("cta_click", { cta: "see my work" })}
      >
        see my work
      </Link>
      <Link
        href="/about"
        className="btn btn-outline"
        onClick={() => track("cta_click", { cta: "about me" })}
      >
        about me
      </Link>
    </div>
  );
}
