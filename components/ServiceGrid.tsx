"use client";

import { useReveal } from "@/hooks/useReveal";
import { serviceGrid } from "@/config/services";
import { ServiceIcon } from "@/components/ServiceIcons";
import styles from "./ServiceGrid.module.css";

export function ServiceGrid(): JSX.Element {
  const { ref, visible } = useReveal();

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>What We Do</h2>
        <div className={`${styles.grid} ${visible ? styles.visible : ""}`}>
          {serviceGrid.map((service, i) => (
            <div
              key={service.title}
              className={styles.card}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <ServiceIcon name={service.icon} size={48} className={styles.icon} />
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.oneLiner}</p>
            </div>
          ))}
        </div>
        <div className={styles.linkWrap}>
          <a href="/services/" className={styles.link}>
            View All Services
            <span className={styles.arrow} aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
