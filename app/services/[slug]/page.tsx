import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { services, getServiceBySlug } from "@/config/services";
import { areas } from "@/config/areas";
import { projects } from "@/config/projects";
import { ServiceCTA } from "@/components/ServiceCTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/config/schema";
import styles from "../../content.module.css";

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}/` },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }): JSX.Element {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const related = service.relatedProjectId
    ? projects.find((p) => p.id === service.relatedProjectId)
    : undefined;
  const relatedAfter = related?.pairs[0]?.after;

  // Feature image: an explicit one wins, otherwise fall back to the related
  // project's "after" photo. `full` renders large with no caption.
  const feature = service.featuredImage
    ? service.featuredImage
    : relatedAfter
      ? {
          src: relatedAfter,
          alt: `${related?.title} by Sogn Contracting, Bandon Oregon`,
          width: 1000,
          height: 750,
          full: false,
        }
      : undefined;

  const schema = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services/" },
      { name: service.title, path: `/services/${service.slug}/` },
    ]),
    serviceSchema({
      name: service.title,
      description: service.metaDescription,
      path: `/services/${service.slug}/`,
    }),
    faqSchema(service.faq),
  ];

  return (
    <>
      <JsonLd data={schema} />

      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className={styles.breadcrumbSep}>/</span>
            <a href="/services/">Services</a>
            <span className={styles.breadcrumbSep}>/</span>
            {service.title}
          </nav>
          <span className={styles.eyebrow}>Services</span>
          <h1 className={styles.title}>{service.h1}</h1>
          <p className={styles.subtitle}>{service.intro}</p>
        </div>
      </section>

      <section className={styles.body}>
        <div className="container">
          <div className={styles.prose}>
            <p>{service.description}</p>

            {feature && feature.full && (
              <figure className={styles.featureFull}>
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  className={styles.featureFullImg}
                  width={feature.width}
                  height={feature.height}
                  sizes="(max-width: 760px) 92vw, 720px"
                />
              </figure>
            )}

            {feature && !feature.full && (
              <figure className={styles.projectFigure}>
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  className={styles.projectImg}
                  width={feature.width}
                  height={feature.height}
                  sizes="(max-width: 760px) 92vw, 720px"
                />
                <figcaption className={styles.projectCaption}>
                  A recent project. See more in our <a href="/gallery/">gallery</a>.
                </figcaption>
              </figure>
            )}

            <h2 className={styles.sectionTitle}>{service.scopeTitle}</h2>
            <ul className={styles.features}>
              {service.scopeItems.map((item, i) => (
                <li key={i} className={styles.feature}>{item.text}</li>
              ))}
            </ul>

            <h2 className={styles.sectionTitle}>How it works</h2>
            <ol className={styles.steps}>
              {service.process.map((step, i) => (
                <li key={i} className={styles.step}>{step}</li>
              ))}
            </ol>

            <h2 className={styles.sectionTitle}>Areas we serve</h2>
            <p>
              Sogn Contracting handles {service.title.toLowerCase()} across Bandon and the
              Southern Oregon Coast, including:
            </p>
            <ul className={styles.linkGrid}>
              {areas.map((area) => (
                <li key={area.slug}>
                  <a className={styles.linkCard} href={`/service-area/${area.slug}/`}>
                    {area.name}, OR
                  </a>
                </li>
              ))}
            </ul>

            <h2 className={styles.sectionTitle}>Frequently asked questions</h2>
            <div className={styles.faqList}>
              {service.faq.map((f, i) => (
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
