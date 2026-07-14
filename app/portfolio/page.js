import { brandVoiceWork, copyWork, systemsWork } from "../lib/portfolioData";
import PortfolioCollections from "../components/PortfolioCollections";

export const metadata = { title: "Portfolio — Yael Chen Zion" };

// Brand Voice display order — lead with the anatomy-of-a-guide piece.
const BRAND_VOICE_ORDER = ["resident-brand-voice", "dreamcloud-website", "mayven-website"];
const brandVoice = [
  ...BRAND_VOICE_ORDER.map((slug) => brandVoiceWork.find((p) => p.slug === slug)).filter(Boolean),
  ...brandVoiceWork.filter((p) => !BRAND_VOICE_ORDER.includes(p.slug)),
];

export default function Portfolio() {
  return (
    <>
      <section className="wrap" style={{ padding: "clamp(56px, 10vw, 96px) var(--gutter) 40px" }}>
        <p className="eyebrow" style={{ marginBottom: 16 }}>Portfolio</p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.25, maxWidth: 640, marginBottom: 16 }}>
          work that <span className="accent">speaks for itself</span>.
        </h1>
        <p style={{ color: "var(--ink-soft)", fontSize: 16, maxWidth: 560 }}>
          brand voice, creative strategy, and the AI systems built to scale it.
        </p>
      </section>

      <PortfolioCollections brandVoice={brandVoice} systems={systemsWork} copy={copyWork} />
    </>
  );
}
