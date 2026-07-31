"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-heading leading-[1.05] tracking-tight mb-8">
              <TextReveal text="Ready to" delay={0.15} stagger={0.06} />
              <br />
              <TextReveal
                text="Build Cold?"
                accentWords={["Build", "Cold?"]}
                delay={0.35}
                stagger={0.06}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
              className="max-w-xl text-lg md:text-xl text-light-gray leading-relaxed mb-10"
            >
              Precision freelance engineering for founders who demand more.
              We architect, design, and ship digital products that dominate.
              Built cold. Delivered hot.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton
                href="#cta"
                className="px-8 py-4 bg-premium-gold text-btn-text font-semibold text-base rounded-xl hover:bg-btn-primary-hover transition-colors duration-200"
              >
                Start Your Build
              </MagneticButton>
              <MagneticButton
                href="#work"
                className="px-8 py-4 border border-heading/20 text-heading font-semibold text-base rounded-xl hover:bg-heading/5 transition-colors duration-200"
              >
                View Our Work
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-3 border border-heading/10 rounded-2xl" />
              <div className="aspect-square rounded-2xl overflow-hidden border border-heading/10 bg-bg-secondary relative">
                <Image
                  src="/cold-build-logo.jpg"
                  alt="Cold Build Studio"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 left-6 right-6 flex items-center justify-between rounded-xl border border-heading/10 bg-bg-primary/90 backdrop-blur px-5 py-3">
                <span className="text-sm font-medium text-heading">
                  Cold Build
                </span>
                <span className="text-xs text-body/70">
                  Precision Engineering Studio
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
