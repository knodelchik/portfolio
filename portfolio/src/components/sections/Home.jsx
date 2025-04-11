import {RevealOnScroll} from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center relative"
    >
      <RevealOnScroll> 
      <div className="text-center z-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
          Hi, I'm Bogdan Ulanovskiy
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto">
          I'm a passionate web developer with a knack for creating stunning and
          functional websites. I specialize in React, Next.js, and Tailwind CSS.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3 rounded font-medium hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 relative overflow-hidden"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 transition-all duration-300 relative overflow-hidden"
          >
            Contact Me
          </a>
        </div>
      </div>
      </RevealOnScroll> 
    </section>
  );
};
