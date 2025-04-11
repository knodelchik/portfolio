import {RevealOnScroll} from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Sass",
  ];

  const backendSkills = ["Node.js", "Express", "MongoDB", "MySQL"];

  return (
    <section
      id="about"
      className="flex items-center justify-center min-h-screen py-20"
    >
      <RevealOnScroll>  
      <div className="max-w-3xl px-4 mx-auto">
        <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ">
          About Me
        </h2>

        <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all duration-300 ">
          <p className="text-gray-300 mb-6">
            Hello! I'm a passionate web developer with a knack for creating
            interactive and dynamic user experiences. I love coding and am
            constantly exploring new technologies to enhance my skills.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl hover:-translat-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4"> Frontend </h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition-all duration-300 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl hover:-translat-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4"> Backend </h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition-all duration-300 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="items-cetner gap-6 mt-8">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-center"> Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li className="">
                <strong> Bachelor's Degree in Computer Science </strong> - XYZ
                University (2023 - Present)
              </li>
              <li className="">React.js Course</li>
            </ul>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
