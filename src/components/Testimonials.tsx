"use client";

import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

const testimonials = [
  {
    quote: "Cold Build transformed our MVP into a production-ready platform in weeks. The quality was absurdly good.",
    author: "Marcus Chen",
    role: "Founder, NexaFlow",
  },
  {
    quote: "I've worked with dozens of freelancers. Cold Build is in a different league — true engineering craftsmanship.",
    author: "Sarah Kim",
    role: "CTO, PulseHealth",
  },
  {
    quote: "They don't just build what you ask for — they build what you actually need. Game-changing partnership.",
    author: "James Walker",
    role: "CEO, VaultSync",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-premium-gold text-sm tracking-[0.2em] uppercase font-medium">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mt-4 mb-4">
            <TextReveal text="Trusted by Builders" gradientWords={["Builders"]} />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl bg-bg-secondary border border-heading/5"
            >
              <div className="text-accent-gold/25 text-6xl leading-none mb-4">&ldquo;</div>
              <p className="text-body/80 leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-premium-gold to-emerald flex items-center justify-center text-btn-text font-semibold text-sm">
                  {t.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-heading font-medium text-sm">{t.author}</div>
                  <div className="text-body/60 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
