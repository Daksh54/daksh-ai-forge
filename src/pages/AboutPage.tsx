import { motion } from "framer-motion";
import { PageSeo } from "@/components/site/PageSeo";
import { PageIntro } from "@/components/site/PageIntro";
import { profile, skillGroups, stats } from "@/data/site";

const AboutPage = () => {
  return (
    <div className="page-shell">
      <PageSeo
        title="About"
        description="About Daksh Sharma: software engineer focused on MERN development, backend systems, and AI product integrations."
      />

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="surface-panel p-8 sm:p-10 lg:p-12"
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <PageIntro
            eyebrow="About"
            title="MERN, backend systems, and AI integrations."
            description={profile.shortBio}
            titleClassName="font-hero text-5xl sm:text-6xl"
            descriptionClassName="max-w-3xl"
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="space-y-5 text-base leading-8 text-muted-foreground"
          >
            <p>{profile.extendedBio}</p>
            <p>{profile.availability}</p>
          </motion.div>
        </div>
      </motion.section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 170, damping: 18, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            className="surface-panel p-6"
          >
            <p className="font-display text-3xl font-semibold tracking-tight text-foreground">{stat.value}</p>
            <p className="mt-3 font-label text-[12px] uppercase tracking-[0.22em] text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      <section className="surface-panel p-8 sm:p-10 lg:p-12">
        <PageIntro
          eyebrow="Stack"
          title="Tools I work with"
          description="Frontend, backend, data, cloud, and AI technologies used in my projects."
          titleClassName="font-display"
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-[#0b1220] px-3 py-1.5 font-label text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
