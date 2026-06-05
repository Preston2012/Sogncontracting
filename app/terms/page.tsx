// Template terms. Have an Oregon attorney review before relying on these.
import type { Metadata } from "next";
import { site } from "@/config/site";
import styles from "../legal.module.css";

const LAST_UPDATED = "May 30, 2026";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the Sogn Contracting LLC website.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage(): JSX.Element {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Legal</span>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.meta}>Last updated {LAST_UPDATED}</p>
        </div>
      </section>

      <section className={styles.body}>
        <div className="container">
          <div className={styles.prose}>
            <div className={styles.summary}>
              <p><strong>Summary.</strong> These terms cover your use of this website only. They are not a construction contract. Any work we perform for you is governed by a separate written agreement that we both sign.</p>
            </div>

            <h2>Acceptance of these terms</h2>
            <p>By using {site.url.replace("https://", "")}, you agree to these terms. If you do not agree, please do not use the site.</p>

            <h2>Website only, not a construction contract</h2>
            <p>This website provides general information about {site.name} and our services. Nothing on this site is an offer, estimate, or contract for construction work. Any project we take on is set out in a separate written agreement signed by you and {site.name}, as required for licensed contractors in Oregon.</p>

            <h2>Estimates and inquiries</h2>
            <p>Submitting our contact form or requesting information does not create a contract or obligate either of us. Estimates are provided separately and are not binding until both parties sign a written agreement.</p>

            <h2>Use of the site</h2>
            <p>You agree to use this website lawfully and not to:</p>
            <ul>
              <li>Interfere with or disrupt the site or its security.</li>
              <li>Attempt to gain unauthorized access to any part of the site.</li>
              <li>Use the site to send unlawful, harmful, or misleading content.</li>
            </ul>

            <h2>Intellectual property</h2>
            <p>The text, logos, photographs, and other content on this site belong to {site.name} or are used with permission, including photographs of our completed projects. You may not copy, reproduce, or reuse this content without our written permission.</p>

            <h2>Accuracy of information</h2>
            <p>We work to keep the information on this site current and correct, but we provide it &ldquo;as is&rdquo; without warranties of any kind. Site content is general information, not professional, legal, or construction advice for your specific project. For details about your project, please contact us directly.</p>

            <h2>Third-party links</h2>
            <p>Our site may link to websites we do not control. We are not responsible for their content, products, or practices.</p>

            <h2>Limitation of liability</h2>
            <p>To the fullest extent allowed by law, {site.name} is not liable for any indirect or incidental damages arising from your use of this website. This section concerns the website only and does not limit any rights or obligations under a signed construction agreement or under Oregon contractor law.</p>

            <h2>Licensing</h2>
            <p>{site.name} is a licensed, bonded, and insured general contractor. Oregon CCB# {site.credentials.ccb}. You can verify our license through the Oregon Construction Contractors Board.</p>

            <h2>Changes to these terms</h2>
            <p>We may update these terms from time to time. When we do, we will revise the &ldquo;last updated&rdquo; date above. Continued use of the site means you accept the updated terms.</p>

            <h2>Governing law</h2>
            <p>These terms are governed by the laws of the State of Oregon. Any dispute relating to this website will be handled in the state or federal courts located in Coos County, Oregon.</p>

            <h2>Contact us</h2>
            <div className={styles.contactBlock}>
              <p><strong>{site.name}</strong></p>
              <p>{site.contact.address.full}</p>
              <p><a href={`tel:${site.contact.phoneTel}`}>{site.contact.phone}</a></p>
              <p><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
