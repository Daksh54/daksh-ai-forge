import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_3w9thvm',
        'template_476258m',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'umpgGhuxHmk_3wWnl'
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dakshsharma5454871@gmail.com",
      href: "mailto:dakshsharma5454871@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9310754550",
      href: "tel:+919310754550",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/daksh-sharma02326b/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Daksh54",
      href: "https://github.com/Daksh54",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss how we can work together on your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-center gap-4 p-4 glass-card rounded-xl group hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium group-hover:text-primary transition-colors">{info.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-8 rounded-2xl border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Name</label>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background/50 border-white/10 focus:border-primary/50 h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Email</label>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background/50 border-white/10 focus:border-primary/50 h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Message</label>
                <Textarea
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="bg-background/50 border-white/10 focus:border-primary/50 resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg shadow-lg shadow-primary/20 group"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
