export type Project = {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    link: string;
};

export const projectData: Project[] = [
  {
    id: 1,
    title: "Porsernasma V PT PGRI 2025",
    description: "Handle all parts of the frontend",
    techStack: ["Laravel", "Tailwind", "Alpine.js"],
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "E-Commerce V1",
    description: "Personal ecommerce website",
    techStack: ["Next.js", "TypeScript", "Sanity.io"],
    link: "https://afzaal-commerce.vercel.app/",
  },
  {
    id: 3,
    title: "Apple Web Clone",
    description: "Apple Web Clone",
    techStack: ["Three.js", "Tailwind", "React"],
    link: "https://apple-web-kappa.vercel.app",
  },
  {
    id: 4,
    title: "Porsernasma V PT PGRI 2025",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, animi.",
    techStack: ["Laravel", "Tailwind", "Alpine.js"],
    link: "https://example.com/project1",
  },
  {
    id: 5,
    title: "Dashboard Admin 2024",
    description: "Proin ac turpis eget sapien scelerisque volutpat. Donec eget lectus elit.",
    techStack: ["Next.js", "TypeScript", "Prisma"],
    link: "https://example.com/project2",
  },
  {
    id: 6,
    title: "Sistem Informasi Sekolah",
    description: "Aliquam erat volutpat. Phasellus sit amet velit non arcu tincidunt cursus.",
    techStack: ["React", "Tailwind", "Firebase"],
    link: "https://example.com/project3",
  },
];
  