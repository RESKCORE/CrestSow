'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function AnimatedLetter({ char, progress, index, total }) {
  const charProgress = index / total;
  const opacity = useTransform(
    progress,
    [Math.max(0, charProgress - 0.1), Math.min(1, charProgress + 0.05)],
    [0.15, 1]
  );

  return (
    <motion.span style={{ opacity }} aria-hidden="true">
      {char}
    </motion.span>
  );
}

/**
 * AnimatedCharText — wraps each character in a motion.span whose opacity
 * is driven by scroll progress, creating a progressive reveal effect.
 *
 * Usage: <AnimatedCharText text="..." className="..." />
 */
export default function AnimatedCharText({ text, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={ref} className={className} aria-label={text}>
      {chars.map((char, i) => (
        <AnimatedLetter
          key={i}
          char={char}
          progress={scrollYProgress}
          index={i}
          total={chars.length}
        />
      ))}
    </p>
  );
}
