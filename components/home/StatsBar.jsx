'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Building, Award } from 'lucide-react';

const stats = [
  { icon: Users, value: 12000, suffix: '+', label: 'Students Trained' },
  { icon: BookOpen, value: 42, suffix: '+', label: 'Courses Available' },
  { icon: Building, value: 150, suffix: '+', label: 'Corporate Partners' },
  { icon: Award, value: 96, suffix: '%', label: 'Placement Rate' },
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="relative -mt-16 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-card rounded-2xl grid sm:grid-cols-2 lg:grid-cols-4 overflow-hidden" style={{ borderRadius: '24px' }}>
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className="p-6 lg:p-8 text-center lg:border-r border-white/5 last:lg:border-r-0"
              style={{
                borderBottom: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Icon size={20} style={{ color: '#DEDBC8' }} />
              </div>
              <div className="text-3xl font-light" style={{ color: '#E1E0CC' }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs mt-1" style={{ color: 'rgba(225,224,204,0.4)' }}>{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
