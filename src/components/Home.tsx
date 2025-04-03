import Crachá from "./Crachá";
import { motion } from "framer-motion";

export default function Home({ darkMode }: { darkMode: boolean }) {
  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'}`}
    >
      {/* Background text "Portfólio" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.h1 
          className={`text-[15vw] sm:text-[20vw] font-bold select-none opacity-10 ${darkMode ? 'text-purple-500' : 'text-purple-400'}`}
          initial={{ opacity: 0.1 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1], 
            textShadow: [
              '0 0 5px rgba(191, 154, 226, 0.3)',
              '0 0 20px rgba(168, 85, 247, 0.8)',
              '0 0 5px rgba(168, 85, 247, 0.3)'         
            ]
          }}
          transition={{ 
            duration: 1.4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            filter: 'drop-shadow(0 0 2px rgba(168, 85, 247, 0.5))'
          }}
        >
          Portfólio
        </motion.h1>
      </div>

      {/* Main container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full sm:w-11/12 lg:w-4/5">
        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 items-center">
          {/* Badge on left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-4 flex justify-center relative"
          >
            <Crachá />
          </motion.div>

          {/* Content on right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="col-span-8 space-y-6"
          >
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
              FULLSTACK
            </h1>
            <p className={`text-2xl sm:text-3xl lg:text-4xl ${darkMode ? 'text-purple-400' : 'text-purple-500'}`}>
              Developer
            </p>
            <p className={`text-base sm:text-lg lg:text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Hello!! My name is Maria Evellyn, I'm 21 years old and I'm a FullStack developer with experience in Java, React and TypeScript.
            </p>
          </motion.div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-3/4 max-w-[250px]">
              <Crachá />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h1 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
              FULLSTACK
            </h1>
            <p className={`text-xl sm:text-2xl ${darkMode ? 'text-purple-400' : 'text-purple-500'}`}>
              Developer
            </p>
            <p className={`text-sm sm:text-base leading-relaxed px-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Hello!! My name is Maria Evellyn, I'm 21 years old and I'm a FullStack developer with experience in Java, React and TypeScript.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}