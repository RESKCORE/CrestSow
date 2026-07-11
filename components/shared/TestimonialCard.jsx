'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { LiquidGlassCard } from '@/components/ui/LiquidGlassCard';
export default function TestimonialCard({ testimonial, variant = 'default' }) {
  const { name, role, rating, quote } = testimonial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <LiquidGlassCard className="p-8 flex flex-col gap-6">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              style={{ color: i < rating ? 'var(--primary)' : 'var(--muted-foreground)' }}
            />
          ))}
        </div>
        <Quote size={18} style={{ color: 'var(--muted-foreground)' }} />
        <p
          className="text-sm leading-relaxed font-serif italic flex-1"
          style={{ color: 'var(--muted-foreground)' }}
        >
          &ldquo;{quote}&rdquo;
        </p>
        <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="liquid-glass-icon-capsule w-10 h-10 text-xs font-bold shrink-0">
            <span style={{ color: 'var(--foreground)' }}>{name.split(' ').map(n => n[0]).join('')}</span>
          </div>
          <div>
            <p className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>{name}</p>
            <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{role}</p>
          </div>
        </div>
      </LiquidGlassCard>
    </motion.div>
  );
}
