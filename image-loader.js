// Winters Code static image loader (Next). Maps next/image requests to the
// pre-generated ladder variants in /_opt. No Vercel image optimizer.
import manifest from "./image-manifest.json";

export default function wcImageLoader({ src, width }) {
  if (!src || /^https?:\/\//.test(src) || src.startsWith("data:")) return src;
  const base = src.replace(/^\//, "").replace(/\.(webp|jpe?g|png)$/i, "");
  const widths = manifest[base];
  if (!widths || !widths.length) return src;
  const w = widths.find((x) => x >= width) ?? widths[widths.length - 1];
  return "/_opt/" + base + "." + w + ".webp";
}
