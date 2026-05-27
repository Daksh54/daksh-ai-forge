import {
  BrainCircuit,
  BriefcaseBusiness,
  Github,
  Globe,
  Linkedin,
  Mail,
  Phone,
  ServerCog,
  Waypoints,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProjectCategory = "AI Systems" | "Commerce" | "Real-Time";

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  tagline: string;
  summary: string;
  overview: string;
  image: string;
  imageAlt: string;
  github: string;
  live?: string;
  stack: string[];
  results: string[];
  metrics: ProjectMetric[];
  challenge: string;
  build: string;
  outcome: string;
  featured: boolean;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const profile = {
  name: "Daksh Sharma",
  role: "Software Engineer",
  headline: "MERN Stack Developer focused on full-stack apps, AI integrations, and backend systems.",
  subheadline: "Building clean products with React, Node.js, FastAPI, and modern tooling.",
  location: "Gurgaon, India",
  email: "dakshsharma5454871@gmail.com",
  phone: "+91 9310754550",
  linkedin: "https://www.linkedin.com/in/daksh-sharma54/",
  github: "https://github.com/Daksh54",
  portfolio: "https://dakshsharma5454871.online/",
  resume: "https://drive.google.com/file/d/1OKZC_aOFcrew6PvHFf3AYHTW5Tz8Qmoj/view?usp=drive_link",
  photo: "https://i.postimg.cc/CKBSjK5M/linkdein-profile-photo-for-me.png",
  shortBio:
    "Software engineer with strong MERN fundamentals and a growing focus on AI-driven products, scalable APIs, and real-time systems.",
  extendedBio:
    "I like building products that are simple on the frontend and solid on the backend. Most of my work sits around React, Node.js, FastAPI, databases, and applied AI features.",
  availability: "Available for freelance work and collaborations.",
};

export const stats = [
  { value: "4", label: "Projects" },
  { value: "MERN", label: "Core stack" },
  { value: "AI/ML", label: "Focus area" },
  { value: "<300ms", label: "Trading latency" },
];

export const projects: Project[] = [
  {
    slug: "roastflow",
    title: "RoastFlow",
    category: "Commerce",
    year: "2026",
    tagline: "AI-powered retail platform",
    summary:
      "An AI-powered D2C storefront with recommendation logic, polished shopping flows, and a conversational concierge.",
    overview:
      "RoastFlow turns a standard MERN e-commerce build into a stronger retail product. It combines a clean storefront, recommendation workflows, and AI-assisted merchandising in one experience.",
    image: "/portfolio/roastflow.png",
    imageAlt: "RoastFlow storefront interface",
    github: "https://github.com/Daksh54/MERN-Stack-Ecommerce-Project",
    live: "http://mern-stack-ecommerce-project-mocha.vercel.app/",
    stack: [
      "MERN Stack",
      "Python (FastAPI)",
      "Redux Toolkit Query",
      "Tailwind CSS",
      "Ollama",
      "Scikit-learn",
    ],
    results: [
      'Engineered a full-stack D2C platform with a Python/FastAPI microservice for ML-based product recommendations.',
      'Added a local LLM-powered "Roast Concierge" using Ollama for interactive product guidance.',
      'Improved storefront responsiveness with RTK Query caching and a low-latency "Coffee Exchange" experience.',
    ],
    metrics: [
      { label: "Product fit", value: "Retail / D2C" },
      { label: "AI layer", value: "Local LLM concierge" },
      { label: "Live site", value: "Available" },
    ],
    challenge:
      "The goal was to move beyond a standard store build and create a brand-led commerce experience that could guide indecisive customers toward the right products without overwhelming them.",
    build:
      "I combined a MERN storefront with a FastAPI recommendation service, layered in an Ollama-backed concierge for conversational discovery, and used RTK Query to keep browsing and product data interactions feeling fast.",
    outcome:
      "The result is a more distinctive commerce product: one part polished storefront, one part smart assistant, with a live deployment ready to demonstrate both UX and technical depth.",
    featured: true,
  },
  {
    slug: "tradegenius",
    title: "TradeGenius",
    category: "AI Systems",
    year: "2026",
    tagline: "AI-powered algorithmic trading platform",
    summary:
      "An autonomous trading platform that combines low-latency market pipelines, explainable signal generation, and risk-aware execution tooling.",
    overview:
      "TradeGenius is built for speed, discipline, and visibility. It connects live market data, model-driven signals, and execution infrastructure into a single operator-facing system with explainable AI support.",
    image: "/portfolio/chatmern.png",
    imageAlt: "TradeGenius market intelligence dashboard",
    github: "https://github.com/Daksh54/Trade_Genius.git",
    stack: [
      "Python",
      "Node.js",
      "React (TypeScript)",
      "XGBoost",
      "TimescaleDB",
      "Redis",
      "Celery",
      "Ollama",
      "Docker",
      "Fyers API",
    ],
    results: [
      "Architected an asynchronous data pipeline with Celery and TimescaleDB for live market processing.",
      "Achieved broker API execution latency below 300ms through a streamlined Fyers integration.",
      "Reduced maximum drawdown by more than 50% versus benchmark in historical backtesting using XGBoost and conformal prediction.",
    ],
    metrics: [
      { label: "Execution", value: "<300ms" },
      { label: "Risk improvement", value: "50%+ drawdown reduction" },
      { label: "Explainability", value: "Local LLM agent" },
    ],
    challenge:
      "Trading systems need both speed and trust. The challenge was building a platform that could act on live signals quickly while still exposing enough context for decisions, validation, and strategy reviews.",
    build:
      "I designed the market pipeline, model execution flow, and dashboard layer around low-latency ingestion, risk-calibrated signals, and an Ollama-powered agent that explains strategy behavior in plain language.",
    outcome:
      "TradeGenius became a strong demonstration of production-style systems thinking: time-series data, asynchronous jobs, broker integrations, and model-backed decision support all working together in one experience.",
    featured: true,
  },
  {
    slug: "nexusrag",
    title: "NexusRAG",
    category: "AI Systems",
    year: "2026",
    tagline: "AI chat app for document intelligence",
    summary:
      "A highly available RAG platform with hybrid retrieval, streaming responses, and resilient background ingestion for document-heavy workflows.",
    overview:
      "NexusRAG is designed for teams that need answers grounded in uploaded knowledge, not vague chatbot guesses. The product focuses on retrieval quality, ingestion stability, and conversational speed.",
    image: "/portfolio/nexusrag.png",
    imageAlt: "NexusRAG AI chat application",
    github: "https://github.com/Daksh54/ChatBot",
    stack: [
      "FastAPI",
      "React (Vite)",
      "MongoDB",
      "Qdrant",
      "Redis",
      "Groq LLM",
      "Docker",
      "Kubernetes",
    ],
    results: [
      "Built a Kubernetes-deployed RAG platform with dense retrieval, BM25 search, and cross-encoder reranking.",
      "Implemented SSE token streaming to make long responses feel responsive and conversational.",
      "Added a Redis-backed ingestion pipeline so heavy document processing never blocks the API.",
    ],
    metrics: [
      { label: "Retrieval", value: "Hybrid search" },
      { label: "Streaming", value: "SSE responses" },
      { label: "Deployment", value: "Kubernetes" },
    ],
    challenge:
      "The hard part was not just generating answers. It was keeping retrieval accurate, making large document ingestion reliable, and ensuring users still felt the system respond instantly while work happened in the background.",
    build:
      "I focused on the infrastructure behind the conversation: hybrid search for better recall, reranking for accuracy, SSE for fast perceived response times, and Redis-based background jobs to keep uploads from stalling the app.",
    outcome:
      "The platform demonstrates how AI features become more useful when the system architecture underneath them is robust, observable, and built around user patience.",
    featured: true,
  },
  {
    slug: "chatmern",
    title: "ChatMERN",
    category: "Real-Time",
    year: "2026",
    tagline: "Real-time messaging microservices",
    summary:
      "A messaging product with fast WebSocket delivery, distributed backend services, and live sentiment analysis layered into conversations.",
    overview:
      "ChatMERN explores what happens when a clean chat UI is backed by architecture that actually scales. Real-time delivery, presence updates, and AI-assisted analysis all run through a microservice-minded stack.",
    image: "/portfolio/tradegenius.png",
    imageAlt: "ChatMERN messaging interface",
    github: "https://github.com/Daksh54/ChatMern",
    stack: [
      "React (Zustand)",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Python (FastAPI)",
      "Docker",
      "Kubernetes",
    ],
    results: [
      "Architected a Kubernetes-deployed WebSocket backend with O(1) in-memory socket mapping for fast message broadcasting.",
      "Integrated a Python/FastAPI NLP microservice to run real-time sentiment analysis on live chat data.",
      "Created a product experience that connects messaging, activity states, and conversation intelligence in one flow.",
    ],
    metrics: [
      { label: "Delivery", value: "Low-latency broadcasts" },
      { label: "Architecture", value: "Distributed services" },
      { label: "Intelligence", value: "Live sentiment analysis" },
    ],
    challenge:
      "Real-time products feel simple on the surface, but they depend on precise socket management, stable presence updates, and backend logic that does not fall apart when traffic spikes.",
    build:
      "I implemented a scalable WebSocket backend, separated NLP processing into a dedicated FastAPI microservice, and kept the frontend responsive with a clean messaging-first layout.",
    outcome:
      "The project shows how to deliver chat experiences that feel light and immediate while still handling deeper backend concerns like routing, analytics, and intelligent message interpretation.",
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const portfolioFilters = ["All", ...new Set(projects.map((project) => project.category))];

export const services: Service[] = [
  {
    title: "Full-stack product builds",
    description:
      "Portfolio sites, dashboards, and web apps with clean UI and strong implementation.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Backend & API systems",
    description:
      "REST APIs, service flows, auth, caching, and backend structure that can scale cleanly.",
    icon: ServerCog,
  },
  {
    title: "AI feature integration",
    description:
      "RAG, recommendations, assistants, and other useful AI features for real products.",
    icon: BrainCircuit,
  },
  {
    title: "Real-time product engineering",
    description:
      "Messaging, streaming, sockets, and event-driven systems with responsive UX.",
    icon: Waypoints,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React.js", "Redux", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "Celery", "Socket.io", "REST", "SSE"],
  },
  {
    title: "Data & caching",
    items: ["PostgreSQL", "TimescaleDB", "MongoDB", "Redis", "Qdrant", "SQL"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "AWS", "Git/GitHub", "Postman"],
  },
  {
    title: "AI & ML",
    items: ["XGBoost", "Scikit-learn", "Ollama", "Groq", "RAG Architecture", "Python"],
  },
];

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Understand scope",
    description:
      "We define the goal, priority features, and timeline first.",
  },
  {
    step: "02",
    title: "Plan the build",
    description:
      "I map the UI, data flow, and project structure before implementation.",
  },
  {
    step: "03",
    title: "Build and refine",
    description:
      "The focus is clean UI, readable code, and a stable product.",
  },
  {
    step: "04",
    title: "Final polish",
    description:
      "After the main build, I fix details, improve performance, and smooth out the UX.",
  },
];

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "daksh-sharma-94602326b",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "Daksh54",
    href: profile.github,
    icon: Github,
  },
];

export const footerLinks = [
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Portfolio", href: profile.portfolio, icon: Globe },
];

export const emailjsConfig = {
  serviceId: "service_3w9thvm",
  templateId: "template_476258m",
  publicKey: "umpgGhuxHmk_3wWnl",
};

export const getProjectBySlug = (slug?: string) =>
  projects.find((project) => project.slug === slug);
