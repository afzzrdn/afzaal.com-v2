import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/Hero"));
const Tech = dynamic(() => import("./components/sub/Tech"));
const About = dynamic(() => import("./components/About"));
const Project = dynamic(() => import("./components/Project"));
const Certification = dynamic(() => import("./components/Certification"));
const Contact = dynamic(() => import("./components/Contact"));

export default function Home() {
  return (
    <div className="w-full md:w-[1500px] h-full flex flex-col justify-center items-center overflow-x-hidden">
      <Hero />
      <Tech />
      <About />
      <Project />
      <Certification />
      <Contact />
    </div>
  );
}
