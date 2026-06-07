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
    description: `${area.blurb} Licensed since 1995, CCB# ${site.credentials.ccb}.`,
    alternates: { canonical: `/service-area/${area.slug}/` },
  };
}

export default function AreaPage({ params }: { params: { town: string } }): JSX.Element {
  const area = getAreaBySlug(params.town);
  if (!area) notFound();

  const topServices = area.topServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const nearbyAreas = area.nearby
    .map((slug) => getAreaBySlug(slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

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
            <p>{area.intro}</p>

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
            {area.localContext.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <h2 className={styles.sectionTitle}>
              What makes building in {area.name} different
            </h2>
            <p>{area.angle}</p>

            <h2 className={styles.sectionTitle}>See our work</h2>
            <p>{area.workNote}</p>
            <p>
              Browse the <a href="/gallery/">project gallery</a> or{" "}
              <a href="/contact/">contact us for a free estimate</a>.
            </p>

            {nearbyAreas.length > 0 && (
              <>
                <h2 className={styles.sectionTitle}>Areas we serve near {area.name}</h2>
                <ul className={styles.linkGrid}>
                  {nearbyAreas.map((n) => (
                    <li key={n.slug}>
                      <a className={styles.linkCard} href={`/service-area/${n.slug}/`}>
                        {n.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}

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
