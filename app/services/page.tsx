import type { Metadata } from "next";
import { site } from "@/config/site";
import { services } from "@/config/services";
import { ServiceDetailCard } from "@/components/ServiceDetailCard";
import { ServiceCTA } from "@/components/ServiceCTA";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: site.meta.services.title,
  description: site.meta.services.description,
  alternates: {
    canonical: "/services/",
  },
};

export default function ServicesPage(): JSX.Element {
  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <span className={styles.eyebrow}>Services</span>
          <h1 className={styles.title}>Construction Services</h1>
          <p className={styles.subtitle}>
            Quality work, done right the first time. Your project, our expertise.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className={styles.cards}>
        <div className="container">
          <div className={styles.cardList}>
            {services.map((service, i) => (
              <ServiceDetailCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ServiceCTA />
    </>
  );
}
