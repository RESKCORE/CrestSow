'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { courses, categories } from '@/lib/data/courses';
import CourseCard from '@/components/shared/CourseCard';
import { CreepyButton } from '@/components/ui/creepy-button';

const AMBIENT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';

export default function FeaturedCourses() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <section className="video-section bg-black py-24 md:py-36 px-4">
      <video className="section-bg" src={AMBIENT_VIDEO} autoPlay loop muted playsInline />
      <div className="section-overlay" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.p
          className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-4"
          style={{ color: 'rgba(222,219,200,0.35)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Featured Courses
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-4xl font-light mb-10"
          style={{ color: '#E1E0CC' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Choose from industry-designed programs led by expert instructors.
        </motion.h2>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white/60 backdrop-blur-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
