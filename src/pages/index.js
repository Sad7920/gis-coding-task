import Hero from "@/components/Hero";
import KeyHighlightSection from "@/components/KeyHighlightSection";
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";


export default function Home() {
  return (
    <div className=" w-full scroll-smooth h-full relative">
      <Navbar />
      <Hero />
      <KeyHighlightSection />
      <Dashboard />
      <HowItWorks />
      <Features />
      <FAQ />
      <CTASection />
    </div>
  );
}
