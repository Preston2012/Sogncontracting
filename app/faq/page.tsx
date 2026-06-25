import type { Metadata } from "next";
import { site } from "@/config/site";
import { ServiceCTA } from "@/components/ServiceCTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, type FaqEntry } from "@/config/schema";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about Sogn Contracting: service area, licensing and CCB# 257491, free estimates, permits, and the kinds of projects we take on across the Southern Oregon Coast and the Valley.",
  alternates: { canonical: "/faq/" },
};

const faq: FaqEntry[] = [
  {
    q: "Where does Sogn Contracting work?",
    a: "We are based in Bandon and take on projects across Oregon, from the south coast to the inland valleys. That includes Coos Bay, North Bend, Coquille, Myrtle Point, and Port Orford, and well beyond. If you are not sure we cover your area, just ask.",
  },
  {
    q: "Are you licensed, bonded, and insured?",
    a: `Yes. Sogn Contracting LLC is a licensed Oregon general contractor, CCB# ${site.credentials.ccb}, and we are bonded and insured. We have been in business since 1995.`,
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. Every project starts with a free, no-pressure estimate. Tell us about the work and we will give you an honest read on scope, schedule, and cost.",
  },
  {
    q: "What kinds of projects do you take on?",
    a: "Remodeling and renovations, custom home builds, additions, roofing, decks, commercial construction, concrete and site work, and repairs. Big or small, residential or commercial.",
  },
  {
    q: "Do you handle the permits?",
    a: "Yes. We pull and manage the permits your project needs through the right city or county building department, and we schedule the required inspections.",
  },
  {
    q: "Do you do small repairs, or only big projects?",
    a: "Both. We take on small repairs and maintenance as well as full builds. No job is too small when it comes to keeping your home in good shape.",
  },
  {
    q: "How long has Sogn Contracting been in business?",
    a: `Since 1995. That is more than ${site.yearsInBusiness} years building and remodeling across Oregon, owned by ${site.owner}.`,
  },
  {
    q: "How do I get started?",
    a: "Send us a message through the contact page or give us a call. We will set up a walkthrough and get you a free estimate.",
  },
];

export default function FaqPage(): JSX.Element {
  const schema = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "FAQ", path: "/faq/" },
    ]),
    faqSchema(faq),
  ];

  return (
    <>
      <JsonLd data={schema} />

      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className={styles.breadcrumbSep}>/</span>
            FAQ
          </nav>
          <span className={styles.eyebrow}>Answers</span>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>
            The questions we hear most from homeowners and businesses across Oregon.
          </p>
        </div>
      </section>

      <section className={styles.body}>
        <div className="container">
          <div className={styles.prose}>
            <div className={styles.faqList}>
              {faq.map((f, i) => (
                <div key={i} className={styles.faqItem}>
                  <h2 className={styles.faqQ}>{f.q}</h2>
                  <p className={styles.faqA}>{f.a}</p>
                </div>
              ))}
            </div>

            <p>
              Still have a question? Visit our <a href="/services/">services</a>, see the towns
              we cover on the <a href="/service-area/">service area</a> page, or{" "}
              <a href="/contact/">get in touch</a>.
            </p>
          </div>
        </div>
      </section>

      <ServiceCTA />
    </>
  );
}
