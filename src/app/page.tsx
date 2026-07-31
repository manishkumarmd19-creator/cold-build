"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Work from "@/components/Work";
import About from "@/components/About";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-bg-primary">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Process />
          <Work />
          <About />
          <Clients />
          <CTA />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
