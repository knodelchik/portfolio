import {RevealOnScroll} from "../RevealOnScroll";


export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 flex items-center justify-center"
    >
      <RevealOnScroll> 
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300">
            <h3 className="text-xl font-bold mb-2"> Cloud Platform </h3>
            <p className="text-gray-400 mb-4">
              A cloud platform that allows users to deploy and manage
              applications in the cloud.{" "}
            </p>
            <div >
              {["AWS", "Azure", "Google Cloud"].map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition-all duration-300 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <a
                href="https://react-crypto-ashy.vercel.app/"
                className="text-blue-400 hover:text-blue-300 transition-all duration-300"
              >
                View Project →
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300">
            <h3 className="text-xl font-bold mb-2"> Cloud Platform </h3>
            <p className="text-gray-400 mb-4">
              A cloud platform that allows users to deploy and manage
              applications in the cloud.{" "}
            </p>
            <div >
              {["AWS", "Azure", "Google Cloud"].map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition-all duration-300 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <a
                href="https://react-crypto-ashy.vercel.app/"
                className="text-blue-400 hover:text-blue-300 transition-all duration-300"
              >
                View Project →
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300">
            <h3 className="text-xl font-bold mb-2"> Cloud Platform </h3>
            <p className="text-gray-400 mb-4">
              A cloud platform that allows users to deploy and manage
              applications in the cloud.{" "}
            </p>
            <div >
              {["AWS", "Azure", "Google Cloud"].map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition-all duration-300 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <a
                href="https://react-crypto-ashy.vercel.app/"
                className="text-blue-400 hover:text-blue-300 transition-all duration-300"
              >
                View Project →
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300">
            <h3 className="text-xl font-bold mb-2"> Cloud Platform </h3>
            <p className="text-gray-400 mb-4">
              A cloud platform that allows users to deploy and manage
              applications in the cloud.{" "}
            </p>
            <div >
              {["AWS", "Azure", "Google Cloud"].map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition-all duration-300 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <a
                href="https://react-crypto-ashy.vercel.app/"
                className="text-blue-400 hover:text-blue-300 transition-all duration-300"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll> 
    </section>
  );
};
