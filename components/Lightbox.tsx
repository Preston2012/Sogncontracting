"use client";

import { useCallback, useEffect, useRef } from "react";
import styles from "./Lightbox.module.css";
import type { LightboxImage } from "@/config/projects";

interface LightboxProps {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps): JSX.Element {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);

  const count = images.length;
  const current = images[index];
  const hasPrev = index > 0;
  const hasNext = index < count - 1;

  const goNext = useCallback(() => {
    if (index < count - 1) onNavigate(index + 1);
  }, [count, index, onNavigate]);

  const goPrev = useCallback(() => {
    if (index > 0) onNavigate(index - 1);
  }, [index, onNavigate]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        goNext();
      } else if (e.key === "ArrowLeft") {
        goPrev();
      } else if (e.key === "Tab" && overlayRef.current) {
        const focusable = Array.from(
          overlayRef.current.querySelectorAll<HTMLElement>("button")
        );
        if (focusable.length === 0) return;
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
    [onClose, goNext, goPrev]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [handleKeyDown]);

  function handleClick(): void {
    if (swiped.current) {
      swiped.current = false;
      return;
    }
    onClose();
  }

  function onTouchStart(e: React.TouchEvent): void {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
    swiped.current = false;
  }

  function onTouchEnd(e: React.TouchEvent): void {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
      swiped.current = true;
      if (dx < 0) goNext();
      else goPrev();
    } else if (dy > 90 && dy > Math.abs(dx)) {
      swiped.current = true;
      onClose();
    }
  }

  function stop(e: React.MouseEvent): void {
    e.stopPropagation();
  }

  if (!current) {
    return <></>;
  }

  return (
    <div
      className={styles.overlay}
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={handleClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        ref={closeRef}
        type="button"
        className={styles.close}
        onClick={(e) => { stop(e); onClose(); }}
        aria-label="Close photo viewer"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {hasPrev && (
        <button
          type="button"
          className={`${styles.nav} ${styles.prev}`}
          onClick={(e) => { stop(e); goPrev(); }}
          aria-label="Previous photo"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      <figure className={styles.stage}>
        <div className={styles.imageWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={current.src}
            src={current.src}
            alt={current.caption || "Project photo"}
            className={styles.image}
          />
        </div>
        <figcaption className={styles.caption}>
          {current.caption ? <span className={styles.captionText}>{current.caption}</span> : null}
          {count > 1 ? <span className={styles.counter}>{index + 1} / {count}</span> : null}
        </figcaption>
      </figure>

      {hasNext && (
        <button
          type="button"
          className={`${styles.nav} ${styles.next}`}
          onClick={(e) => { stop(e); goNext(); }}
          aria-label="Next photo"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
