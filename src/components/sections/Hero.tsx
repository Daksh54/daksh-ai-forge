import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary backdrop-blur-sm">
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Hello! I'm Daksh Sharma 👋
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-gradient">MERN Stack</span> <br />
              Developer
              <br />
              <span className="text-xl md:text-3xl text-muted-foreground font-light tracking-wide mt-2 block">
                AI/ML Enthusiast | Backend Engineer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Building intelligent, scalable, and modern web applications with cutting-edge technologies.
              Translating ideas into robust code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 group" asChild>
                <a href="https://github.com/Daksh54" target="_blank" rel="noopener noreferrer">
                  View Projects
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 backdrop-blur-sm" asChild>
                <a href="#contact">Let's Talk</a>
              </Button>
              <Button size="lg" variant="ghost" className="hover:bg-accent/10 hover:text-accent" asChild>
                <a
                  href="https://drive.google.com/file/d/1OKZC_aOFcrew6PvHFf3AYHTW5Tz8Qmoj/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV <Download className="ml-2" size={20} />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <SocialLink href="https://github.com/Daksh54" icon={Github} />
              <SocialLink href="https://www.linkedin.com/in/daksh-sharma02326b/" icon={Linkedin} />
              <SocialLink href="#contact" icon={Mail} />
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Spinning Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-70 blur-md animate-spin-slow"></div>

              <div className="absolute inset-1 bg-background rounded-full z-10"></div>

              <div className="absolute inset-2 rounded-full overflow-hidden z-20 border-4 border-transparent">
                <img
                  src="https://i.postimg.cc/CKBSjK5M/linkdein-profile-photo-for-me.png"
                  alt="Daksh Sharma"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Floating Tech Icons (Decorative) */}
              <FloatingIcon className="top-0 left-10" delay={0}>⚛️</FloatingIcon>
              <FloatingIcon className="bottom-10 right-0" delay={1.5}>🚀</FloatingIcon>
              <FloatingIcon className="top-10 right-10" delay={3}>☁️</FloatingIcon>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300"
  >
    <Icon size={20} />
  </a>
);

const FloatingIcon = ({ children, className, delay }: { children: React.ReactNode; className: string; delay: number }) => (
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute z-30 text-2xl glass p-3 rounded-full shadow-lg ${className}`}
  >
    {children}
  </motion.div>
);

export default Hero;
