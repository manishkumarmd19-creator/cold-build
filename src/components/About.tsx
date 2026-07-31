"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import TextReveal from "./TextReveal";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const panelY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const glowY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-premium-gold text-sm tracking-[0.2em] uppercase font-medium">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mt-4 mb-6">
              <TextReveal text="Engineering that hits different" gradientWords={["different"]} />
            </h2>
            <div className="space-y-4 text-body/75 leading-relaxed">
              <p>
                Cold Build is a precision freelance engineering studio. We don&apos;t just write code — 
                we architect systems, design experiences, and ship products that move needles.
              </p>
              <p>
                Founded on the belief that cold, calculated execution beats hype every time, 
                we partner with founders and startups who refuse to settle for &quot;good enough.&quot;
              </p>
              <p>
                Our process is lean, our standards are obsessive, and our delivery is 
                on time. Every. Single. Time.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 mt-8">
              <div>
                <div className="text-2xl font-bold text-heading">3+</div>
                <div className="text-body/60 text-sm">Years Building</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-heading">50+</div>
                <div className="text-body/60 text-sm">Projects Shipped</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-heading">100%</div>
                <div className="text-body/60 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

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
            <motion.div
              style={{ y: glowY }}
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-premium-gold/10 rounded-full blur-2xl"
            />
            <motion.div
              style={{ y: glowY }}
              className="absolute -top-4 -left-4 w-24 h-24 bg-emerald/10 rounded-full blur-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
