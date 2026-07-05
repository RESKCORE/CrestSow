'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * WordsPullUp — splits `text` by spaces and animates each word
 * sliding up from y:100% → y:0 with staggered delay.
 */
export default function WordsPullUp({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const words = text.split(' ');

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className={`inline-block mr-[0.22em] ${wordClassName}`}
            initial={{ y: '110%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '110%', opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/**
 * WordsPullUpMultiStyle — takes an array of {text, className} segments.
 * Splits all words while preserving per-word className.
 * Same pull-up animation as WordsPullUp.
 */
export function WordsPullUpMultiStyle({ segments, containerClassName = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const allWords = segments.flatMap(({ text, className }) =>
    text.split(' ').map((word) => ({ word, className }))
  );

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap justify-center gap-x-[0.22em] ${containerClassName}`}
    >
      {allWords.map(({ word, className }, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className={`inline-block ${className}`}
            initial={{ y: '110%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '110%', opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
