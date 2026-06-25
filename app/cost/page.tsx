import type { Metadata } from "next";
import { ServiceCTA } from "@/components/ServiceCTA";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, type FaqEntry } from "@/config/schema";
import styles from "../content.module.css";

export const metadata: Metadata = {
  title: "Oregon Coast Remodel & Build Costs",
  description:
    "What drives the cost of a remodel, addition, or build on the Southern Oregon Coast, and how Sogn Contracting prices a project. Free, honest estimates.",
  alternates: { canonical: "/cost/" },
};

const factors = [
  "Scope and size. A single room costs far less than a whole-home renovation or a new build.",
  "Materials and finishes. Stock cabinets and laminate sit at one end, custom and stone at the other.",
  "Site conditions. Slope, drainage, access, and soil all affect foundation and site work.",
  "Structural and permit work. Moving walls, adding square footage, and engineering add cost.",
  "Condition of the existing home. Hidden rot, old wiring, or plumbing can change a remodel budget.",
  "Coastal exposure. Wind and salt air affect material choices for roofing, siding, and decks.",
];

const faq: FaqEntry[] = [
  {
    q: "How much does a kitchen remodel cost?",
    a: "It depends heavily on size, layout changes, and the finishes you choose. A light refresh and a full gut to the studs are very different numbers. The only accurate figure is a real estimate for your kitchen, which we provide for free.",
  },
  {
    q: "How much does a home addition cost?",
    a: "Additions vary with square footage, foundation and structural work, and how much finish work is involved. Because the new space ties into your existing home, we price each one after a walkthrough. The estimate is free.",
  },
  {
    q: "Does my location affect the cost?",
    a: "It can. Building on the Oregon coast or in a rural area is not the same as building in a large metro. Wind, salt air, and damp weather shape material choices, and getting materials and trades out to the site factors in too. We account for all of it in your estimate.",
  },
  {
    q: "Do you charge for an estimate?",
    a: "No. Estimates are free. We walk the project, talk through the scope, and give you an honest number with no pressure.",
  },
];

export default function CostPage(): JSX.Element {
  const schema = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Project Costs", path: "/cost/" },
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
            Project Costs
          </nav>
          <span className={styles.eyebrow}>Planning</span>
          <h1 className={styles.title}>
            What Does a Remodel or Build Cost on the Oregon Coast?
          </h1>
          <p className={styles.subtitle}>
            Honest answer: it depends on the project. Here is what shapes the price, and how
            we put a real number on your job.
          </p>
        </div>
      </section>

      <section className={styles.body}>
        <div className="container">
          <div className={styles.prose}>
            <p>
              Every project is different, so a price you read online is rarely the price you
              will pay. Rather than guess, we give you a free estimate built around your actual
              scope. Before that, it helps to understand what moves the number up or down.
            </p>

            <h2 className={styles.sectionTitle}>What drives the cost</h2>
            <ul className={styles.features}>
              {factors.map((f, i) => (
                <li key={i} className={styles.feature}>{f}</li>
              ))}
            </ul>

            <h2 className={styles.sectionTitle}>How we put a number on it</h2>
            <ol className={styles.steps}>
              <li className={styles.step}>We walk the project with you and listen to your goals.</li>
              <li className={styles.step}>We define the scope, materials, and any permit or structural work.</li>
              <li className={styles.step}>We give you a clear, written estimate. No pressure, no charge.</li>
            </ol>

            <p>
              Ready for a real number? <a href="/contact/">Request a free estimate</a> and tell
              us about your project, or browse our <a href="/services/">services</a> and{" "}
              <a href="/gallery/">past work</a> first.
            </p>

            <h2 className={styles.sectionTitle}>Cost questions</h2>
            <div className={styles.faqList}>
              {faq.map((f, i) => (
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
