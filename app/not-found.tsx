import type { Metadata } from "next";
import { site } from "@/config/site";
import { Button } from "@/components/Button";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page Not Found | Sogn Contracting LLC",
  description:
    "The page you are looking for does not exist. Return to the Sogn Contracting homepage.",
};

export default function NotFound(): JSX.Element {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.text}>
          The page you are looking for does not exist or has been moved. Use the links below, or call us at{" "}
          <a href={`tel:${site.contact.phoneTel}`}>{site.contact.phone}</a> and we will point you in the right direction.
        </p>

        <div className={styles.actions}>
          <Button href="/" variant="primary">Back to home</Button>
          <Button href="/services/" variant="secondary">View services</Button>
        </div>

        <nav className={styles.links} aria-label="Helpful links">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
