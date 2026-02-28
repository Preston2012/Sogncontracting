import styles from "./PlaceholderImage.module.css";

interface PlaceholderImageProps {
  aspectRatio?: string;
  label?: string;
  className?: string;
}

export function PlaceholderImage({
  aspectRatio = "4 / 3",
  label = "Photo Coming Soon",
  className = "",
}: PlaceholderImageProps): JSX.Element {
  return (
    <div
      className={`${styles.placeholder} ${className}`.trim()}
      style={{ aspectRatio }}
      role="img"
      aria-label={label}
    >
      {/* Sogn SC mark */}
      <svg
        viewBox="0 0 120 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.mark}
        aria-hidden="true"
      >
        <path
          d="M20 70 L20 40 L60 10 L100 40 L100 70"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <text
          x="60"
          y="55"
          textAnchor="middle"
          fill="currentColor"
          fontSize="18"
          fontWeight="600"
          fontFamily="sans-serif"
        >
          SC
        </text>
      </svg>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
