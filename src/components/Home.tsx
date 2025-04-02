import Crachá from "./Crachá";
import { motion } from "framer-motion";

export default function Home({ darkMode }: { darkMode: boolean }) {
  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'}`}
    >
      {/* Texto de fundo "Portfólio" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.h1 
          className={`text-[20vw] font-bold opacity-10 md:opacity-20 text-purple-600 select-none`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.4 }}
        >
          Portfólio
        </motion.h1>
      </div>

      {/* Container principal */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center min-h-[90vh]">
        {/* Layout desktop - Card esquerda, Texto direita */}
        <div className="hidden md:flex flex-row items-center justify-between w-full">
          {/* Card à esquerda - Exibido apenas em desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block w-full md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center mb-8 md:mb-0"
          >
            <Crachá />
          </motion.div>

          {/* Texto à direita */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full md:w-2/3 lg:w-3/5 px-0 md:px-12 text-center md:text-left"
          >
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
              FULLSTACK
            </h1>
            <p className={`text-3xl lg:text-4xl mt-4 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`}>
              Developer
            </p>
            <p className={`text-lg lg:text-xl mt-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Hello!! My name is Maria Evellyn, I'm 21 years old and I'm a FullStack developer with experience in Java, React and TypeScript.
            </p>
          </motion.div>
        </div>

        {/* Layout mobile - Apenas texto (centralizado) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:hidden text-center"
        >
          <h1 className={`text-4xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
            FULLSTACK
          </h1>
          <p className={`text-2xl mt-2 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`}>
            Developer
          </p>
          <p className={`text-base mt-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Hello!! My name is Maria Evellyn, I'm 21 years old and I'm a FullStack developer with experience in Java, React and TypeScript.
          </p>
        </motion.div>
      </div>
    </section>
  );
}