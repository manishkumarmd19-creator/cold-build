"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const fine = window.matchMedia("(pointer: fine)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  fine.addEventListener("change", callback);
  reduced.addEventListener("change", callback);
  return () => {
    fine.removeEventListener("change", callback);
    reduced.removeEventListener("change", callback);
  };
}

function getSnapshot() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function CustomCursor() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, () => false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { stiffness: 200, damping: 20, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest(
          "a, button, input, [data-cursor='hover'], [role='button']"
        )
      );
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[100] pointer-events-none mix-blend-difference"
        style={{ x: mouseX, y: mouseY, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.05 }}
      >
        <motion.div
          animate={{
            scale: pressed ? 0.5 : hovering ? 0.3 : 1,
          }}
          className="w-2 h-2 -translate-x-1 -translate-y-1 rounded-full bg-white"
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 z-[99] pointer-events-none mix-blend-difference"
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
      >
        <motion.div
          animate={{
            scale: pressed ? 1.4 : hovering ? 1.8 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`w-10 h-10 -translate-x-5 -translate-y-5 rounded-full border border-white/60 transition-colors duration-300 ${
            hovering ? "border-premium-gold bg-premium-gold/10" : ""
          }`}
        />
      </motion.div>
    </>
  );
}
