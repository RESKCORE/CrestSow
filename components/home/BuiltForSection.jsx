'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const checklist = [
  "Comprehensive Curriculum designed by industry experts",
  "Hands-on Projects with real-world applications",
  "100% Placement Assistance with top tech companies",
  "1-on-1 Mentorship from experienced professionals"
];

export default function BuiltForSection() {
  return (
    <section className="py-24 px-4 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text & Checklist */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">Built for Success</p>
          <h2 className="text-4xl md:text-5xl tracking-tight mb-6 leading-tight">
            Built for modern <span className="font-serif italic text-[#4C7FFF]">ambition.</span>
          </h2>
          <p className="text-[#4B5563] text-base mb-8">
            Our pipeline is engineered to take you from foundational concepts to advanced, industry-ready skills, ensuring you stand out to top employers.
          </p>

          <ul className="space-y-4">
            {checklist.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4C7FFF] flex items-center justify-center mt-0.5">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-[#0A0A0A] font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Side: Student Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-[32px] bg-gradient-to-br from-[#EAF1FF] to-[#F5F6F8] border border-[#E5E7EB] p-8 md:p-12 min-h-[400px] flex items-center justify-center overflow-hidden"
        >
          {/* Blue glow accent */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#4C7FFF]/10 rounded-full blur-3xl" />

          <div className="relative z-10 w-full max-w-sm">
            {/* Dashboard Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden">
              {/* Card Header */}
              <div className="px-5 pt-5 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#4C7FFF] flex items-center justify-center">
                      <span className="text-white text-sm font-bold">AI</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0A0A0A]">AI & Machine Learning</p>
                      <p className="text-xs text-[#6B7280]">12 modules · 48 hours</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#E6F7EF] flex items-center justify-center">
                    <Check size={14} className="text-[#10B981]" />
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div className="h-full w-[72%] bg-[#4C7FFF] rounded-full" />
                </div>
                <p className="text-xs text-[#6B7280] mt-2">72% complete · 9 of 12 modules</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#E5E7EB]" />

              {/* Module List */}
              <div className="px-5 py-4 space-y-3">
                {[
                  { title: 'Neural Networks', done: true },
                  { title: 'Computer Vision', done: true },
                  { title: 'NLP Fundamentals', done: false },
                ].map((mod, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${mod.done ? 'bg-[#10B981]' : 'bg-[#E5E7EB]'}`}>
                      {mod.done && <Check size={10} className="text-white" />}
                    </div>
                    <span className={`text-sm ${mod.done ? 'text-[#6B7280] line-through' : 'text-[#0A0A0A] font-medium'}`}>{mod.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom stats row */}
            <div className="flex gap-3 mt-4">
              <div className="flex-1 bg-white rounded-xl border border-[#E5E7EB] px-4 py-3 text-center">
                <p className="text-lg font-bold text-[#0A0A0A]">4.8</p>
                <p className="text-xs text-[#6B7280]">Rating</p>
              </div>
              <div className="flex-1 bg-white rounded-xl border border-[#E5E7EB] px-4 py-3 text-center">
                <p className="text-lg font-bold text-[#0A0A0A]">1,240</p>
                <p className="text-xs text-[#6B7280]">Students</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
