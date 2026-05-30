import { site } from "@/config/site";
import styles from "./Footer.module.css";

export function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Company info */}
        <div className={styles.brand}>
          <span className={styles.companyName}>{site.name}</span>
          <p className={styles.scripture}>
            <em>&ldquo;For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.&rdquo;</em>
            <br />
            <span className={styles.verse}>John 3:16</span>
          </p>
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <a href={`tel:${site.contact.phoneTel}`} className={styles.contactLink}>
            {site.contact.phone}
          </a>
          <a href={`mailto:${site.contact.email}`} className={styles.contactLink}>
            {site.contact.email}
          </a>
          <span className={styles.address}>{site.contact.address.full}</span>
        </div>

        {/* Nav links */}
        <nav className={styles.nav} aria-label="Footer navigation">
          <ul className={styles.navList}>
            {site.nav.filter(n => n.label !== "Contact").map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <span className={styles.ccb}>CCB# {site.credentials.ccb}</span>
          <nav className={styles.legalLinks} aria-label="Legal">
            {site.legal.map((item) => (
              <a key={item.href} href={item.href} className={styles.legalLink}>
                {item.label}
              </a>
            ))}
          </nav>
          <span className={styles.copyright}>
            &copy; {year} {site.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
