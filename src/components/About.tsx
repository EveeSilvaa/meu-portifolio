import { motion } from "framer-motion";
import { DiJava } from "react-icons/di";
import { FaBriefcase } from "react-icons/fa";
import ScrollColorText from "./scroll/ScrollColorText";
import Reveal from "./scroll/Reveal";
import { useLanguage } from "../i18n/useLanguage";
import { 
  SiReact, SiNodedotjs, SiTypescript, SiStrapi, SiPython, 
  SiNextdotjs, SiJavascript, SiMysql, SiExpress, SiCss3, 
  SiHtml5, SiFigma, SiTailwindcss, SiGit, SiGithub 
} from "react-icons/si";

export default function About({ darkMode }: { darkMode: boolean }) {
  const { t } = useLanguage();
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
      <section id="about" className="relative">
        <div className="container mx-auto px-4 pt-16 md:pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className={`text-4xl md:text-6xl font-bold mb-8 ${darkMode ? 'text-purple-400' : 'text-purple-600'} tracking-tight drop-shadow-[0_0_24px_rgba(168,85,247,0.35)]`}>
              {t.about.title}
            </h2>
            <ScrollColorText
              darkMode={darkMode}
              className="text-2xl md:text-3xl font-semibold max-w-3xl mx-auto mb-6 leading-snug justify-center"
              text={t.about.intro}
            />
            <Reveal delay={0.1}>
              <p className={`text-base mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.about.seeWhere}{' '}
                <a href="https://movtec.com.br/" target="_blank" rel="noopener noreferrer" className={`font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-600'} hover:underline underline-offset-4`}>movtec.com.br</a>
              </p>
            </Reveal>

            <div className={`max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <ul className="space-y-10 mb-12">
                {t.about.bullets.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
                  {t.about.quote}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Habilidades Técnicas */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4 pt-8 pb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl font-bold mb-8 text-center ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
          >
            {t.about.skillsTitle}
          </motion.h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.6, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (index % 6) * 0.06, duration: 0.5, type: 'spring', bounce: 0.4 }}
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

      {/* Seção Experiência */}
      <section id="experience" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl font-bold mb-10 text-center ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
          >
            {t.about.experienceTitle}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20"></div>
            <div className={`relative p-6 md:p-8 rounded-xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                    <FaBriefcase size={24} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {t.about.expRole}
                    </h3>
                    <a
                      href="https://movtec.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-medium ${darkMode ? 'text-purple-400' : 'text-purple-600'} hover:underline underline-offset-4`}
                    >
                      {t.about.expCompany}
                    </a>
                  </div>
                </div>
                <span className={`text-sm font-medium whitespace-nowrap px-3 py-1 rounded-full self-start ${darkMode ? 'bg-gray-700 text-purple-300' : 'bg-purple-100 text-purple-600'}`}>
                  {t.about.expPeriod}
                </span>
              </div>

              <ul className={`mt-6 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.about.expBullets.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${darkMode ? 'bg-purple-400' : 'bg-purple-600'}`}></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"].map((tag) => (
                  <span key={tag} className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-purple-300' : 'bg-purple-100 text-purple-600'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Formação */}
      <section id="education" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
              {t.about.educationTitle}
            </h2>
            <div className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p className="mb-4">
                <span className={`font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>2023</span> - {t.about.eduPeriod}
              </p>
              <p className="text-xl font-semibold mb-2">{t.about.eduSchool}</p>
              <p>{t.about.eduDegree}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}