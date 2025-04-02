// src/components/Crachá.tsx
import { motion, useAnimation } from 'framer-motion';
// import { useState } from 'react';
import minhafotoImg from "../assets/crachá-badg.png";


export default function Crachá() {
  const controls = useAnimation();

  const handleHover = () => {
    controls.start({
      y: [0, 30, 20, 30, 25, 30, 28, 30, 0], // Movimento vertical de queda
      transition: {
        duration: 1.5,
        ease: "easeOut",
        times: [0, 0.2, 0.4, 0.6, 0.7, 0.8, 0.9, 1]
      }
    });
  };

  return (
    <motion.div
      animate={controls}
      onHoverStart={handleHover}
      className="relative w-40 md:w-40 lg:w-48 cursor-pointer"
    >
      
      {/* Imagem do crachá */}
      <img
        src={ minhafotoImg }
        alt="Crachá Dev"
        className="w-full h-full object-contain"
        style={{
          filter: 'drop-shadow(0 5px 15px rgba(168, 85, 247, 0.5))'
        }}
      />
    </motion.div>
  );
}