export default function Grainline({ label }) {
  return (
    <span className="grainline">
      <svg width="34" height="10" viewBox="0 0 34 10" fill="none">
        <line x1="2" y1="5" x2="28" y2="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M28 1L32 5L28 9" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M6 1L2 5L6 9" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
      {label}
    </span>
  );
}
