"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.04,
  gradientWords = [],
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  gradientWords?: string[];
}) {
  const words = useMemo(() => text.split(" "), [text]);

  const isGradient = (word: string) =>
    gradientWords.some((w) => word.replace(/[^\w]/g, "") === w);

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={className}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom pb-[0.1em] -mb-[0.1em]"
          aria-hidden="true"
        >
          <motion.span
            variants={{
              hidden: { y: "110%", rotate: 4 },
              visible: {
                y: "0%",
                rotate: 0,
                transition: {
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: delay + i * stagger,
                },
              },
            }}
            className={`inline-block ${
              isGradient(word)
                ? "bg-gradient-to-r from-premium-gold to-premium-gold/60 bg-clip-text text-transparent"
                : ""
            }`}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </motion.span>
  );
}
