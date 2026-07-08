'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, AtSign, Target, CheckCircle } from 'lucide-react';
import FadingVideo from '@/components/shared/FadingVideo';
import { companyProfile } from '@/lib/data/company';
import { CreepyButton } from '@/components/ui/creepy-button';

const PAGE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4';

const contactInfo = [
  { icon: Mail, label: 'Email', value: companyProfile.contact.email, href: `mailto:${companyProfile.contact.email}` },
  { icon: Phone, label: 'Phone', value: companyProfile.contact.phone, href: `tel:${companyProfile.contact.phone}` },
  { icon: AtSign, label: 'Instagram', value: `@${companyProfile.contact.instagramHandle}`, href: companyProfile.contact.instagramUrl },
  { icon: Target, label: 'Focus', value: 'CRT, projects, internships, workshops, hackathons, and placement guidance' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = 'Invalid email format';
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  }

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FadingVideo src={PAGE_VIDEO} className="!fixed" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-[1]" />
      </div>

      <div className="relative z-10">
        {/* ── Hero ── */}
        <section className="relative min-h-[55vh] pt-36 pb-24 px-4 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.p
              className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-6"
              style={{ color: 'rgba(222,219,200,0.35)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Inquiries
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[0.9]"
              style={{ color: '#E1E0CC' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              Get in
              <br />
              <span className="font-serif italic" style={{ color: 'rgba(222,219,200,0.6)' }}>
                touch.
              </span>
            </motion.h1>
            <motion.p
              className="text-sm leading-relaxed max-w-lg mt-6"
              style={{ color: 'rgba(225,224,204,0.5)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2 }}
            >
              Have a question about our programs, partnerships, or anything else?
              We are here to help.
            </motion.p>
          </div>
        </section>

        {/* ── Contact Info Grid ── */}
        <section className="px-4 pb-16">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              const Wrapper = info.href ? motion.a : motion.div;
              return (
                <Wrapper
                  key={info.label}
                  href={info.href}
                  target={info.href?.startsWith('http') ? '_blank' : undefined}
                  rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-card rounded-2xl p-6 flex flex-col gap-3"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <Icon size={18} style={{ color: '#DEDBC8' }} />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest" style={{ color: 'rgba(222,219,200,0.3)' }}>
                    {info.label}
                  </p>
                  <p className="text-sm" style={{ color: '#E1E0CC' }}>
                    {info.value}
                  </p>
                </Wrapper>
              );
            })}
          </div>
        </section>

        {/* ── Form + Trainings ── */}
        <section className="pb-28 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
            {/* Form — takes 3 columns */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  className="glass-card rounded-2xl p-12 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <CheckCircle size={28} style={{ color: '#DEDBC8' }} />
                  </div>
                  <h3 className="text-2xl font-light mb-3" style={{ color: '#E1E0CC' }}>
                    Message Sent
                  </h3>
                  <p className="text-sm max-w-md mx-auto" style={{ color: 'rgba(225,224,204,0.5)' }}>
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="glass-card rounded-2xl p-8 md:p-10 space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-[10px] uppercase tracking-[0.25em] mb-1" style={{ color: 'rgba(222,219,200,0.35)' }}>
                    Send us a message
                  </p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { field: 'name', label: 'Full Name', type: 'text' },
                      { field: 'email', label: 'Email', type: 'email' },
                    ].map(({ field, label, type }) => (
                      <div key={field}>
                        <label className="block text-xs mb-2" style={{ color: 'rgba(225,224,204,0.45)' }}>
                          {label}
                        </label>
                        <input
                          type={type}
                          value={formData[field]}
                          onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                          className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all glass-input"
                        />
                        {errors[field] && (
                          <p className="text-xs mt-1.5" style={{ color: 'rgba(239,68,68,0.7)' }}>{errors[field]}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs mb-2" style={{ color: 'rgba(225,224,204,0.45)' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all glass-input"
                    />
                    {errors.subject && (
                      <p className="text-xs mt-1.5" style={{ color: 'rgba(239,68,68,0.7)' }}>{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs mb-2" style={{ color: 'rgba(225,224,204,0.45)' }}>
                      Message
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none transition-all glass-input"
                    />
                    {errors.message && (
                      <p className="text-xs mt-1.5" style={{ color: 'rgba(239,68,68,0.7)' }}>{errors.message}</p>
                    )}
                  </div>

                  <CreepyButton type="submit" className="w-full" simple>
                    <span>Send Message</span>
                    <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                      <ArrowRight size={14} />
                    </span>
                  </CreepyButton>
                </motion.form>
              )}
            </div>

            {/* Trainings — takes 2 columns */}
            <div className="lg:col-span-2">
              <motion.div
                className="glass-card rounded-2xl p-8 md:p-10 flex flex-col gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: 'rgba(222,219,200,0.35)' }}>
                  Company Trainings
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(225,224,204,0.55)' }}>
                  We offer company-specific trainings and trending courses across a wide range of technical and career-skill tracks.
                </p>
                <div className="flex flex-wrap gap-2">
                  {companyProfile.trainings.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] px-3 py-1.5 rounded-full"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'rgba(225,224,204,0.7)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="text-[10px] uppercase tracking-[0.25em] mb-3" style={{ color: 'rgba(222,219,200,0.35)' }}>
                    Our Services
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {companyProfile.services.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] px-3 py-1.5 rounded-full"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: 'rgba(225,224,204,0.7)',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
