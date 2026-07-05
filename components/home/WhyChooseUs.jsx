'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Users, Briefcase, Clock, Globe, BadgeCheck } from 'lucide-react';

const AMBIENT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';

const features = [
  {
    icon: GraduationCap,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of real-world experience at top tech companies.',
  },
  {
    icon: Users,
    title: 'Mentorship Program',
    description: 'Get one-on-one guidance from mentors who are invested in your growth and career success.',
  },
  {
    icon: Briefcase,
    title: 'Career Support',
    description: 'Resume reviews, mock interviews, and job placement assistance to help you land your dream role.',
  },
  {
    icon: Clock,
    title: 'Flexible Learning',
    description: 'Self-paced or instructor-led options designed to fit around your schedule and learning style.',
  },
  {
    icon: Globe,
    title: 'Global Community',
    description: 'Join a network of 12,000+ learners and alumni across 50+ countries worldwide.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified Curriculum',
    description: 'Industry-recognized certificates and exam prep for AWS, Google, CompTIA, and more.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="video-section bg-[#101010] py-24 lg:py-32 px-4" id="why-us">
      {/* Ambient video */}
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
        <div className="mb-14 text-center">
          <motion.p
            className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-4"
            style={{ color: 'rgba(222, 219, 200, 0.35)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Why CrestSow
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight"
            style={{ color: '#E1E0CC' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Built differently.{' '}
            <span className="font-serif italic" style={{ color: 'rgba(222,219,200,0.65)' }}>
              For you.
            </span>
          </motion.h2>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="glass-card rounded-2xl p-7 flex flex-col gap-4"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Icon badge */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04))',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <Icon size={20} style={{ color: '#DEDBC8' }} />
                </div>
                <h3 className="text-base font-semibold" style={{ color: '#E1E0CC' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(225,224,204,0.5)' }}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
