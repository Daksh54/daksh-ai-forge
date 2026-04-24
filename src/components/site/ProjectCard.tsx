import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45 }}
    whileHover={{ y: -10, rotateZ: -0.35 }}
    className="surface-panel group flex h-full flex-col overflow-hidden"
  >
    <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
      <img
        src={project.image}
        alt={project.imageAlt}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
      <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#0b1220]/85 px-3 py-1 font-label text-[11px] uppercase tracking-[0.22em] text-primary shadow-[0_0_30px_-18px_hsl(var(--primary))]">
        {project.category}
      </div>
      <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/[0.62] px-3 py-1 font-label text-[11px] uppercase tracking-[0.22em] text-white">
        {project.year}
      </div>
    </div>

    <div className="flex flex-1 flex-col gap-5 p-6">
      <div className="space-y-3">
        <div className="space-y-1">
          <p className="font-label text-[11px] uppercase tracking-[0.24em] text-primary">{project.tagline}</p>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">{project.title}</h3>
        </div>
        <p className="text-sm leading-7 text-muted-foreground">{project.summary}</p>
      </div>

      <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
        {project.results.slice(0, 2).map((result) => (
          <li key={result} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
            <span>{result}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-label text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3">
        <Button asChild className="rounded-full px-5 shadow-[0_0_34px_-18px_hsl(var(--primary))]">
          <Link to={`/portfolio/${project.slug}`}>
            View details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full border-white/10 bg-white/[0.03] px-5">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            Code
            <Github className="ml-2 h-4 w-4" />
          </a>
        </Button>
        {project.live ? (
          <Button asChild variant="ghost" className="rounded-full px-4 text-foreground hover:bg-white/[0.04]">
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        ) : null}
      </div>
    </div>
  </motion.article>
);
