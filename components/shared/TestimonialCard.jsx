'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial, variant = 'default' }) {
  const { name, role, rating, quote } = testimonial;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="glass-card rounded-2xl p-6 flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            style={{ color: i < rating ? '#DEDBC8' : 'rgba(255,255,255,0.15)' }}
          />
        ))}
      </div>
      <Quote size={18} style={{ color: 'rgba(222,219,200,0.2)' }} />
      <p
        className="text-sm leading-relaxed font-serif italic flex-1"
        style={{ color: hovered ? 'rgba(225,224,204,0.8)' : 'rgba(225,224,204,0.6)' }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#DEDBC8',
          }}
        >
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <p className="text-sm font-medium" style={{ color: '#E1E0CC' }}>{name}</p>
          <p className="text-xs" style={{ color: 'rgba(225,224,204,0.35)' }}>{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
