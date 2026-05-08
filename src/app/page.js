import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Offers from "@/components/Offers";
import Results from "@/components/Results";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <TrustBar />
      <Offers />
      <Results />
      <Process />
      <FAQ />
      <Footer />
    </main>
  );
}
