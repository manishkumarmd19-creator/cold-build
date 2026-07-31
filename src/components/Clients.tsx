"use client";

const clients = [
  {
    name: "KillerZone",
    type: "Combat sports arena",
    scope: "Marketing site",
    status: "Live",
    href: "https://www.killerzone.in/",
  },
  {
    name: "JerseySpot",
    type: "Custom jersey store",
    scope: "E-commerce storefront",
    status: "Live",
    href: "https://www.jerseyspot.store/",
  },
  {
    name: "Your brand",
    type: "Open slot",
    scope: "Next build",
    status: "Booked Q4",
    href: "#cta",
  },
];

export default function Clients() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-6">
                Clients
              </h2>
              <p className="text-body/70 text-lg leading-relaxed max-w-sm">
                Two live builds shipped. A third slot on the bench.{" "}
                <span className="text-heading font-medium">
                  Referrals welcome.
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-heading/10 border-y border-heading/10">
              {clients.map((client) => (
                <a
                  key={client.name}
                  href={client.href}
                  target={client.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    client.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline py-8"
                >
                  <span className="sm:col-span-4 text-2xl font-semibold text-heading group-hover:text-premium-gold transition-colors duration-200">
                    {client.name}
                  </span>
                  <span className="sm:col-span-4 text-body/70">
                    {client.type} — {client.scope}
                  </span>
                  <span className="sm:col-span-4 flex items-center gap-2 text-sm text-body/60 sm:justify-end">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        client.status === "Live"
                          ? "bg-emerald"
                          : "bg-accent-gold"
                      }`}
                    />
                    {client.status}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
