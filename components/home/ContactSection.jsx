'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { CreepyButton } from '@/components/ui/creepy-button';

const AMBIENT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';

export default function ContactSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (email.trim()) setSubmitted(true);
  }

  return (
    <section className="video-section bg-black py-24 md:py-36 px-4" id="contact">
      {/* Ambient video background */}
      <video
        className="section-bg"
        src={AMBIENT_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="section-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-5"
              style={{ color: 'rgba(222,219,200,0.35)' }}
            >
              Let's Talk
            </p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[0.9]"
              style={{ color: '#E1E0CC' }}
            >
              Ready to start
              <br />
                <span className="font-serif italic" style={{ color: 'rgba(222,219,200,0.6)' }}>
                your journey?
              </span>
            </h2>
          </motion.div>

          {/* Email capture */}
          <motion.div
            className="w-full lg:w-auto lg:min-w-[320px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <p className="text-sm py-4" style={{ color: '#E1E0CC' }}>
                ✓ We'll be in touch soon.
              </p>
            ) : (
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  placeholder="your@email.com"
                  className="w-full rounded-full px-5 py-3 text-sm outline-none transition-all glass-input"
                />
                <CreepyButton onClick={handleSubmit} className="w-full" simple>
                  <span>Get Started</span>
                  <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                    <ArrowRight size={14} />
                  </span>
                </CreepyButton>
              </div>
            )}

            <p className="text-xs mt-3" style={{ color: 'rgba(222,219,200,0.25)' }}>
              Or{' '}
              <Link
                href="/contact"
                className="underline transition-opacity hover:opacity-70"
                style={{ color: 'rgba(222,219,200,0.4)' }}
              >
                visit our full contact page
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
