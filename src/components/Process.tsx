"use client";

import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We dig into your vision, market, and constraints. Cold analysis of what it takes to win.",
  },
  {
    num: "02",
    title: "Architect",
    desc: "System design, tech stack, and roadmap. No surprises — just a battle plan you can hold.",
  },
  {
    num: "03",
    title: "Engineer",
    desc: "Iterative builds with weekly demos. You watch your product come alive in real time.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Deployment, monitoring, and handoff. We don't disappear — we stay for the win.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-premium-gold text-sm tracking-[0.2em] uppercase font-medium">
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mt-4 mb-4">
            <TextReveal text="From cold start to hot launch" gradientWords={["hot", "launch"]} />
          </h2>
          <p className="max-w-2xl mx-auto text-body/70 text-lg">
            A proven pipeline that turns ambition into shipped product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-bg-secondary border border-heading/5 hover:border-premium-gold/25 transition-colors duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-premium-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-6xl font-bold bg-gradient-to-b from-heading/10 to-transparent bg-clip-text text-transparent mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold text-heading mb-3 group-hover:text-premium-gold transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-body/70 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-5 z-10 text-accent-gold/40">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
