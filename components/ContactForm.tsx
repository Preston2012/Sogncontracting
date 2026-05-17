"use client";

import Image from "next/image";

import { useState, FormEvent } from "react";
import { useReveal } from "@/hooks/useReveal";
import { site } from "@/config/site";
import styles from "./ContactForm.module.css";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactForm(): JSX.Element {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const { ref, visible } = useReveal(0.1);

  function validate(data: FormData): FormErrors {
    const errs: FormErrors = {};
    if (!data.get("name")?.toString().trim()) {
      errs.name = "Please enter your name.";
    }
    const email = data.get("email")?.toString().trim() ?? "";
    if (!email || !validateEmail(email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!data.get("message")?.toString().trim()) {
      errs.message = "Please tell us a bit about your project.";
    }
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const errs = validate(formData);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // Honeypot check
    if (formData.get("website")?.toString().trim()) {
      setStatus("success");
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      // Tag this submission so it's distinguishable from leads coming
      // via the Winters Code portfolio widget (which sets source=wc-portfolio).
      const payload = Object.fromEntries(formData);
      payload.source = "sogn-site";
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.section} id="contact" ref={ref}>
      {/* Radial lighten background effect */}
      <div className={styles.radialBg} aria-hidden="true" />

      {/* Green accent lines extending from logo area */}
      <div className={styles.accentLineLeft} aria-hidden="true" />
      <div className={styles.accentLineRight} aria-hidden="true" />

      <div className={`container ${styles.inner} ${visible ? styles.visible : ""}`}>
        {/* Real logo image */}
        <div className={styles.logoWrap} aria-hidden="true">
          <Image
            src="/logo-full.png"
            alt=""
            className={styles.logoImg}
            width={280}
            height={130}
            sizes="(max-width: 480px) 240px, 280px"
          />
        </div>

        <h2 className={styles.title}>Start Your Project</h2>
        <p className={styles.subtitle}>
          Get in touch for a free estimate. We&apos;ll get back to you within one business day.
        </p>

        <div className={styles.formWrap}>
          {/* Form */}
          <div className={styles.formCard}>
            {status === "success" ? (
              <div className={styles.successMsg}>
                <p className={styles.successTitle}>Message sent.</p>
                <p className={styles.successBody}>
                  We&apos;ll get back to you within one business day. If your project is urgent, call us directly at{" "}
                  <a href={`tel:${site.contact.phoneTel}`} className={styles.successLink}>
                    {site.contact.phone}
                  </a>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact Sogn Contracting"
              >
                {/* Honeypot */}
                <div className={styles.honey} aria-hidden="true" tabIndex={-1}>
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-name" className={styles.label}>Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    required
                  />
                  {errors.name && (
                    <span id="name-error" className={styles.error} role="alert">{errors.name}</span>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-email" className={styles.label}>Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    required
                  />
                  {errors.email && (
                    <span id="email-error" className={styles.error} role="alert">{errors.email}</span>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-phone" className={styles.label}>Phone</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-message" className={styles.label}>Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your project"
                    rows={5}
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    required
                  />
                  {errors.message && (
                    <span id="message-error" className={styles.error} role="alert">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className={styles.submit}
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>

                {status === "error" && (
                  <p className={styles.errorMsg} role="alert">
                    Something went wrong. Please try again, or contact us directly at{" "}
                    <a href={`mailto:${site.contact.email}`} className={styles.errorLink}>
                      {site.contact.email}
                    </a>.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Alternate contact */}
          <div className={styles.altContact}>
            <div className={styles.altItem}>
              <span className={styles.altLabel}>Call Us</span>
              <a href={`tel:${site.contact.phoneTel}`} className={styles.altValue}>
                {site.contact.phone}
              </a>
            </div>
            <div className={styles.altItem}>
              <span className={styles.altLabel}>Email</span>
              <a href={`mailto:${site.contact.email}`} className={styles.altValue}>
                {site.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
