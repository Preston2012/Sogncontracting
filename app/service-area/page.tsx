import type { Metadata } from "next";
import { site } from "@/config/site";
import { areas } from "@/config/areas";
import { ServiceCTA } from "@/components/ServiceCTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/config/schema";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Service Area: Southern Oregon Coast",
  description:
    "Sogn Contracting serves Bandon, Coos Bay, North Bend, Coquille, Myrtle Point, and Port Orford. Licensed general contractor since 1995, CCB# 257491.",
  alternates: { canonical: "/service-area/" },
};

export default function ServiceAreaPage(): JSX.Element {
  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Service Area", path: "/service-area/" },
  ]);

  return (
    <>
      <JsonLd data={schema} />

      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Areas Served</span>
          <h1 className={styles.title}>
            General Contractor Serving Oregon
          </h1>
          <p className={styles.subtitle}>
            From our shop in Bandon, we build and remodel for homeowners and businesses
            across Oregon. We have been at it since 1995.
          </p>
        </div>
      </section>

      <section className={styles.body}>
        <div className="container">
          <div className={styles.prose}>
            <p>
              {site.name} is a licensed general contractor based in Bandon, Oregon. We work
              across the state on remodels, additions, custom homes, roofing,
              decks, and concrete. Pick a town below to see how we serve it, or{" "}
              <a href="/contact/">get a free estimate</a>.
            </p>

            <h2 className={styles.sectionTitle}>Towns we serve</h2>
            <ul className={styles.linkGrid}>
              {areas.map((area) => (
                <li key={area.slug}>
                  <a className={styles.linkCard} href={`/service-area/${area.slug}/`}>
                    {area.name}, OR
                    {area.distanceFromBandonMi > 0
                      ? ` (about ${area.distanceFromBandonMi} mi)`
                      : " (home base)"}
                  </a>
                </li>
              ))}
            </ul>

            <p>
              Do not see your town listed? Reach out anyway. We take on projects across Oregon
              and will let you know right away whether yours is in our range.
            </p>
          </div>
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
