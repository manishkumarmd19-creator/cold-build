"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import TextReveal from "./TextReveal";

const projects = [
  {
    title: "NexaFlow",
    category: "Web App",
    desc: "Enterprise workflow automation platform serving 10K+ users",
    gradient: "from-premium-gold to-amber-500",
  },
  {
    title: "PulseHealth",
    category: "Mobile App",
    desc: "Health tracking dashboard with real-time biometric integration",
    gradient: "from-emerald to-cyan-500",
  },
  {
    title: "VaultSync",
    category: "Full-Stack",
    desc: "Secure cloud storage solution with end-to-end encryption",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "MarketMind",
    category: "AI Platform",
    desc: "Predictive analytics engine for e-commerce optimization",
    gradient: "from-premium-gold to-orange-500",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-premium-gold text-sm tracking-[0.2em] uppercase font-medium">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mt-4 mb-4">
            <TextReveal text="Built with Precision" gradientWords={["Precision"]} />
          </h2>
          <p className="max-w-2xl mx-auto text-body/70 text-lg">
            Every project is a statement. Here&apos;s what we&apos;ve crafted.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <TiltCard className="relative rounded-2xl overflow-hidden cursor-pointer h-full">
                <div className="aspect-[16/10] bg-bg-secondary relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-15 group-hover:opacity-25 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-heading/80 via-heading/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <span className="text-accent-gold/90 text-xs tracking-widest uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1 mb-2">{project.title}</h3>
                    <p className="text-white/70 text-sm">{project.desc}</p>
                  </div>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-heading/10 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-5 h-5 text-heading" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
