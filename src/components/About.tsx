"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const principles = [
  {
    title: "Precision",
    desc: "Every pixel deliberate, every dependency justified.",
  },
  {
    title: "Obsession",
    desc: "We sweat the details other teams skip.",
  },
  {
    title: "Ownership",
    desc: "We ship, then we stand behind what shipped.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const panelY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-6">
              Engineering that hits{" "}
              <span className="text-accent-gold">different</span>
            </h2>
            <div className="space-y-4 text-body/75 leading-relaxed">
              <p>
                Cold Build is a precision freelance engineering studio. We
                don&apos;t just write code — we architect systems, design
                experiences, and ship products that move needles.
              </p>
              <p>
                Founded on the belief that cold, calculated execution beats
                hype every time, we partner with founders and startups who
                refuse to settle for &quot;good enough.&quot;
              </p>
              <p>
                Our process is lean, our standards are obsessive, and our
                delivery is on time. Every. Single. Time.
              </p>
            </div>
            <div className="divide-y divide-heading/10 border-t border-heading/10 mt-10">
              {principles.map((p) => (
                <div key={p.title} className="py-4 flex items-baseline gap-6">
                  <span className="w-28 shrink-0 font-semibold text-heading">
                    {p.title}
                  </span>
                  <span className="text-body/70 text-sm">{p.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={ref} className="relative">
            <motion.div
              style={{ y: panelY }}
              className="aspect-square rounded-2xl relative overflow-hidden border border-heading/10"
            >
              <Image
                src="/cold-build-logo.jpg"
                alt="Cold Build Studio"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heading/40 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                  className="w-64 h-64 rounded-full border border-dashed border-white/50"
                />
              </div>
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <div className="text-white/90 text-sm tracking-widest uppercase drop-shadow-lg">
                  Cold Build Studio
                </div>
              </div>
            </motion.div>
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-heading/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
