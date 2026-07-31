"use client";

import Image from "next/image";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#cta" },
];

export default function Footer() {
  return (
    <footer className="relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="border-t border-heading/10 pt-14 lg:pt-16">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-12">
            Built cold. <span className="text-accent-gold">Delivered hot.</span>
          </p>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <Image
                src="/cold-build-logo.jpg"
                alt="Cold Build"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-heading font-semibold text-lg">
                Cold<span className="text-accent-gold">Build</span>
              </span>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-body/60 hover:text-heading transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-12 pt-6 border-t border-heading/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-body/50 text-xs">
              &copy; {new Date().getFullYear()} Cold Build. All rights
              reserved.
            </p>
            <p className="text-body/50 text-xs">
              Precision freelance engineering. No bloat. No deadlines missed.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
