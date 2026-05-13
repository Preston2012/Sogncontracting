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
  async headers() {
    return [
      {
        // Long-cache hashed static assets, repeat-visit performance.
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
