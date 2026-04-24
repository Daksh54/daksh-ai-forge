import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { emailjsConfig } from "@/data/site";

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

const defaultState: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "Portfolio website",
  budget: "₹50k - ₹1L",
  timeline: "2-4 weeks",
  message: "",
};

const selectClassName =
  "h-12 w-full rounded-full border border-white/10 bg-white/[0.03] px-4 font-body text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormState>(defaultState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || "Independent",
          project_type: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
          brief: [
            `Project type: ${formData.projectType}`,
            `Budget: ${formData.budget}`,
            `Timeline: ${formData.timeline}`,
            `Company: ${formData.company || "Independent"}`,
            `Message: ${formData.message}`,
          ].join("\n"),
        },
        emailjsConfig.publicKey,
      );

      toast({
        title: "Message sent",
        description: "Thanks for the brief. I will get back to you soon.",
      });
      setFormData(defaultState);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Could not send message",
        description: "Please try again in a moment or reach out by email instead.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      onSubmit={handleSubmit}
      className="surface-panel relative overflow-hidden space-y-5 p-6 sm:p-8"
    >
      <div className="spotlight-ring" />
      <div className="space-y-2">
        <label className="font-label text-[11px] uppercase tracking-[0.22em] text-muted-foreground" htmlFor="name">
          Name
        </label>
        <Input
          id="name"
          value={formData.name}
          onChange={(event) => updateField("name", event.target.value)}
          placeholder="Your name"
          required
          className="h-12 rounded-full border-white/10 bg-white/[0.03]"
        />
      </div>

      <div className="space-y-2">
        <label className="font-label text-[11px] uppercase tracking-[0.22em] text-muted-foreground" htmlFor="email">
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="name@company.com"
          required
          className="h-12 rounded-full border-white/10 bg-white/[0.03]"
        />
      </div>

      <div className="space-y-2">
        <label className="font-label text-[11px] uppercase tracking-[0.22em] text-muted-foreground" htmlFor="company">
          Company or brand
        </label>
        <Input
          id="company"
          value={formData.company}
          onChange={(event) => updateField("company", event.target.value)}
          placeholder="Optional"
          className="h-12 rounded-full border-white/10 bg-white/[0.03]"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="font-label text-[11px] uppercase tracking-[0.22em] text-muted-foreground" htmlFor="projectType">
            Type of work
          </label>
          <select
            id="projectType"
            value={formData.projectType}
            onChange={(event) => updateField("projectType", event.target.value)}
            className={selectClassName}
          >
            <option>Portfolio website</option>
            <option>Full-stack product</option>
            <option>Backend/API system</option>
            <option>AI integration</option>
            <option>Dashboard or admin panel</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="font-label text-[11px] uppercase tracking-[0.22em] text-muted-foreground" htmlFor="budget">
            Budget
          </label>
          <select
            id="budget"
            value={formData.budget}
            onChange={(event) => updateField("budget", event.target.value)}
            className={selectClassName}
          >
            <option>Below ₹50k</option>
            <option>₹50k - ₹1L</option>
            <option>₹1L - ₹2L</option>
            <option>₹2L+</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="font-label text-[11px] uppercase tracking-[0.22em] text-muted-foreground" htmlFor="timeline">
          Timeline
        </label>
        <select
          id="timeline"
          value={formData.timeline}
          onChange={(event) => updateField("timeline", event.target.value)}
          className={selectClassName}
        >
          <option>ASAP</option>
          <option>2-4 weeks</option>
          <option>1-2 months</option>
          <option>Flexible / exploring</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="font-label text-[11px] uppercase tracking-[0.22em] text-muted-foreground" htmlFor="message">
          Project brief
        </label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell me what you are building, what matters most, and what success should look like."
          required
          rows={7}
          className="min-h-40 rounded-[28px] border-white/10 bg-white/[0.03]"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full rounded-full py-6 text-base shadow-[0_0_36px_-18px_hsl(var(--primary))]">
        {isSubmitting ? "Sending brief..." : "Send project brief"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.form>
  );
};
