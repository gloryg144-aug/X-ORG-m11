import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import LabModule from "./components/LabModule";
import AlkaliLab from "./components/labs/AlkaliLab";
import BicarbLab from "./components/labs/BicarbLab";
import EsterLab from "./components/labs/EsterLab";
import { ExamSupport, ConceptCheck, RevisionTable } from "./components/labs/ExamKit";
import Method from "./components/Method";
import Benefits from "./components/Benefits";
import Results from "./components/Results";
import Instructor from "./components/Instructor";
import FAQ from "./components/FAQ";
import Footer, { FinalCTA } from "./components/Footer";
import { I } from "./lib/anim";
import { cn } from "./utils/cn";

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="#top"
      aria-label="উপরে ফিরে যাও"
      className={cn(
        "fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-md border border-acid/40 bg-ink/90 text-acid shadow-lg backdrop-blur transition-all duration-400 hover:-translate-y-1 hover:bg-acid hover:text-ink",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <I.down className="h-4.5 w-4.5 rotate-180" />
    </a>
  );
}

export default function App() {
  return (
    <div className="noise min-h-screen bg-ink text-cream">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <LabModule>
          <AlkaliLab />
          <BicarbLab />
          <EsterLab />
          <ExamSupport />
          <ConceptCheck />
          <RevisionTable />
        </LabModule>
        <Method />
        <Benefits />
        <Results />
        <Instructor />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
