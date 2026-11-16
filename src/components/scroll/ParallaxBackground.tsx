import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';

/**
 * Manchas de luz roxas fixas atrás do conteúdo. Cada uma se desloca em uma
 * velocidade diferente conforme o scroll, criando profundidade (parallax).
 */
export default function ParallaxBackground({ darkMode }: { darkMode: boolean }) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.5 });

  const y1 = useTransform(progress, [0, 1], ['0vh', reduce ? '0vh' : '-60vh']);
  const y2 = useTransform(progress, [0, 1], ['0vh', reduce ? '0vh' : '40vh']);
  const y3 = useTransform(progress, [0, 1], ['0vh', reduce ? '0vh' : '-25vh']);
  const rotate = useTransform(progress, [0, 1], [0, reduce ? 0 : 90]);

  const blob = darkMode ? 'opacity-40' : 'opacity-20';
  const c1 = darkMode ? 'bg-purple-600' : 'bg-purple-300';
  const c2 = darkMode ? 'bg-fuchsia-600' : 'bg-fuchsia-300';
  const c3 = darkMode ? 'bg-violet-700' : 'bg-violet-300';

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <motion.div
        style={{ y: y1 }}
        className={`absolute -top-32 -left-32 h-[32rem] w-[32rem] rounded-full blur-3xl ${blob} ${c1}`}
      />
      <motion.div
        style={{ y: y2, rotate }}
        className={`absolute top-[40vh] -right-40 h-[36rem] w-[36rem] rounded-[40%] blur-3xl ${blob} ${c2}`}
      />
      <motion.div
        style={{ y: y3 }}
        className={`absolute bottom-[-10rem] left-[30%] h-[28rem] w-[28rem] rounded-full blur-3xl ${blob} ${c3}`}
      />
      {/* grade de pontos sutil */}
      <div
        className={`absolute inset-0 ${darkMode ? 'opacity-[0.07]' : 'opacity-[0.05]'}`}
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          color: darkMode ? '#c4b5fd' : '#6d28d9',
        }}
      />
    </div>
  );
}
