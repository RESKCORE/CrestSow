'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { CreepyButton } from '@/components/ui/creepy-button';

const AMBIENT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';

const programs = [
  { number: '01', title: 'Software Engineering', duration: '12 weeks', type: 'Remote / Hybrid' },
  { number: '02', title: 'Data Science', duration: '14 weeks', type: 'Remote' },
  { number: '03', title: 'Cybersecurity', duration: '12 weeks', type: 'On-site' },
  { number: '04', title: 'Cloud Engineering', duration: '10 weeks', type: 'Remote' },
  { number: '05', title: 'UI / UX Design', duration: '10 weeks', type: 'Hybrid' },
  { number: '06', title: 'Mobile Development', duration: '12 weeks', type: 'Remote' },
];

export default function InternshipsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-50px' });

  return (
    <section className="video-section bg-[#101010] py-24 md:py-36 px-4" id="internships">
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
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <motion.p
            className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-5"
            style={{ color: 'rgba(222, 219, 200, 0.35)' }}
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            Internship Programs
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.0]"
            style={{ color: '#E1E0CC' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            Real work.
            <br />
              <span className="font-serif italic" style={{ color: 'rgba(222,219,200,0.6)' }}>
              Real experience.
            </span>
          </motion.h2>
        </div>

        {/* Programs list — table-style rows */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              className="group flex items-center justify-between py-5 px-2 rounded-lg cursor-pointer transition-colors"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
            >
              <div className="flex items-center gap-6 sm:gap-10">
                <span className="text-xs w-8 shrink-0" style={{ color: 'rgba(225,224,204,0.2)' }}>
                  {program.number}
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-medium" style={{ color: '#E1E0CC' }}>
                  {program.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 sm:gap-8">
                <span className="text-xs hidden sm:block" style={{ color: 'rgba(225,224,204,0.35)' }}>
                  {program.duration}
                </span>
                <span className="text-xs hidden md:block" style={{ color: 'rgba(225,224,204,0.35)' }}>
                  {program.type}
                </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowRight
                    size={15}
                    className="-rotate-45"
                    style={{ color: '#DEDBC8' }}
                  />
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <CreepyButton href="/programs" simple>
            View All Programs
          </CreepyButton>
        </motion.div>
      </div>
    </section>
  );
}
