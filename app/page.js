import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Image from "next/image";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact  />
    </>
  );
}
