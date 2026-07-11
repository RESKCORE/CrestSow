'use client';

import { motion } from 'framer-motion';
import PointerGlowCard from '@/components/ui/PointerGlowCard';

export default function FeatureCard({
  icon: Icon,
  badgeTint = 'bg-[#E8F0FE]', // Light blue default
  iconColor = 'text-[#4C7FFF]', // Blue default
  title,
  description,
  delay = 0,
}) {
  return (
    <PointerGlowCard
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${badgeTint}`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      
      <h3 className="text-lg md:text-xl font-bold text-[#0A0A0A] mb-3 leading-tight tracking-tight">
        {title}
      </h3>
      
      <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </PointerGlowCard>
  );
}
