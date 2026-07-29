"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rich-charcoal via-dark-slate to-rich-charcoal" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-premium-gold/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-premium-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-light-gray text-sm">Available for new projects</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-6"
        >
          Build{" "}
          <span className="bg-gradient-to-r from-premium-gold to-premium-gold/60 bg-clip-text text-transparent">
            Cold
          </span>
          .<br />
          Deliver{" "}
          <span className="bg-gradient-to-r from-emerald to-emerald/60 bg-clip-text text-transparent">
            Hot
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-light-gray/80 leading-relaxed mb-10"
        >
          Precision freelance engineering for founders who demand more. 
          We architect, design, and ship digital products that dominate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#cta"
            className="px-8 py-4 bg-premium-gold text-rich-charcoal font-semibold text-base rounded-xl hover:bg-btn-primary-hover transition-all duration-200 shadow-lg shadow-premium-gold/20 hover:shadow-premium-gold/40"
          >
            Start Your Build
          </a>
          <a
            href="#work"
            className="px-8 py-4 border border-white/20 text-white font-semibold text-base rounded-xl hover:bg-white/5 transition-all duration-200"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
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
