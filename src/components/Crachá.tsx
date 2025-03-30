import { motion, useAnimation } from 'framer-motion';


export default function Crachá() {
  const controls = useAnimation();
  

  const handleHover = () => {
    
    // Animação de queda vertical
    controls.start({
      y: [0, 20, 15, 20, 18, 20, 19, 20, 0], // Movimento vertical apenas
      transition: {
        duration: 1.5,
        ease: "easeOut",
        times: [0, 0.2, 0.4, 0.6, 0.7, 0.8, 0.9, 1]
      }
    });
  };

  return (
    <div className="fixed left-6 md:left-10 top-[5%] z-20 w-32 md:w-40 lg:w-48">
      <motion.div
        animate={controls}
        onHoverStart={handleHover}
        className="relative w-full cursor-pointer"
      >
        
        {/* Imagem do crachá */}
        <img
          src="src/assets/cracha.png"
          alt="Crachá Dev"
          className="w-full h-auto object-contain"
          style={{
            filter: 'drop-shadow(0 5px 15px rgba(168, 85, 247, 0.5))'
          }}
        />
      </motion.div>
    </div>
  );
}