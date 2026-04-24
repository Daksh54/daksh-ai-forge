import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-4xl items-center justify-center">
      <div className="surface-panel w-full max-w-2xl p-10 text-center sm:p-12">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          That page does not exist.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">
          The route <span className="font-medium text-foreground">{location.pathname}</span> could not be found. Use the portfolio navigation to get back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild className="rounded-full px-6">
            <Link to="/">Return home</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-white/10 bg-white/[0.03] px-6">
            <Link to="/portfolio">View portfolio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
