import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profile } from "@/data/site";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const linkClassName =
  "relative font-label text-[12px] text-muted-foreground transition-colors duration-200 hover:text-foreground after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200";

export const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div
        className={cn(
          "site-shell flex items-center justify-between rounded-full border border-white/10 px-4 py-3 transition-all duration-300 sm:px-5",
          isScrolled
            ? "bg-[#0f1727]/88 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "bg-[#0d1423]/68 backdrop-blur-lg",
        )}
      >
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-semibold tracking-[0.3em] text-primary-foreground shadow-[0_0_32px_-10px_hsl(var(--primary))]">
            DS
          </span>
          <span className="hidden sm:block">
            <span className="block font-display text-sm font-semibold text-foreground">{profile.name}</span>
            <span className="block font-label text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Software Engineer
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                cn(linkClassName, isActive && "text-foreground after:scale-x-100")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden rounded-full px-5 shadow-[0_0_32px_-18px_hsl(var(--primary))] sm:inline-flex">
            <Link to="/contact">Work with me</Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="rounded-full lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isOpen ? (
        <div className="site-shell mt-3 rounded-[28px] border border-white/10 bg-[#0f1727]/96 p-4 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.62)] backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-2xl px-4 py-3 font-label text-[12px] transition-colors",
                    isActive ? "bg-primary/12 text-primary" : "text-muted-foreground hover:bg-white/[0.04] hover:text-foreground",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Button asChild className="mt-4 w-full rounded-full shadow-[0_0_36px_-18px_hsl(var(--primary))]">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Work with me
            </Link>
          </Button>
        </div>
      ) : null}
    </header>
  );
};
