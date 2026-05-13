// config/projects.ts
// Gallery project data. visible: true = real photos. visible: false = branded placeholder.
// Updated 2026-04-29: Drop 3 - custom addition 2026 added as showcase. Home exterior upgraded to showcase with new wide-angle hero + concrete progress shots.
// Featured rotation: custom-addition-2026, kitchen-2024, home-exterior-2024.

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
  progress?: string[];     // chronological build sequence (showcase projects)
  showcase?: boolean;      // render with ShowcaseProject component instead of standard card
  featured?: boolean;
  visible: boolean;
}

export const categories = [
  { id: "all", label: "All" },
  { id: "remodeling", label: "Remodeling" },
  { id: "exterior", label: "Exterior" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export const projects: ProjectData[] = [
  {
    id: "custom-addition-2026",
    title: "Custom Home Addition",
    category: "exterior",
    description: "Full custom addition to an existing home. Two-story extension with vaulted cedar ceilings, master suite with double vanity and tile shower, walk-in closet, and tied-in deck. Foundation through finish.",
    pairs: [
      { before: "/projects/custom-addition-2026/before-1.webp", after: "/projects/custom-addition-2026/after-1.webp", label: "Site to finish" },
    ],
    progress: [
      "/projects/custom-addition-2026/progress-01.webp",
      "/projects/custom-addition-2026/progress-02.webp",
      "/projects/custom-addition-2026/progress-03.webp",
      "/projects/custom-addition-2026/progress-04.webp",
      "/projects/custom-addition-2026/progress-05.webp",
      "/projects/custom-addition-2026/progress-06.webp",
      "/projects/custom-addition-2026/progress-07.webp",
      "/projects/custom-addition-2026/progress-08.webp",
      "/projects/custom-addition-2026/progress-09.webp",
      "/projects/custom-addition-2026/progress-10.webp",
      "/projects/custom-addition-2026/progress-11.webp",
      "/projects/custom-addition-2026/progress-12.webp",
      "/projects/custom-addition-2026/progress-13.webp",
      "/projects/custom-addition-2026/progress-14.webp",
      "/projects/custom-addition-2026/progress-15.webp",
      "/projects/custom-addition-2026/progress-16.webp",
    ],
    showcase: true,
    featured: true,
    visible: true,
  },
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
    id: "home-exterior-2024",
    title: "Home Exterior Renovation",
    category: "exterior",
    description: "Full exterior renovation. Fresh stucco and paint, new roofing, modernized window trim, stone retaining wall, custom concrete porch and walkway, and new entry steps.",
    pairs: [
      { before: "/projects/home-exterior-2024/before-1.webp", after: "/projects/home-exterior-2024/after-1.webp", label: "Front elevation" },
    ],
    progress: [
      "/projects/home-exterior-2024/progress-01.webp",
      "/projects/home-exterior-2024/progress-02.webp",
    ],
    showcase: true,
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
];
