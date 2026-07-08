'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function GlobalBackground() {
  const { scrollY } = useScroll();
  
  // Fade overlay from ~0.45 at the top to ~0.68 when scrolling down
  const opacity = useTransform(scrollY, [0, 600], [0.45, 0.68]);

  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="fixed inset-0 w-full h-full object-cover -z-[2]"
        style={{ 
          pointerEvents: 'none',
          filter: 'brightness(0.55) contrast(0.92) saturate(0.80)'
        }}
      >
        <source
          src="https://cdn.jsdelivr.net/gh/RESKCORE/CrestSow@main/Initial_Scene_-_2026-07-08_202607082028.mp4"
          type="video/mp4"
        />
      </video>
      <motion.div
        className="fixed inset-0 pointer-events-none -z-[1]"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,1), rgba(0,0,0,1))',
          opacity
        }}
      />
    </>
  );
}
