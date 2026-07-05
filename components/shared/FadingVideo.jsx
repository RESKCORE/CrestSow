'use client';

import { motion } from 'framer-motion';

const DEFAULT_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4';

/**
 * FadingVideo — a fullscreen <video> that fades in on mount.
 * Positioned absolute inset-0, w-full h-full object-cover z-0.
 * No overlay. Mount the parent with `position: relative; overflow: hidden`.
 */
export default function FadingVideo({ src = DEFAULT_SRC, className = '' }) {
  return (
    <motion.video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className={`absolute inset-0 w-full h-full object-cover z-0 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, ease: 'easeOut' }}
    />
  );
}
