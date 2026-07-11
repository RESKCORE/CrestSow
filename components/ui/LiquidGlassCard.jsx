'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

export function LiquidGlassCard({
  children,
  className,
  corners = '24px', // 24px small, 28px standard, 36px hero
  hoverEffect = true,
  parallax = true,
  ...props
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position values
  const mouseX = useMotionValue(0.5); // 0 to 1
  const mouseY = useMotionValue(0.5); // 0 to 1

  // Springs for smooth animation
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Rotation transforms (max 5deg)
  const rotateX = useTransform(smoothY, [0, 1], [5, -5]);
  const rotateY = useTransform(smoothX, [0, 1], [-5, 5]);

  // Reflection/Glare transform
  const glareX = useTransform(smoothX, [0, 1], ['-50%', '50%']);
  const glareY = useTransform(smoothY, [0, 1], ['-50%', '50%']);

  const handleMouseMove = (e) => {
    if (!parallax || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (parallax) {
      mouseX.set(0.5);
      mouseY.set(0.5);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ y: 0, scale: 1 }}
      animate={{
        y: hoverEffect && isHovered ? -8 : 0,
        scale: hoverEffect && isHovered ? 1.02 : 1,
      }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 150,
        mass: 0.5,
      }}
      style={{
        rotateX: parallax && isHovered ? rotateX : 0,
        rotateY: parallax && isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
        borderRadius: corners,
        // Base glass background
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(24px) saturate(180%) brightness(115%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%) brightness(115%)',
        // Inset borders to simulate glass edge (top bright, bottom dark)
        boxShadow: isHovered && hoverEffect
          ? `
              0 20px 60px rgba(0,0,0,0.45),
              0 8px 24px rgba(0,0,0,0.25),
              inset 0 1px rgba(255,255,255,0.2),
              inset 0 -1px rgba(0,0,0,0.15)
            `
          : `
              0 12px 40px rgba(0,0,0,0.25),
              inset 0 1px rgba(255,255,255,0.12),
              inset 0 -1px rgba(0,0,0,0.15)
            `,
      }}
      className={cn(
        'relative overflow-hidden transition-shadow duration-400',
        className
      )}
      {...props}
    >
      {/* 
        Soft reflection layer (Top-Left Highlight) 
        This moves dynamically with the mouse if parallax is enabled
      */}
      {parallax && (
        <motion.div
          className="pointer-events-none absolute inset-[-100%] z-0 opacity-0 transition-opacity duration-400"
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18), transparent 45%)',
            x: glareX,
            y: glareY,
          }}
        />
      )}

      {/* 
        Static reflection fallback if parallax is disabled
      */}
      {!parallax && (
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
      )}

      {/* 
        Glow effects on hover 
      */}
      {hoverEffect && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-400"
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{
            background: 'radial-gradient(circle at 50% 120%, rgba(232,198,122,0.18), transparent 60%)',
            boxShadow: 'inset 0 0 40px rgba(255,255,255,0.08)',
          }}
        />
      )}

      {/* Content wrapper */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
