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
        {/* Logo */}
        <div className={styles.logoWrap}>
          <HeroLogo />
        </div>

        {/* Tagline */}
        <h1 className={styles.tagline}>Building You a Better Home</h1>

        {/* Subline */}
        <p className={styles.subline}>
          Licensed general contractor serving Bandon and the Southern Oregon Coast. 30 years of residential and commercial construction.
        </p>

        {/* CTAs */}
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

function HeroLogo(): JSX.Element {
  return (
    <svg
      width="180"
      height="120"
      viewBox="0 0 360 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sogn Contracting LLC logo"
      className={styles.logo}
    >
      {/* Left house */}
      <path
        d="M30 190 L30 140 L100 80 L170 140 L170 190"
        stroke="#2D2D2D"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Left window */}
      <rect x="60" y="148" width="24" height="24" stroke="#2D2D2D" strokeWidth="4" fill="none" />
      <line x1="72" y1="148" x2="72" y2="172" stroke="#2D2D2D" strokeWidth="2" />
      <line x1="60" y1="160" x2="84" y2="160" stroke="#2D2D2D" strokeWidth="2" />

      {/* Right house */}
      <path
        d="M190 190 L190 140 L260 80 L330 140 L330 190"
        stroke="#2D2D2D"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Right window */}
      <rect x="276" y="148" width="24" height="24" stroke="#2D2D2D" strokeWidth="4" fill="none" />
      <line x1="288" y1="148" x2="288" y2="172" stroke="#2D2D2D" strokeWidth="2" />
      <line x1="276" y1="160" x2="300" y2="160" stroke="#2D2D2D" strokeWidth="2" />

      {/* Center roofline (tallest, overlapping) */}
      <path
        d="M80 170 L180 40 L280 170"
        stroke="#2D2D2D"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Green accent lines under center roof */}
      <path
        d="M110 150 L180 55 L250 150"
        stroke="#7CB342"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Green base line */}
      <line x1="30" y1="190" x2="170" y2="190" stroke="#7CB342" strokeWidth="4" />
      <line x1="190" y1="190" x2="330" y2="190" stroke="#7CB342" strokeWidth="4" />

      {/* SC text */}
      <text
        x="180"
        y="140"
        textAnchor="middle"
        fill="#7CB342"
        fontSize="38"
        fontWeight="600"
        fontFamily="sans-serif"
      >
        SC
      </text>

      {/* SOGN CONTRACTING text */}
      <text
        x="180"
        y="218"
        textAnchor="middle"
        fill="#2D2D2D"
        fontSize="28"
        fontWeight="700"
        fontFamily="serif"
        letterSpacing="4"
      >
        SOGN CONTRACTING
      </text>

      {/* LLC with flanking rules */}
      <line x1="100" y1="235" x2="155" y2="235" stroke="#2D2D2D" strokeWidth="2" />
      <text
        x="180"
        y="240"
        textAnchor="middle"
        fill="#7CB342"
        fontSize="16"
        fontWeight="600"
        fontFamily="sans-serif"
        letterSpacing="3"
      >
        LLC
      </text>
      <line x1="205" y1="235" x2="260" y2="235" stroke="#2D2D2D" strokeWidth="2" />
    </svg>
  );
}
