"use client";

import { useEffect, useRef, useCallback } from "react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import styles from "./ProjectGalleryModal.module.css";
import type { ProjectData } from "@/config/projects";

interface ProjectGalleryModalProps {
  project: ProjectData;
  onClose: () => void;
}

export function ProjectGalleryModal({
  project,
  onClose,
}: ProjectGalleryModalProps): JSX.Element {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      // Focus trap
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  function handleBackdropClick(e: React.MouseEvent): void {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={styles.overlay}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} gallery`}
      ref={modalRef}
    >
      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.description}>{project.description}</p>
          </div>
          <button
            ref={closeRef}
            className={styles.close}
            onClick={onClose}
            aria-label="Close gallery"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Pairs */}
        <div className={styles.pairs}>
          {project.pairs.map((pair, i) => (
            <div key={i} className={styles.pairSection}>
              {pair.label && (
                <span className={styles.pairLabel}>{pair.label}</span>
              )}
              <div className={styles.pairGrid}>
                <div className={styles.pairItem}>
                  <span className={styles.badge}>Before</span>
                  {project.visible ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={pair.before}
                      alt={`${project.title} before, ${pair.label || `angle ${i + 1}`}`}
                      className={styles.img}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  ) : (
                    <PlaceholderImage aspectRatio="4 / 3" label="Photo coming soon" />
                  )}
                </div>
                <div className={styles.pairItem}>
                  <span className={`${styles.badge} ${styles.badgeAfter}`}>After</span>
                  {project.visible ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={pair.after}
                      alt={`${project.title} after, ${pair.label || `angle ${i + 1}`}`}
                      className={styles.img}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  ) : (
                    <PlaceholderImage aspectRatio="4 / 3" label="Photo coming soon" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extras (after-only beauty shots) */}
        {project.extras && project.extras.length > 0 && project.visible && (
          <div className={styles.extras}>
            <span className={styles.extrasLabel}>Additional Photos</span>
            <div className={styles.extrasGrid}>
              {project.extras.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} detail photo ${i + 1}`}
                  className={styles.img}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
