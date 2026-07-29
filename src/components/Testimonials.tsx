"use client";

import { motion } from "framer-motion";

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-premium-gold to-premium-gold/60 bg-clip-text text-transparent">
              Builders
            </span>
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
              className="relative p-8 rounded-2xl bg-dark-slate border border-white/5"
            >
              <div className="text-premium-gold/20 text-6xl leading-none mb-4">&ldquo;</div>
              <p className="text-light-gray/80 leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-premium-gold to-emerald flex items-center justify-center text-white font-semibold text-sm">
                  {t.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{t.author}</div>
                  <div className="text-light-gray/50 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
