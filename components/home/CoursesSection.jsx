'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Cpu, Code, Microchip, Briefcase, Users } from 'lucide-react';
import FeatureCard from '@/components/shared/FeatureCard';
import { useRouter } from 'next/navigation';

const categories = [
  {
    title: 'Career Ready Training',
    description: 'Industry-oriented CRT programs designed to make students placement-ready with mock assessments.',
    icon: GraduationCap,
    badgeTint: 'bg-[#E8F0FE]', // Light blue
    iconColor: 'text-[#4C7FFF]',
  },
  {
    title: 'AI & Emerging Tech',
    description: 'Master the future of tech with hands-on AI model development and deployment.',
    icon: Cpu,
    badgeTint: 'bg-[#E6F7EF]', // Light green
    iconColor: 'text-[#10B981]',
  },
  {
    title: 'Full Stack Development',
    description: 'Build scalable web applications from frontend interfaces to backend databases.',
    icon: Code,
    badgeTint: 'bg-[#F1EAFE]', // Light purple
    iconColor: 'text-[#8B5CF6]',
  },
  {
    title: 'Embedded & IoT',
    description: 'Bridge the physical and digital worlds with hardware programming and sensors.',
    icon: Microchip,
    badgeTint: 'bg-[#FDEEE3]', // Light orange
    iconColor: 'text-[#F97316]',
  },
  {
    title: 'Placement Support',
    description: 'End-to-end guidance to land your dream role in top tech companies.',
    icon: Briefcase,
    badgeTint: 'bg-[#E8F0FE]', // Light blue
    iconColor: 'text-[#4C7FFF]',
  },
  {
    title: 'Internships & Live Projects',
    description: 'Gain real-world experience building products that solve actual problems.',
    icon: Users,
    badgeTint: 'bg-[#E6F7EF]', // Light green
    iconColor: 'text-[#10B981]',
  },
];

export default function CoursesSection() {
  const router = useRouter();

  return (
    <section className="py-24 md:py-32 px-4 bg-[#FFFFFF]" id="courses">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
            Curriculum that <span className="font-serif italic text-[#4C7FFF]">works.</span>
          </h2>
          <p className="text-[#6B7280] text-base md:text-lg">
            From industry-focused CRT programs to AI, full-stack development, and career mentoring—CrestSow brings every learning experience into one structured ecosystem.
          </p>
        </div>

        {/* 3-column, 2-row grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((card, i) => (
            <FeatureCard 
              key={card.title} 
              icon={card.icon}
              title={card.title}
              description={card.description}
              badgeTint={card.badgeTint}
              iconColor={card.iconColor}
              delay={i * 0.1}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => router.push('/programs')}
            className="btn-primary"
          >
            Explore Programs
          </button>
        </div>
      </div>
    </section>
  );
}
