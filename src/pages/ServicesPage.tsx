import { Button } from "@/components/ui/button";
import { PageSeo } from "@/components/site/PageSeo";
import { PageIntro } from "@/components/site/PageIntro";
import { process, services } from "@/data/site";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <div className="page-shell">
      <PageSeo
        title="Services"
        description="Services by Daksh Sharma in full-stack development, backend systems, AI integration, and real-time applications."
      />

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="surface-panel p-8 sm:p-10 lg:p-12"
      >
        <PageIntro
          eyebrow="Services"
          title="Services I offer"
          description="Full-stack development, backend work, AI integrations, and real-time applications."
          titleClassName="font-hero text-5xl sm:text-6xl"
          descriptionClassName="max-w-3xl"
        />
      </motion.section>

      <section className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -10, rotateZ: index % 2 === 0 ? -1.2 : 1.2 }}
              className="surface-panel p-6 sm:p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[0_0_28px_-16px_hsl(var(--primary))]">
                <Icon className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">{service.title}</h3>
                <p className="text-sm leading-7 text-muted-foreground sm:text-base">{service.description}</p>
              </div>
            </motion.article>
          );
        })}
      </section>

      <section className="surface-panel p-8 sm:p-10 lg:p-12">
        <PageIntro
          eyebrow="Process"
          title="Simple workflow"
          description="A short process to keep the project clear from start to finish."
          titleClassName="font-display"
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-4">
          {process.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="font-label text-[12px] text-primary">{item.step}</p>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
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
          <p className="eyebrow">Start a project</p>
          <h2 className="font-hero text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s build something clean and useful.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            Share the scope, budget, and timeline through the contact form.
          </p>
        </div>

        <Button asChild className="rounded-full px-6 shadow-[0_0_34px_-18px_hsl(var(--primary))]">
          <Link to="/contact">Work with me</Link>
        </Button>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
