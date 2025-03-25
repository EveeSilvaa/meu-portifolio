// src/components/Crachá.tsx
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function Crachá() {
  // Valores de movimento baseados na posição do mouse
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transformações para suavizar o movimento
  const rotateX = useTransform(y, [-100, 100], [10, -10]); // Rotação no eixo X
  const rotateY = useTransform(x, [-100, 100], [-10, 10]); // Rotação no eixo Y

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Calcula a posição do mouse em relação ao centro da tela
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;

      // Atualiza os valores de movimento
      x.set(mouseX / 10); // Divide por 10 para suavizar o movimento
      y.set(mouseY / 10);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [x, y]);

  return (
    <div className="fixed left-1/4 transform -translate-x-1/2">
      {/* Crachá com cordão */}
      <motion.div
        className="relative w-60"
        style={{
          x, // Movimento no eixo X
          y, // Movimento no eixo Y
          rotateX, // Rotação no eixo X
          rotateY, // Rotação no eixo Y
        }}
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
      >
        {/* Imagem do crachá com cordão */}
        <img
          src="src/assets/Group 5 (2).png"
          alt="Crachá"
          className="w-full h-full object-cover rounded-lg shadow-2xl"
        />
      </motion.div>
    </div>
  );
}