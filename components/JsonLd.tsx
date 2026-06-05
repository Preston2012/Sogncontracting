// Renders structured data as a JSON-LD data block. CSP-safe: the post-processor
// (scripts/csp-postprocess.mjs) only hashes executable script types, so
// type="application/ld+json" needs no hash and stays valid under the strict CSP.
interface JsonLdProps {
  data: object | object[];
}

export function JsonLd({ data }: JsonLdProps): JSX.Element {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
