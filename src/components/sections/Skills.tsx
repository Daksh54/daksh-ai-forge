import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Expertise",
      skills: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "JavaScript",
        "TypeScript",
      ],
      description: "My primary tech stack for building robust applications",
      delay: 0
    },
    {
      title: "Currently Learning",
      skills: ["AI/ML", "AWS Developer Associate", "Supabase", "TensorFlow", "PyTorch"],
      description: "Expanding my horizons into AI/ML and Cloud Computing",
      delay: 0.1
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Docker",
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "REST APIs",
        "FastAPI",
        "Socket.io",
      ],
      description: "Essential tools that power my development workflow",
      delay: 0.2
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: category.delay }}
              className="glass-card p-8 rounded-2xl flex flex-col h-full hover:border-primary/30 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-2 text-gradient">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-background/40 hover:bg-primary/20 hover:text-primary transition-all cursor-default px-3 py-1.5 text-sm font-medium border border-white/5"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
