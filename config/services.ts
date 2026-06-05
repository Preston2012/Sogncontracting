export interface ScopeItem {
  text: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  intro: string;
  icon: string;
  scopeTitle: string;
  scopeItems: ScopeItem[];
  process: string[];
  faq: FaqItem[];
  footerNote: string;
  /** Gallery project id whose real photos authentically depict this trade. Optional. */
  relatedProjectId?: string;
  /** Explicit feature image, overrides relatedProjectId. `full` renders it large with no caption. */
  featuredImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    full?: boolean;
  };
}

export interface ServiceGridItem {
  title: string;
  icon: string;
  oneLiner: string;
}

export const serviceGrid: ServiceGridItem[] = [
  {
    title: "General Contracting",
    icon: "contracting",
    oneLiner: "Complete construction management from permits to final walkthrough.",
  },
  {
    title: "Custom Homes",
    icon: "custom-home",
    oneLiner: "Your vision, built from the ground up.",
  },
  {
    title: "Renovations",
    icon: "renovation",
    oneLiner: "Kitchens, bathrooms, basements. Transforming spaces with precision.",
  },
  {
    title: "Additions",
    icon: "addition",
    oneLiner: "More room for the life you're building.",
  },
];

export const services: ServiceData[] = [
  {
    id: "remodeling",
    slug: "remodeling",
    title: "Remodeling & Renovations",
    h1: "Home Remodeling on the Southern Oregon Coast",
    metaTitle: "Home Remodeling in Bandon, OR",
    metaDescription:
      "Kitchen, bath, and whole-home remodeling on the Southern Oregon Coast. Licensed Bandon contractor since 1995, CCB# 257491. Free estimates.",
    description:
      "Transforming your space with precision and care. Whether it's a single room or a whole-home renovation, we manage every detail from demolition to the final coat of paint.",
    intro:
      "From a single room to a whole-home renovation, we handle every step from demolition to the final coat of paint, so the finished space fits the way you live.",
    icon: "renovation",
    scopeTitle: "Typical Scope",
    scopeItems: [
      { text: "Kitchen updates (cabinets, countertops, layout, appliances, flooring)" },
      { text: "Bathroom remodeling (tile, fixtures, showers, vanities)" },
      { text: "Basement finishing and conversions" },
      { text: "Interior finishing (trim, drywall, paint, flooring)" },
      { text: "Window and door replacement" },
    ],
    process: [
      "Walkthrough and free estimate",
      "Design, material selection, and permit planning",
      "Demolition and any structural work",
      "Finishes, fixtures, and a final walkthrough with you",
    ],
    faq: [
      {
        q: "How long does a remodel take?",
        a: "Most kitchen or bath remodels run a few weeks once materials are on site. Whole-home work takes longer. We give you a realistic schedule with your estimate and keep you updated as the job moves.",
      },
      {
        q: "Do you handle the permits?",
        a: "Yes. We pull and manage the permits your project needs through your city or county building department, and we schedule the required inspections.",
      },
      {
        q: "Can we stay in the house during the work?",
        a: "Often, yes, depending on the scope. For a single-room remodel most families stay put. For larger projects we talk through the disruption up front so there are no surprises.",
      },
    ],
    footerNote: "Permits and scheduling handled.",
    relatedProjectId: "kitchen-2024",
  },
  {
    id: "custom-homes",
    slug: "custom-homes",
    title: "Custom Home Builds",
    h1: "Custom Home Builds in Bandon and the South Coast",
    metaTitle: "Custom Home Builder in Bandon, OR",
    metaDescription:
      "Custom homes built foundation to finish on the Southern Oregon Coast. Licensed Bandon general contractor since 1995, CCB# 257491.",
    description:
      "New homes built to your spec. Foundation through finish, with quality materials and attention to every detail.",
    intro:
      "A custom home is a big decision. We build to your spec from the foundation up, with quality materials and the kind of attention to detail that holds up for decades.",
    icon: "custom-home",
    scopeTitle: "What You Get",
    scopeItems: [
      { text: "Design to completion" },
      { text: "High-quality materials" },
      { text: "Energy efficient construction" },
      { text: "Electrical and plumbing coordination" },
      { text: "Full permit management" },
    ],
    process: [
      "Plans, budget, and a free estimate",
      "Site preparation and foundation",
      "Framing, systems, and a weather-tight shell",
      "Interior finish, fixtures, and final walkthrough",
    ],
    faq: [
      {
        q: "Can you build from my own plans?",
        a: "Yes. Bring your plans and we will price and build from them. If you are still early, we can help you refine the scope before you commit.",
      },
      {
        q: "How long does a custom home take?",
        a: "It depends on size, site, and weather, but most custom homes on the coast run several months from foundation to finish. We map out the schedule with you before we break ground.",
      },
      {
        q: "Do you coordinate the subcontractors?",
        a: "Yes. As your general contractor we schedule and manage the electrical, plumbing, and other trades so the build stays on track.",
      },
    ],
    footerNote: "Full warranty included.",
    featuredImage: {
      src: "/hero-home-v2.webp",
      alt: "Creswell Oregon custom build",
      width: 1280,
      height: 549,
      full: true,
    },
  },
  {
    id: "additions",
    slug: "additions",
    title: "Additions & Expansions",
    h1: "Home Additions in Bandon and the South Coast",
    metaTitle: "Home Additions in Bandon, OR",
    metaDescription:
      "Room additions, second stories, and in-law suites that match your existing home. Licensed Bandon contractor since 1995, CCB# 257491.",
    description:
      "More space for your growing family or changing needs. We handle structural engineering, permitting, and construction so the addition feels like it was always part of the home.",
    intro:
      "More room for a growing family or changing needs. We handle the engineering, permitting, and construction so the new space ties into your home and looks like it was always there.",
    icon: "addition",
    scopeTitle: "Project Types",
    scopeItems: [
      { text: "Room additions" },
      { text: "Garage construction and conversion" },
      { text: "Second-story additions" },
      { text: "In-law suites" },
      { text: "Sunrooms and enclosed porches" },
    ],
    process: [
      "Walkthrough and free estimate",
      "Structural engineering and permit planning",
      "Foundation, framing, and tie-in to the existing home",
      "Finishes that match the rest of the house",
    ],
    faq: [
      {
        q: "Will the addition match my existing house?",
        a: "That is the goal. We match rooflines, siding, and trim so the new space reads as part of the original home, not a bolt-on.",
      },
      {
        q: "Do additions need engineering and permits?",
        a: "Most do. We handle the structural engineering and pull the permits through your city or county building department as part of the job.",
      },
      {
        q: "Can we live in the home during construction?",
        a: "Usually yes. We seal off the work area and tie the addition in toward the end, so daily life can carry on with as little disruption as possible.",
      },
    ],
    footerNote: "Matched to your existing structure.",
    relatedProjectId: "custom-addition-2026",
  },
  {
    id: "roofing",
    slug: "roofing",
    title: "Roofing",
    h1: "Roofing on the Southern Oregon Coast",
    metaTitle: "Roofing Contractor in Bandon, OR",
    metaDescription:
      "New roofs, re-roofing, and roof repair for homes and businesses on the Southern Oregon Coast. Licensed, CCB# 257491. Free estimates.",
    description:
      "Protecting what matters most. New installs, repairs, and complete re-roofing for residential and commercial properties.",
    intro:
      "A roof on the coast takes a beating from wind and rain. We install, repair, and re-roof homes and businesses so the structure underneath stays dry and protected.",
    icon: "roofing",
    scopeTitle: "Services",
    scopeItems: [
      { text: "New roof installation" },
      { text: "Roof repair and patching" },
      { text: "Complete re-roofing" },
      { text: "Gutter installation" },
      { text: "Storm damage assessment" },
    ],
    process: [
      "Roof inspection and free estimate",
      "Tear-off or repair plan and material selection",
      "Installation with attention to flashing and weather sealing",
      "Cleanup and a final check",
    ],
    faq: [
      {
        q: "Should I repair or replace my roof?",
        a: "It depends on the age and condition. A few damaged areas often call for a repair. Widespread wear usually means a re-roof is the better value. We will give you an honest read after we look.",
      },
      {
        q: "Can you assess storm damage?",
        a: "Yes. After a storm we can inspect the roof, document the damage, and give you an estimate for the repair or replacement.",
      },
      {
        q: "Do you install gutters too?",
        a: "Yes. Gutters are part of keeping water away from the roof and foundation, and we can install them along with the roofing work.",
      },
    ],
    footerNote: "Licensed and insured roofing work.",
  },
  {
    id: "decks",
    slug: "decks",
    title: "Decks & Outdoor Living",
    h1: "Decks and Outdoor Living on the Oregon Coast",
    metaTitle: "Deck Builder in Bandon, OR",
    metaDescription:
      "Decks, patios, and outdoor living built for the Oregon coast climate. Licensed Bandon contractor since 1995, CCB# 257491. Free estimates.",
    description:
      "Creating outdoor spaces for relaxation and entertainment. Built to handle the Oregon coast climate.",
    intro:
      "An outdoor space you actually use, built to stand up to coastal weather. From decks to pergolas, we design and build for the way you spend time outside.",
    icon: "deck",
    scopeTitle: "Good Fit For",
    scopeItems: [
      { text: "New deck installations" },
      { text: "Patios and pergolas" },
      { text: "Outdoor kitchens and living areas" },
      { text: "Fence installation" },
      { text: "Landscape structures" },
    ],
    process: [
      "Walkthrough and free estimate",
      "Layout, materials, and any required permits",
      "Footings, framing, and decking",
      "Railings, finishing, and final walkthrough",
    ],
    faq: [
      {
        q: "What decking holds up best on the coast?",
        a: "Salt air and damp weather are hard on materials. We will walk you through wood and composite options and what each one means for upkeep and lifespan in this climate.",
      },
      {
        q: "Do decks need a permit?",
        a: "Many do, depending on height and size. We check the local requirements and pull any permit the build needs.",
      },
      {
        q: "Can you build a covered deck?",
        a: "Yes. A roof or pergola makes a deck usable in coastal rain. We can design and build a covered structure that ties into your home.",
      },
    ],
    footerNote: "Serving the local area.",
  },
  {
    id: "commercial",
    slug: "commercial",
    title: "Commercial Construction",
    h1: "Commercial Construction on the South Coast",
    metaTitle: "Commercial Contractor in Bandon, OR",
    metaDescription:
      "Commercial construction, tenant improvements, and metal buildings on the Southern Oregon Coast. Bonded and licensed, CCB# 257491.",
    description:
      "From office buildouts to warehouse construction, we bring the same quality and reliability to every commercial project.",
    intro:
      "Commercial work calls for the same quality and reliability we bring to homes, plus an eye on your schedule and your budget. From buildouts to new construction, we keep the job moving.",
    icon: "commercial",
    scopeTitle: "Capabilities",
    scopeItems: [
      { text: "Commercial new construction" },
      { text: "Metal building construction" },
      { text: "Tenant improvements and buildouts" },
      { text: "Storefront renovations" },
      { text: "ADA compliance upgrades" },
    ],
    process: [
      "Scope review and free estimate",
      "Permit and code planning, including ADA where required",
      "Construction managed around your operations",
      "Punch list and final walkthrough",
    ],
    faq: [
      {
        q: "Do you do tenant improvements?",
        a: "Yes. We handle buildouts and tenant improvements, from a single suite to a full storefront renovation.",
      },
      {
        q: "Can you keep my business open during the work?",
        a: "Where it is practical, yes. We plan phasing and, when needed, off-hours work so we limit the impact on your customers and staff.",
      },
      {
        q: "Are you bonded for commercial projects?",
        a: "Yes. Sogn Contracting is licensed, bonded, and insured, with CCB# 257491.",
      },
    ],
    footerNote: "Bonded for commercial projects.",
  },
  {
    id: "concrete",
    slug: "concrete",
    title: "Site Work & Concrete",
    h1: "Concrete and Site Work on the South Coast",
    metaTitle: "Concrete & Site Work in Bandon, OR",
    metaDescription:
      "Concrete driveways, walkways, foundations, and site prep on the Southern Oregon Coast. Licensed Bandon contractor, CCB# 257491.",
    description:
      "Solid foundations and clean finishes. Driveways, walkways, pads, and site preparation done right.",
    intro:
      "Good concrete work starts below the surface. We prep the site, set the forms, and pour driveways, walkways, pads, and foundations that stay flat and solid.",
    icon: "concrete",
    scopeTitle: "Scope",
    scopeItems: [
      { text: "Concrete driveways and walkways" },
      { text: "Driveway replacement and resurfacing" },
      { text: "Grading and site preparation" },
      { text: "Retaining walls" },
      { text: "Foundation work" },
    ],
    process: [
      "Site review and free estimate",
      "Grading, base prep, and forming",
      "Pour, finish, and cure",
      "Cleanup and final check",
    ],
    faq: [
      {
        q: "Can you replace a cracked driveway?",
        a: "Yes. We remove the old slab, fix the base that caused the problem, and pour a new driveway built to last.",
      },
      {
        q: "Do you pour foundations for additions and homes?",
        a: "Yes. Foundation and footing work is part of our site and concrete services, and it ties directly into our addition and custom home builds.",
      },
      {
        q: "Can you build a retaining wall?",
        a: "Yes. On coastal lots with slope and drainage to manage, a proper retaining wall protects the rest of the site. We design and build them to hold.",
      },
    ],
    footerNote: "Equipment and crew for jobs of all sizes.",
    featuredImage: {
      src: "/projects-v2/home-exterior-2024/progress-01.webp",
      alt: "Long concrete walkway poured by Sogn Contracting, Bandon Oregon",
      width: 1000,
      height: 750,
    },
  },
  {
    id: "repairs",
    slug: "repairs",
    title: "Repairs & Maintenance",
    h1: "Home Repairs and Maintenance on the South Coast",
    metaTitle: "Home Repairs in Bandon, OR",
    metaDescription:
      "Honest, reliable home repairs and maintenance on the Southern Oregon Coast. Insurance restoration welcome. Licensed, CCB# 257491.",
    description:
      "Property repairs done right the first time. No job too small when it comes to keeping your home in top shape.",
    intro:
      "Not every job is a remodel. When something needs fixing, we show up, do it right the first time, and leave the place clean.",
    icon: "repairs",
    scopeTitle: "Process",
    scopeItems: [
      { text: "Inspection and assessment" },
      { text: "Efficient repairs" },
      { text: "Clean and reliable service" },
      { text: "Insurance restoration work" },
      { text: "Timely communication" },
    ],
    process: [
      "Inspection and assessment",
      "Clear estimate and plan",
      "Efficient, tidy repair work",
      "Final check and follow-up",
    ],
    faq: [
      {
        q: "Is any job too small?",
        a: "No. We take on small repairs and maintenance, not just big builds. Keeping your home in good shape now saves bigger costs later.",
      },
      {
        q: "Do you do insurance restoration work?",
        a: "Yes. If you are repairing damage covered by insurance, we can assess the work and help you move the project forward.",
      },
      {
        q: "How fast can you respond?",
        a: "We aim to respond promptly and give you an honest estimate. Send us a message or call and we will get back to you quickly.",
      },
    ],
    footerNote: "Prompt response, honest estimates.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
