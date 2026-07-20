'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { companyProfile } from '@/lib/data/company';
import { values, team } from '@/lib/data/team';
import PointerGlowCard from '@/components/ui/PointerGlowCard';
import FlipCard from '@/components/ui/FlipCard';

const stats = [
  { value: '12,000+', label: 'Alumni' },
  { value: '96%', label: 'Placement' },
  { value: '150+', label: 'Partners' },
];

const milestones = [
  { year: '2019', event: 'CrestSow founded with a mission to democratize tech education.' },
  { year: '2020', event: 'Launched first 5 courses. 500 students enrolled in the first cohort.' },
  { year: '2021', event: 'Corporate training division launched. First 20 enterprise clients.' },
  { year: '2022', event: 'Internship program launched with 30 partner companies.' },
  { year: '2023', event: '5,000+ students trained. Expanded to 50+ countries.' },
  { year: '2024', event: '12,000+ alumni. 150+ corporate partners. 96% placement rate.' },
  { year: '2025', event: 'Launched AI & Emerging Tech tracks. Crossed 15,000+ students trained.' },
  { year: '2026', event: 'Expanding enterprise partnerships and launching advanced CRT programs.' },
];

const directorColors = ['#4C7FFF', '#10B981'];

const technologies = [
  { name: 'Python', imageSrc: '/Card Images/Python.png', tint: 'bg-[#EFF6FF]', desc: 'Versatile language for backend, AI, and data analysis.' },
  { name: null }, 
  { name: 'AI & ML', imageSrc: '/Card Images/AIML.png', tint: 'bg-[#ECFDF5]', desc: 'Deep learning and predictive modeling for the future.' },
  { name: 'React & Node', imageSrc: '/Card Images/React.png', tint: 'bg-[#F5F3FF]', desc: 'Modern full-stack web development frameworks.' },
  
  { name: null },
  { name: 'Docker', imageSrc: '/Card Images/Docker.png', tint: 'bg-[#F0F9FF]', desc: 'Containerization for consistent environments.' },
  { name: 'AWS & Cloud', imageSrc: '/Card Images/Cloud.png', tint: 'bg-[#FFFBEB]', desc: 'Scalable cloud infrastructure and deployment services.' },
  { name: null },

  { name: 'Embedded / IoT', imageSrc: '/Card Images/IOT.png', tint: 'bg-[#FEF2F2]', desc: 'Hardware programming and connected intelligent devices.' },
  { name: 'OpenAI Tooling', imageSrc: '/Card Images/OpenAI.png', tint: 'bg-[#F0FDFA]', desc: 'Integrating LLMs and generative AI into applications.' },
  { name: null },
  { name: 'Data Eng', imageSrc: '/Card Images/Data Engg.png', tint: 'bg-[#EEF2FF]', desc: 'Building robust data pipelines and modern data architectures.' },
];

export default function AboutPage() {
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setActiveCardIndex(-1);
      return;
    }

    const validIndices = technologies.map((t, i) => t.name ? i : -1).filter(i => i !== -1);
    let currentIndex = 0;
    
    setActiveCardIndex(validIndices[0]);

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % validIndices.length;
      setActiveCardIndex(validIndices[currentIndex]);
    }, 2500);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="relative z-10 bg-[#FFFFFF]">
      {/* Section A: Opening */}
      <section className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        <div className="ambient-panel rounded-[32px] border border-[#E5E7EB] p-10 md:p-16">
          <div className="max-w-4xl mx-auto">
            <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-serif text-[#0A0A0A] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            Directors / <span className="italic font-serif">CrestSow.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg text-[#6B7280] max-w-[65ch] leading-relaxed"
          >
            <p className="text-xl text-[#4B5563]">
              {companyProfile.name} is directed by {companyProfile.directors[0].name} and {companyProfile.directors[1].name}. We believe the best learning happens at the intersection of rigorous curriculum,{' '}
              <span className="font-serif italic text-[#4C7FFF]">
                expert mentorship,
              </span>{' '}
              and real-world application through CRT, projects, internships, workshops, hackathons, and placement support.
            </p>

            <blockquote className="my-20 text-center">
              <p className="font-serif italic text-3xl md:text-4xl text-[#0A0A0A] mb-6 leading-tight">
                Education is the most powerful weapon which you can use to change the world.
              </p>
              <footer className="text-xs text-[#9CA3AF] uppercase tracking-[0.2em] font-semibold">— CrestSow Philosophy</footer>
            </blockquote>

            <p className="text-lg">
              We offer company-specific trainings and trending courses across AIML, AI, embedded systems,
              IoT, Python, C, Java, DSA, full stack, aptitude, soft skills, and verbal.
            </p>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Section B: Values Bento */}
      <section className="py-24 px-4 bg-[#F5F6F8]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[#9CA3AF] mb-4">Core Values</p>
            <h2 className="text-4xl md:text-5xl text-[#0A0A0A] tracking-tight">What drives us forward</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <PointerGlowCard className="bg-white border border-[#E5E7EB] rounded-3xl p-8 h-full shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-serif text-2xl text-[#0A0A0A] mb-3">
                    {v.title}
                  </h3>
                  <p className="text-[#4B5563] leading-relaxed">{v.description}</p>
                </PointerGlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section B.5: Tech Stack Grid */}
      <section className="py-24 px-4 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#0A0A0A] tracking-tight mb-4">
              Built on the tools <span className="font-serif italic text-[#4C7FFF]">shaping</span> tech today.
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
              Our curriculum stays current with the technologies our students will actually use on the job. 
              We focus on practical mastery of modern frameworks and industry-standard tools.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {technologies.map((tech, i) => (
              tech.name ? (
                <FlipCard 
                  key={i} 
                  isFlipped={activeCardIndex === i}
                  frontContent={
                    <div className={`w-full h-full border border-[#E5E7EB] rounded-3xl p-2 md:p-3 flex items-center justify-center shadow-sm ${tech.tint}`}>
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]">
                        <Image src={tech.imageSrc} alt={tech.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                      </div>
                    </div>
                  }
                  backContent={
                    <div className="flex flex-col items-center justify-center h-full space-y-2">
                      <p className="font-serif font-bold text-lg text-[#0A0A0A]">{tech.name}</p>
                      <p className="text-sm text-[#6B7280]">{tech.desc}</p>
                    </div>
                  }
                />
              ) : (
                <div key={i} className="hidden md:block rounded-3xl bg-[#F5F6F8]/50 border border-[#E5E7EB]/50 aspect-square"></div>
              )
            ))}
          </div>

          <div className="mt-20 max-w-5xl mx-auto">
            <PointerGlowCard className="bg-[#F5F6F8] border border-[#E5E7EB] rounded-[32px] p-2 md:p-4 overflow-hidden shadow-sm">
              <Image src="/course content.png" alt="Course Curriculum Structure" width={1200} height={675} loading="lazy" className="w-full h-auto rounded-[24px]" />
            </PointerGlowCard>
          </div>
        </div>
      </section>

      {/* Section C: Journey (Stats + Timeline) */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[#9CA3AF] mb-4">Our Journey</p>
            <div className="grid grid-cols-3 gap-8 items-center justify-center pt-8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-serif text-[#0A0A0A] mb-2">{s.value}</p>
                  <p className="text-[10px] sm:text-xs text-[#6B7280] uppercase tracking-widest font-semibold">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative border-l-2 border-[#E5E7EB] pl-8 py-4 ml-4 md:ml-8 space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                {/* Node Marker */}
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-white border-[3px] border-[#4C7FFF] group-hover:scale-125 transition-transform" />
                <p className="font-serif text-2xl text-[#0A0A0A] mb-2">{m.year}</p>
                <p className="text-[#6B7280] text-lg leading-relaxed">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section D: Directors */}
      <section className="py-24 px-4 bg-[#F5F6F8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[#9CA3AF] mb-4">Leadership</p>
            <h2 className="text-4xl md:text-5xl text-[#0A0A0A] tracking-tight">Meet the Directors</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <PointerGlowCard className="bg-white border border-[#E5E7EB] rounded-3xl p-8 flex flex-col gap-6 h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center font-serif font-bold text-2xl shrink-0"
                      style={{
                        background: `${directorColors[i]}15`,
                        color: directorColors[i],
                      }}
                    >
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-[#0A0A0A]">
                        {member.name}
                      </h3>
                      <p className="text-xs uppercase tracking-widest font-semibold text-[#6B7280] mt-1">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#6B7280] leading-relaxed flex-1">{member.bio}</p>
                </PointerGlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section E: CTA */}
      <section className="py-32 px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl rounded-3xl bg-gradient-to-br from-[#F5F6F8] to-[#EAF1FF] border border-[#E5E7EB] p-16 flex flex-col items-center justify-center"
        >
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0A0A0A] mb-8">
            Ready to start your journey?
          </h2>
          <a href="/programs" className="btn-primary">
            Explore Programs
          </a>
        </motion.div>
      </section>
    </div>
  );
}
