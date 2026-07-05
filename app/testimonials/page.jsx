'use client';

import { motion } from 'framer-motion';
import FadingVideo from '@/components/shared/FadingVideo';

const PAGE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4';

const testimonials = [
  {
    id: 1,
    quote: 'CrestSow completely changed my trajectory. Within 3 months of completing the web development track, I had a full-time offer at a Series B startup.',
    name: 'Priya Sharma',
    role: 'Frontend Engineer, Razorpay',
    initials: 'PS',
  },
  {
    id: 2,
    quote: 'The corporate training program was exactly what our engineering team needed — practical, intensive, and delivered measurable results in weeks.',
    name: 'Marcus Thompson',
    role: 'CTO, Finova Labs',
    initials: 'MT',
  },
  {
    id: 3,
    quote: "The internship opened doors I didn't even know existed. Real projects, expert mentors, genuine career growth from day one.",
    name: 'Aisha Patel',
    role: 'Data Analyst, Microsoft',
    initials: 'AP',
  },
  {
    id: 4,
    quote: 'The Cloud & Security track prepared me for my AWS certification in record time. The instructors genuinely care about your success.',
    name: 'Rohan Mehta',
    role: 'Cloud Engineer, Infosys',
    initials: 'RM',
  },
  {
    id: 5,
    quote: "I went from zero coding knowledge to shipping a React app in production. CrewSow's project-based approach is unmatched.",
    name: 'Fatima Al-Rashid',
    role: 'Software Developer, TCS',
    initials: 'FA',
  },
  {
    id: 6,
    quote: 'The Data Science curriculum is rigorous and industry-aligned. Got placed at a top analytics firm before even finishing the course.',
    name: 'James Okonkwo',
    role: 'Data Scientist, Deloitte',
    initials: 'JO',
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FadingVideo src={PAGE_VIDEO} className="!fixed" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-[1]" />
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="relative min-h-[50vh] pt-32 pb-24 px-4 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.p
            className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-5"
            style={{ color: 'rgba(222,219,200,0.35)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Alumni Stories
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-light leading-[0.9]"
            style={{ color: '#E1E0CC' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            What our students
            <br />
            <span className="font-serif italic" style={{ color: 'rgba(222,219,200,0.6)' }}>
              say.
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Testimonials masonry grid */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                className="glass-card break-inside-avoid rounded-2xl p-7 flex flex-col gap-5 mb-5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, si) => (
                    <span key={si} style={{ color: '#DEDBC8', fontSize: '0.7rem' }}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-sm leading-relaxed font-serif italic flex-1"
                  style={{ color: 'rgba(225,224,204,0.75)' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#DEDBC8',
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: '#E1E0CC' }}>{t.name}</p>
                    <p className="text-xs" style={{ color: 'rgba(225,224,204,0.35)' }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
