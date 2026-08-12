export interface Project {
  id: string;
  title: string;
  subtitle: string;
  dateRange: string;
  logoUrl: string;
  description: string;
  bulletPoints: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  collaborators?: { name: string; linkedinUrl: string }[];
  imagePile: string[];
}

export const csProfileData = {
  name: "Kaung San Lin",
  title: "Computer Science @ UW",
  focus: "Interested in UI/UX & Full-Stack roles",
  avatarUrl: "/images/avatar.png", // placeholder path
  socials: {
    linkedin: "https://linkedin.com/in/kaunglin",
    github: "https://github.com/KaungCS",
    email: "mailto:kaunglin445@gmail.com",
  }
};

export const featuredProjects: Project[] = [
  {
    id: "decision-tree",
    title: "The Decision Tree",
    subtitle: "Gamified decision-making application built during a hackathon",
    dateRange: "Jan 2026",
    logoUrl: "/images/DecisionTree.png",
    description: "A gamified decision support tool that secured first place in its project track, helping users navigate complex choices through interactive trees.",
    bulletPoints: [
      "Architected the full-stack web application using React and Tailwind CSS under strict hackathon time constraints.",
      "Engineered interactive decision nodes with dynamic state updates and smooth visual transitions."
    ],
    tags: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    imagePile: [
      "/images/projects/decision-tree-1.png",
      "/images/projects/decision-tree-2.png"
    ]
  },
  {
    id: "rxflect",
    title: "RxFlect",
    subtitle: "Mobile application prototype for human-computer interaction",
    dateRange: "Fall Quarter 2025",
    logoUrl: "/images/RxFlect.png",
    description: "Designed and prototyped a mobile application focused on user reflection and interaction accessibility for an HCI curriculum.",
    bulletPoints: [
      "Conducted user research, iterative wireframing, and high-fidelity prototype testing.",
      "Translated research insights into fluid UI component behaviors."
    ],
    tags: ["UI/UX", "Figma", "HCI"],
    liveUrl: "https://courses.cs.washington.edu/courses/cse440/25au/projects/rxflect",
    imagePile: [
      "/images/projects/rxflect-1.png"
    ]
  }
];

export const comingSoonProjects = [
  {
    title: "Portfolio v2.0 Overhaul",
    expectedFinish: "Q3 2026",
    teaser: "A multi-mode portfolio featuring hand-drawn custom assets, interactive portal animations, and modular CSS themes.",
    image: "/images/coming-soon-placeholder.png"
  }
];

export const contactLinks = [
  { label: "Email", value: "kaung@uw.edu", url: "mailto:kaung@uw.edu" },
  { label: "LinkedIn", value: "linkedin.com/in/kaunglin", url: "https://linkedin.com/in/kaunglin" },
  { label: "GitHub", value: "github.com/KaungCS", url: "https://github.com/KaungCS" }
];