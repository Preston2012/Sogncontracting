"use client";

import { useReveal } from "@/hooks/useReveal";
import { ServiceIcon } from "@/components/ServiceIcons";
import styles from "./ServiceDetailCard.module.css";
import type { ServiceData } from "@/config/services";

interface ServiceDetailCardProps {
  service: ServiceData;
  index: number;
}

export function ServiceDetailCard({
  service,
  index,
}: ServiceDetailCardProps): JSX.Element {
  const { ref, visible } = useReveal();
  const isAlt = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isAlt ? styles.alt : ""} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.header}>
        <ServiceIcon name={service.icon} size={48} className={styles.icon} />
        <h2 className={styles.title}>{service.title}</h2>
      </div>

      <div className={styles.body}>
        <p className={styles.description}>{service.description}</p>

        <div className={styles.scopeBox}>
          <span className={styles.scopeTitle}>{service.scopeTitle}</span>
          <ul className={styles.scopeList}>
            {service.scopeItems.map((item, i) => (
              <li key={i} className={styles.scopeItem}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className={styles.footer}>{service.footerNote}</p>
    </div>
  );
}
