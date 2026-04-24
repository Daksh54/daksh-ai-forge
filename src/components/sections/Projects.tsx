import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ecommerceImage from "@/assets/ecommerce-project.png";
import chatmernImage from "@/assets/chatmern-project.png";
import studynotionImage from "@/assets/studynotion-project.png";
import chatbotImage from "@/assets/chatbot-project.png";

const Projects = () => {
  const projects = [
    {
      title: "MERN Stack E-commerce",
      description:
        "Full-featured e-commerce platform with user authentication, shopping cart, payment integration, and comprehensive admin dashboard.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Redux"],
      github: "https://github.com/Daksh54/MERN-Stack-Ecommerce-Project.git",
      image: ecommerceImage,
    },
    {
      title: "ChatMern",
      description:
        "Real-time chat application with Socket.io integration, modern UI/UX, user presence indicators, and message history persistence.",
      tags: ["React", "Socket.io", "Node.js", "MongoDB", "ChakraUI"],
      github: "https://github.com/Daksh54/ChatMern.git",
      image: chatmernImage,
    },
    {
      title: "StudyNotion EdTech",
      description:
        "Comprehensive learning management system with course creation, enrollment, progress tracking, and interactive content delivery.",
      tags: ["MERN Stack", "Video Streaming", "JWT", "Razorpay"],
      github: "https://github.com/Daksh54/StudyNotion-Edtech.git",
      image: studynotionImage,
    },
    {
      title: "AI ChatBot",
      description:
        "Intelligent conversational AI bot with natural language processing, context awareness, and integration with FastAPI backend.",
      tags: ["FastAPI", "Python", "NLP", "React", "OpenAI"],
      github: "https://github.com/Daksh54/ChatBot.git",
      image: chatbotImage,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass-card rounded-xl overflow-hidden flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-60"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex gap-2">
                    <Button size="icon" variant="secondary" className="rounded-full h-10 w-10 hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Code">
                        <Github size={20} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
