'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function PointerGlowCard({ children, className = '', ...props }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handlePointerMove = (e) => {
    if (isTouchDevice || shouldReduceMotion) return;
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onPointerMove={handlePointerMove}
      className={`relative overflow-hidden group ${className}`}
      {...props}
    >
      {/* Pointer Glow Effect */}
      {(!isTouchDevice && !shouldReduceMotion) ? (
        <div
          className="pointer-events-none absolute -inset-px rounded-inherit opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
          style={{
            background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(76, 127, 255, 0.15), transparent 40%)`,
          }}
        />
      ) : (
        /* Reduced Motion Fallback: Static centered glow on hover */
        <div className="pointer-events-none absolute -inset-px rounded-inherit opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0 bg-[radial-gradient(circle_at_center,_rgba(76,127,255,0.1)_0%,_transparent_70%)]" />
      )}

      {/* Content wrapper to stay above the glow */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
