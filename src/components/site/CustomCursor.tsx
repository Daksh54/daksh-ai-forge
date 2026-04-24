import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const interactiveSelector =
  'a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]';

export const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [interactive, setInteractive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 280, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 280, damping: 24, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 700, damping: 40, mass: 0.25 });
  const dotY = useSpring(y, { stiffness: 700, damping: 40, mass: 0.25 });

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateEnabled = () => {
      const next = media.matches;
      setEnabled(next);
      document.documentElement.classList.toggle("has-custom-cursor", next);
    };

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    const handlePointerOver = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      setInteractive(Boolean(target.closest(interactiveSelector)));
    };

    const handlePointerOut = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const related = event.relatedTarget;
      if (related instanceof Element && related.closest(interactiveSelector)) {
        return;
      }
      if (target.closest(interactiveSelector)) {
        setInteractive(false);
      }
    };

    updateEnabled();

    media.addEventListener("change", updateEnabled);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseover", handlePointerOver);
    document.addEventListener("mouseout", handlePointerOut);

    return () => {
      media.removeEventListener("change", updateEnabled);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseover", handlePointerOver);
      document.removeEventListener("mouseout", handlePointerOut);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [dotX, dotY, ringX, ringY, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="custom-cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: pressed ? 0.82 : interactive ? 1.65 : 1,
          opacity: interactive ? 0.95 : 0.72,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
      />
      <motion.div
        aria-hidden="true"
        className="custom-cursor-dot"
        style={{ x: dotX, y: dotY }}
        animate={{
          scale: pressed ? 0.9 : interactive ? 0.75 : 1,
        }}
        transition={{ type: "spring", stiffness: 520, damping: 28 }}
      />
    </>
  );
};
