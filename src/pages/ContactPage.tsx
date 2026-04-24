import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { PageIntro } from "@/components/site/PageIntro";
import { PageSeo } from "@/components/site/PageSeo";
import { contactMethods, profile } from "@/data/site";

const ContactPage = () => {
  return (
    <div className="page-shell">
      <PageSeo
        title="Contact"
        description="Get in touch with Daksh Sharma about portfolio websites, full-stack products, backend systems, and AI integrations."
      />

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="surface-panel p-8 sm:p-10 lg:p-12"
      >
        <PageIntro
          eyebrow="Contact"
          title="Get in touch"
          description="Use the form for project details, or contact me directly through email, LinkedIn, or GitHub."
          titleClassName="font-hero text-5xl sm:text-6xl"
          descriptionClassName="max-w-3xl"
        />
      </motion.section>

      <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-6">
          <div className="surface-panel p-6 sm:p-8">
            <p className="eyebrow">Direct contact</p>
            <div className="mt-5 space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const external = method.href.startsWith("http");

                return (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ x: 8 }}
                    className="flex items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-primary"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[0_0_28px_-16px_hsl(var(--primary))]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-label text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{method.label}</p>
                        <p className="mt-1 text-sm font-medium text-foreground sm:text-base">{method.value}</p>
                      </div>
                    </div>
                    {external ? <ArrowUpRight className="h-4 w-4 text-muted-foreground" /> : null}
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="surface-panel p-6 sm:p-8">
            <p className="eyebrow">Best for</p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>Portfolio websites</p>
              <p>Full-stack apps</p>
              <p>Backend and API work</p>
              <p>AI features and integrations</p>
            </div>
            <div className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
              <p className="font-display text-sm font-medium text-foreground">{profile.location}</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{profile.availability}</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </section>
    </div>
  );
};

export default ContactPage;
