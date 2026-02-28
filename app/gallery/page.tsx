import type { Metadata } from "next";
import { site } from "@/config/site";
import { GalleryContent } from "./GalleryContent";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: site.meta.gallery.title,
  description: site.meta.gallery.description,
};

export default function GalleryPage(): JSX.Element {
  return (
    <>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Our Work</h1>
          <p className={styles.subtitle}>Before and after. See the transformation.</p>
        </div>
      </section>

      <GalleryContent />
    </>
  );
}
