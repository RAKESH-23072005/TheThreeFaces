import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Process from '../sections/Process';
import Portfolio from '../sections/Portfolio';
import Services from '../sections/Services';
import WhyChooseUs from '../sections/WhyChooseUs';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import CTA from '../sections/CTA';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white selection:bg-[#B9F36B] selection:text-[#0A0B0D]">
      {/* 1. Translucent Apple Floating Pill Navigation */}
      <Navbar />

      <main>
        {/* 2. Luminous Hero Card with Client Logos Track */}
        <Hero />

        {/* 3. How We Work (Pure Black Stacking Mesh Cards) */}
        <Process />

        {/* 4. Portfolio Showcase (Dual-Row GPU Marquee + Case Studies) */}
        <Portfolio />

        {/* 5. What We Do (Crisp White High-Contrast Disciplines) */}
        <Services />

        {/* 6. About The ThreeFaces & Telemetry */}
        <WhyChooseUs />

        {/* 7. Client Experiences & Reviews */}
        <Testimonials />

        {/* 8. Common Questions (FAQ Accordion) */}
        <FAQ />

        {/* 9. Call To Action */}
        <CTA />

        {/* 10. Contact & Project Consultation */}
        <Contact />
      </main>

      {/* 11. Agency Footer */}
      <Footer />
    </div>
  );
}
