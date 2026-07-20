'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, AtSign, Target, CheckCircle, User } from 'lucide-react';
import { companyProfile } from '@/lib/data/company';
import { sendContactEmail } from '../actions/contact';

const Linkedin = ({ size = 24, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 24, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const contactInfo = [
  { icon: Mail, label: 'Email', value: companyProfile.contact.email, href: `mailto:${companyProfile.contact.email}` },
  { icon: Phone, label: 'Phone', value: companyProfile.contact.phone, href: `tel:${companyProfile.contact.phone}` },
  { icon: AtSign, label: 'Instagram', value: `@${companyProfile.contact.instagramHandle}`, href: companyProfile.contact.instagramUrl },
  { icon: Target, label: 'Focus', value: 'CRT, projects, internships, workshops, hackathons, and placement guidance' },
];

const teamMembers = [
  {
    name: 'Vanapalli Chandra Vamsi',
    role: 'Director',
    email: 'crestsow@gmail.com',
    linkedin: null,
    twitter: null,
  },
  {
    name: 'Balusu Sai Swapna',
    role: 'Director',
    email: 'crestsow@gmail.com',
    linkedin: null,
    twitter: null,
  },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [honeypot, setHoneypot] = useState('');

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

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setSubmitError('');

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      try {
        const result = await sendContactEmail(formData, honeypot);
        if (result.success) {
          setSubmitted(true);
        } else {
          setSubmitError(result.message || 'Failed to send message.');
        }
      } catch (error) {
        setSubmitError('An unexpected error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
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
            className="text-4xl sm:text-5xl md:text-7xl text-[#0A0A0A] tracking-tight leading-none mb-6"
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
            Companies, students, and faculties — reach out to us directly for programs, partnerships, internships, or any inquiries. We're here to help.
          </motion.p>
        </div>
        </div>
      </section>

      {/* ── Contact Info Grid ── */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* ── Team Contact Cards ── */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl font-bold text-[#0A0A0A] mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contact Our Team Directly
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F5F6F8]">
                    <User size={20} className="text-[#0A0A0A]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0A0A0A]">{member.name}</p>
                    <p className="text-sm text-[#6B7280]">{member.role}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4B5563] bg-[#F5F6F8] border border-[#E5E7EB] px-3 py-1.5 rounded-full hover:bg-[#EAF1FF] transition-colors"
                  >
                    <Mail size={12} /> Email
                  </a>
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4B5563] bg-[#F5F6F8] border border-[#E5E7EB] px-3 py-1.5 rounded-full hover:bg-[#EAF1FF] transition-colors"
                    >
                      <Linkedin size={12} /> LinkedIn
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9CA3AF] bg-[#F5F6F8] border border-[#E5E7EB] px-3 py-1.5 rounded-full opacity-50 cursor-not-allowed"
                    >
                      <Linkedin size={12} /> LinkedIn
                    </span>
                  )}
                  {member.twitter ? (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4B5563] bg-[#F5F6F8] border border-[#E5E7EB] px-3 py-1.5 rounded-full hover:bg-[#EAF1FF] transition-colors"
                    >
                      <Twitter size={12} /> Twitter
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9CA3AF] bg-[#F5F6F8] border border-[#E5E7EB] px-3 py-1.5 rounded-full opacity-50 cursor-not-allowed"
                    >
                      <Twitter size={12} /> Twitter
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
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

                {/* Honeypot — hidden from humans, visible to bots */}
                <div aria-hidden="true" className="sr-only" tabIndex={-1}>
                  <label htmlFor="website">Leave this blank</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { field: 'name', label: 'Full Name', type: 'text' },
                    { field: 'email', label: 'Email', type: 'email' },
                  ].map(({ field, label, type }) => (
                    <div key={field}>
                      <label htmlFor={field} className="block text-sm font-medium text-[#4B5563] mb-2">{label}</label>
                      <input
                        id={field}
                        type={type}
                        value={formData[field]}
                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                        autoComplete={field === 'email' ? 'email' : 'name'}
                        maxLength={field === 'name' ? 100 : undefined}
                        aria-describedby={errors[field] ? `${field}-error` : undefined}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white text-[#0A0A0A] outline-none focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A] transition-colors"
                      />
                      {errors[field] && (
                        <p id={`${field}-error`} className="text-xs mt-1.5 text-red-500">{errors[field]}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#4B5563] mb-2">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    maxLength={200}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] bg-white text-[#0A0A0A] outline-none focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A] transition-colors"
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-xs mt-1.5 text-red-500">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#4B5563] mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    maxLength={2000}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#0A0A0A] outline-none focus:border-[#0A0A0A] focus:ring-1 focus:ring-[#0A0A0A] transition-colors resize-none"
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs mt-1.5 text-red-500">{errors.message}</p>
                  )}
                </div>

                {submitError && (
                  <p role="alert" aria-live="polite" className="text-sm text-red-500 text-center font-medium bg-red-50 p-3 rounded-xl border border-red-100">{submitError}</p>
                )}

                <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-between disabled:opacity-70 disabled:cursor-not-allowed">
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <ArrowRight size={16} />}
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
