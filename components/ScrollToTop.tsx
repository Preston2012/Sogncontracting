"use client";

import { useState, useEffect } from "react";
import styles from "./ScrollToTop.module.css";

export function ScrollToTop(): JSX.Element {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll(): void {
      setShow(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollUp(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className={`${styles.btn} ${show ? styles.show : ""}`}
      onClick={scrollUp}
      aria-label="Scroll to top"
      type="button"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M10 16V4M10 4L4 10M10 4L16 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
