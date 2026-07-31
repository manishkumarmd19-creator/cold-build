"use client";

import { motion } from "framer-motion";

const items = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "UI/UX Design",
  "React Native",
  "DevOps",
  "AI Integration",
];

export default function Marquee() {
  const row = [...items, ...items];

  return (
    <section className="relative py-10 border-y border-heading/5 bg-bg-secondary/60 overflow-hidden">
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex shrink-0 items-center gap-12 pr-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {row.map((item, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-body/50 font-medium tracking-wide text-lg">
                {item}
              </span>
              <svg
                className="w-3 h-3 text-accent-gold/50"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M6 0l1.7 4.3L12 6l-4.3 1.7L6 12l-1.7-4.3L0 6l4.3-1.7L6 0z" />
              </svg>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
