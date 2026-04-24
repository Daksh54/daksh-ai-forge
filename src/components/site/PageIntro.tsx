import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
  actions?: ReactNode;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export const PageIntro = ({
  eyebrow,
  title,
  description,
  center = false,
  actions,
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: PageIntroProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className={cn("space-y-4", center && "text-center", className)}
  >
    <p className={cn("eyebrow", eyebrowClassName)}>{eyebrow}</p>
    <div className={cn("space-y-3", center && "mx-auto max-w-3xl")}>
      <h2 className={cn("max-w-4xl text-balance text-4xl font-display font-semibold leading-tight tracking-tight text-foreground sm:text-5xl", titleClassName)}>
        {title}
      </h2>
      <p className={cn("max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg", descriptionClassName)}>
        {description}
      </p>
    </div>
    {actions ? <div className={cn("flex flex-wrap gap-3", center && "justify-center")}>{actions}</div> : null}
  </motion.div>
);
