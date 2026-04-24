import { GraduationCap, Code2, Award } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Daksh Sharma is a passionate software developer focused on building high-performance
              web applications using the MERN stack. With a strong foundation in full-stack development
              and ongoing learning in AI/ML and AWS technologies, he strives to create solutions that
              blend scalability, automation, and intelligent system design.
            </p>

            <div className="glass-card p-8 rounded-2xl space-y-6 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all group-hover:scale-110">
                  <GraduationCap className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Education</h3>
                  <p className="text-sm text-muted-foreground">B.Tech in Computer Science and Engineering (CSIT)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all group-hover:scale-110">
                  <Code2 className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Currently Learning</h3>
                  <p className="text-sm text-muted-foreground">AI/ML, AWS Developer Associate, Supabase</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all group-hover:scale-110">
                  <Award className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Specialization</h3>
                  <p className="text-sm text-muted-foreground">Full-Stack Development, Backend Engineering, AI Integration</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats/Highlights */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "10+", label: "Projects Built", delay: 0.3 },
              { value: "5+", label: "Technologies", delay: 0.4 },
              { value: "100%", label: "Commitment", delay: 0.5 },
              { value: "24/7", label: "Learning", delay: 0.6 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                className="glass-card p-8 rounded-2xl text-center hover:bg-primary/5 transition-all group border border-white/5"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
