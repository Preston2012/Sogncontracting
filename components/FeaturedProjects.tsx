"use client";

import { useReveal } from "@/hooks/useReveal";
import { projects } from "@/config/projects";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import styles from "./FeaturedProjects.module.css";

export function FeaturedProjects(): JSX.Element {
  const { ref, visible } = useReveal();
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>Our Work</h2>

        <div className={`${styles.grid} ${visible ? styles.visible : ""}`}>
          {featured.map((project, i) => (
            <a
              key={project.id}
              href="/gallery/"
              className={styles.card}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={styles.imageWrap}>
                {project.visible ? (
                  <div className={styles.pair}>
                    <div className={styles.imgContainer}>
                      <span className={styles.badge}>Before</span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.pairs[0].before}
                        alt={`${project.title} before photo`}
                        className={styles.img}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.imgContainer}>
                      <span className={`${styles.badge} ${styles.badgeAfter}`}>After</span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.pairs[0].after}
                        alt={`${project.title} after photo`}
                        className={styles.img}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ) : (
                  <div className={styles.pair}>
                    <div className={styles.imgContainer}>
                      <span className={styles.badge}>Before</span>
                      <PlaceholderImage aspectRatio="4 / 3" label={`${project.title} before photo coming soon`} />
                    </div>
                    <div className={styles.imgContainer}>
                      <span className={`${styles.badge} ${styles.badgeAfter}`}>After</span>
                      <PlaceholderImage aspectRatio="4 / 3" label={`${project.title} after photo coming soon`} />
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.cardContent}>
                <span className={styles.categoryBadge}>{project.category}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.linkWrap}>
          <a href="/gallery/" className={styles.link}>
            See All Projects
            <span className={styles.arrow} aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
