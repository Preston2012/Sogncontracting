export const site = {
  name: "Sogn Contracting LLC",
  tagline: "Building You A Better Home",
  url: "https://sogncontracting.com",
  owner: "Paul Sogn",
  founded: "1995",
  yearsInBusiness: "30+",

  contact: {
    phone: "(602) 904-0741",
    phoneTel: "+16029040741",
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
        "Licensed general contractor serving Bandon and the Southern Oregon Coast since 1995. Residential and commercial construction, remodeling, custom homes, and more. CCB# 257491.",
    },
    services: {
      title: "Construction Services | Sogn Contracting LLC",
      description:
        "Full-service residential and commercial construction in Bandon, Oregon. Remodeling, custom homes, additions, roofing, decks, concrete, and commercial builds. 30+ years of experience.",
    },
    gallery: {
      title: "Our Work | Sogn Contracting LLC",
      description:
        "Before and after project photos from Sogn Contracting. Kitchen remodels, exterior renovations, commercial builds, and more across the Southern Oregon Coast.",
    },
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Gallery", href: "/gallery/" },
    { label: "Contact", href: "/#contact" },
  ],

  structuredData: {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "Sogn Contracting LLC",
    description:
      "Licensed general contractor serving Bandon and the Southern Oregon Coast since 1995. Residential and commercial construction.",
    url: "https://sogncontracting.com",
    telephone: "+16029040741",
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
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 43.09,
        longitude: -124.41,
      },
      geoRadius: "50 mi",
    },
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
