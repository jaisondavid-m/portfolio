import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import TechnicalSkills from "@/components/Projects";
import Tools from "@/components/Skills";
import LetsConnect from "@/components/LetsConnect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="app-container flex flex-col">
      <Header />

      <main className="max-w-6xl mx-auto border-r-2 border-l-2">
        <Hero />
        <About />
        <Education />
        <TechnicalSkills />
        <Tools />
        <LetsConnect />
        <Footer />
      </main>
    </div>
  );
}
