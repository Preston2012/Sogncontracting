import { PlaceholderImage } from "@/components/PlaceholderImage";
import styles from "./ProjectCard.module.css";
import type { ProjectData } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectData;
  onClick: () => void;
  delay?: number;
}

export function ProjectCard({
  project,
  onClick,
  delay = 0,
}: ProjectCardProps): JSX.Element {
  const heroPair = project.pairs[0];

  return (
    <button
      className={styles.card}
      onClick={onClick}
      style={{ transitionDelay: `${delay}ms` }}
      aria-label={`View ${project.title} gallery`}
    >
      <div className={styles.imageWrap}>
        {project.visible ? (
          <div className={styles.pair}>
            <div className={styles.imgContainer}>
              <span className={styles.badge}>Before</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroPair.before}
                alt={`${project.title} before photo, Bandon Oregon`}
                className={styles.img}
                loading="lazy"
              />
            </div>
            <div className={styles.imgContainer}>
              <span className={`${styles.badge} ${styles.badgeAfter}`}>After</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroPair.after}
                alt={`${project.title} after photo, Bandon Oregon`}
                className={styles.img}
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <div className={styles.pair}>
            <div className={styles.imgContainer}>
              <span className={styles.badge}>Before</span>
              <PlaceholderImage aspectRatio="4 / 3" label="Project photo coming soon" />
            </div>
            <div className={styles.imgContainer}>
              <span className={`${styles.badge} ${styles.badgeAfter}`}>After</span>
              <PlaceholderImage aspectRatio="4 / 3" label="Project photo coming soon" />
            </div>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <span className={styles.categoryBadge}>{project.category}</span>
        <h3 className={styles.title}>{project.title}</h3>
      </div>
    </button>
  );
}
