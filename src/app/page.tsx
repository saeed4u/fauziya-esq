import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import PracticeAreas from "./components/PracticeAreas";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0c0c0c] text-[#f5f0e8] overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <PracticeAreas />
      <Work />
      <Contact />
    </main>
  );
}
