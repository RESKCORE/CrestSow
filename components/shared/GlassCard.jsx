'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Users, Star, ArrowRight, MapPin, Briefcase, IndianRupee } from 'lucide-react';

// ── Unified silver / white palette ──────────────────────────────────────────
const SILVER       = 'rgba(225,224,204,1)';
const SILVER_DIM   = 'rgba(225,224,204,0.55)';
const SILVER_FAINT = 'rgba(225,224,204,0.25)';

export default function GlassCard({
  item,
  href = '/login',
  variant = 'course',
  index = 0,
}) {
  const [hovered, setHovered] = useState(false);
  const { title, description } = item;
  const isCourse = variant === 'course';

  return (
    <motion.div
      className="glass-card rounded-2xl flex flex-col cursor-pointer"
      style={{
        borderColor: hovered ? 'rgba(255,255,255,0.35)' : undefined,
        boxShadow: hovered
          ? 'inset 0 1px 0 rgba(255,255,255,0.20), inset 0 -1px 0 rgba(0,0,0,0.5), 0 14px 48px rgba(0,0,0,0.65), 0 0 24px 2px rgba(255,255,255,0.06)'
          : undefined,
        transform: hovered ? 'translateY(-6px) scale(1.02)' : undefined,
        transition: 'transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease, border-color 0.4s ease',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top icon area */}
      <div
        className="relative w-full flex flex-col items-start p-5 pb-4"
        style={{ minHeight: 120 }}
      >
        {/* Background tint */}
        <div
          className="absolute inset-0 rounded-t-2xl"
          style={{
            background: hovered
              ? 'linear-gradient(135deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.02) 50%, transparent 100%)'
              : 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 50%, transparent 100%)',
            transition: 'background 0.4s ease',
          }}
        />

        <div className="relative z-[3] w-full flex flex-col items-start gap-3">
          {/* Category / domain badge */}
          <span
            className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-semibold"
            style={{
              background: hovered ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.07)',
              color: hovered ? '#fff' : SILVER_DIM,
              border: '1px solid rgba(255,255,255,0.12)',
              transition: 'background 0.35s ease, color 0.35s ease',
            }}
          >
            {isCourse ? item.category : item.domain}
          </span>

          {/* Icon */}
          <div className="flex-1 flex items-center justify-center w-full pt-2">
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${hovered ? 'rgba(255,255,255,0.30)' : 'rgba(255,255,255,0.12)'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: hovered ? '#fff' : SILVER_DIM,
                transition: 'all 0.4s ease',
                transform: hovered ? 'scale(1.10) rotate(6deg)' : 'scale(1) rotate(0deg)',
              }}
            >
              {isCourse ? <Star size={18} /> : <Briefcase size={18} />}
            </div>
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="relative z-[3] p-5 pt-3 flex flex-col gap-3 flex-1">
        {!isCourse && (
          <p className="text-[11px] font-medium" style={{ color: SILVER_FAINT, margin: 0 }}>
            {item.company}
          </p>
        )}

        <h3
          className="text-base font-semibold leading-snug"
          style={{
            color: hovered ? '#fff' : SILVER_DIM,
            transition: 'color 0.35s ease',
          }}
        >
          {title}
        </h3>

        <p
          className="text-xs leading-relaxed flex-1"
          style={{
            color: hovered ? 'rgba(225,224,204,0.65)' : 'rgba(225,224,204,0.38)',
            transition: 'color 0.35s ease',
          }}
        >
          {description}
        </p>

        {/* Stats row */}
        <div className="flex items-center gap-4 text-xs" style={{ color: SILVER_FAINT }}>
          {isCourse ? (
            <>
              <span className="flex items-center gap-1">
                <Clock size={10} /> {item.duration}
              </span>
              <span className="flex items-center gap-1">
                <Users size={10} /> {item.students?.toLocaleString()}
              </span>
              <span
                className="flex items-center gap-1 ml-auto"
                style={{ color: hovered ? SILVER : SILVER_DIM }}
              >
                <Star size={10} /> {item.rating}
              </span>
            </>
          ) : (
            <>
              <span className="flex items-center gap-1">
                <Clock size={10} /> {item.duration}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={10} /> {item.type}
              </span>
              <span
                className="flex items-center gap-1 ml-auto"
                style={{ color: hovered ? SILVER : SILVER_DIM }}
              >
                <IndianRupee size={10} /> {item.stipend}
              </span>
            </>
          )}
        </div>

        <Link
          href={href}
          className="flex items-center gap-1.5 text-xs font-semibold mt-1"
          style={{
            color: hovered ? '#fff' : SILVER_DIM,
            textDecoration: 'none',
            opacity: hovered ? 1 : 0.55,
            transform: hovered ? 'translateX(3px)' : 'translateX(0)',
            transition: 'all 0.35s ease',
          }}
        >
          <span>{isCourse ? 'Enroll now' : 'Apply now'}</span>
          <ArrowRight
            size={12}
            style={{
              transform: hovered
                ? 'translateX(2px) translateY(-2px) rotate(-45deg)'
                : 'rotate(-45deg)',
              transition: 'transform 0.3s ease',
            }}
          />
        </Link>
      </div>
    </motion.div>
  );
}
