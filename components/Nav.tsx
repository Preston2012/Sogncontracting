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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-mark.png"
            alt=""
            className={styles.logoImg}
            width={40}
            height={28}
          />
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
