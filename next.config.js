const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    // Inline critical CSS via critters. Eliminates render-blocking on
    // small per-page CSS chunks (PSI flagged ~350ms wasted on three
    // _next/static/css/*.css files at 6KB/3KB/5KB). With critters the
    // above-fold rules ship in <style> in the document head; the rest
    // loads async after first paint.
    optimizeCss: true,
  },
  // Explicit webpack alias for the "@/*" import pattern. tsconfig.json
  // already declares paths but some Next 14 / webpack 5 builds (notably
  // when running locally with Node 22) fail to wire it through, leaving
  // every Client Component boundary unable to resolve `@/components/*`
  // and `@/config/*`. Setting the alias directly on webpack guarantees
  // resolution in all environments (Vercel CI, local Linux, local Mac,
  // and various Node versions).
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  async headers() {
    return [
      {
        // Long-cache hashed static assets, repeat-visit performance.
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
