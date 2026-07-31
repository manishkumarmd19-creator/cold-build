"use client";

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
    <section id="process" className="relative py-24 lg:py-32 bg-bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-6">
                From cold start<br />to hot launch
              </h2>
              <p className="text-body/70 text-lg leading-relaxed max-w-sm">
                A proven pipeline that turns ambition into shipped product.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-heading/10 border-t border-heading/10">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="group grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-8"
                >
                  <div className="sm:col-span-2 text-4xl font-bold text-accent-gold font-display">
                    {step.num}
                  </div>
                  <div className="sm:col-span-10">
                    <h3 className="text-xl font-semibold text-heading mb-2">
                      {step.title}
                    </h3>
                    <p className="text-body/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
