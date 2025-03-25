// src/components/Crachá.tsx
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function Crachá() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;
      x.set(mouseX / 10);
      y.set(mouseY / 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <div className="absolute left-0 top-0"> {/* Alterado de 'fixed' para 'absolute' */}
      <motion.div
        className="relative w-60"
        style={{ x, y, rotateX, rotateY }}
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
      >
        <img
          src="src/assets/crachá.png"
          alt="Crachá"
          className="w-full h-full object-cover rounded-lg shadow-2xl"
        />
      </motion.div>
    </div>
  );
}