import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import Crachá from './Crachá';
import { useLanguage } from '../i18n/useLanguage';

/**
 * Hero fixo: a seção tem 2 telas de altura, mas o conteúdo fica preso (sticky)
 * enquanto o scroll transforma o crachá, o título e o fundo.
 */
export default function Home({ darkMode }: { darkMode: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });

  // Crachá: balança, afasta-se e some
  const badgeRotate = useTransform(p, [0, 0.6, 1], [0, -10, -16]);
  const badgeY = useTransform(p, [0, 1], [0, -120]);
  const badgeScale = useTransform(p, [0, 1], [1, 0.8]);
  const badgeOpacity = useTransform(p, [0, 0.75, 1], [1, 1, 0]);

  // Título e parágrafo: deslizam em direções diferentes
  const titleX = useTransform(p, [0, 1], [0, 80]);
  const titleOpacity = useTransform(p, [0, 0.7, 1], [1, 1, 0]);
  const subtitleX = useTransform(p, [0, 1], [0, -60]);
  const bioY = useTransform(p, [0, 1], [0, 60]);
  const bioOpacity = useTransform(p, [0, 0.5, 0.95], [1, 1, 0]);

  // Texto gigante do fundo: cresce e some
  const bgScale = useTransform(p, [0, 1], [1, 1.8]);
  const bgOpacity = useTransform(p, [0, 1], [0.12, 0]);
  const bgY = useTransform(p, [0, 1], [0, -200]);

  // Dica de scroll some logo no começo
  const hintOpacity = useTransform(p, [0, 0.15], [1, 0]);

  const still = reduce ? {} : undefined;

  return (
    <section
      id="home"
      ref={sectionRef}
      className={`relative ${reduce ? 'min-h-screen' : 'h-[170vh] md:h-[200vh]'}`}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Texto "Portfólio" ao fundo */}
        <motion.div
          style={still ?? { scale: bgScale, opacity: bgOpacity, y: bgY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          <h1
            className={`text-[15vw] sm:text-[20vw] font-bold select-none tracking-tighter ${darkMode ? 'text-purple-500' : 'text-purple-400'}`}
            style={{ filter: 'drop-shadow(0 0 24px rgba(168, 85, 247, 0.6))' }}
          >
            Portfólio
          </h1>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full sm:w-11/12 lg:w-4/5 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 items-center">
            {/* Crachá */}
            <motion.div
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, type: 'spring', bounce: 0.35 }}
              className="md:col-span-4 flex justify-center"
            >
              <motion.div
                style={still ?? { rotate: badgeRotate, y: badgeY, scale: badgeScale, opacity: badgeOpacity }}
                className="w-1/2 max-w-[170px] sm:w-3/4 sm:max-w-[250px] md:w-full md:max-w-none origin-top"
              >
                <Crachá />
              </motion.div>
            </motion.div>

            {/* Texto */}
            <div className="md:col-span-8 space-y-2 sm:space-y-4 md:space-y-6 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.span
                  style={still ?? { x: titleX, opacity: titleOpacity }}
                  className={`block text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}
                >
                  {t.hero.role1}
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
              >
                <motion.span
                  style={still ?? { x: subtitleX, opacity: titleOpacity }}
                  className={`block text-xl sm:text-3xl lg:text-4xl ${darkMode ? 'text-purple-400' : 'text-purple-500'}`}
                >
                  {t.hero.role2}
                </motion.span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={still ?? { y: bioY, opacity: bioOpacity }}
                className={`text-sm sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                {t.hero.bio}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Dica de scroll */}
        {!reduce && (
          <motion.div
            style={{ opacity: hintOpacity }}
            className={`absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-xs tracking-[0.3em] uppercase ${darkMode ? 'text-purple-300/80' : 'text-purple-600/80'}`}
          >
            <span>{t.hero.scroll}</span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FiArrowDown />
            </motion.span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
