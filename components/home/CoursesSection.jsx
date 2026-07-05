'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FeatCard } from '@/components/ui/agent-bento-grid';
import { companyProfile } from '@/lib/data/company';

const FEATURE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';

const cardData = [
  {
    title: 'Programs For Everyone',
    description: 'A single place for trainings, courses, internships, and career-building events.',
    className: 'md:col-span-2 lg:col-span-2',
    items: ['CRT', 'Projects', 'Internships', 'Workshops', 'Hackathons', 'Placement guidance', 'Resume building'],
  },
  {
    title: 'Training Tracks',
    description: 'Technical and job-ready tracks built for practical skill growth.',
    items: ['AIML', 'AI', 'Embedded systems', 'IoT', 'Python', 'C', 'Java', 'DSA with Python/C/Java'],
  },
  {
    title: 'Course Paths',
    description: 'Build production-grade apps across the most in-demand stacks.',
    items: ['Python full stack', 'Java full stack', 'MERN stack'],
  },
  {
    title: 'Career Skills',
    description: 'Practice the hiring skills that turn training into offers.',
    items: ['Aptitude and reasoning', 'Soft skills', 'Verbal'],
  },
];

export default function CoursesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-50px' });

  return (
    <section className="video-section min-h-screen bg-black py-24 md:py-32 px-4" id="courses">
      <video className="section-bg" src={FEATURE_VIDEO} autoPlay loop muted playsInline />
      <div className="section-overlay" />
      <div className="bg-noise absolute inset-0 opacity-[0.08] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-12 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-2"
            style={{ color: '#E1E0CC' }}
          >
            All programs in a bento grid.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light"
            style={{ color: 'rgba(225,224,204,0.58)' }}
          >
            {companyProfile.name} provides CRT, projects, internships, workshops, hackathons, placement guidance, resume building, and all of the courses and trainings that sit inside the programs ecosystem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[minmax(180px,auto)]">
          <motion.div
            className="glass-card rounded-2xl overflow-hidden min-h-[220px] lg:row-span-2"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <video
              src={FEATURE_VIDEO}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 0 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" style={{ zIndex: 1 }} />
            <div className="absolute bottom-4 left-4" style={{ zIndex: 4 }}>
              <p className="font-medium text-sm" style={{ color: '#E1E0CC' }}>
                Your learning canvas.
              </p>
            </div>
          </motion.div>

          {cardData.map((card) => (
            <FeatCard
              key={card.title}
              title={card.title}
              description={card.description}
              className={card.className}
            >
              <ul className="flex h-full flex-wrap gap-2 p-4 content-start">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] tracking-wide"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </FeatCard>
          ))}
        </div>
      </div>
    </section>
  );
}
