"use client";

import Image from "next/image";
import { useState } from "react";
import { ProjectGalleryModal } from "@/components/ProjectGalleryModal";
import styles from "./ShowcaseProject.module.css";
import type { ProjectData } from "@/config/projects";

interface ShowcaseProjectProps {
  project: ProjectData;
  priority?: boolean;
}

const HERO_SIZES = "(max-width: 479px) 92vw, (max-width: 1080px) 48vw, 520px";
const PROGRESS_SIZES = "(max-width: 479px) 46vw, 220px";

export function ShowcaseProject({ project, priority = false }: ShowcaseProjectProps): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false);
  const hero = project.pairs[0];

  return (
    <section className={styles.showcase} aria-labelledby={`${project.id}-title`}>
      <header className={styles.head}>
        <span className={styles.categoryBadge}>{project.category}</span>
        <h2 id={`${project.id}-title`} className={styles.title}>
          {project.title}
        </h2>
        <p className={styles.description}>{project.description}</p>
      </header>

      <button
        type="button"
        className={styles.heroPair}
        onClick={() => setModalOpen(true)}
        aria-label={`Open ${project.title} full gallery`}
      >
        <div className={styles.heroItem}>
          <span className={styles.badge} aria-hidden="true">Before</span>
          <Image
            src={hero.before}
            alt={`${project.title} before photo, Bandon Oregon`}
            className={styles.heroImg}
            width={1000}
            height={750}
            sizes={HERO_SIZES}
            priority={priority}
          />
        </div>
        <div className={styles.heroItem}>
          <span className={`${styles.badge} ${styles.badgeAfter}`} aria-hidden="true">After</span>
          <Image
            src={hero.after}
            alt={`${project.title} after photo, Bandon Oregon`}
            className={styles.heroImg}
            width={1000}
            height={750}
            sizes={HERO_SIZES}
            priority={priority}
          />
        </div>
      </button>

      {project.progress && project.progress.length > 0 && (
        <div className={styles.progressSection}>
          <h3 className={styles.progressTitle}>Build Progress</h3>
          <div className={styles.progressGrid}>
            {project.progress.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`${project.title} build progress step ${i + 1}, Bandon Oregon`}
                className={styles.progressImg}
                width={600}
                height={450}
                sizes={PROGRESS_SIZES}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      )}

      {modalOpen && (
        <ProjectGalleryModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </section>
  );
}
