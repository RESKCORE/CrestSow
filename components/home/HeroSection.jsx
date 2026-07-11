'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { companyProfile } from '@/lib/data/company';

const stats = [
  { value: '12,000+', label: 'Alumni' },
  { value: '96%', label: 'Placement' },
  { value: '150+', label: 'Partners' },
  { value: '14+', label: 'Tracks' },
];

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="w-full flex flex-col">
      {/* Top Hero Area with Gradient */}
      <div className="relative min-h-[90vh] pt-32 pb-16 px-4 md:px-8 flex flex-col items-center justify-center overflow-hidden rounded-b-[32px] border-b border-[#E5E7EB]/50">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-poster.jpg"
            preload="auto"
            className="w-full h-full object-cover opacity-90"
          >
            <source src="/hero-student.webm" type="video/webm" />
            <source src="/hero-student.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center mt-8 mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-serif tracking-tight leading-none mb-6"
          >
            Train <span className="italic text-[#4C7FFF]">faster.</span> Build better. Get placed.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#6B7280] max-w-[540px] mx-auto mb-10 leading-relaxed"
          >
            {companyProfile.name} provides comprehensive training, projects, internships, and placement guidance across trending tech skills to help you land your dream job.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => router.push('/programs')}
              className="btn-primary w-full sm:w-auto h-12 px-8"
            >
              Explore Programs
            </button>
            <button 
              onClick={() => router.push('/contact')}
              className="btn-secondary w-full sm:w-auto h-12 px-8"
            >
              Talk to Us
            </button>
          </motion.div>

        </div>
      </div>

      {/* Stats Banner (Outside gradient) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-5xl mx-auto pt-12 pb-16 px-4 md:px-8 bg-white"
      >
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <span className="block text-3xl md:text-4xl font-serif text-[#0A0A0A] mb-1">
                {stat.value}
              </span>
              <span className="block text-xs uppercase tracking-widest font-semibold text-[#6B7280]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
