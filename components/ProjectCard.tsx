import Image from "next/image";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { projectImages } from "@/config/projects";
import styles from "./ProjectCard.module.css";
import type { LightboxImage, ProjectData } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectData;
  onOpen: (images: LightboxImage[], index: number) => void;
  delay?: number;
}

const CARD_SIZES = "(max-width: 479px) 92vw, (max-width: 639px) 46vw, (max-width: 1024px) 23vw, 250px";

export function ProjectCard({ project, onOpen, delay = 0 }: ProjectCardProps): JSX.Element {
  const heroPair = project.pairs[0];
  const images = project.visible ? projectImages(project) : [];

  function open(src: string): void {
    const i = images.findIndex((im) => im.src === src);
    onOpen(images, i < 0 ? 0 : i);
  }

  return (
    <article className={styles.card} style={{ transitionDelay: `${delay}ms` }}>
      <div className={styles.imageWrap}>
        {project.visible ? (
          <div className={styles.pair}>
            <button
              type="button"
              className={styles.imgButton}
              onClick={() => open(heroPair.before)}
              aria-label={`View ${project.title} before photo full size`}
            >
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
            </button>
            <button
              type="button"
              className={styles.imgButton}
              onClick={() => open(heroPair.after)}
              aria-label={`View ${project.title} after photo full size`}
            >
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
            </button>
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
    </article>
  );
}
