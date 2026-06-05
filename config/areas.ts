// config/areas.ts
// Service-area towns within Sogn Contracting's documented 50-mile radius of Bandon.
// CONTENT RULE: every fact here must be verifiable and true (county, permit jurisdiction,
// distance, public geographic facts). No fabricated project claims. We do not assert that
// Sogn has built a specific project in a town unless that is documented in projects.ts.

export interface AreaFaq {
  q: string;
  a: string;
}

export interface AreaData {
  slug: string;
  name: string;
  /** County the town sits in. Note: Port Orford is Curry County, the rest are Coos County. */
  county: string;
  /** Approximate road distance from the Bandon shop, in miles. */
  distanceFromBandonMi: number;
  zip: string;
  /** Building department / permit jurisdiction (verifiable). */
  permitJurisdiction: string;
  /** Short, true positioning line used in the page intro and meta description. */
  blurb: string;
  /** Verifiable local building context. No invented project claims. */
  localContext: string[];
  /** Service slugs most relevant to this town. */
  topServices: string[];
  faq: AreaFaq[];
}

export const areas: AreaData[] = [
  {
    slug: "bandon",
    name: "Bandon",
    county: "Coos County",
    distanceFromBandonMi: 0,
    zip: "97411",
    permitJurisdiction: "City of Bandon and Coos County",
    blurb:
      "Bandon is our home. Sogn Contracting has been building and remodeling here since 1995.",
    localContext: [
      "Bandon is where our shop is, so local jobs get a fast response and no travel surcharge.",
      "The town mixes historic Old Town buildings, established neighborhoods, and newer construction near the coast and the Bandon Dunes area.",
      "Oceanfront and near-coast lots face wind, salt air, and damp weather, which shapes how we choose roofing, siding, and deck materials.",
      "Permits run through the City of Bandon and Coos County building departments, which we handle as part of the job.",
    ],
    topServices: ["remodeling", "additions", "custom-homes", "roofing", "decks", "concrete"],
    faq: [
      {
        q: "Do you serve Bandon?",
        a: "Yes. Bandon is our home base. Our shop is here, so local projects get a quick response and no travel charge.",
      },
      {
        q: "Who pulls the permits for a Bandon project?",
        a: "We do. We handle permits through the City of Bandon and Coos County building departments and schedule the inspections.",
      },
    ],
  },
  {
    slug: "coos-bay",
    name: "Coos Bay",
    county: "Coos County",
    distanceFromBandonMi: 24,
    zip: "97420",
    permitJurisdiction: "City of Coos Bay and Coos County",
    blurb:
      "Coos Bay is the largest city on the Oregon coast, about 24 miles north of our Bandon shop.",
    localContext: [
      "Coos Bay is the largest city on the Oregon coast and sits about 24 miles north of Bandon, well within our service area.",
      "The city has a wide mix of older homes, bayfront properties, and a downtown commercial core, which means everything from kitchen remodels to commercial buildouts.",
      "Bayfront and hillside lots come with their own drainage and foundation considerations that we plan for up front.",
      "Permits run through the City of Coos Bay and Coos County building departments.",
    ],
    topServices: ["remodeling", "additions", "commercial", "roofing", "custom-homes", "concrete"],
    faq: [
      {
        q: "Do you work in Coos Bay?",
        a: "Yes. Coos Bay is about 24 miles north of our Bandon shop and is part of our regular service area.",
      },
      {
        q: "Do you take on commercial work in Coos Bay?",
        a: "Yes. Along with home remodels and additions, we handle commercial construction and tenant improvements in the Coos Bay area.",
      },
    ],
  },
  {
    slug: "north-bend",
    name: "North Bend",
    county: "Coos County",
    distanceFromBandonMi: 27,
    zip: "97459",
    permitJurisdiction: "City of North Bend and Coos County",
    blurb:
      "North Bend sits next to Coos Bay, about 27 miles north of Bandon, and is part of our regular service area.",
    localContext: [
      "North Bend sits right next to Coos Bay, roughly 27 miles north of our Bandon shop.",
      "Much of the housing stock is older, so remodels, additions, and roof replacements are common needs in the area.",
      "Bayfront and low-lying lots make drainage and foundation work worth planning carefully, which we do as part of the estimate.",
      "Permits run through the City of North Bend and Coos County building departments.",
    ],
    topServices: ["remodeling", "additions", "roofing", "custom-homes", "decks", "concrete"],
    faq: [
      {
        q: "Do you serve North Bend?",
        a: "Yes. North Bend is about 27 miles from our Bandon shop, next to Coos Bay, and is part of our regular service area.",
      },
      {
        q: "Can you re-roof an older North Bend home?",
        a: "Yes. Re-roofing and roof repair on older homes is a common job for us in the North Bend and Coos Bay area.",
      },
    ],
  },
  {
    slug: "coquille",
    name: "Coquille",
    county: "Coos County",
    distanceFromBandonMi: 18,
    zip: "97423",
    permitJurisdiction: "City of Coquille and Coos County",
    blurb:
      "Coquille is the Coos County seat, about 18 miles inland from Bandon along the Coquille River.",
    localContext: [
      "Coquille is the Coos County seat and sits about 18 miles inland from Bandon, one of the closest towns to our shop.",
      "The county building department is based here, which keeps permitting straightforward for jobs across Coos County.",
      "Coquille is a river town with established neighborhoods, so remodels, additions, and repairs are frequent needs.",
      "Permits run through the City of Coquille and Coos County building departments.",
    ],
    topServices: ["remodeling", "additions", "custom-homes", "concrete", "roofing", "repairs"],
    faq: [
      {
        q: "Do you work in Coquille?",
        a: "Yes. Coquille is only about 18 miles from our Bandon shop, one of the closest towns we serve.",
      },
      {
        q: "Is Coquille where the county permits come from?",
        a: "Coquille is the Coos County seat and home to the county building department. We handle the permits for your project as part of the job.",
      },
    ],
  },
  {
    slug: "myrtle-point",
    name: "Myrtle Point",
    county: "Coos County",
    distanceFromBandonMi: 25,
    zip: "97458",
    permitJurisdiction: "City of Myrtle Point and Coos County",
    blurb:
      "Myrtle Point is a small Coquille River valley town about 25 miles from Bandon, and we serve it regularly.",
    localContext: [
      "Myrtle Point is a small town in the Coquille River valley, about 25 miles from our Bandon shop.",
      "It is a more rural, agricultural area with older homes and outbuildings, so remodels, additions, repairs, and shop or garage builds are common.",
      "Rural lots often involve site work, grading, and concrete, which we handle along with the build.",
      "Permits run through the City of Myrtle Point and Coos County building departments.",
    ],
    topServices: ["remodeling", "additions", "concrete", "repairs", "custom-homes", "roofing"],
    faq: [
      {
        q: "Do you serve Myrtle Point?",
        a: "Yes. Myrtle Point is about 25 miles from our Bandon shop and is part of our regular service area.",
      },
      {
        q: "Do you do site work on rural properties?",
        a: "Yes. Rural Myrtle Point lots often need grading, concrete, and site prep, and we handle that along with the rest of the build.",
      },
    ],
  },
  {
    slug: "port-orford",
    name: "Port Orford",
    county: "Curry County",
    distanceFromBandonMi: 27,
    zip: "97465",
    permitJurisdiction: "City of Port Orford and Curry County",
    blurb:
      "Port Orford sits about 27 miles south of Bandon in Curry County, the westernmost incorporated city in the lower 48.",
    localContext: [
      "Port Orford is about 27 miles south of Bandon and is the westernmost incorporated city in the contiguous United States.",
      "Because it is in Curry County, not Coos County, permitting goes through a different jurisdiction, which we are set up to handle.",
      "Its highly exposed coastal location means wind and salt air are a real factor, so material choices for roofing, siding, and decks matter even more here.",
      "Permits run through the City of Port Orford and Curry County building departments.",
    ],
    topServices: ["remodeling", "additions", "roofing", "decks", "custom-homes", "repairs"],
    faq: [
      {
        q: "Do you serve Port Orford?",
        a: "Yes. Port Orford is about 27 miles south of our Bandon shop and is part of our service area.",
      },
      {
        q: "Is Port Orford permitting different from Bandon?",
        a: "Yes. Port Orford is in Curry County rather than Coos County, so permits go through a different jurisdiction. We handle that as part of the job.",
      },
    ],
  },
];

export function getAreaBySlug(slug: string): AreaData | undefined {
  return areas.find((a) => a.slug === slug);
}
