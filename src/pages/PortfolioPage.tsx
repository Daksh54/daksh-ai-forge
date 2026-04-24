import { useState } from "react";
import { motion } from "framer-motion";
import { PageSeo } from "@/components/site/PageSeo";
import { PageIntro } from "@/components/site/PageIntro";
import { ProjectCard } from "@/components/site/ProjectCard";
import { portfolioFilters, projects } from "@/data/site";
import { cn } from "@/lib/utils";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="page-shell">
      <PageSeo
        title="Portfolio"
        description="Selected product, backend, commerce, and AI work by Daksh Sharma."
      />

      <motion.section
        initial={{ opacity: 0, clipPath: "inset(0 0 40% 0 round 32px)" }}
        animate={{ opacity: 1, clipPath: "inset(0 0 0% 0 round 32px)" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="surface-panel relative overflow-hidden p-8 sm:p-10 lg:p-12"
      >
        <div className="absolute right-8 top-8 h-28 w-28 rounded-full bg-primary/10 blur-3xl" />
        <PageIntro
          eyebrow="Portfolio"
          title="A filterable gallery of selected work."
          description="Four projects across e-commerce, AI systems, and real-time apps."
          titleClassName="font-display sm:text-6xl"
          descriptionClassName="max-w-3xl"
        />
      </motion.section>

      <section className="space-y-6">
        <div className="flex flex-wrap gap-3" aria-label="Filter projects by category">
          {portfolioFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "relative overflow-hidden rounded-full border px-4 py-2 font-label text-[12px] uppercase tracking-[0.18em] transition-colors",
                activeFilter === filter
                  ? "border-primary text-primary-foreground"
                  : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-white/20 hover:text-foreground",
              )}
            >
              {activeFilter === filter ? (
                <motion.span
                  layoutId="portfolio-filter-active"
                  className="absolute inset-0 rounded-full bg-primary shadow-[0_0_34px_-14px_hsl(var(--primary))]"
                  transition={{ type: "spring", stiffness: 280, damping: 24 }}
                />
              ) : null}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default PortfolioPage;
