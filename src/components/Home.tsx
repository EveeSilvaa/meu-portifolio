import Crachá from "./Crachá";
import { motion } from "framer-motion";

export default function Home({ darkMode }: { darkMode: boolean }) {
  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between overflow-hidden px-4 ${darkMode ? 'bg-black' : 'bg-white'}`}
    >
      {/* Texto "Portfólio" neon no background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.h1 
          className={`text-[20vw] font-bold opacity-10 md:opacity-20 text-purple-600 select-none neon-text`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.4 }}
        >
          Portfólio
        </motion.h1>
      </div>

      {/* Conteúdo principal - Layout flexível */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`relative z-10 w-full md:w-auto text-center md:text-left order-2 md:order-none ${darkMode ? 'text-white' : 'text-gray-800'}`}
      >
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold block mt-4 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
          FULLSTACK <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 text-purple-400">Developer</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0 mt-4 mb-8">
          Hello, my name is Maria Evellyn, I am a FullStack developer with experience in Java, React and TypeScript.
        </p>
      </motion.div>

      {/* Crachá - Posição responsiva */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-20 order-1 md:order-none mb-8 md:mb-0 md:ml-12"
      >
        <Crachá />
      </motion.div>
    </section>
  );
}