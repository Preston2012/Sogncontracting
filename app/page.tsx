import type { Metadata } from "next";
import { site } from "@/config/site";
import { features } from "@/config/features";
import { Hero } from "@/components/Hero";
import { SectionDivider } from "@/components/SectionDivider";
import { ServiceGrid } from "@/components/ServiceGrid";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Testimonials } from "@/components/TestimonialCard";
import { AboutSection } from "@/components/AboutSection";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: site.meta.home.title,
  description: site.meta.home.description,
};

export default function HomePage(): JSX.Element {
  return (
    <>
      <link rel="preload" as="image" href="/hero-home.webp" />
      <Hero />
      <SectionDivider variant="diagonal" />
      <ServiceGrid />
      <SectionDivider variant="diagonal" flip />
      <FeaturedProjects />
      <SectionDivider variant="diagonal" />
      {features.testimonials && <Testimonials />}
      <AboutSection />
      <SectionDivider variant="diagonal" flip />
      <ContactForm />
    </>
  );
}
