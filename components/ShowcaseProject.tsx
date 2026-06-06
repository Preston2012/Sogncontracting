"use client";

import Image from "next/image";
import { projectImages } from "@/config/projects";
import styles from "./ShowcaseProject.module.css";
import type { LightboxImage, ProjectData } from "@/config/projects";

interface ShowcaseProjectProps {
  project: ProjectData;
  onOpen: (images: LightboxImage[], index: number) => void;
  priority?: boolean;
}

const HERO_SIZES = "(max-width: 479px) 92vw, (max-width: 1080px) 48vw, 520px";
const PROGRESS_SIZES = "(max-width: 479px) 46vw, 220px";

export function ShowcaseProject({ project, onOpen, priority = false }: ShowcaseProjectProps): JSX.Element {
  const hero = project.pairs[0];
  const images = projectImages(project);

  function open(src: string): void {
    const i = images.findIndex((im) => im.src === src);
    onOpen(images, i < 0 ? 0 : i);
  }

  return (
    <section className={styles.showcase} aria-labelledby={`${project.id}-title`}>
      <header className={styles.head}>
        <span className={styles.categoryBadge}>{project.category}</span>
        <h2 id={`${project.id}-title`} className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.description}</p>
      </header>

      <div className={styles.heroPair}>
        <button
          type="button"
          className={styles.heroItem}
          onClick={() => open(hero.before)}
          aria-label={`View ${project.title} before photo full size`}
        >
          <span className={styles.badge} aria-hidden="true">Before</span>
          <Image
            src={hero.before}
            alt={`${project.title} before photo, Bandon Oregon`}
            className={styles.heroImg}
            width={1000}
            height={750}
            sizes={HERO_SIZES}
            quality={62}
            priority={priority}
          />
        </button>
        <button
          type="button"
          className={styles.heroItem}
          onClick={() => open(hero.after)}
          aria-label={`View ${project.title} after photo full size`}
        >
          <span className={`${styles.badge} ${styles.badgeAfter}`} aria-hidden="true">After</span>
          <Image
            src={hero.after}
            alt={`${project.title} after photo, Bandon Oregon`}
            className={styles.heroImg}
            width={1000}
            height={750}
            sizes={HERO_SIZES}
            quality={62}
            loading="lazy"
          />
        </button>
      </div>

      {project.progress && project.progress.length > 0 && (
        <div className={styles.progressSection}>
          <h3 className={styles.progressTitle}>Build Progress</h3>
          <div className={styles.progressGrid}>
            {project.progress.map((src, i) => (
              <button
                key={src}
                type="button"
                className={styles.progressButton}
                onClick={() => open(src)}
                aria-label={`View ${project.title} build progress photo ${i + 1} full size`}
              >
                <Image
                  src={src}
                  alt={`${project.title} build progress step ${i + 1}, Bandon Oregon`}
                  className={styles.progressImg}
                  width={600}
                  height={450}
                  sizes={PROGRESS_SIZES}
                  quality={62}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
