'use client';

import { motion } from 'framer-motion';
import AnimatedCharText from '@/components/shared/AnimatedCharText';
import { WordsPullUpMultiStyle } from '@/components/shared/WordsPullUp';
import { companyProfile } from '@/lib/data/company';

const AMBIENT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';

export default function AboutSection() {
  return (
    <section className="video-section bg-black py-24 md:py-36 px-4" id="about">
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

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-14 lg:p-20 text-center">
          {/* Label */}
          <motion.p
            className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-10"
            style={{ color: 'rgba(222,219,200,0.35)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Mission
          </motion.p>

          {/* Multi-style pull-up heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9] mb-14">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: `We are ${companyProfile.name},`,
                  className: 'font-normal',
                },
                {
                  text: 'a platform led by directors and built for ambitious learners.',
                  className: 'font-serif italic opacity-75',
                },
              ]}
            />
          </h2>

          {/* Scroll-linked character reveal */}
          <AnimatedCharText
            text={`${companyProfile.name} is led by ${companyProfile.directors[0].name} and ${companyProfile.directors[1].name}. We deliver CRT, projects, internships, workshops, hackathons, placement guidance, resume building, and company-specific trainings across trending technical and career-skill tracks.`}
            className="text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto"
          />

          {/* Stats row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            {[
              { value: '12K+', label: 'Students Trained' },
              { value: '14+', label: 'Training Tracks' },
              { value: '100%', label: 'Placement Support' },
              { value: '1', label: 'Company Vision' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <p className="text-3xl md:text-4xl font-light mb-1" style={{ color: '#DEDBC8' }}>
                  {stat.value}
                </p>
                <p className="text-xs" style={{ color: 'rgba(222,219,200,0.4)' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
