import Hero from "@/components/Hero";
import KeyHighlightSection from "@/components/KeyHighlightSection";
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";


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
      {/* <span className="bg-gradient-to-b from-transparent via-background/20 to-background/90 backdrop-blur-[10px] w-full h-12 fixed bottom-0 left-0" /> */}

    </div>
  );
}
