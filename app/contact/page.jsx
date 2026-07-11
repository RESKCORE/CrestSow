'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, AtSign, Target, CheckCircle } from 'lucide-react';
import { companyProfile } from '@/lib/data/company';

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
    <div className="relative z-10 bg-[#FFFFFF]">
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        <div className="min-h-[45vh] flex items-center justify-center ambient-panel rounded-[32px] border border-[#E5E7EB] p-8">
          <div className="max-w-4xl mx-auto w-full text-center">
            <motion.p
              className="eyebrow mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Inquiries
            </motion.p>
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl text-[#0A0A0A] tracking-tight leading-none mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            Get in touch.
          </motion.h1>
          <motion.p
            className="text-lg text-[#6B7280] leading-relaxed max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
          >
            Have a question about our programs, partnerships, or anything else?
            We are here to help.
          </motion.p>
        </div>
        </div>
      </section>

      {/* ── Contact Info Grid ── */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            const Wrapper = info.href ? motion.a : motion.div;
            return (
              <Wrapper
                key={info.label}
                href={info.href}
                target={info.href?.startsWith('http') ? '_blank' : undefined}
                rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="block h-full"
              >
                <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 h-full flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F5F6F8]">
                    <Icon size={20} className="text-[#0A0A0A]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#6B7280]">
                      {info.label}
                    </p>
                    <p className="font-bold text-base text-[#0A0A0A] mt-1">
                      {info.value}
                    </p>
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </section>

      {/* ── Form + Trainings ── */}
      <section className="pb-28 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="bg-white border border-[#E5E7EB] rounded-3xl p-12 text-center shadow-sm">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#E6F7EF]">
                    <CheckCircle size={28} className="text-[#10B981]" />
                  </div>
                  <h3 className="font-bold text-2xl text-[#0A0A0A] mb-3">
                    Message Sent
                  </h3>
                  <p className="text-base text-[#6B7280] max-w-md mx-auto">
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-[#E5E7EB] rounded-3xl p-8 md:p-10 space-y-6 shadow-sm"
              >
                <p className="font-bold text-xl text-[#0A0A0A] mb-6 tracking-tight">Send us a message</p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { field: 'name', label: 'Full Name', type: 'text' },
                    { field: 'email', label: 'Email', type: 'email' },
                  ].map(({ field, label, type }) => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-[#4B5563] mb-2">{label}</label>
                      <input
                        type={type}
                        value={formData[field]}
                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white text-[#0A0A0A] outline-none focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A] transition-colors"
                      />
                      {errors[field] && (
                        <p className="text-xs mt-1.5 text-red-500">{errors[field]}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4B5563] mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white text-[#0A0A0A] outline-none focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A] transition-colors"
                  />
                  {errors.subject && (
                    <p className="text-xs mt-1.5 text-red-500">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4B5563] mb-2">Message</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#0A0A0A] outline-none focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A] transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs mt-1.5 text-red-500">{errors.message}</p>
                  )}
                </div>

                <button type="submit" className="btn-primary w-full justify-between">
                  <span>Send Message</span>
                  <ArrowRight size={16} />
                </button>
              </motion.form>
            )}
          </div>

          {/* Trainings */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="bg-[#F5F6F8] rounded-3xl p-8 md:p-10 flex flex-col gap-6 h-full border border-[#E5E7EB]">
                <p className="font-bold text-lg text-[#0A0A0A]">Company Trainings</p>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  We offer company-specific trainings and trending courses across a wide range of technical and career-skill tracks.
                </p>
                <div className="flex flex-wrap gap-2">
                  {companyProfile.trainings.map((item) => (
                    <span key={item} className="text-xs font-medium text-[#4B5563] bg-white border border-[#E5E7EB] px-3 py-1.5 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="pt-6 mt-2 border-t border-[#E5E7EB]">
                  <p className="font-bold text-lg text-[#0A0A0A] mb-4">Our Services</p>
                  <div className="flex flex-wrap gap-2">
                    {companyProfile.services.map((item) => (
                      <span key={item} className="text-xs font-medium text-[#4B5563] bg-white border border-[#E5E7EB] px-3 py-1.5 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
