"use client";

import { useReveal } from "@/hooks/useReveal";
import { site } from "@/config/site";
import { DiamondFrame } from "@/components/DiamondFrame";
import styles from "./AboutSection.module.css";

export function AboutSection(): JSX.Element {
  const { ref, visible } = useReveal();

  return (
    <section className={styles.section} id="about" ref={ref}>
      <div className={`container ${styles.inner} ${visible ? styles.visible : ""}`}>
        {/* Text column */}
        <div className={styles.text}>
          <h2 className={styles.title}>About Sogn Contracting</h2>
          <p>
            Sogn Contracting has been building across the Southern Oregon Coast since 1995. What started as one carpenter with a truck has grown into a full-service residential and commercial contracting company. Three decades later, the mission hasn&apos;t changed.
          </p>
          <p>
            We&apos;re licensed, bonded, and insured. We handle everything from custom home builds to kitchen remodels to commercial renovations. Every project gets the same level of care: honest communication, quality materials, and work we stand behind.
          </p>
          <p>
            Based in Bandon, Oregon. Proudly serving Coos County and the surrounding communities.
          </p>
          <p className={styles.values}>
            Faith, integrity, and craftsmanship guide every project we take on.
          </p>
        </div>

        {/* Stats column */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <DiamondFrame>
              <span className={styles.statNumber}>{site.yearsInBusiness}</span>
              <span className={styles.statLabel}>Years in Business</span>
            </DiamondFrame>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statBadge}>CCB# {site.credentials.ccb}</span>
            <span className={styles.statLabel}>Licensed Contractor</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statCheck} aria-hidden="true">&#10003;</span>
            <span className={styles.statLabel}>Bonded &amp; Insured</span>
          </div>
        </div>
      </div>
    </section>
  );
}
