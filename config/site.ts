export const site = {
  name: "Sogn Contracting LLC",
  tagline: "Building You A Better Home",
  url: "https://www.sogncontracting.com",
  owner: "Paul Sogn",
  founded: "1995",
  yearsInBusiness: "30+",

  contact: {
    phone: "(541) 580-5445",
    phoneTel: "+15415805445",
    email: "sogncontracting@gmail.com",
    address: {
      street: "55260 Rosa Rd",
      city: "Bandon",
      state: "OR",
      zip: "97411",
      full: "55260 Rosa Rd, Bandon, OR 97411",
    },
  },

  credentials: {
    ccb: "257491",
    bond: "LSM194515",
    licensed: true,
    bonded: true,
    insured: true,
  },

  meta: {
    home: {
      title: "Sogn Contracting LLC | General Contractor in Bandon, Oregon",
      description:
        "Licensed Bandon general contractor since 1995. Residential & commercial construction, remodeling, and custom homes across the Southern Oregon Coast and the Valley, from Medford to Eugene. CCB# 257491.",
    },
    services: {
      title: "Construction Services",
      description:
        "Full-service residential and commercial construction across the Southern Oregon Coast and the Valley, from Medford to Eugene. Remodeling, custom homes, additions, roofing, decks, concrete, and commercial builds. 30+ years, based in Bandon.",
    },
    gallery: {
      title: "Our Work",
      description:
        "Before and after project photos from Sogn Contracting. Kitchen remodels, exterior renovations, commercial builds, and more across the Southern Oregon Coast and the Valley.",
    },
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Gallery", href: "/gallery/" },
    { label: "Contact", href: "/contact/" },
  ],

  legal: [
    { label: "Privacy", href: "/privacy/" },
    { label: "Terms", href: "/terms/" },
  ],

  structuredData: {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": "https://www.sogncontracting.com/#business",
    name: "Sogn Contracting LLC",
    description:
      "Licensed general contractor based in Bandon, serving the Southern Oregon Coast and the Valley (Medford to Eugene) since 1995. Residential and commercial construction.",
    url: "https://www.sogncontracting.com",
    logo: "https://www.sogncontracting.com/logo-full.png",
    image: "https://www.sogncontracting.com/og.png",
    telephone: "+15415805445",
    email: "sogncontracting@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "55260 Rosa Rd",
      addressLocality: "Bandon",
      addressRegion: "OR",
      postalCode: "97411",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.09,
      longitude: -124.41,
    },
    foundingDate: "1995",
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 43.09,
          longitude: -124.41,
        },
        geoRadius: "50 mi",
      },
      { "@type": "City", name: "Bandon, Oregon" },
      { "@type": "City", name: "Coos Bay, Oregon" },
      { "@type": "City", name: "North Bend, Oregon" },
      { "@type": "City", name: "Coquille, Oregon" },
      { "@type": "City", name: "Myrtle Point, Oregon" },
      { "@type": "City", name: "Port Orford, Oregon" },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "CCB License",
      recognizedBy: {
        "@type": "Organization",
        name: "Oregon Construction Contractors Board",
      },
      identifier: "257491",
    },
    sameAs: [],
  },
} as const;
