import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Recommendations from "@/components/sections/Recommendations";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Recommendations />
      <Contact />
    </div>
  );
}
