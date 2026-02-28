"use client";

import { useReveal } from "@/hooks/useReveal";
import { Button } from "@/components/Button";
import { RooflineMotif } from "@/components/RooflineMotif";
import styles from "./Hero.module.css";

export function Hero(): JSX.Element {
  const { ref, visible } = useReveal(0.1);

  return (
    <section className={styles.hero} ref={ref}>
      <RooflineMotif opacity={0.035} />
      <div className={`container ${styles.inner} ${visible ? styles.visible : ""}`}>
        <div className={styles.logoWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-full.png"
            alt="Sogn Contracting LLC logo"
            className={styles.logo}
            width={360}
            height={166}
          />
        </div>

        <h1 className={styles.tagline}>Building You a Better Home</h1>

        <p className={styles.subline}>
          Licensed general contractor serving Bandon and the Southern Oregon Coast. 30 years of residential and commercial construction.
        </p>

        <div className={styles.ctas}>
          <Button href="/#contact" variant="primary">
            Get a Free Estimate
          </Button>
          <Button href="/gallery/" variant="secondaryLight">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
