// config/projects.ts
// Gallery project data. visible: true = real photos. visible: false = branded placeholder.
// Updated 2026-04-29: Drop 2 - living/dining live, exterior renamed and live, kitchen-2025 swap fix.

export interface PhotoPair {
  before: string;
  after: string;
  label?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  category: "remodeling" | "exterior" | "commercial" | "concrete";
  description: string;
  pairs: PhotoPair[];
  extras?: string[];
  featured?: boolean;
  visible: boolean;
}

export const categories = [
  { id: "all", label: "All" },
  { id: "remodeling", label: "Remodeling" },
  { id: "exterior", label: "Exterior" },
  { id: "commercial", label: "Commercial" },
  { id: "concrete", label: "Concrete" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export const projects: ProjectData[] = [
  {
    id: "kitchen-2024",
    title: "Kitchen Remodel",
    category: "remodeling",
    description: "Complete kitchen transformation. New white cabinetry, subway tile backsplash, hardwood flooring, stainless appliances, and updated lighting.",
    pairs: [
      { before: "/projects/kitchen-2024/before-1.webp", after: "/projects/kitchen-2024/after-1.webp", label: "Main view" },
    ],
    featured: true,
    visible: true,
  },
  {
    id: "kitchen-2023",
    title: "Kitchen Remodel",
    category: "remodeling",
    description: "Modern gray kitchen remodel. New cabinetry, quartz counters, hardwood flooring, built-in stainless appliances, and recessed lighting.",
    pairs: [
      { before: "/projects/kitchen-2023/before-1.webp", after: "/projects/kitchen-2023/after-1.webp", label: "Main view" },
    ],
    featured: true,
    visible: true,
  },
  {
    id: "home-exterior-2024",
    title: "Home Exterior Renovation",
    category: "exterior",
    description: "Full exterior renovation. Fresh stucco and paint, new roofing, modernized window trim, stone retaining wall, and new entry steps.",
    pairs: [
      { before: "/projects/home-exterior-2024/before-1.webp", after: "/projects/home-exterior-2024/after-1.webp", label: "Front elevation" },
    ],
    featured: true,
    visible: true,
  },
  {
    id: "kitchen-2025",
    title: "Kitchen Remodel",
    category: "remodeling",
    description: "Full kitchen rebuild. White shaker cabinets, hardwood flooring, stainless appliances, and brushed nickel hardware.",
    pairs: [
      { before: "/projects/kitchen-2025/before-1.webp", after: "/projects/kitchen-2025/after-1.webp", label: "Main view" },
    ],
    featured: false,
    visible: true,
  },
  {
    id: "master-bath-2023",
    title: "Master Bathroom Remodel",
    category: "remodeling",
    description: "Full bathroom gut and rebuild. New vanity with marble counter, walk-in shower, hardwood flooring, and modern fixtures throughout.",
    pairs: [
      { before: "/projects/master-bath-2023/before-1.webp", after: "/projects/master-bath-2023/after-1.webp", label: "Vanity area" },
    ],
    extras: [
      "/projects/master-bath-2023/extra-1.webp",
      "/projects/master-bath-2023/extra-2.webp",
    ],
    featured: false,
    visible: true,
  },
  {
    id: "living-dining-2024",
    title: "Living Room & Dining Remodel",
    category: "remodeling",
    description: "Open-concept living and dining room transformation. Wood paneling removed, fresh paint and accent wall, new hardwood flooring throughout, modern lighting.",
    pairs: [
      { before: "/projects/living-dining-2024/before-1.webp", after: "/projects/living-dining-2024/after-1.webp", label: "Living room" },
      { before: "/projects/living-dining-2024/before-2.webp", after: "/projects/living-dining-2024/after-2.webp", label: "Dining area" },
    ],
    featured: false,
    visible: true,
  },

  // ---- Awaiting photos from Paul (resend in progress) ----
  {
    id: "bathroom-2024",
    title: "Bathroom Remodel",
    category: "remodeling",
    description: "Full bathroom renovation.",
    pairs: [],
    visible: false,
  },
  {
    id: "custom-concrete-2023",
    title: "Custom Concrete Work",
    category: "concrete",
    description: "Custom concrete driveway and site work.",
    pairs: [],
    visible: false,
  },
  {
    id: "plumbing-electrical-2023",
    title: "Remodel: Plumbing & Electrical",
    category: "remodeling",
    description: "Full plumbing and electrical remodel.",
    pairs: [],
    visible: false,
  },
];
