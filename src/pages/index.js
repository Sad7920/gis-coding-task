import Hero from "@/components/Hero";
import KeyHighlightSection from "@/components/KeyHighlightSection";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className=" w-full scroll-smooth h-full relative">
      <Navbar />
      <Hero />
      <KeyHighlightSection />
      {/* <span className="bg-gradient-to-b from-transparent via-background/20 to-background/90 backdrop-blur-[10px] w-full h-12 fixed bottom-0 left-0" /> */}

    </div>
  );
}
