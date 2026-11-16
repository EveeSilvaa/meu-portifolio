import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale';

const offsets: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 60 },
  right: { x: -60 },
  scale: { scale: 0.9 },
};

/** Revela o conteúdo (desliza, aparece ou cresce) quando ele entra na tela. */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  once = true,
  className,
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-80px 0px' });
  const reduce = useReducedMotion();
  const from = { opacity: 0, x: 0, y: 0, scale: 1, ...offsets[direction] };
  const to = { opacity: 1, x: 0, y: 0, scale: 1 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : from}
      animate={reduce || inView ? to : from}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
