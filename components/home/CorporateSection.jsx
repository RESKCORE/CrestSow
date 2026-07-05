'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { CreepyButton } from '@/components/ui/creepy-button';

const AMBIENT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';

const features = [
  'Company-specific trainings for teams and colleges',
  'CRT, workshops, and hackathons',
  'Placement guidance and resume building',
  'AIML, AI, embedded systems, IoT, Python, C, and Java',
  'Python full stack, Java full stack, and MERN stack',
  'Aptitude, reasoning, soft skills, and verbal',
];

export default function CorporateSection() {
  const leftRef = useRef(null);
  const isLeftInView = useInView(leftRef, { once: true, margin: '-100px' });

  return (
    <section className="video-section bg-black py-24 md:py-36 px-4" id="programs">
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div ref={leftRef}>
            <motion.p
              className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-5"
              style={{ color: 'rgba(222, 219, 200, 0.35)' }}
              initial={{ opacity: 0 }}
              animate={isLeftInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
            >
              Programs
            </motion.p>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.0] mb-6"
              style={{ color: '#E1E0CC' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isLeftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              Transform your
              <br />
                <span className="font-serif italic" style={{ color: 'rgba(222,219,200,0.7)' }}>
                entire learning cohort.
              </span>
            </motion.h2>

            <motion.p
              className="text-sm text-gray-500 leading-relaxed mb-10 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isLeftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              Customized training solutions for companies, colleges, and student cohorts.
              We design company-specific trainings, CRT programs, and job-ready skill tracks
              that align with your goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLeftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <CreepyButton href="/programs" simple>
                Explore Programs
              </CreepyButton>
            </motion.div>
          </div>

          {/* Right — glossy feature checklist card */}
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <ul className="divide-y" style={{ '--tw-divide-opacity': 1 }}>
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  className="flex items-start gap-3.5 py-4 first:pt-0 last:pb-0"
                  style={{ borderColor: 'rgba(255,255,255,0.07)' }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Check size={15} className="mt-0.5 shrink-0" style={{ color: '#DEDBC8' }} />
                  <span className="text-sm" style={{ color: 'rgba(225,224,204,0.65)' }}>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
