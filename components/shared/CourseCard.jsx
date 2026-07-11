'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Star, Users } from 'lucide-react';
import { LiquidGlassCard } from '@/components/ui/LiquidGlassCard';

export default function CourseCard({ course }) {
  const { id, title, category, image, students, rating, duration, level, description } = course;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <LiquidGlassCard className="flex flex-col h-full overflow-hidden p-0">
        <Link href={`/programs#course-${id}`} className="flex flex-col flex-1">
          <div
            className="aspect-video relative overflow-hidden flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="liquid-glass-icon-capsule">
              <span className="font-bold text-lg" style={{ color: 'var(--foreground)' }}>{category[0]}</span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1 gap-3">
            <div className="flex items-center gap-2">
              <span className="liquid-glass-tag">
                {category}
              </span>
              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted-foreground)' }}>{level}</span>
            </div>
            
            <h3 className="liquid-glass-heading text-lg line-clamp-1 mt-1">
              {title}
            </h3>
            
            <p className="liquid-glass-description text-sm mt-1 line-clamp-2 flex-1">
              {description}
            </p>
            
            <div
              className="flex items-center gap-4 mt-4 pt-4 text-xs font-medium"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'var(--muted-foreground)' }}
            >
              <div className="flex items-center gap-1.5">
                <Clock size={12} />
                {duration}
              </div>
              <div className="flex items-center gap-1.5">
                <Users size={12} />
                {students.toLocaleString()}
              </div>
              <div className="flex items-center gap-1.5 ml-auto" style={{ color: 'var(--secondary)' }}>
                <Star size={12} style={{ color: 'var(--secondary)' }} />
                {rating}
              </div>
            </div>
          </div>
        </Link>
      </LiquidGlassCard>
    </motion.div>
  );
}
