import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { areas, getAreaBySlug } from "@/config/areas";
import { getServiceBySlug } from "@/config/services";
import { ServiceCTA } from "@/components/ServiceCTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/config/schema";
import styles from "../../content.module.css";

export const dynamicParams = false;

export function generateStaticParams(): { town: string }[] {
  return areas.map((a) => ({ town: a.slug }));
}

export function generateMetadata({ params }: { params: { town: string } }): Metadata {
  const area = getAreaBySlug(params.town);
  if (!area) return {};
  return {
    title: `General Contractor in ${area.name}, OR`,
    description: `Licensed general contractor serving ${area.name}, ${area.county}. Remodels, additions, custom homes, roofing, and concrete. Since 1995, CCB# ${site.credentials.ccb}.`,
    alternates: { canonical: `/service-area/${area.slug}/` },
  };
}

export default function AreaPage({ params }: { params: { town: string } }): JSX.Element {
  const area = getAreaBySlug(params.town);
  if (!area) notFound();

  const topServices = area.topServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const distanceLine =
    area.distanceFromBandonMi > 0
      ? `based in Bandon, about ${area.distanceFromBandonMi} miles from ${area.name}`
      : `based right here in ${area.name}`;

  const schema = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Service Area", path: "/service-area/" },
      { name: area.name, path: `/service-area/${area.slug}/` },
    ]),
    serviceSchema({
      name: `General Contractor in ${area.name}`,
      description: `Licensed general contractor serving ${area.name}, ${area.county}, since 1995.`,
      path: `/service-area/${area.slug}/`,
      areaName: area.name,
    }),
    faqSchema(area.faq),
  ];

  return (
    <>
      <JsonLd data={schema} />

      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className={styles.breadcrumbSep}>/</span>
            <a href="/service-area/">Service Area</a>
            <span className={styles.breadcrumbSep}>/</span>
            {area.name}
          </nav>
          <span className={styles.eyebrow}>Areas Served</span>
          <h1 className={styles.title}>General Contractor in {area.name}, Oregon</h1>
          <p className={styles.subtitle}>{area.blurb}</p>
        </div>
      </section>

      <section className={styles.body}>
        <div className="container">
          <div className={styles.prose}>
            <p>
              {site.name} is a licensed general contractor {distanceLine}. We have built and
              remodeled homes across {area.county} and the Southern Oregon Coast since 1995,
              and we carry CCB# {site.credentials.ccb}.
            </p>

            <h2 className={styles.sectionTitle}>Construction services in {area.name}</h2>
            <ul className={styles.linkGrid}>
              {topServices.map((service) => (
                <li key={service.slug}>
                  <a className={styles.linkCard} href={`/services/${service.slug}/`}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className={styles.sectionTitle}>Building in {area.name}</h2>
            <ul className={styles.features}>
              {area.localContext.map((line, i) => (
                <li key={i} className={styles.feature}>{line}</li>
              ))}
            </ul>

            <h2 className={styles.sectionTitle}>See our work</h2>
            <p>
              Browse before and after photos of our remodels, additions, and exterior
              renovations in the <a href="/gallery/">project gallery</a>. When you are ready,{" "}
              <a href="/contact/">request a free estimate</a> and tell us about your{" "}
              {area.name} project.
            </p>

            <h2 className={styles.sectionTitle}>{area.name} questions</h2>
            <div className={styles.faqList}>
              {area.faq.map((f, i) => (
                <div key={i} className={styles.faqItem}>
                  <h3 className={styles.faqQ}>{f.q}</h3>
                  <p className={styles.faqA}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
