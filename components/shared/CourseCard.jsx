'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Star, Users } from 'lucide-react';

export default function CourseCard({ course }) {
  const { id, title, category, image, students, rating, duration, level, description } = course;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="glass-card rounded-2xl overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/programs#course-${id}`} className="flex flex-col flex-1">
        <div
          className="aspect-video relative overflow-hidden flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{
              background: hovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              transition: 'all 0.35s ease',
              transform: hovered ? 'scale(1.1) rotate(6deg)' : 'scale(1) rotate(0deg)',
            }}
          >
            <span className="font-bold text-lg" style={{ color: '#DEDBC8' }}>{category[0]}</span>
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-[10px] px-2.5 py-1 rounded-full font-medium"
              style={{
                background: hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: hovered ? '#fff' : 'rgba(225,224,204,0.65)',
                transition: 'all 0.3s ease',
              }}
            >
              {category}
            </span>
            <span className="text-xs" style={{ color: 'rgba(225,224,204,0.3)' }}>{level}</span>
          </div>
          <h3
            className="text-base font-semibold line-clamp-1"
            style={{
              color: hovered ? '#fff' : '#E1E0CC',
              transition: 'color 0.3s ease',
            }}
          >
            {title}
          </h3>
          <p className="text-sm mt-1.5 line-clamp-2 leading-relaxed flex-1" style={{ color: 'rgba(225,224,204,0.5)' }}>
            {description}
          </p>
          <div
            className="flex items-center gap-4 mt-4 pt-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(225,224,204,0.4)' }}>
              <Clock size={12} />
              {duration}
            </div>
            <div className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(225,224,204,0.4)' }}>
              <Users size={12} />
              {students.toLocaleString()}
            </div>
            <div
              className="flex items-center gap-1.5 text-xs font-medium ml-auto"
              style={{ color: hovered ? '#DEDBC8' : 'rgba(225,224,204,0.5)' }}
            >
              <Star size={12} style={{ color: '#DEDBC8' }} />
              {rating}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
