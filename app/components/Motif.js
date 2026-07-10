/* Construction-mark motif family — a smooth, regular hand:
   equal-amplitude waves, true circles, straight segments.
   Colors rotate through the three accents. Use at most one
   mark per section. */

// Orbit — hero / section anchor: dashed circle + teal wave.
export function Orbit({ size = 180, style, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 130 130" fill="none" style={style} className={className}>
      <circle cx="65" cy="65" r="46" stroke="var(--terracotta)" strokeWidth="1.5" strokeDasharray="4 5" />
      <path
        d="M35,65 C40,55 45,55 50,65 C55,75 60,75 65,65 C70,55 75,55 80,65 C85,75 90,75 95,65"
        stroke="var(--teal)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Wave rule — emphasize one word / stand in for a measure.
export function WaveRule({ width = 100, height = 26, color = "var(--blue)", style }) {
  return (
    <svg width={width} height={height} viewBox="0 0 136 40" fill="none" style={style}>
      <path
        d="M5,22 C11,10 17,10 23,22 C29,34 35,34 41,22 C47,10 53,10 59,22 C65,34 71,34 77,22 C83,10 89,10 95,22 C101,34 107,34 113,22 C119,10 125,10 131,22"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Pin — callout / corner flag. Sits at a card's top-left corner.
export function PinMark({ color = "var(--terracotta)", style }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      style={{ position: "absolute", top: -10, left: -10, ...style }}
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="3.5" fill={color} />
      <line x1="8" y1="8" x2="22" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
