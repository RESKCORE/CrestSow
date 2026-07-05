'use client';

import { motion } from 'framer-motion';
import { Check, Quote, ArrowRight } from 'lucide-react';
import FadingVideo from '@/components/shared/FadingVideo';
import { companyProfile } from '@/lib/data/company';
import { values, team } from '@/lib/data/team';
import { CreepyButton } from '@/components/ui/creepy-button';

const PAGE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260611_183632_c311af08-e4b7-458f-81e7-79847a49b3d3.mp4';

const milestones = [
  { year: '2019', event: 'CrestSow founded with a mission to democratize tech education.' },
  { year: '2020', event: 'Launched first 5 courses. 500 students enrolled in the first cohort.' },
  { year: '2021', event: 'Corporate training division launched. First 20 enterprise clients.' },
  { year: '2022', event: 'Internship program launched with 30 partner companies.' },
  { year: '2023', event: '5,000+ students trained. Expanded to 50+ countries.' },
  { year: '2024', event: '12,000+ alumni. 150+ corporate partners. 96% placement rate.' },
];

export default function AboutPage() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FadingVideo src={PAGE_VIDEO} className="!fixed" />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-[1]" />
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="relative min-h-[55vh] pt-32 pb-24 px-4 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.p
            className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-5"
            style={{ color: 'rgba(222,219,200,0.35)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Our Story
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[0.9]"
            style={{ color: '#E1E0CC' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            Directors
            <br />
            <span className="font-serif italic" style={{ color: 'rgba(222,219,200,0.6)' }}>
              CrestSow.
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed" style={{ color: '#E1E0CC' }}>
              {companyProfile.name} is directed by {companyProfile.directors[0].name} and {companyProfile.directors[1].name}. We believe the best learning happens at the intersection of rigorous curriculum,{' '}
              <span className="font-serif italic" style={{ color: 'rgba(222,219,200,0.65)' }}>
                expert mentorship,
              </span>{' '}
              and real-world application through CRT, projects, internships, workshops, hackathons, and placement support.
            </p>
            <p className="text-sm text-gray-500 mt-6 leading-relaxed max-w-lg">
              We offer company-specific trainings and trending courses across AIML, AI, embedded systems,
              IoT, Python, C, Java, DSA, full stack, aptitude, soft skills, and verbal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="glass-card p-5 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <h3 className="font-semibold text-sm mb-1.5" style={{ color: '#E1E0CC' }}>
                  {v.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl font-light mb-14"
            style={{ color: '#E1E0CC' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Our Journey
          </motion.h2>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.08)' }} className="pl-8 space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative"
              >
                <div
                  className="absolute -left-[2.125rem] top-1.5 w-2 h-2 rounded-full"
                  style={{ background: '#DEDBC8' }}
                />
                <p className="text-sm font-bold mb-1" style={{ color: '#DEDBC8' }}>{m.year}</p>
                <p className="text-sm text-gray-500">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl font-light mb-12"
            style={{ color: '#E1E0CC' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Directors
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                className="glass-card rounded-2xl p-6 flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-base font-bold"
                  style={{ background: '#101010', color: '#DEDBC8' }}
                >
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-semibold text-sm" style={{ color: '#E1E0CC' }}>
                    {member.name}
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(222,219,200,0.4)' }}>
                    {member.role}
                  </p>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-light mb-6"
          style={{ color: '#E1E0CC' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to start your journey?
        </motion.h2>
        <CreepyButton href="/programs" simple>
          Explore Programs
        </CreepyButton>
      </section>
      </div>
    </>
  );
}
