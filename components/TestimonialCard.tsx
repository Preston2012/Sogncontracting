import styles from "./TestimonialCard.module.css";

interface TestimonialData {
  quote: string;
  name: string;
  projectType: string;
}

interface TestimonialsProps {
  testimonials?: TestimonialData[];
}

const placeholders: TestimonialData[] = [
  {
    quote: "Placeholder testimonial. Paul will provide real client quotes.",
    name: "Client Name",
    projectType: "Kitchen Remodel",
  },
  {
    quote: "Placeholder testimonial. Paul will provide real client quotes.",
    name: "Client Name",
    projectType: "Exterior Renovation",
  },
  {
    quote: "Placeholder testimonial. Paul will provide real client quotes.",
    name: "Client Name",
    projectType: "Custom Home",
  },
];

export function Testimonials({
  testimonials = placeholders,
}: TestimonialsProps): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>What Our Clients Say</h2>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <blockquote key={i} className={styles.card}>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <footer className={styles.attribution}>
                <cite className={styles.name}>{t.name}</cite>
                <span className={styles.project}>{t.projectType}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
