import type { Metadata } from "next";
import { site } from "@/config/site";
import styles from "../legal.module.css";

const LAST_UPDATED = "May 30, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy | Sogn Contracting LLC",
  description:
    "How Sogn Contracting LLC collects, uses, and protects the information you share through our website.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage(): JSX.Element {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Legal</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.meta}>Last updated {LAST_UPDATED}</p>
        </div>
      </section>

      <section className={styles.body}>
        <div className="container">
          <div className={styles.prose}>
            <div className={styles.summary}>
              <p><strong>Summary.</strong> {site.name} collects only the information you choose to send us, uses it to respond to your inquiry and carry out work you request, and never sells it. The sections below explain what we collect and your choices.</p>
            </div>

            <h2>Who we are</h2>
            <p>{site.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a licensed general contractor based in {site.contact.address.city}, {site.contact.address.state}. This policy describes how we handle information collected through {site.url.replace("https://", "")}.</p>

            <h2>Information we collect</h2>
            <p>We collect information in two ways:</p>
            <ul>
              <li><strong>Information you provide.</strong> When you submit our contact form, email us, or call us, we receive your name, phone number, email address, and any project details or messages you share.</li>
              <li><strong>Information collected automatically.</strong> Like most websites, our host records basic technical data such as your browser type, device, approximate location, and the pages you visit. This helps us keep the site secure and working properly.</li>
            </ul>

            <h2>How we use your information</h2>
            <ul>
              <li>Respond to your questions and prepare estimates.</li>
              <li>Schedule, plan, and carry out construction work you request.</li>
              <li>Communicate with you about your project or inquiry.</li>
              <li>Maintain, secure, and improve our website.</li>
              <li>Meet legal, tax, licensing, and recordkeeping obligations.</li>
            </ul>

            <h2>How we share information</h2>
            <p>We do not sell or rent your personal information. We share it only as needed to run our business:</p>
            <ul>
              <li><strong>Service providers</strong> that operate our website, email, and contact form on our behalf.</li>
              <li><strong>Subcontractors and suppliers</strong> when sharing project details is necessary to complete work you have requested.</li>
              <li><strong>Legal and safety reasons</strong> when required by law or to protect our rights, property, or safety.</li>
            </ul>

            <h2>Cookies and analytics</h2>
            <p>Our website may use basic cookies and aggregate analytics to understand how visitors use the site. You can block or delete cookies in your browser settings, though some features may not work as well if you do.</p>

            <h2>How long we keep information</h2>
            <p>We keep your information for as long as needed to respond to you, complete and stand behind our work, and satisfy legal and accounting requirements. We dispose of it when it is no longer needed.</p>

            <h2>Security</h2>
            <p>We take reasonable steps to protect the information you share with us. No website or method of transmission is completely secure, so we cannot guarantee absolute security.</p>

            <h2>Your choices</h2>
            <ul>
              <li>Ask us to access, correct, or delete the personal information we hold about you.</li>
              <li>Ask us to stop sending you non-essential communications.</li>
            </ul>
            <p>To make a request, contact us using the details below.</p>

            <h2>Children&apos;s privacy</h2>
            <p>Our website is intended for adults and is not directed to children under 13. We do not knowingly collect information from children.</p>

            <h2>Links to other sites</h2>
            <p>Our site may link to other websites we do not control. We are not responsible for the privacy practices or content of those sites.</p>

            <h2>Changes to this policy</h2>
            <p>We may update this policy from time to time. When we do, we will revise the &ldquo;last updated&rdquo; date above.</p>

            <h2>Contact us</h2>
            <div className={styles.contactBlock}>
              <p><strong>{site.name}</strong></p>
              <p>{site.contact.address.full}</p>
              <p><a href={`tel:${site.contact.phoneTel}`}>{site.contact.phone}</a></p>
              <p><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>
            </div>

            <p>This policy is governed by the laws of the State of Oregon.</p>
          </div>
        </div>
      </section>
    </>
  );
}
