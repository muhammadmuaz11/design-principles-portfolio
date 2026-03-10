export type ServiceProcess = {
  step: number;
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  gradient: string;
  badge: string | null;
  overview: string;
  whoFor: string[];
  deliverables: string[];
  process: ServiceProcess[];
  techStack: string[];
};

export const services: Service[] = [
  {
    slug: "responsive-website",
    title: "Responsive Website Development",
    tagline: "Pixel-perfect sites that work beautifully on every screen.",
    description:
      "Pixel-perfect, mobile-first websites built from scratch. Fast, accessible, and optimised for all screen sizes.",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design"],
    gradient: "from-blue-500 to-indigo-600",
    badge: "Popular",
    overview:
      "I build fully responsive websites from scratch using Next.js and Tailwind CSS. Every site I deliver is mobile-first, accessible, and optimised for performance — not just something that shrinks on small screens, but a carefully crafted experience for every device.",
    whoFor: [
      "Startups and small businesses needing a professional web presence",
      "Developers who need a frontend built to spec",
      "Anyone who wants a clean, modern site that actually performs",
    ],
    deliverables: [
      "Fully responsive layout (mobile, tablet, desktop)",
      "Clean, maintainable component-based code",
      "Cross-browser compatibility",
      "Basic SEO setup (meta tags, semantic HTML)",
      "Deployment-ready build",
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description:
          "A brief conversation about your goals, target audience, and design preferences.",
      },
      {
        step: 2,
        title: "Design & Planning",
        description:
          "Mapping out the structure and layout, referencing your branding or existing design assets.",
      },
      {
        step: 3,
        title: "Development",
        description:
          "Building the site component by component, keeping code clean and each piece reviewable.",
      },
      {
        step: 4,
        title: "Review & Revisions",
        description:
          "You review the work, give feedback, and I iterate until it is exactly right.",
      },
      {
        step: 5,
        title: "Delivery",
        description:
          "Final handoff with clean code, documentation, and deployment support.",
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "shadcn/ui",
      "Vercel",
    ],
  },
  {
    slug: "landing-page",
    title: "Landing Page Development",
    tagline: "Landing pages that convert visitors into leads.",
    description:
      "High-converting landing pages with clean layouts, smooth animations, and a focus on user experience.",
    tags: ["React", "Tailwind CSS", "UI Development"],
    gradient: "from-purple-500 to-pink-600",
    badge: null,
    overview:
      "A landing page is often the first impression someone gets of your product or service. I build landing pages that are visually strong, fast to load, and structured to guide visitors towards taking action.",
    whoFor: [
      "Product launches needing a focused marketing page",
      "Freelancers and agencies wanting a professional online pitch",
      "SaaS products requiring a clear, converting homepage",
    ],
    deliverables: [
      "Hero, features, CTA, and footer sections",
      "Smooth scroll animations",
      "Mobile-first responsive layout",
      "Performance optimised (images, fonts, bundle size)",
      "Form integration (contact or email capture)",
    ],
    process: [
      {
        step: 1,
        title: "Brief",
        description:
          "Understanding your offer, target audience, and the single primary action you want visitors to take.",
      },
      {
        step: 2,
        title: "Structure",
        description:
          "Planning the page flow — hero, value proposition, social proof, and CTA placement.",
      },
      {
        step: 3,
        title: "Build",
        description:
          "Implementing the full page with clean components, animations, and responsive design.",
      },
      {
        step: 4,
        title: "Polish",
        description:
          "Fine-tuning spacing, typography, and micro-interactions for a professional finish.",
      },
      {
        step: 5,
        title: "Launch",
        description:
          "Final review, optimisation pass, and deployment to your hosting of choice.",
      },
    ],
    techStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "Vercel",
    ],
  },
  {
    slug: "react-nextjs-web-app",
    title: "React / Next.js Web App",
    tagline: "Full frontend builds — from routing to deployment.",
    description:
      "Full frontend builds using React and Next.js — routing, state management, API integration, and deployment.",
    tags: ["React", "Next.js", "TypeScript"],
    gradient: "from-cyan-500 to-blue-600",
    badge: "Popular",
    overview:
      "Beyond static pages, I build full React and Next.js web applications — with routing, dynamic data, API integration, authentication flows, and more. I write clean, typed TypeScript code that is maintainable and scalable.",
    whoFor: [
      "Teams needing a frontend engineer to build out a product",
      "Developers who need help with a specific Next.js implementation",
      "Projects requiring dynamic, data-driven interfaces",
    ],
    deliverables: [
      "App Router or Pages Router Next.js setup",
      "TypeScript throughout",
      "API route integration or external API connection",
      "State management (Context, Zustand, or React Query)",
      "Authentication integration (next-auth or similar)",
      "Clean, modular component architecture",
    ],
    process: [
      {
        step: 1,
        title: "Scoping",
        description:
          "Defining the features, data requirements, and architecture before writing a line of code.",
      },
      {
        step: 2,
        title: "Architecture",
        description:
          "Setting up the project structure, routing, and state management approach.",
      },
      {
        step: 3,
        title: "Feature Development",
        description:
          "Building features incrementally with regular updates and check-ins.",
      },
      {
        step: 4,
        title: "Integration",
        description:
          "Connecting APIs, authentication, and any third-party services.",
      },
      {
        step: 5,
        title: "Review & Deploy",
        description:
          "Code review, performance audit, and deployment to production.",
      },
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Vercel",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
