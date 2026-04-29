// config/projects.ts
// Gallery project data. visible: true = real photos. visible: false = branded placeholder.
// Updated 2026-04-25: 5 projects live with photos from Paul. 4 awaiting resend (blank attachments).

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
    id: "kitchen-2025",
    title: "Kitchen Remodel",
    category: "remodeling",
    description: "Full kitchen rebuild. White shaker cabinets, dark hardwood flooring, stainless appliances, and brushed nickel hardware.",
    pairs: [
      { before: "/projects/kitchen-2025/before-1.webp", after: "/projects/kitchen-2025/after-1.webp", label: "Main view" },
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
    id: "front-porch-2024",
    title: "Front Porch Remodel",
    category: "exterior",
    description: "Custom cedar post-and-beam porch with new roofing, fresh exterior paint, and concrete steps.",
    pairs: [
      { before: "/projects/front-porch-2024/before-1.webp", after: "/projects/front-porch-2024/after-1.webp", label: "Entryway" },
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
    id: "living-dining-2024",
    title: "Living Room & Dining Remodel",
    category: "remodeling",
    description: "Open-concept living and dining room transformation.",
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
