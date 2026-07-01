import { site } from "@/config/site";
import { services } from "@/config/services";
import { areas } from "@/config/areas";
import styles from "./Footer.module.css";

// Footer trades shown in the Services column (subset of the full list, which
// lives on /services/). Order matches the services page.
const FOOTER_SERVICES = [
  "remodeling",
  "additions",
  "custom-homes",
  "roofing",
  "decks",
  "concrete",
];

const companyLinks = [
  { label: "Gallery", href: "/gallery/" },
  { label: "Project Costs", href: "/cost/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact/" },
];

export function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  const footerServices = FOOTER_SERVICES
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Company info + contact */}
        <div className={styles.brand}>
          <span className={styles.companyName}>{site.name}</span>
          <p className={styles.scripture}>
            <em>&ldquo;For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.&rdquo;</em>
            <br />
            <span className={styles.verse}>John 3:16</span>
          </p>
          <div className={styles.contact}>
            <a href={`tel:${site.contact.phoneTel}`} className={styles.contactLink}>
              {site.contact.phone}
            </a>
            <a href={`mailto:${site.contact.email}`} className={styles.contactLink}>
              {site.contact.email}
            </a>
            <span className={styles.address}>{site.contact.address.full}</span>
          </div>
        </div>

        {/* Services */}
        <nav className={styles.col} aria-label="Services">
          <span className={styles.colTitle}>Services</span>
          <ul className={styles.colList}>
            {footerServices.map((service) => (
              <li key={service.slug}>
                <a href={`/services/${service.slug}/`} className={styles.colLink}>
                  {service.title}
                </a>
              </li>
            ))}
            <li>
              <a href="/services/" className={styles.colLink}>All services</a>
            </li>
          </ul>
        </nav>

        {/* Areas Served */}
        <nav className={styles.col} aria-label="Areas served">
          <span className={styles.colTitle}>Areas Served</span>
          <ul className={styles.colList}>
            {areas.map((area) => (
              <li key={area.slug}>
                <a href={`/service-area/${area.slug}/`} className={styles.colLink}>
                  {area.name}
                </a>
              </li>
            ))}
            <li>
              <a href="/service-area/" className={styles.colLink}>All areas</a>
            </li>
          </ul>
        </nav>

        {/* Company */}
        <nav className={styles.col} aria-label="Company">
          <span className={styles.colTitle}>Company</span>
          <ul className={styles.colList}>
            <li>
              <a href="/" className={styles.colLink}>Home</a>
            </li>
            {companyLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.colLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <div className={styles.bottomLinks}>
            <span className={styles.ccb}>CCB# {site.credentials.ccb}</span>
            <nav className={styles.legalLinks} aria-label="Legal">
              {site.legal.map((item) => (
                <a key={item.href} href={item.href} className={styles.legalLink}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <span className={styles.copyright}>
            &copy; {year} {site.name}. All rights reserved.
          </span>
        </div>
        {/* Winters Code credit stamp */}
        <a
          href="https://winterscode.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.credit}
          aria-label="Website built and designed by Winters Code"
        >
          <span className={styles.creditLabel}>Designed &amp; Built By</span>
          <img
            className={styles.creditStamp}
            src="/wc-credit-stamp-176.webp"
            alt="Winters Code"
            width={176}
            height={176}
            loading="lazy"
          />
        </a>
      </div>
    </footer>
  );
}
