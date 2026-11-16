import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiReact, SiTypescript, SiTailwindcss, SiFramer } from 'react-icons/si';
import { useLanguage } from '../i18n/useLanguage';

export default function Links({ darkMode }: { darkMode: boolean }) {
  const { t } = useLanguage();

  const technologies = [
    { icon: <SiReact size={20} />, name: 'React' },
    { icon: <SiTypescript size={20} />, name: 'TypeScript' },
    { icon: <SiTailwindcss size={20} />, name: 'Tailwind CSS' },
    { icon: <SiFramer size={20} />, name: 'Framer Motion' },
  ];

  const links = [
    { icon: <FaGithub size={24} />, url: 'https://github.com/EveeSilvaa', label: t.footer.github },
    { icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/in/maeve-silva/', label: t.footer.linkedin },
    { icon: <FaEnvelope size={24} />, url: 'mailto:evesilva.contato@gmail.com', label: t.footer.email },
    { icon: <FaPhone size={24} />, url: 'tel:+5562982038650', label: t.footer.phone },
    { icon: <FaFilePdf size={24} />, url: t.footer.resumeFile, label: t.footer.resume },
  ];

  return (
    <footer
      id="links"
      className={`py-8 transition-colors duration-300 ${darkMode ? 'bg-gray-950/80' : 'bg-gray-100/80'} backdrop-blur-sm`}
    >
      <div className="container text-center mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-2xl md:text-3xl font-bold mb-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}
        >
          {t.footer.title}
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -3, scale: 1.1 }}
              className={`p-3 rounded-full transition-all ${darkMode ? 'bg-gray-800 text-purple-400 hover:bg-purple-900/30' : 'bg-white text-purple-600 hover:bg-purple-100 shadow-sm'}`}
              aria-label={link.label}
              title={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        <div className={`mt-8 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <p className="mb-2">© {new Date().getFullYear()} Maria Evellyn. {t.footer.rights}</p>

          <div className="flex flex-col items-center">
            <p className="mb-2">{t.footer.developedWith}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white shadow-xs'}`}
                >
                  <span className={darkMode ? 'text-purple-400' : 'text-purple-600'}>{tech.icon}</span>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
