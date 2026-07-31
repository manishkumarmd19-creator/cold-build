"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const headingScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-rich-charcoal via-dark-slate to-rich-charcoal" />

      <motion.div
        style={{ y: orbY1 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-premium-gold/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-premium-gold/3 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: orbY2 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald/3 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-48 h-48 bg-premium-gold/4 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity, scale: headingScale }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-light-gray text-sm">Available for new projects</span>
          </div>
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          <TextReveal text="Build Cold." gradientWords={["Cold."]} delay={0.15} stagger={0.06} />
          <br />
          <TextReveal
            text="Deliver Hot."
            gradientWords={["Hot."]}
            delay={0.45}
            stagger={0.06}
            className="bg-gradient-to-r from-emerald to-emerald/60 bg-clip-text text-transparent"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-light-gray/80 leading-relaxed mb-10"
        >
          Precision freelance engineering for founders who demand more.
          We architect, design, and ship digital products that dominate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            href="#cta"
            className="px-8 py-4 bg-premium-gold text-rich-charcoal font-semibold text-base rounded-xl hover:bg-btn-primary-hover transition-colors duration-200 shadow-lg shadow-premium-gold/20 hover:shadow-premium-gold/40"
          >
            Start Your Build
          </MagneticButton>
          <MagneticButton
            href="#work"
            className="px-8 py-4 border border-white/20 text-white font-semibold text-base rounded-xl hover:bg-white/5 transition-colors duration-200"
          >
            View Our Work
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-premium-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
