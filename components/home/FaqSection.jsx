'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const AMBIENT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';

const faqs = [
  {
    q: 'Who are the programs designed for?',
    a: 'Our programs are designed for working professionals and recent graduates looking to break into tech or accelerate their existing skills. Most tracks have beginner-friendly entry points.',
  },
  {
    q: 'Do I need prior experience to enroll?',
    a: 'Most programs include beginner-friendly modules. Advanced specializations clearly indicate prerequisite knowledge. If in doubt, reach out — we will recommend the right track.',
  },
  {
    q: 'Are the internships paid?',
    a: 'Internship stipends vary by program and partner company. All compensation details are disclosed before you accept an offer — no surprises.',
  },
  {
    q: 'Can my company sponsor my enrollment?',
    a: 'Yes. We work with employers on corporate-sponsored enrollments and offer invoicing for company accounts. Contact us for B2B enrollment options.',
  },
  {
    q: 'What is the typical time commitment?',
    a: 'Program tracks require 8–20 hours per week depending on intensity level. Internships are structured as either part-time (20 hrs/week) or full-time cohorts.',
  },
  {
    q: 'Is there a refund policy?',
    a: 'We offer a 7-day money-back guarantee on all programs. Internship program fees are non-refundable after placement confirmation has been issued.',
  },
];

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-6 group"
      >
        <span
          className="text-sm sm:text-base font-medium transition-opacity group-hover:opacity-70"
          style={{ color: '#E1E0CC' }}
        >
          {faq.q}
        </span>
        <span className="shrink-0 transition-transform" style={{ color: 'rgba(222,219,200,0.4)' }}>
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p
              className="text-sm leading-relaxed pb-5 max-w-xl"
              style={{ color: 'rgba(225,224,204,0.5)' }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  return (
    <section className="video-section bg-[#101010] py-24 md:py-36 px-4" id="faq">
      {/* Ambient video background */}
      <video
        className="section-bg"
        src={AMBIENT_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="section-overlay" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.p
          className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-4"
          style={{ color: 'rgba(222, 219, 200, 0.35)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          FAQ
        </motion.p>

        <motion.h2
          className="text-3xl sm:text-4xl font-light mb-14"
          style={{ color: '#E1E0CC' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Questions answered.
        </motion.h2>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          {faqs.map((faq, i) => (
            <FaqItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
