import { ArrowUpRight } from "lucide-react";
import { footerLinks, profile } from "@/data/site";

export const SiteFooter = () => (
  <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6 lg:px-10">
    <div className="site-shell flex flex-col gap-8 rounded-[32px] border border-white/10 bg-[#0f1727]/72 px-6 py-8 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.5)] backdrop-blur-lg lg:flex-row lg:items-end lg:justify-between">
      <div className="space-y-2">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">{profile.name}</h3>
        <p className="text-sm leading-7 text-muted-foreground">{profile.role}</p>
      </div>

      <div className="flex flex-col gap-4 lg:items-end">
        <div className="flex flex-wrap gap-3">
          {footerLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-label text-[12px] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
                {item.label}
                {!item.href.startsWith("mailto:") ? <ArrowUpRight className="h-4 w-4" /> : null}
              </a>
            );
          })}
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {profile.name}.</p>
      </div>
    </div>
  </footer>
);
