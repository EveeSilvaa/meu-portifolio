// src/App.tsx
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import YugiohCard from './components/Crachá';
import Projects from './components/Projects';
import Contact from './components/Contact';

import Home from './components/Home';

export default function App() {
  return (
    <div className="center bg-black text-white min-h-screen overflow-hidden">
      {/* Texto "Portfólio" no background */}
      <motion.h1
        className="absolute text-9xl text-gray-800 font-bold opacity-10 top-1/4 left-1/2 transform -translate-x-1/2"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        Portfólio
      </motion.h1>

      <Navbar />
      <YugiohCard />
      <Home />
      {/* <About /> */}
      {/* <Skills /> */}
      {/* <Education /> */}
      <Projects />
      <Contact />
    </div>
  );
}