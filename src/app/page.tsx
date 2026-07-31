"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-rich-charcoal">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Process />
          <Stats />
          <Work />
          <About />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
