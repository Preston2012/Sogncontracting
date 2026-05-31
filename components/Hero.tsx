import Image from "next/image";
import { Button } from "@/components/Button";
import styles from "./Hero.module.css";

// Hero is server-rendered and visible immediately. The previous
// useReveal opacity-fade-in delayed LCP to ~3s on mobile because the
// hero contents started at opacity:0 and waited for an
// IntersectionObserver to fire. Above-the-fold heroes should paint
// on first paint, period. Reveal animations belong below the fold.
export function Hero(): JSX.Element {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner} ${styles.visible}`}>
        <div className={styles.logoWrap}>
          <Image
            src="/logo-full.png"
            alt="Sogn Contracting LLC logo"
            className={styles.logo}
            width={360}
            height={166}
            priority
            sizes="(max-width: 480px) 280px, 360px"
          />
        </div>

        <h1 className={styles.tagline}>Building You A Better Home</h1>

        <p className={styles.subline}>
          Licensed general contractor serving Bandon and the Southern Oregon Coast. 30 years of residential and commercial construction.
        </p>

        <div className={styles.ctas}>
          <Button href="/#contact" variant="primary">
            Get a Free Estimate
          </Button>
          <Button href="/gallery/" variant="secondary">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
