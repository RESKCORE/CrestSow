'use client';

import { motion } from 'framer-motion';
import PointerGlowCard from '@/components/ui/PointerGlowCard';

const testimonials = [
  {
    quote:
      'CrestSow completely changed my trajectory. Within 3 months of completing the web development track, I had a full-time offer at a Series B startup.',
    author: 'Priya Sharma',
    role: 'Frontend Engineer, Razorpay',
    initials: 'PS',
    type: 'text',
  },
  {
    quote:
      'The corporate training program was exactly what our engineering team needed — practical, intensive, and delivered measurable results.',
    author: 'Marcus Thompson',
    role: 'CTO, Finova Labs',
    initials: 'MT',
    type: 'photo', // Simulated photo card
  },
  {
    quote:
      "The internship opened doors I didn't even know existed. Real projects, expert mentors, genuine career growth from day one.",
    author: 'Aisha Patel',
    role: 'Data Analyst, Microsoft',
    initials: 'AP',
    type: 'text',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F5F6F8] py-24 md:py-32 px-4" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Alumni Stories</p>
          <h2 className="text-4xl md:text-5xl tracking-tight">
            The proof is in the <span className="font-serif italic text-[#4C7FFF]">people.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <PointerGlowCard
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between gap-8 overflow-hidden min-h-[320px] shadow-sm hover:shadow-md transition-shadow ${
                t.type === 'photo' 
                  ? 'bg-[#0A0A0A] text-white' 
                  : 'bg-white border border-[#E5E7EB] text-[#0A0A0A]'
              }`}
            >
              {/* If photo card, simulate an image background with a scrim */}
              {t.type === 'photo' && (
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                  <div className="w-full h-full bg-[#1F2937] opacity-50" /> {/* Placeholder for actual image */}
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, si) => (
                      <span key={si} className={t.type === 'photo' ? 'text-[#4C7FFF]' : 'text-[#4C7FFF]'} style={{ fontSize: '0.875rem' }}>★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className={`text-base leading-relaxed font-medium ${
                    t.type === 'photo' ? 'text-white' : 'text-[#4B5563]'
                  }`}>
                    "{t.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mt-8">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    t.type === 'photo' ? 'bg-white/20 text-white' : 'bg-[#F5F6F8] text-[#0A0A0A]'
                  }`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${t.type === 'photo' ? 'text-white' : 'text-[#0A0A0A]'}`}>
                      {t.author}
                    </p>
                    <p className={`text-xs ${t.type === 'photo' ? 'text-white/70' : 'text-[#6B7280]'}`}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </PointerGlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
