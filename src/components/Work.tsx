"use client";

import TiltCard from "./TiltCard";

const projects = [
  {
    title: "KillerZone",
    category: "Gaming Platform",
    desc: "Immersive gaming hub with real-time tournaments and community features",
    gradient: "from-emerald to-cyan-500",
    href: "https://www.killerzone.in/",
  },
  {
    title: "JerseySpot",
    category: "E-Commerce",
    desc: "Premium sports jersey store with a high-converting storefront",
    gradient: "from-premium-gold to-amber-500",
    href: "https://www.jerseyspot.store/",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-20">
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading tracking-tight">
              Built with Precision
            </h2>
          </div>
          <div className="lg:col-span-8 lg:pt-3">
            <p className="max-w-xl text-body/70 text-lg leading-relaxed">
              Every project is a statement. Here&apos;s what we&apos;ve
              crafted — two live builds, both shipped cold.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl">
          {projects.map((project) => {
            const card = (
              <TiltCard className="relative rounded-2xl overflow-hidden cursor-pointer h-full">
                <div className="aspect-[16/10] bg-bg-secondary relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-heading/80 via-heading/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <span className="text-accent-gold/90 text-xs font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm">{project.desc}</p>
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 rounded-full bg-heading/10 backdrop-blur-sm flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-heading"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </TiltCard>
            );

            return (
              <div key={project.title} className="group">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                    aria-label={`View ${project.title} project`}
                  >
                    {card}
                  </a>
                ) : (
                  card
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
