import styles from "./RooflineMotif.module.css";

interface RooflineMotifProps {
  className?: string;
  opacity?: number;
}

export function RooflineMotif({
  className = "",
  opacity = 0.04,
}: RooflineMotifProps): JSX.Element {
  return (
    <div
      className={`${styles.motif} ${className}`.trim()}
      aria-hidden="true"
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 800 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Left house */}
        <path
          d="M80 240 L80 160 L200 80 L320 160 L320 240"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        {/* Left window */}
        <rect x="140" y="170" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="160" y1="170" x2="160" y2="210" stroke="currentColor" strokeWidth="1.5" />
        <line x1="140" y1="190" x2="180" y2="190" stroke="currentColor" strokeWidth="1.5" />
        {/* Center house (taller) */}
        <path
          d="M220 240 L220 120 L400 20 L580 120 L580 240"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        {/* Right house */}
        <path
          d="M480 240 L480 160 L600 80 L720 160 L720 240"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        {/* Right window */}
        <rect x="560" y="170" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="580" y1="170" x2="580" y2="210" stroke="currentColor" strokeWidth="1.5" />
        <line x1="560" y1="190" x2="600" y2="190" stroke="currentColor" strokeWidth="1.5" />
        {/* Ground line */}
        <line x1="40" y1="240" x2="760" y2="240" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  );
}
