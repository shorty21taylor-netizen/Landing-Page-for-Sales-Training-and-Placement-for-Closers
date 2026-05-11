import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemAgitation from "@/components/ProblemAgitation";
import Pillars from "@/components/Pillars";
import StudentWins from "@/components/StudentWins";
import Curriculum from "@/components/Curriculum";
import Founder from "@/components/Founder";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <ProblemAgitation />
      <Pillars />
      <StudentWins />
      <Curriculum />
      <Founder />
      <WhoThisIsFor />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
