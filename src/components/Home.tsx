
// src/pages/Home.tsx
import Crachá from "./Crachá";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div id="home" className="py-20 bg-black relative overflow-hidden min-h-screen">
      {/* Texto Neon de Background */}
      <motion.h1
        className="absolute text-9xl text-gray-800 font-bold opacity-10 top-1/4 left-1/2 transform -translate-x-1/2"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ repeat: Infinity, duration: 4 }}
        >
        Portfólio
        </motion.h1>

      {/* Conteúdo Principal (sobreposto) */}
      <div className="container mx-auto px-4 relative z-10">
        <Crachá />
        <div className="max-w-2xl mx-auto text-gray-300 space-y-4 text-center">
          <h1 className="bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text block text-4xl font-bold mt-2">FULLSTACK</h1>
          <h2 className="text-4xl font-bold leading-relaxed relative z-10">Developer</h2>
          <p className="text-lg font-bold relative z-10">
           Hello, my name is Maria Evellyn, 21 years old, I am a FullStack developer
          </p>
        </div>
      </div>
    </div>
  );
}