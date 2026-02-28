"use client";

import { useState, useEffect } from "react";
import { site } from "@/config/site";
import styles from "./Nav.module.css";

export function Nav(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll(): void {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={`container ${styles.inner}`}>
        {/* Logo / Home link */}
        <a href="/" className={styles.logo} aria-label="Sogn Contracting home">
          <LogoMark />
          <span className={styles.logoText}>Sogn Contracting</span>
        </a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {site.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={styles.link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className={styles.mobileMenu} role="dialog" aria-label="Navigation menu">
          <ul className={styles.mobileLinks}>
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.mobileLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileContact}>
            <a href={`tel:${site.contact.phoneTel}`} className={styles.mobilePhone}>
              {site.contact.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/** Small SC logo mark for nav */
function LogoMark(): JSX.Element {
  return (
    <svg
      width="36"
      height="28"
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Overlapping rooflines */}
      <path
        d="M10 65 L10 45 L40 20 L70 45 L70 65"
        stroke="#2D2D2D"
        strokeWidth="4"
        fill="none"
      />
      <path
        d="M50 65 L50 45 L80 20 L110 45 L110 65"
        stroke="#2D2D2D"
        strokeWidth="4"
        fill="none"
      />
      {/* Center peak */}
      <path
        d="M30 55 L60 10 L90 55"
        stroke="#2D2D2D"
        strokeWidth="5"
        fill="none"
      />
      {/* Green accent line */}
      <path
        d="M45 42 L60 18 L75 42"
        stroke="#7CB342"
        strokeWidth="3"
        fill="none"
      />
      {/* Windows */}
      <rect x="18" y="48" width="10" height="10" stroke="#2D2D2D" strokeWidth="2" fill="none" />
      <rect x="92" y="48" width="10" height="10" stroke="#2D2D2D" strokeWidth="2" fill="none" />
    </svg>
  );
}
