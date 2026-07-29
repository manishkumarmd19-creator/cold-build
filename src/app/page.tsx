"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-rich-charcoal">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Work />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
