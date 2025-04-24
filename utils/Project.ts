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
    link: "https://porsenasma.unipma.ac.id",
  },
  {
    id: 2,
    title: "Blockchain Student Attendance",
    description: "Student Attendance with Blockchain and Ethereum Network",
    techStack: ["Next.js", "Solidity"],
    link: "https://github.com/afzzrdn",
  },
  {
    id: 3,
    title: "Apple Web Clone",
    description: "Apple Web Clone",
    techStack: ["Three.js", "Tailwind", "React"],
    link: "https://github.com/afzzrdn",
  },
  {
    id: 4,
    title: "Rust Music Platform",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, animi.",
    techStack: ["Rust", "Next.js"],
    link: "https://github.com/afzzrdn",
  },
  {
    id: 5,
    title: "Next.js Smart Interview",
    description: "Proin ac turpis eget sapien scelerisque volutpat. Donec eget lectus elit.",
    techStack: ["Next.js", "TypeScript", "Vapi", "Firebase"],
    link: "https://github.com/afzzrdn",
  },
  {
    id: 6,
    title: "Rust Store Management",
    description: "Aliquam erat volutpat. Phasellus sit amet velit non arcu tincidunt cursus.",
    techStack: ["Rust", "Next.js"],
    link: "https://github.com/afzzrdn",
  },
];
  