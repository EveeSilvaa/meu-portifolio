
import { motion } from "framer-motion";
import { DiJava } from "react-icons/di";
import { SiReact, SiNodedotjs, SiTypescript, SiStrapi, SiPython, SiNextdotjs, SiJavascript, SiMysql, SiExpress, SiCss3, SiHtml5, SiFigma, SiTailwindcss, SiGit, SiGithub } from "react-icons/si";


export default function About() {
  const skills = [
    {icon: <SiReact size={40} />, name: "React"},  
    {icon: <SiNodedotjs size={40} />, name: "Node.js"},
    {icon: <SiTypescript size={40} />, name: "TypeScript"},
    {icon: <SiCss3 size={40} />, name: "CSS"},
    {icon: <SiHtml5 size={40} />, name: "HTML"},
    {icon: <SiFigma size={40} />, name:  "Figma"},
    {icon: <SiNextdotjs size={40} />, name: "Next.js"},
    {icon: <SiTailwindcss size={40} />, name: "Tailwind CSS"},
    {icon: <SiGit size={40} />, name: "Git"},
    {icon: <SiGithub size={40} />, name: "GitHub"},
    {icon: <SiPython size={40} />, name: "Python",},
    {icon: <DiJava size={40} />, name: "Java"},
    {icon: <SiStrapi size={40} />, name: "REST APIs"},
    {icon: <SiJavascript size={40} />, name: "JavaScript"},
    {icon: <SiMysql size={40} />, name: "MySQL"},
    {icon: <SiExpress size={40} />, name: "Express.js"},
  ]
  return (
    <>
      <div id="about" className="snap-start h-screen py-20 text-center bg-black">
          <h2 className="text-4xl mt-2 font-bold text-white">About Me</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-300 ">
            I am a passionate full-stack developer focused on creating innovative and user-centric digital solutions. 
            With experience in modern web technologies such as React, Node.js, Java and TypeScript.
            </p>

            <div className="mt-4 space-y-2 max-w-2xl mx-auto text-gray-300">
            <ul className="space-y-2 text-center text-purple-100">
              <li className="flex items-start text-center gap-2">
                <span>🛠️</span>
                <span>Developing performant web applications with clean code</span>
              </li>
              <li className="flex items-start text-center gap-2">
                <span>🎨</span>
                <span>Crafting intuitive UI/UX designs with Figma</span>
              </li>
              <li className="flex items-start text-center gap-2">
                <span>🌐</span>
                <span>Implementing responsive cross-device designs</span>
              </li>
              <li className="flex items-start text-center gap-2">
                <span>🔄</span>
                <span>Would like an opportunity to collaborate in agile teams for impactful projects</span>
              </li>
            </ul>

            <p className="text-lg mt-6 text-center italic text-purple-400">
              "Bringing problem-solving creativity and continuous learning to every project."
            </p>
          </div>
      </div>

      {/* Habilidades Técnicas */}
      <div id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -5,
                scale: 1.1,
                boxShadow: "0 10px 20px rgba(168, 85, 247, 0.3)"
              }}
              className="flex flex-col items-center p-4 rounded-lg bg-gray-900 cursor-default"
            >
              <div className="text-purple-400 mb-2">
                {skill.icon}
              </div>
              <span className="text-white text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

      {/* Formação */}
      <div id="education" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center">Training</h2>
          <div className="mt-8 max-w-2xl mx-auto text-gray-300 text-center">
            <p>2023 - Currently...</p>
            <p className="text-xl font-semibold">Faculty of Technology</p>
            <p>Bachelor's Degree in Systems Analysis and Development</p>
          </div>
        </div>
      </div>
    </>
  );
}