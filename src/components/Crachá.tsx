// src/components/Crachá.tsx
import { motion, useAnimation } from 'framer-motion';
// import { useState } from 'react';

export default function Crachá() {
  const controls = useAnimation();
  // const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    // setIsHovered(true);
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
      // onHoverEnd={() => setIsHovered(false)}
      className="relative w-40 md:w-40 lg:w-48 top-[6%] cursor-pointer"
    >
      {/* Cordinha (opcional) */}
      {/* {isHovered && (
        <motion.div 
          className="absolute -top-6 left-1/2 w-0.5 h-6 bg-purple-400"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.3 }}
          style={{ x: '-50%' }}
        />
      )} */}
      
      {/* Imagem do crachá */}
      <img
        src="public/cracha.png"
        alt="Crachá Dev"
        className="w-full h-auto object-contain"
        style={{
          filter: 'drop-shadow(0 5px 15px rgba(168, 85, 247, 0.5))'
        }}
      />
    </motion.div>
  );
}