import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageSeo } from "@/components/site/PageSeo";
import { ProjectCard } from "@/components/site/ProjectCard";
import { profile, projects, services } from "@/data/site";

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      staggerChildren: 0.12,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const Index = () => {
  const socialLinks = [
    { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
    { label: "GitHub", href: profile.github, icon: Github },
    { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  ];

  return (
    <div className="page-shell">
      <PageSeo
        title="Home"
        description="Portfolio of Daksh Sharma featuring e-commerce, AI systems, real-time apps, and full-stack project work."
      />

      <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="show"
          className="surface-panel flex flex-col justify-between p-8 sm:p-10 lg:p-14"
        >
          <div className="space-y-8">
            <motion.div variants={heroItem} className="space-y-4">
              <p className="eyebrow">{profile.name}</p>
              <div className="space-y-4">
                <h1 className="font-hero text-balance text-6xl font-semibold leading-[0.9] tracking-[-0.05em] text-foreground sm:text-7xl lg:text-[6.8rem]">
                  {profile.role}
                </h1>
                <p className="font-label text-[12px] uppercase tracking-[0.26em] text-primary sm:text-[13px]">
                  MERN Stack Developer • AI/ML • Backend Engineer
                </p>
                <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  {profile.headline}
                </p>
              </div>
            </motion.div>

            <motion.div variants={heroItem} className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full px-6 shadow-[0_0_34px_-18px_hsl(var(--primary))]">
                <Link to="/portfolio">
                  View projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/10 bg-white/[0.03] px-6">
                <Link to="/contact">Work with me</Link>
              </Button>
              <Button asChild variant="ghost" className="rounded-full px-4 text-foreground">
                <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                  Resume
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div variants={heroItem} className="flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-label text-[12px] text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                );
              })}
            </motion.div>
          </div>

          <motion.div variants={heroItem} className="mt-10 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-label text-[12px] uppercase tracking-[0.18em]">
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-label text-[12px] uppercase tracking-[0.18em]">
              {profile.availability}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="surface-panel relative overflow-hidden p-6 sm:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(102,246,255,0.14),transparent_24%),radial-gradient(circle_at_82%_78%,rgba(102,246,255,0.08),transparent_28%)]" />
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 1.2, 0, -1.2, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto max-w-lg"
          >
            <div className="absolute -inset-5 rounded-[42px] border border-primary/15" />
            <div className="absolute inset-6 rounded-[40px] bg-primary/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03]">
              <img
                src={profile.photo}
                alt={profile.name}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-full border border-white/10 bg-[#0b1220]/88 px-4 py-2 font-label text-[11px] uppercase tracking-[0.22em] text-primary shadow-[0_0_32px_-18px_hsl(var(--primary))]">
              Daksh Sharma
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="space-y-2">
            <p className="eyebrow">Projects</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Selected work
            </h2>
          </div>
          <Button asChild variant="ghost" className="w-fit rounded-full px-0 text-foreground">
            <Link to="/portfolio">View all</Link>
          </Button>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">Services</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            What I do
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8, rotateZ: index % 2 === 0 ? -0.8 : 0.8 }}
                className="surface-panel p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[0_0_24px_-12px_hsl(var(--primary))]">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="surface-panel flex flex-col gap-5 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12"
      >
        <div className="space-y-3">
          <p className="eyebrow">Contact</p>
          <h2 className="font-hero text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Have a project in mind?
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            Share the brief, budget, and timeline through the contact page.
          </p>
        </div>

        <Button asChild className="rounded-full px-6 shadow-[0_0_34px_-18px_hsl(var(--primary))]">
          <Link to="/contact">Contact me</Link>
        </Button>
      </motion.section>
    </div>
  );
};

export default Index;
