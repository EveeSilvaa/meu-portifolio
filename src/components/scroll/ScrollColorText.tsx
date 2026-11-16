import { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

/**
 * Parágrafo cujas palavras passam de cinza para roxo, uma a uma,
 * conforme o scroll avança sobre ele.
 */
export default function ScrollColorText({
  text,
  darkMode,
  className = '',
}: {
  text: string;
  darkMode: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.4'],
  });
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <Word
          key={`${word}-${i}`}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          darkMode={darkMode}
        >
          {word}
        </Word>
      ))}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
  darkMode,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  darkMode: boolean;
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [6, 0]);

  return (
    <span className="relative mr-[0.3em] mt-[0.15em] inline-block">
      <span className={`${darkMode ? 'text-gray-600' : 'text-gray-300'}`}>{children}</span>
      <motion.span
        style={{ opacity, y }}
        className={`absolute left-0 top-0 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}
      >
        {children}
      </motion.span>
    </span>
  );
}
