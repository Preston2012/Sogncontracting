import type { Metadata } from "next";
import { site } from "@/config/site";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/config/schema";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free estimate from Sogn Contracting, a licensed Bandon general contractor serving the Southern Oregon Coast and the Valley since 1995. Call or send us your project details.",
  alternates: { canonical: "/contact/" },
};

const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.contact.address.full,
)}`;

export default function ContactPage(): JSX.Element {
  const schema = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact/" },
  ]);

  return (
    <>
      <JsonLd data={schema} />

      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className={styles.breadcrumbSep}>/</span>
            Contact
          </nav>
          <span className={styles.eyebrow}>Get in Touch</span>
          <h1 className={styles.title}>Contact Sogn Contracting</h1>
          <p className={styles.subtitle}>
            Tell us about your project and we will get back to you within one business day with
            a free estimate.
          </p>
        </div>
      </section>

      <section className={styles.body}>
        <div className="container">
          <div className={styles.prose}>
            <div className={styles.infoBox}>
              <p><strong>{site.name}</strong></p>
              <p>
                <a href={`tel:${site.contact.phoneTel}`}>{site.contact.phone}</a>
              </p>
              <p>
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </p>
              <p>{site.contact.address.full}</p>
              <p>
                <a href={directionsHref} target="_blank" rel="noopener noreferrer">
                  Get directions
                </a>
              </p>
              <p>CCB# {site.credentials.ccb}. Serving the Southern Oregon Coast and the Valley, from Medford to Eugene.</p>
            </div>
            <p>
              Not sure if you are in our area? See the towns we cover on the{" "}
              <a href="/service-area/">service area</a> page.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
