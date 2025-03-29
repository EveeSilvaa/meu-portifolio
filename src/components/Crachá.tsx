import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Crachá() { // Removi a prop darkMode
  const [isMobile, setIsMobile] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]); // Inclinação aumentada
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  // Verifica se é mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (event: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;
      
      x.set(mouseX / 25);
      y.set(mouseY / 25);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, isMobile]);

  return (
    <motion.div
      className="relative w-32 md:w-40 lg:w-48"
      style={!isMobile ? { x, y, rotateX, rotateY } : {}}
      initial={{ y: -100, rotateX: 10, rotateY: -10 }}
      animate={{ y: 0 }}
      transition={{ 
        type: 'spring', 
        stiffness: 80,
        damping: 10,
        delay: 0.3
      }}
      whileHover={!isMobile ? { 
        scale: 1.05,
        transition: { duration: 0.2 }
      } : {}}
    >
      <img
        src="src/assets/cracha.png" // Única imagem do crachá
        alt="Crachá Dev"
        className="w-full h-auto object-contain"
        style={{
          filter: 'drop-shadow(0 5px 15px rgba(168, 85, 247, 0.5))'
        }}
      />
    </motion.div>
  );
}