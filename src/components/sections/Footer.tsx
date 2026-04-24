import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">Daksh Sharma</h3>
            <p className="text-sm text-muted-foreground">
              Building the future with code and creativity.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <SocialLink href="https://github.com/Daksh54" icon={Github} />
              <SocialLink href="https://www.linkedin.com/in/daksh-sharma02326b/" icon={Linkedin} />
              <SocialLink href="#contact" icon={Mail} />
            </div>
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Daksh Sharma. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full hover:bg-white/5 hover:text-primary transition-all duration-300 border border-transparent hover:border-white/10"
  >
    <Icon size={20} />
  </a>
);

export default Footer;
