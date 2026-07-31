"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/cold-build-logo.jpg"
              alt="Cold Build"
              width={40}
              height={40}
              className="rounded-lg"
              priority
            />
            <span className="text-heading font-semibold text-xl tracking-tight hidden sm:inline">
              Cold<span className="text-accent-gold">Build</span>
            </span>
          </a>

          <AnimatePresence>
            {scrolled && (
              <motion.nav
                initial={{ opacity: 0, y: -12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.97 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 rounded-full border border-heading/10 bg-bg-primary/90 backdrop-blur-xl px-2 py-2 shadow-[0_8px_30px_rgba(31,31,31,0.08)]"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 rounded-full text-sm text-light-gray hover:text-heading hover:bg-heading/5 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#cta"
                  className="ml-1 px-4 py-2 rounded-full bg-premium-gold text-btn-text text-sm font-semibold hover:bg-btn-primary-hover transition-colors duration-200"
                >
                  Start a Project
                </a>
              </motion.nav>
            )}
          </AnimatePresence>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-heading block"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-heading block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-heading block"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-heading/5 bg-bg-primary/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 space-y-1">
              {[...navLinks, { label: "Contact", href: "#cta" }].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-light-gray hover:text-heading hover:bg-heading/5 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 bg-premium-gold text-btn-text font-semibold text-sm rounded-lg mt-3"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
