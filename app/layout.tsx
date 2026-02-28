import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { site } from "@/config/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.meta.home.title,
    template: "%s | Sogn Contracting LLC",
  },
  description: site.meta.home.description,
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_US",
    url: site.url,
    title: site.meta.home.title,
    description: site.meta.home.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.home.title,
    description: site.meta.home.description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(site.structuredData),
          }}
        />
      </head>
      <body>
        <a href="#main" className="skipLink">
          Skip to main content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
