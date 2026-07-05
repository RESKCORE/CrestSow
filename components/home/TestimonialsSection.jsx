'use client';

import { motion } from 'framer-motion';

const AMBIENT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';

const testimonials = [
  {
    quote:
      'CrestSow completely changed my trajectory. Within 3 months of completing the web development track, I had a full-time offer at a Series B startup.',
    author: 'Priya Sharma',
    role: 'Frontend Engineer, Razorpay',
    initials: 'PS',
  },
  {
    quote:
      'The corporate training program was exactly what our engineering team needed — practical, intensive, and delivered measurable results.',
    author: 'Marcus Thompson',
    role: 'CTO, Finova Labs',
    initials: 'MT',
  },
  {
    quote:
      "The internship opened doors I didn't even know existed. Real projects, expert mentors, genuine career growth from day one.",
    author: 'Aisha Patel',
    role: 'Data Analyst, Microsoft',
    initials: 'AP',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="video-section bg-black py-24 md:py-36 px-4" id="testimonials">
      {/* Shared ambient video */}
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
        <motion.p
          className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-16 text-center"
          style={{ color: 'rgba(222, 219, 200, 0.35)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Alumni Stories
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              className="glass-card rounded-2xl p-8 flex flex-col justify-between gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, si) => (
                  <span key={si} style={{ color: '#DEDBC8', fontSize: '0.75rem' }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-sm sm:text-base leading-relaxed font-serif italic flex-1"
                style={{ color: 'rgba(225,224,204,0.75)' }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#DEDBC8',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: '#E1E0CC' }}>{t.author}</p>
                  <p className="text-xs" style={{ color: 'rgba(225,224,204,0.35)' }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
