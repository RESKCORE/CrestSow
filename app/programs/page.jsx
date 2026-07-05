'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CreepyButton } from '@/components/ui/creepy-button';
import {
  ArrowRight,
  GraduationCap,
  Rocket,
  Trophy,
  Clock,
  MapPin,
  IndianRupee,
  Briefcase,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import FadingVideo from '@/components/shared/FadingVideo';
import { companyProfile } from '@/lib/data/company';
import { internships } from '@/lib/data/internships';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const PAGE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';

const featureCards = [
  {
    icon: Briefcase,
    title: 'Resume Building',
    description: 'Create recruiter-friendly resumes that highlight projects, skills, and internship experience.',
  },
  {
    icon: Rocket,
    title: 'Projects',
    description: 'Work on hands-on projects that prove practical skills and strengthen your portfolio.',
  },
  {
    icon: GraduationCap,
    title: 'Placement Guidance',
    description: 'Build a clear path from training to interviews, hiring events, and offers.',
  },
  {
    icon: Trophy,
    title: 'Hackathons & Workshops',
    description: 'Join intensive events that sharpen collaboration, coding speed, and problem solving.',
  },
];

function EmblaCarousel({ items }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplayPlugin = useMemo(
    () => Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      containScroll: 'keepSnaps',
      dragFree: false,
    },
    [autoplayPlugin]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const container = emblaApi.containerNode();
    if (!container) return;
    const onWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY + e.deltaX;
      if (delta > 0) emblaApi.scrollNext();
      else emblaApi.scrollPrev();
    };
    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, i) => {
            const isActive = i === selectedIndex;
            return (
              <div
                key={item.id}
                className="relative shrink-0 grow-0 min-w-0 px-3"
                style={{ flex: '0 0 40%' }}
              >
                <motion.div
                  className="glass-card rounded-2xl p-6 flex flex-col gap-3 cursor-pointer select-none"
                  animate={{
                    scale: isActive ? 1 : 0.92,
                    opacity: isActive ? 1 : 0.5,
                    rotateY: isActive ? 0 : i < selectedIndex ? -3 : 3,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  style={{ perspective: 1200 }}
                >
                  <div
                    className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full w-fit font-medium"
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(225,224,204,0.6)',
                    }}
                  >
                    {item.domain}
                  </div>

                  <p className="text-[11px] font-medium" style={{ color: 'rgba(225,224,204,0.4)' }}>
                    {item.company}
                  </p>

                  <h3 className="text-base font-semibold" style={{ color: '#E1E0CC' }}>
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed flex-1" style={{ color: 'rgba(225,224,204,0.5)' }}>
                    {item.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs" style={{ color: 'rgba(225,224,204,0.35)' }}>
                    <span className="flex items-center gap-1">
                      <Clock size={10} /> {item.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={10} /> {item.type}
                    </span>
                    <span className="flex items-center gap-1 ml-auto" style={{ color: 'rgba(225,224,204,0.5)' }}>
                      <IndianRupee size={10} /> {item.stipend}
                    </span>
                  </div>

                  <CreepyButton
                    href="/login"
                    size="sm"
                    className="w-full mt-1"
                    simple
                  >
                    Apply now
                    <ArrowRight size={12} />
                  </CreepyButton>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full flex items-center justify-center z-10"
        style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <ChevronLeft size={16} style={{ color: '#E1E0CC' }} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full flex items-center justify-center z-10"
        style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <ChevronRight size={16} style={{ color: '#E1E0CC' }} />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === selectedIndex ? 24 : 6,
              height: 6,
              background: i === selectedIndex ? '#DEDBC8' : 'rgba(255,255,255,0.15)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FadingVideo src={PAGE_VIDEO} className="!fixed" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-[1]" />
      </div>

      <div className="relative z-10">
        {/* ── Hero ── */}
        <section className="relative min-h-[60vh] pt-36 pb-28 px-4 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto">
            <motion.p
              className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-6"
              style={{ color: 'rgba(222,219,200,0.35)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Programs
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[0.9]"
              style={{ color: '#E1E0CC' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              All learning
              <br />
              <span className="font-serif italic" style={{ color: 'rgba(222,219,200,0.6)' }}>
                in one place.
              </span>
            </motion.h1>
            <motion.p
              className="text-sm leading-relaxed max-w-2xl mt-8"
              style={{ color: 'rgba(225,224,204,0.55)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2 }}
            >
              {companyProfile.name} brings trainings, courses, hackathons, CRT, internships, workshops,
              placement guidance, resume building, and project work together in a single programs hub.
            </motion.p>
          </div>
        </section>

        {/* ── Feature Cards ── */}
        <section className="px-4 pb-28">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {featureCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  className="glass-card rounded-2xl p-7 flex flex-col gap-4"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <Icon size={20} style={{ color: '#DEDBC8' }} />
                  </div>
                  <h2 className="text-lg font-semibold" style={{ color: '#E1E0CC' }}>
                    {card.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(225,224,204,0.55)' }}>
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── Featured Programs Carousel ── */}
        <section className="px-4 pb-28">
          <div className="max-w-6xl mx-auto">
            <motion.p
              className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-4"
              style={{ color: 'rgba(222,219,200,0.35)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Featured Programs
            </motion.p>
            <motion.h2
              className="text-2xl sm:text-3xl font-light mb-10"
              style={{ color: '#E1E0CC' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Explore open positions
            </motion.h2>

            <EmblaCarousel items={internships} />
          </div>
        </section>

        {/* ── Programs Grid ── */}
        <section className="px-4 pb-28">
          <div className="max-w-6xl mx-auto">
            <motion.p
              className="text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-4"
              style={{ color: 'rgba(222,219,200,0.35)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              All Programs
            </motion.p>
            <motion.h2
              className="text-2xl sm:text-3xl font-light mb-10"
              style={{ color: '#E1E0CC' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Browse the full catalog
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {internships.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="glass-card rounded-2xl p-6 flex flex-col gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-medium"
                      style={{
                        background: 'rgba(255,255,255,0.07)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'rgba(225,224,204,0.6)',
                      }}
                    >
                      {item.domain}
                    </span>
                  </div>

                  <p className="text-[11px] font-medium" style={{ color: 'rgba(225,224,204,0.4)' }}>
                    {item.company}
                  </p>

                  <h3 className="text-base font-semibold" style={{ color: '#E1E0CC' }}>
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed flex-1" style={{ color: 'rgba(225,224,204,0.5)' }}>
                    {item.description}
                  </p>

                  <div
                    className="flex items-center gap-4 pt-3 text-xs"
                    style={{ color: 'rgba(225,224,204,0.35)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <span className="flex items-center gap-1">
                      <Clock size={10} /> {item.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={10} /> {item.type}
                    </span>
                    <span className="flex items-center gap-1 ml-auto" style={{ color: 'rgba(225,224,204,0.5)' }}>
                      <IndianRupee size={10} /> {item.stipend}
                    </span>
                  </div>

                  <CreepyButton
                    href="/login"
                    size="sm"
                    className="w-full mt-1"
                    simple
                  >
                    Apply now
                    <ArrowRight size={12} />
                  </CreepyButton>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-4 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-light mb-6"
            style={{ color: '#E1E0CC' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Need help choosing a program?
          </motion.h2>
          <CreepyButton href="/contact" simple>
            Talk to us
          </CreepyButton>
        </section>
      </div>
    </>
  );
}
