"use client";

import { useState, useMemo } from "react";
import { projects } from "@/config/projects";
import type { CategoryId, LightboxImage } from "@/config/projects";
import { features } from "@/config/features";
import { FilterBar } from "@/components/FilterBar";
import { ProjectCard } from "@/components/ProjectCard";
import { ShowcaseProject } from "@/components/ShowcaseProject";
import { Lightbox } from "@/components/Lightbox";
import styles from "./page.module.css";

interface LightboxState {
  images: LightboxImage[];
  index: number;
}

export function GalleryContent(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<CategoryId>("all");
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const allPlaceholders = projects.every((p) => !p.visible);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const showcaseProjects = useMemo(
    () => (features.showcase ? filtered.filter((p) => p.showcase && p.visible) : []),
    [filtered]
  );

  const standardProjects = useMemo(
    () => (features.showcase ? filtered.filter((p) => !p.showcase) : filtered),
    [filtered]
  );

  function openLightbox(images: LightboxImage[], index: number): void {
    if (images.length === 0) return;
    setLightbox({ images, index });
  }

  return (
    <>
      {allPlaceholders && (
        <div className="container">
          <p className={styles.inProgress}>
            Our project portfolio is being updated with photos. Check back soon to see before and after transformations, or{" "}
            <a href="/#contact" className={styles.inProgressLink}>contact us</a> to discuss your project.
          </p>
        </div>
      )}

      <div className="container">
        <FilterBar active={activeFilter} onChange={setActiveFilter} />
      </div>

      {showcaseProjects.length > 0 && (
        <section className={styles.showcaseSection}>
          <div className="container">
            {showcaseProjects.map((project, i) => (
              <ShowcaseProject key={project.id} project={project} onOpen={openLightbox} priority={i === 0} />
            ))}
          </div>
        </section>
      )}

      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.grid}>
            {standardProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} onOpen={openLightbox} delay={i * 50} />
            ))}
          </div>

          {standardProjects.length === 0 && showcaseProjects.length === 0 && (
            <p className={styles.empty}>No projects in this category yet. Check back soon.</p>
          )}
        </div>
      </section>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNavigate={(index) => setLightbox((s) => (s ? { ...s, index } : s))}
        />
      )}
    </>
  );
}
