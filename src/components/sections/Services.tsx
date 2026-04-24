import { Code, Database, Cloud, Cpu, Puzzle } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "End-to-end web application development using modern JavaScript frameworks and best practices.",
    },
    {
      icon: Database,
      title: "REST API Development",
      description:
        "Scalable and secure RESTful APIs with robust authentication and data validation.",
    },
    {
      icon: Database,
      title: "Database Design",
      description:
        "Efficient database architecture and optimization for high-performance applications.",
    },
    {
      icon: Cpu,
      title: "AI/ML Integration",
      description:
        "Integrate machine learning models into applications for intelligent features and automation.",
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description:
        "Containerization with Docker and deployment to cloud platforms like AWS.",
    },
    {
      icon: Puzzle,
      title: "System Architecture",
      description:
        "Design scalable microservices architecture and distributed systems.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden bg-secondary/20">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Services & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivering comprehensive solutions for modern web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-8 rounded-2xl group hover:border-primary/30 transition-all duration-300"
              >
                <div className="mb-6 inline-block p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
