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
    id: "kitchen-remodel-01",
    title: "Kitchen Remodel",
    category: "remodeling",
    description:
      "Complete kitchen gut and rebuild. New cabinets, quartz countertops, hardwood flooring, and updated lighting.",
    pairs: [
      {
        before: "/projects/kitchen-01/before-1.webp",
        after: "/projects/kitchen-01/after-1.webp",
        label: "Full view",
      },
      {
        before: "/projects/kitchen-01/before-2.webp",
        after: "/projects/kitchen-01/after-2.webp",
        label: "Island detail",
      },
    ],
    extras: ["/projects/kitchen-01/beauty-1.webp"],
    featured: true,
    visible: false,
  },
  {
    id: "exterior-renovation-01",
    title: "Exterior Renovation",
    category: "exterior",
    description:
      "Full exterior overhaul including new siding, windows, roofing, and landscaping updates.",
    pairs: [
      {
        before: "/projects/exterior-01/before-1.webp",
        after: "/projects/exterior-01/after-1.webp",
        label: "Front elevation",
      },
    ],
    featured: true,
    visible: false,
  },
  {
    id: "bathroom-remodel-01",
    title: "Bathroom Remodel",
    category: "remodeling",
    description:
      "Modern bathroom renovation with walk-in tile shower, new vanity, and updated fixtures.",
    pairs: [
      {
        before: "/projects/bathroom-01/before-1.webp",
        after: "/projects/bathroom-01/after-1.webp",
        label: "Shower area",
      },
      {
        before: "/projects/bathroom-01/before-2.webp",
        after: "/projects/bathroom-01/after-2.webp",
        label: "Vanity",
      },
    ],
    featured: true,
    visible: false,
  },
  {
    id: "commercial-build-01",
    title: "Commercial Building",
    category: "commercial",
    description:
      "New commercial construction with metal framing, storefront, and full interior buildout.",
    pairs: [
      {
        before: "/projects/commercial-01/before-1.webp",
        after: "/projects/commercial-01/after-1.webp",
        label: "Building exterior",
      },
    ],
    visible: false,
  },
  {
    id: "driveway-01",
    title: "Driveway Replacement",
    category: "concrete",
    description:
      "Complete driveway removal and replacement with new formed concrete and proper grading.",
    pairs: [
      {
        before: "/projects/driveway-01/before-1.webp",
        after: "/projects/driveway-01/after-1.webp",
        label: "Full driveway",
      },
    ],
    visible: false,
  },
  {
    id: "metal-building-01",
    title: "Metal Building",
    category: "commercial",
    description:
      "Metal building erection and finishing for commercial storage and workshop use.",
    pairs: [
      {
        before: "/projects/metal-01/before-1.webp",
        after: "/projects/metal-01/after-1.webp",
        label: "Structure",
      },
    ],
    visible: false,
  },
];
