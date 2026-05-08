import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import WhatYouGet from "@/components/WhatYouGet";
import Transformation from "@/components/Transformation";
import Curriculum from "@/components/Curriculum";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <StatsBar />
      <WhoThisIsFor />
      <WhatYouGet />
      <Transformation />
      <Curriculum />
      <Results />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
