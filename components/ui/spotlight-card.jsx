'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export function SpotlightCard({
  children,
  className = '',
  glowColor = 'rgba(255,255,255,0.15)',
  ...props
}) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if it's a touch device / mobile
    const matchMediaMobile = window.matchMedia('(hover: none), (max-width: 768px)');
    setIsMobile(matchMediaMobile.matches);

    const matchMediaMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(matchMediaMotion.matches);

    const handleMobileChange = (e) => setIsMobile(e.matches);
    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);

    // Some older browsers require addListener
    if (matchMediaMobile.addEventListener) {
      matchMediaMobile.addEventListener('change', handleMobileChange);
      matchMediaMotion.addEventListener('change', handleMotionChange);
    } else {
      matchMediaMobile.addListener(handleMobileChange);
      matchMediaMotion.addListener(handleMotionChange);
    }

    return () => {
      if (matchMediaMobile.removeEventListener) {
        matchMediaMobile.removeEventListener('change', handleMobileChange);
        matchMediaMotion.removeEventListener('change', handleMotionChange);
      } else {
        matchMediaMobile.removeListener(handleMobileChange);
        matchMediaMotion.removeListener(handleMotionChange);
      }
    };
  }, []);

  function onPointerMove({ currentTarget, clientX, clientY }) {
    if (isMobile || prefersReducedMotion) return;
    
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Tablet gets a smaller spotlight radius (approx 250px) compared to desktop (350px)
  const radius = typeof window !== 'undefined' && window.innerWidth < 1024 ? 250 : 350;

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={onPointerMove}
      className={`group relative overflow-hidden rounded-[24px] ${className}`}
      style={{
        background: 'rgba(18,18,18,0.18)',
        backdropFilter: 'blur(28px) saturate(180%)',
        WebkitBackdropFilter: 'blur(28px) saturate(180%)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
      }}
      whileHover={{
        scale: 1.015,
        y: -6,
      }}
      transition={props.transition || { duration: 0.35, ease: 'ease' }}
      {...props}
    >
      {/* Dynamic spotlight */}
      {!isMobile && !prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                ${radius}px circle at ${mouseX}px ${mouseY}px,
                ${glowColor},
                transparent 80%
              )
            `,
            zIndex: 0,
          }}
        />
      )}

      {/* Static mobile/reduced-motion fallback glow */}
      {(isMobile || prefersReducedMotion) && (
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.35] z-0"
          style={{
            background: `radial-gradient(120% 120% at 50% 0%, ${glowColor}, transparent 70%)`
          }}
        />
      )}

      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}
