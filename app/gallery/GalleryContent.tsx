"use client";

import { useState, useMemo } from "react";
import { projects } from "@/config/projects";
import type { CategoryId, ProjectData } from "@/config/projects";
import { features } from "@/config/features";
import { FilterBar } from "@/components/FilterBar";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectGalleryModal } from "@/components/ProjectGalleryModal";
import { ShowcaseProject } from "@/components/ShowcaseProject";
import styles from "./page.module.css";

export function GalleryContent(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<CategoryId>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
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

  return (
    <>
      {/* Portfolio in progress note */}
      {allPlaceholders && (
        <div className="container">
          <p className={styles.inProgress}>
            Our project portfolio is being updated with photos. Check back soon to see before and after transformations, or{" "}
            <a href="/#contact" className={styles.inProgressLink}>contact us</a> to discuss your project.
          </p>
        </div>
      )}
      {/* Filter */}
      <div className="container">
        <FilterBar active={activeFilter} onChange={setActiveFilter} />
      </div>

      {/* Showcase projects */}
      {showcaseProjects.length > 0 && (
        <section className={styles.showcaseSection}>
          <div className="container">
            {showcaseProjects.map((project) => (
              <ShowcaseProject key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Grid */}
      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.grid}>
            {standardProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
                delay={i * 50}
              />
            ))}
          </div>

          {standardProjects.length === 0 && showcaseProjects.length === 0 && (
            <p className={styles.empty}>No projects in this category yet. Check back soon.</p>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectGalleryModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
