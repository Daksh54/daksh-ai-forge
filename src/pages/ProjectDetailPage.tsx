import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageSeo } from "@/components/site/PageSeo";
import { featuredProjects, getProjectBySlug } from "@/data/site";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const relatedProjects = featuredProjects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <div className="page-shell">
      <PageSeo title={project.title} description={project.summary} />

      <section className="surface-panel overflow-hidden p-8 sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Link to="/portfolio" className="inline-flex items-center gap-2 font-label text-[12px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>

            <div className="space-y-4">
              <p className="eyebrow">
                {project.category} / {project.year}
              </p>
              <div className="space-y-3">
                <h1 className="font-hero text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
                  {project.title}
                </h1>
                <p className="font-label text-[12px] uppercase tracking-[0.24em] text-primary">{project.tagline}</p>
                <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {project.overview}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full px-5 shadow-[0_0_34px_-18px_hsl(var(--primary))]">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  View code
                  <Github className="ml-2 h-4 w-4" />
                </a>
              </Button>
              {project.live ? (
                <Button asChild variant="outline" className="rounded-full border-white/10 bg-white/[0.03] px-5">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    Visit live project
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ) : null}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, clipPath: "inset(10% 8% 12% 8% round 28px)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 28px)" }}
            transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
            className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]"
          >
            <img src={project.image} alt={project.imageAlt} className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
          </motion.div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {project.metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 22, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 170, damping: 18, delay: index * 0.06 }}
            className="surface-panel p-6"
          >
            <p className="font-label text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{metric.label}</p>
            <p className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground">{metric.value}</p>
          </motion.div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div className="surface-panel p-6 sm:p-8">
            <p className="eyebrow">Challenge</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{project.challenge}</p>
          </div>
          <div className="surface-panel p-6 sm:p-8">
            <p className="eyebrow">Build</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{project.build}</p>
          </div>
          <div className="surface-panel p-6 sm:p-8">
            <p className="eyebrow">Outcome</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{project.outcome}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="surface-panel p-6 sm:p-8">
            <p className="eyebrow">Results</p>
            <ul className="mt-5 space-y-4">
              {project.results.map((result) => (
                <li key={result} className="flex gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-panel p-6 sm:p-8">
            <p className="eyebrow">Technology</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-[#0b1220] px-3 py-1.5 font-label text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="eyebrow">More work</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">Related case studies</h2>
          </div>
          <Button asChild variant="ghost" className="rounded-full px-0 text-foreground">
            <Link to="/portfolio">See all projects</Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {relatedProjects.map((item) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                to={`/portfolio/${item.slug}`}
                className="surface-panel flex items-center gap-4 p-4 transition-transform duration-200 hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-24 w-28 rounded-[20px] border border-white/10 object-cover"
                />
                <div className="space-y-1">
                  <p className="font-label text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{item.category}</p>
                  <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{item.summary}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
