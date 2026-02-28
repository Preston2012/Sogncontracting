import type { Metadata } from "next";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Page Not Found | Sogn Contracting LLC",
  description: "The page you're looking for doesn't exist. Return to Sogn Contracting's homepage.",
};

export default function NotFound(): JSX.Element {
  return (
    <section
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 16px",
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "72px",
            fontWeight: 700,
            color: "var(--sogn-green)",
            lineHeight: 1,
            marginBottom: "16px",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "var(--text-h2)",
            fontWeight: 700,
            color: "var(--charcoal)",
            marginBottom: "12px",
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "var(--text-body)",
            marginBottom: "32px",
            maxWidth: "400px",
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/services/" variant="secondary">
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
}
