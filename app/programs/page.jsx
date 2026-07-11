'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
import { companyProfile } from '@/lib/data/company';
import { internships } from '@/lib/data/internships';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import PointerGlowCard from '@/components/ui/PointerGlowCard';

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

const badgeTints = ['bg-[#E8F0FE]', 'bg-[#E6F7EF]', 'bg-[#F1EAFE]', 'bg-[#FDEEE3]'];
const textTints = ['text-[#4C7FFF]', 'text-[#10B981]', 'text-[#8B5CF6]', 'text-[#F97316]'];

function EmblaCarousel({ items }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplayPlugin = useMemo(
    () => Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', containScroll: 'keepSnaps', dragFree: false },
    [autoplayPlugin]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => { emblaApi.off('select', onSelect); emblaApi.off('reInit', onSelect); };
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
              <div key={item.id} className="relative shrink-0 grow-0 min-w-0 px-3 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%]">
                <motion.div
                  className="cursor-pointer select-none h-full"
                  animate={{ scale: isActive ? 1 : 0.95, opacity: isActive ? 1 : 0.6 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                >
                  <PointerGlowCard className="bg-white border border-[#E5E7EB] rounded-3xl p-8 flex flex-col gap-4 h-full shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#4C7FFF] bg-[#E8F0FE] px-3 py-1 rounded-full w-fit">
                      {item.domain}
                    </span>
                    <p className="text-xs font-bold text-[#9CA3AF]">
                      {item.company}
                    </p>
                    <h3 className="font-bold text-xl text-[#0A0A0A]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] flex-1 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-medium text-[#4B5563] mt-4 pt-4 border-t border-[#E5E7EB]">
                      <span className="flex items-center gap-1.5"><Clock size={14} /> {item.duration}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={14} /> {item.type}</span>
                      <span className="flex items-center gap-1.5 ml-auto text-[#0A0A0A] font-bold"><IndianRupee size={14} /> {item.stipend}</span>
                    </div>
                    <Link href="/login" className="btn-primary w-full mt-4 justify-between">
                      <span>Apply now</span>
                      <ArrowRight size={16} />
                    </Link>
                  </PointerGlowCard>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <button onClick={scrollPrev} className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full items-center justify-center z-10 bg-white border border-[#E5E7EB] shadow-sm hover:bg-[#F5F6F8] transition-colors text-[#0A0A0A]">
        <ChevronLeft size={20} />
      </button>
      <button onClick={scrollNext} className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full items-center justify-center z-10 bg-white border border-[#E5E7EB] shadow-sm hover:bg-[#F5F6F8] transition-colors text-[#0A0A0A]">
        <ChevronRight size={20} />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {items.map((_, i) => (
          <button key={i} onClick={() => emblaApi?.scrollTo(i)} className="rounded-full transition-all duration-300" style={{ width: i === selectedIndex ? 24 : 8, height: 8, background: i === selectedIndex ? '#0A0A0A' : '#D1D5DB' }} />
        ))}
      </div>
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <div className="relative z-10 bg-[#FFFFFF]">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        <div className="min-h-[45vh] flex items-center justify-center ambient-panel rounded-[32px] border border-[#E5E7EB] p-8">
          <div className="max-w-4xl mx-auto w-full text-center">
            <motion.p className="eyebrow mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
              Programs
            </motion.p>
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl text-[#0A0A0A] tracking-tight leading-none mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            All learning<br />in one place.
          </motion.h1>
          <motion.p className="text-lg text-[#6B7280] leading-relaxed max-w-2xl mx-auto mt-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.2 }}>
            {companyProfile.name} brings trainings, courses, hackathons, CRT, internships, workshops,
            placement guidance, resume building, and project work together in a single programs hub.
          </motion.p>
        </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {featureCards.map((card, index) => {
            const Icon = card.icon;
            const tint = badgeTints[index % badgeTints.length];
            const color = textTints[index % textTints.length];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <PointerGlowCard className="bg-white border border-[#E5E7EB] rounded-3xl p-6 h-full flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${tint}`}>
                    <Icon size={20} className={color} />
                  </div>
                  <h3 className="font-bold text-lg text-[#0A0A0A]">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] flex-1 leading-relaxed">
                    {card.description}
                  </p>
                </PointerGlowCard>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured Programs Carousel */}
      <section className="py-24 px-4 bg-[#F5F6F8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Featured Programs</p>
            <h2 className="text-4xl sm:text-5xl text-[#0A0A0A] tracking-tight flex items-center justify-center gap-3">
              Explore open positions
              <span className="text-[10px] font-medium tracking-widest uppercase bg-[#F5F6F8] border border-[#E5E7EB] text-[#6B7280] px-2 py-1 rounded-full relative -top-2">Example Listings</span>
            </h2>
          </div>
          <EmblaCarousel items={internships} />
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">All Programs</p>
            <h2 className="text-4xl sm:text-5xl text-[#0A0A0A] tracking-tight flex items-center justify-center gap-3">
              Browse the full catalog
              <span className="text-[10px] font-medium tracking-widest uppercase bg-[#FFFFFF] border border-[#E5E7EB] text-[#6B7280] px-2 py-1 rounded-full relative -top-2">Example Listings</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((item, index) => {
              const tint = badgeTints[index % badgeTints.length];
              const color = textTints[index % textTints.length];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <PointerGlowCard className="bg-white border border-[#E5E7EB] rounded-3xl p-6 md:p-8 flex flex-col gap-4 h-full shadow-sm hover:shadow-md transition-shadow">
                    <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full w-fit ${tint} ${color}`}>
                      {item.domain}
                    </span>
                    <p className="text-xs font-bold text-[#9CA3AF]">
                      {item.company}
                    </p>
                    <h3 className="font-bold text-xl text-[#0A0A0A]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] flex-1 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4 pt-4 mt-2 text-xs font-medium text-[#4B5563] border-t border-[#E5E7EB]">
                      <span className="flex items-center gap-1.5"><Clock size={14} /> {item.duration}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={14} /> {item.type}</span>
                    </div>
                    <Link href="/login" className="btn-secondary w-full mt-2 justify-between">
                      <span>View details</span>
                      <ArrowRight size={16} />
                    </Link>
                  </PointerGlowCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 text-center bg-[#0A0A0A] text-white rounded-t-[32px] mx-2 md:mx-4">
        <motion.h2
          className="text-4xl sm:text-5xl mb-8 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Need help choosing a program?
        </motion.h2>
        <a href="/contact" className="btn-secondary !text-[#0A0A0A]">
          Talk to us <span>→</span>
        </a>
      </section>
    </div>
  );
}
