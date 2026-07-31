"use client";

import { motion } from "framer-motion";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-rich-charcoal via-dark-slate to-rich-charcoal" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 lg:p-12 rounded-3xl bg-dark-slate/50 border border-white/5 backdrop-blur-sm"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-premium-gold/5 to-emerald/5" />

          <div className="relative z-10">
            <span className="text-premium-gold text-sm tracking-[0.2em] uppercase font-medium">
              Let&apos;s Build
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
              <TextReveal text="Ready to Build Cold?" gradientWords={["Build", "Cold?"]} />
            </h2>
            <p className="max-w-xl mx-auto text-light-gray/70 text-lg mb-8">
              Tell us about your project. We&apos;ll respond within 24 hours with a plan 
              and a timeline.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="max-w-lg mx-auto space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3.5 rounded-xl bg-rich-charcoal border border-white/10 text-white placeholder:text-medium-gray focus:outline-none focus:border-premium-gold/50 transition-colors"
                  required
                />
                <MagneticButton
                  type="submit"
                  className="px-8 py-3.5 bg-premium-gold text-rich-charcoal font-semibold rounded-xl hover:bg-btn-primary-hover transition-colors duration-200 shadow-lg shadow-premium-gold/20 whitespace-nowrap"
                >
                  Get Started
                </MagneticButton>
              </div>
              <p className="text-light-gray/40 text-xs">
                No spam. Just a conversation about your next build.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
