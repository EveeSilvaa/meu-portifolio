import { motion } from "framer-motion";
import { DiJava } from "react-icons/di";
import { 
  SiReact, SiNodedotjs, SiTypescript, SiStrapi, SiPython, 
  SiNextdotjs, SiJavascript, SiMysql, SiExpress, SiCss3, 
  SiHtml5, SiFigma, SiTailwindcss, SiGit, SiGithub 
} from "react-icons/si";

export default function About({ darkMode }: { darkMode: boolean }) {
  const skills = [
    {icon: <SiReact size={40} />, name: "React"},  
    {icon: <SiNodedotjs size={40} />, name: "Node.js"},
    {icon: <SiTypescript size={40} />, name: "TypeScript"},
    {icon: <SiCss3 size={40} />, name: "CSS"},
    {icon: <SiHtml5 size={40} />, name: "HTML"},
    {icon: <SiFigma size={40} />, name: "Figma"},
    {icon: <SiNextdotjs size={40} />, name: "Next.js"},
    {icon: <SiTailwindcss size={40} />, name: "Tailwind CSS"},
    {icon: <SiGit size={40} />, name: "Git"},
    {icon: <SiGithub size={40} />, name: "GitHub"},
    {icon: <SiPython size={40} />, name: "Python"},
    {icon: <DiJava size={40} />, name: "Java"},
    {icon: <SiStrapi size={40} />, name: "REST APIs"},
    {icon: <SiJavascript size={40} />, name: "JavaScript"},
    {icon: <SiMysql size={40} />, name: "MySQL"},
    {icon: <SiExpress size={40} />, name: "Express.js"},
  ];

  return (
    <>
      {/* Seção Sobre Mim */}
      <section id="about" className={`snap-start min-h-screen ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto px-4 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'} tracking-tight`}>
              About Me
            </h2>
            <p className={`text-xl max-w-3xl mx-auto mb-12 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I am a passionate full-stack developer focused on creating innovative and user-centric digital solutions.
              With experience in modern web technologies such as React, Node.js, Java and TypeScript.
            </p>

            <div className={`max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <ul className="space-y-10 mb-12">
                {[
                  "🛠️ Developing performant web applications with clean code",
                  "🎨 Crafting intuitive UI/UX designs with Figma",
                  "🌐 Implementing responsive cross-device designs",
                  "🔄 Would like an opportunity to collaborate in agile teams for impactful projects"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                    className="flex items-center gap-6 bg-gradient-to-r from-transparent via-purple-50/5 to-transparent p-4 rounded-lg hover:via-purple-50/10 transition-all"
                  >
                    <span className="text-2xl">{item.split(' ')[0]}</span>
                    <span className="text-lg">{item.split(' ').slice(1).join(' ')}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>
                <p className={`relative text-xl italic p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-purple-400' : 'bg-white text-purple-600'} shadow-xl`}>
                  "Bringing problem-solving creativity and continuous learning to every project."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Habilidades Técnicas */}
      <section id="skills" className={`py-16 ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto px-4 pt-8 pb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl font-bold mb-8 text-center ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
          >
            Technical Skills
          </motion.h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  boxShadow: darkMode 
                    ? "0 10px 20px rgba(168, 85, 247, 0.3)" 
                    : "0 10px 20px rgba(124, 58, 237, 0.2)"
                }}
                className={`flex flex-col items-center p-4 rounded-xl transition-all ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200 shadow-sm'}`}
              >
                <div className={`mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                  {skill.icon}
                </div>
                <span className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Formação */}
      <section id="education" className={`py-16 ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
              Training
            </h2>
            <div className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p className="mb-4">
                <span className={`font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>2023</span> - Currently...
              </p>
              <p className="text-xl font-semibold mb-2">Faculty of Technology</p>
              <p>Degree in Systems Analysis and Development</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}