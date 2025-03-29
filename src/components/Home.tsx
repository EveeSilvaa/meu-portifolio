import Crachá from "./Crachá";
import { motion } from "framer-motion";

export default function Home({ darkMode }: { darkMode: boolean }) {
  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'}`}
    >
      {/* Texto "Portfólio" neon no background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.h1 
          className={`text-[20vw] font-bold opacity-10 md:opacity-20 text-purple-500 select-none neon-text`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        >
          Portfólio
        </motion.h1>
      </div>

      {/* Crachá posicionado mais acima */}
      <div className="absolute left-6 md:left-10 top-[10%] z-20">
        <Crachá /> {/* Removi a prop darkMode */}
      </div>

      {/* Conteúdo principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`container mx-auto px-4 text-center relative z-10 ${darkMode ? 'text-white' : 'text-gray-800'}`}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Desenvolvedora <span className={`block mt-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>FULLSTACK</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Olá, me chamo Maria Evellyn, sou desenvolvedora FullStack com experiência em Java, React e TypeScript
        </p>
      </motion.div>
    </section>
  );
}