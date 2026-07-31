"use client";

import MagneticButton from "./MagneticButton";

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/60 via-bg-secondary to-bg-secondary/60" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-heading tracking-tight mb-6">
          Ready to Build{" "}
          <span className="text-accent-gold">Cold?</span>
        </h2>
        <p className="max-w-xl mx-auto text-body/75 text-lg leading-relaxed mb-10">
          Tell us about your project. We&apos;ll respond within 24 hours with
          a plan and a timeline.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/70 border border-heading/10 text-heading placeholder:text-medium-gray focus:outline-none focus:border-premium-gold/50 transition-colors"
              required
            />
            <MagneticButton
              type="submit"
              className="px-8 py-3.5 bg-premium-gold text-btn-text font-semibold rounded-xl hover:bg-btn-primary-hover transition-colors duration-200 whitespace-nowrap"
            >
              Get Started
            </MagneticButton>
          </div>
          <p className="text-body/50 text-xs mt-4">
            No spam. Just a conversation about your next build.
          </p>
        </form>
      </div>
    </section>
  );
}
