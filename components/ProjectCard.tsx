import Image from "next/image";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import styles from "./ProjectCard.module.css";
import type { ProjectData } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectData;
  onClick: () => void;
  delay?: number;
}

const CARD_SIZES = "(max-width: 479px) 92vw, (max-width: 639px) 46vw, (max-width: 1024px) 23vw, 250px";

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
              <span className={styles.badge} aria-hidden="true">Before</span>
              <Image
                src={heroPair.before}
                alt={`${project.title} before photo, Bandon Oregon`}
                className={styles.img}
                width={800}
                height={600}
                sizes={CARD_SIZES}
                loading="lazy"
              />
            </div>
            <div className={styles.imgContainer}>
              <span className={`${styles.badge} ${styles.badgeAfter}`} aria-hidden="true">After</span>
              <Image
                src={heroPair.after}
                alt={`${project.title} after photo, Bandon Oregon`}
                className={styles.img}
                width={800}
                height={600}
                sizes={CARD_SIZES}
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <div className={styles.pair}>
            <div className={styles.imgContainer}>
              <span className={styles.badge} aria-hidden="true">Before</span>
              <PlaceholderImage aspectRatio="4 / 3" label="Project photo coming soon" />
            </div>
            <div className={styles.imgContainer}>
              <span className={`${styles.badge} ${styles.badgeAfter}`} aria-hidden="true">After</span>
              <PlaceholderImage aspectRatio="4 / 3" label="Project photo coming soon" />
            </div>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <span className={styles.categoryBadge} aria-hidden="true">{project.category}</span>
        <h2 className={styles.title}>{project.title}</h2>
      </div>
    </button>
  );
}
