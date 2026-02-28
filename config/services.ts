export interface ScopeItem {
  text: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: string;
  scopeTitle: string;
  scopeItems: ScopeItem[];
  footerNote: string;
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
    title: "Remodeling & Renovations",
    description:
      "Transforming your space with precision and care. Whether it's a single room or a whole-home renovation, we manage every detail from demolition to the final coat of paint.",
    icon: "renovation",
    scopeTitle: "Typical Scope",
    scopeItems: [
      { text: "Kitchen updates (cabinets, countertops, layout, appliances, flooring)" },
      { text: "Bathroom remodeling (tile, fixtures, showers, vanities)" },
      { text: "Basement finishing and conversions" },
      { text: "Interior finishing (trim, drywall, paint, flooring)" },
      { text: "Window and door replacement" },
    ],
    footerNote: "Permits and scheduling handled.",
  },
  {
    id: "custom-homes",
    title: "Custom Home Builds",
    description:
      "Crafting new homes tailored to your vision. From foundation to finish, we build with quality materials and attention to every detail.",
    icon: "custom-home",
    scopeTitle: "What You Get",
    scopeItems: [
      { text: "Design to completion" },
      { text: "High-quality materials" },
      { text: "Energy efficient construction" },
      { text: "Electrical and plumbing coordination" },
      { text: "Full permit management" },
    ],
    footerNote: "Full warranty included.",
  },
  {
    id: "additions",
    title: "Additions & Expansions",
    description:
      "More space for your growing family or changing needs. We handle structural engineering, permitting, and construction so the addition feels like it was always part of the home.",
    icon: "addition",
    scopeTitle: "Project Types",
    scopeItems: [
      { text: "Room additions" },
      { text: "Garage construction and conversion" },
      { text: "Second-story additions" },
      { text: "In-law suites" },
      { text: "Sunrooms and enclosed porches" },
    ],
    footerNote: "Matched to your existing structure.",
  },
  {
    id: "roofing",
    title: "Roofing",
    description:
      "Protecting what matters most. New installs, repairs, and complete re-roofing for residential and commercial properties.",
    icon: "roofing",
    scopeTitle: "Services",
    scopeItems: [
      { text: "New roof installation" },
      { text: "Roof repair and patching" },
      { text: "Complete re-roofing" },
      { text: "Gutter installation" },
      { text: "Storm damage assessment" },
    ],
    footerNote: "Licensed and insured roofing work.",
  },
  {
    id: "decks",
    title: "Decks & Outdoor Living",
    description:
      "Creating outdoor spaces for relaxation and entertainment. Built to handle the Oregon coast climate.",
    icon: "deck",
    scopeTitle: "Good Fit For",
    scopeItems: [
      { text: "New deck installations" },
      { text: "Patio and pergolas" },
      { text: "Outdoor kitchens and living areas" },
      { text: "Fence installation" },
      { text: "Landscape structures" },
    ],
    footerNote: "Serving the local area.",
  },
  {
    id: "commercial",
    title: "Commercial Construction",
    description:
      "From office buildouts to warehouse construction, we bring the same quality and reliability to every commercial project.",
    icon: "commercial",
    scopeTitle: "Capabilities",
    scopeItems: [
      { text: "Commercial new construction" },
      { text: "Metal building construction" },
      { text: "Tenant improvements and buildouts" },
      { text: "Storefront renovations" },
      { text: "ADA compliance upgrades" },
    ],
    footerNote: "Bonded for commercial projects.",
  },
  {
    id: "concrete",
    title: "Site Work & Concrete",
    description:
      "Solid foundations and clean finishes. Driveways, walkways, pads, and site preparation done right.",
    icon: "concrete",
    scopeTitle: "Scope",
    scopeItems: [
      { text: "Concrete driveways and walkways" },
      { text: "Driveway replacement and resurfacing" },
      { text: "Grading and site preparation" },
      { text: "Retaining walls" },
      { text: "Foundation work" },
    ],
    footerNote: "Equipment and crew for jobs of all sizes.",
  },
  {
    id: "repairs",
    title: "Repairs & Maintenance",
    description:
      "Dependable solutions for all your property repair needs. No job too small when it comes to keeping your home in top shape.",
    icon: "repairs",
    scopeTitle: "Process",
    scopeItems: [
      { text: "Inspection and assessment" },
      { text: "Efficient repairs" },
      { text: "Clean and reliable service" },
      { text: "Insurance restoration work" },
      { text: "Timely communication" },
    ],
    footerNote: "Prompt response, honest estimates.",
  },
];
