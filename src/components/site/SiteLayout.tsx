import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CustomCursor } from "@/components/site/CustomCursor";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
};

const SiteLayout = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <ScrollToTop />
      <CustomCursor />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(102,246,255,0.16),transparent_22%),radial-gradient(circle_at_86%_14%,rgba(13,93,130,0.16),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(102,246,255,0.08),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[linear-gradient(180deg,rgba(8,12,22,0.95),rgba(8,12,22,0))]" />
      <SiteHeader />
      <main className="relative z-10 px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
