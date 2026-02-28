import styles from "./DiamondFrame.module.css";

interface DiamondFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function DiamondFrame({
  children,
  className = "",
}: DiamondFrameProps): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${className}`.trim()}>
      <div className={styles.diamond} aria-hidden="true" />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
