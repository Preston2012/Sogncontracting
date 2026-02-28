import styles from "./SectionDivider.module.css";

interface SectionDividerProps {
  variant?: "diagonal" | "rule" | "ruleGreen";
  flip?: boolean;
  className?: string;
}

export function SectionDivider({
  variant = "diagonal",
  flip = false,
  className = "",
}: SectionDividerProps): JSX.Element {
  return (
    <div
      className={`${styles.divider} ${styles[variant]} ${flip ? styles.flip : ""} ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
