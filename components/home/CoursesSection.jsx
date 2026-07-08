'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Cpu, Code, Microchip, Briefcase, Users, Lightbulb, Compass } from 'lucide-react';

const cardData = [
  {
    title: 'Career Ready Training',
    description: 'Industry-oriented CRT programs designed to make students placement-ready.',
    className: 'md:col-span-2',
    icon: GraduationCap,
    glowColor: 'rgba(249, 115, 22, 0.15)', // orange
    items: ['Aptitude', 'Verbal', 'Coding', 'Mock Assessments'],
  },
  {
    title: 'AI & Emerging Technologies',
    description: 'Master the future of tech with hands-on AI model development and deployment.',
    className: 'md:col-span-1',
    icon: Cpu,
    glowColor: 'rgba(168, 85, 247, 0.15)', // purple
    items: ['Artificial Intelligence', 'Machine Learning', 'Generative AI', 'Prompt Engineering', 'Deep Learning'],
  },
  {
    title: 'Full Stack Development',
    description: 'Build scalable web applications from frontend interfaces to backend databases.',
    className: 'md:col-span-1',
    icon: Code,
    glowColor: 'rgba(59, 130, 246, 0.15)', // blue
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'APIs', 'Databases'],
  },
  {
    title: 'Embedded & IoT',
    description: 'Bridge the physical and digital worlds with hardware programming.',
    className: 'md:col-span-1',
    icon: Microchip,
    glowColor: 'rgba(34, 197, 94, 0.15)', // green
    items: ['Embedded C', 'Microcontrollers', 'IoT', 'Sensors', 'Hardware Projects'],
  },
  {
    title: 'Placement Support',
    description: 'End-to-end guidance to land your dream role in top tech companies.',
    className: 'md:col-span-1',
    icon: Briefcase,
    glowColor: 'rgba(249, 115, 22, 0.15)', // orange
    items: ['Resume Building', 'Mock Interviews', 'Company-specific Training', 'HR Preparation', 'Soft Skills'],
  },
  {
    title: 'Internships & Live Projects',
    description: 'Gain real-world experience building products that solve actual problems.',
    className: 'md:col-span-2',
    icon: Users,
    glowColor: 'rgba(59, 130, 246, 0.15)', // blue
    items: ['Industry Projects', 'Team Collaboration', 'Portfolio Building', 'Client Experience'],
  },
  {
    title: 'Workshops & Hackathons',
    description: 'Compete, learn, and build rapidly in intensive technical events.',
    className: 'md:col-span-1',
    icon: Lightbulb,
    glowColor: 'rgba(239, 68, 68, 0.15)', // red
    items: ['Technical Workshops', 'Coding Challenges', 'AI Events', 'Innovation Programs'],
  },
  {
    title: 'Career Mentorship',
    description: 'Navigate your career path with guidance from industry veterans.',
    className: 'md:col-span-1',
    icon: Compass,
    glowColor: 'rgba(168, 85, 247, 0.15)', // purple
    items: ['One-on-One Guidance', 'Career Planning', 'Roadmaps', 'Progress Tracking'],
  },
];

export default function CoursesSection() {
  return (
    <div className="py-24 md:py-32 px-4" id="courses">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4"
            style={{ color: 'rgba(222,219,200,0.4)' }}
          >
            PROGRAMS &amp; LEARNING PATHS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light mb-6"
            style={{ color: '#E1E0CC' }}
          >
            Everything you need to launch your tech career.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'rgba(225,224,204,0.55)' }}
          >
            From industry-focused CRT programs to AI, full-stack development, embedded systems, internships, hackathons, placement preparation, and career mentoring—CrestSow brings every learning experience into one structured ecosystem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {cardData.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className={`group relative overflow-hidden rounded-[24px] p-6 sm:p-8 ${card.className}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: 'rgba(18,18,18,0.18)',
                  backdropFilter: 'blur(28px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
                }}
                whileHover={{ scale: 1.015, y: -6 }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.35] z-0"
                  style={{
                    background: `radial-gradient(120% 120% at 50% 0%, ${card.glowColor}, transparent 70%)`,
                  }}
                />
                <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <Icon size={22} style={{ color: '#DEDBC8' }} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold" style={{ color: 'rgba(255,255,255,0.98)' }}>
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed mb-6 flex-1" style={{ color: 'rgba(255,255,255,0.78)' }}>
                  {card.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {card.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-medium tracking-wide transition-colors group-hover:bg-white/5"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.90)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
