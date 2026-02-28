import { site } from "@/config/site";
import { Button } from "@/components/Button";
import styles from "./ServiceCTA.module.css";

export function ServiceCTA(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>Ready to Start Your Project?</h2>
        <p className={styles.subtitle}>Get in touch for a fast, free estimate.</p>
        <div className={styles.ctas}>
          <Button href="/#contact" variant="primary">
            Contact Us
          </Button>
          <Button href={`tel:${site.contact.phoneTel}`} variant="secondary">
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}
