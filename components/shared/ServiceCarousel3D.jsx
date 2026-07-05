'use client';

/**
 * ServiceCarousel3D
 *
 * 3-D rotating card carousel — octagonal cylinder.
 * Drag to spin, snaps on release, auto-plays.
 *
 * Blur fix strategy:
 * - The cylinder hub rotation is applied via a direct DOM style mutation
 *   (requestAnimationFrame) instead of framer-motion's style prop.
 *   This avoids framer creating a separate compositing layer per card that
 *   gets rasterised at a wrong resolution by the GPU.
 * - Cards use a fully-opaque solid background. backdrop-filter is NOT used
 *   inside preserve-3d — it always produces artefacts.
 * - will-change is set only on the hub element, not on each card face.
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Clock, Users, Star, MapPin, Briefcase, IndianRupee } from 'lucide-react';

// ── Palette ──────────────────────────────────────────────────────────────────
const SILVER       = '#E1E0CC';
const SILVER_DIM   = 'rgba(225,224,204,0.65)';
const SILVER_FAINT = 'rgba(225,224,204,0.32)';

const CARD_DEPTH = 400;

// Spring easing for the rotation value
function lerp(a, b, t) { return a + (b - a) * t; }

// ── Single 3-D card face ─────────────────────────────────────────────────────
function Card3D({ item, variant = 'course', href = '/login', isActive }) {
  const [hovered, setHovered] = useState(false);
  const { title, description } = item;
  const isCourse = variant === 'course';
  const active = hovered || isActive;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: 18,
        display: 'flex',
        flexDirection: 'column',
        cursor: 'grab',
        // Fully opaque — never use backdrop-filter inside preserve-3d
        background: active
          ? 'linear-gradient(160deg, #28261f 0%, #1a1916 40%, #111110 100%)'
          : 'linear-gradient(160deg, #1c1a15 0%, #131210 45%, #0d0d0c 100%)',
        border: `1px solid ${active ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.10)'}`,
        boxShadow: active
          ? '0 24px 60px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.15)'
          : '0 8px 32px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.07)',
        transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.23,1,0.32,1)',
        transform: active ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
      }}
    >
      {/* Top area */}
      <div
        style={{
          width: '100%',
          minHeight: 155,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '18px 18px 0',
          borderRadius: '18px 18px 0 0',
          background: active
            ? 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 60%, transparent 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)',
          overflow: 'hidden',
          position: 'relative',
          transition: 'background 0.4s ease',
        }}
      >
        {/* Shimmer */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: active ? '150%' : '-75%',
          width: '50%',
          height: '200%',
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)',
          transform: 'skewX(-15deg)',
          transition: 'left 0.7s ease',
          pointerEvents: 'none',
        }} />

        {/* Badge */}
        <span style={{
          fontSize: 10,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.13em',
          padding: '4px 10px',
          borderRadius: 6,
          background: active ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.07)',
          color: active ? '#fff' : SILVER_DIM,
          border: '1px solid rgba(255,255,255,0.14)',
          marginBottom: 12,
          display: 'inline-block',
          transition: 'background 0.35s, color 0.35s',
        }}>
          {isCourse ? item.category : item.domain}
        </span>

        {/* Icon */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <div style={{
            width: 50,
            height: 50,
            borderRadius: 13,
            background: active ? 'rgba(255,255,255,0.11)' : 'rgba(255,255,255,0.05)',
            border: `1px solid ${active ? 'rgba(255,255,255,0.30)' : 'rgba(255,255,255,0.10)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: active ? '#fff' : SILVER_DIM,
            transition: 'all 0.4s ease',
            transform: active ? 'scale(1.1) rotate(7deg)' : 'scale(1) rotate(0)',
          }}>
            {isCourse ? <Star size={21} /> : <Briefcase size={21} />}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', gap: 9, flex: 1 }}>
        {!isCourse && (
          <p style={{ fontSize: 11, fontWeight: 600, color: SILVER_FAINT, margin: 0, letterSpacing: '0.03em' }}>
            {item.company}
          </p>
        )}

        <h3 style={{
          fontSize: 16,
          fontWeight: 700,
          // Full brightness always — cards are opaque dark, text must be readable
          color: active ? '#fff' : SILVER,
          margin: 0,
          lineHeight: 1.25,
          letterSpacing: '-0.015em',
          transition: 'color 0.3s ease',
        }}>
          {title}
        </h3>

        <p style={{
          fontSize: 12,
          lineHeight: 1.65,
          color: active ? 'rgba(225,224,204,0.72)' : 'rgba(225,224,204,0.50)',
          margin: 0,
          flex: 1,
          transition: 'color 0.3s ease',
        }}>
          {description}
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 11, color: SILVER_FAINT }}>
          {isCourse ? (
            <>
              <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Clock size={10} /> {item.duration}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Users size={10} /> {item.students?.toLocaleString()}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 3, marginLeft: 'auto', color: active ? SILVER : SILVER_DIM }}>
                <Star size={10} /> {item.rating}
              </span>
            </>
          ) : (
            <>
              <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Clock size={10} /> {item.duration}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <MapPin size={10} /> {item.type}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 3, marginLeft: 'auto', color: active ? SILVER : SILVER_DIM }}>
                <IndianRupee size={10} /> {item.stipend}
              </span>
            </>
          )}
        </div>

        {/* CTA — always a real link to /login */}
        <Link
          href="/login"
          onClick={(e) => e.stopPropagation()}
          style={{
            marginTop: 4,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 12,
            fontWeight: 700,
            color: active ? '#fff' : SILVER_DIM,
            textDecoration: 'none',
            opacity: active ? 1 : 0.6,
            transform: active ? 'translateX(3px)' : 'translateX(0)',
            transition: 'all 0.3s ease',
            letterSpacing: '0.01em',
          }}
        >
          {isCourse ? 'Enroll now' : 'Apply now'} →
        </Link>
      </div>
    </div>
  );
}

// ── Mobile flat card ─────────────────────────────────────────────────────────
function MobileCard({ item, variant = 'course', href = '/login' }) {
  const isCourse = variant === 'course';
  const { title, description } = item;

  return (
    <div style={{
      borderRadius: 16,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(160deg, #1c1a15 0%, #111110 100%)',
      border: '1px solid rgba(255,255,255,0.10)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
    }}>
      <div style={{
        width: '100%',
        height: 100,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.01))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <div style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.14)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: SILVER_DIM,
        }}>
          {isCourse ? <Star size={19} /> : <Briefcase size={19} />}
        </div>
      </div>

      <div style={{ padding: '13px 16px 16px', display: 'flex', flexDirection: 'column', gap: 7 }}>
        <span style={{
          fontSize: 10,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          padding: '3px 8px',
          borderRadius: 5,
          background: 'rgba(255,255,255,0.07)',
          color: SILVER_DIM,
          border: '1px solid rgba(255,255,255,0.12)',
          alignSelf: 'flex-start',
        }}>
          {isCourse ? item.category : item.domain}
        </span>
        {!isCourse && <p style={{ fontSize: 11, color: SILVER_FAINT, margin: 0 }}>{item.company}</p>}
        <h3 style={{ fontSize: 14, fontWeight: 700, color: SILVER, margin: 0, lineHeight: 1.25 }}>{title}</h3>
        <p style={{ fontSize: 12, color: 'rgba(225,224,204,0.50)', lineHeight: 1.6, margin: 0 }}>{description}</p>
        <Link href="/login" style={{ fontSize: 12, fontWeight: 700, color: SILVER_DIM, textDecoration: 'none', marginTop: 3 }}>
          {isCourse ? 'Enroll now' : 'Apply now'} →
        </Link>
      </div>
    </div>
  );
}

// ── Main carousel ─────────────────────────────────────────────────────────────
export default function ServiceCarousel3D({
  items = [],
  variant = 'course',
  href = '/login',
  autoPlaySpeed = 4000,
  depth = CARD_DEPTH,
}) {
  const totalCards = Math.min(items.length, 8);
  const anglePerCard = 360 / totalCards;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Refs for the DOM node + animation values — no framer for the rotation
  const hubRef       = useRef(null);
  const targetAngle  = useRef(0);   // where we want to be
  const currentAngle = useRef(0);   // lerped current
  const rafRef       = useRef(null);

  // Drag state
  const isDragging     = useRef(false);
  const dragStartX     = useRef(0);
  const dragStartAngle = useRef(0);
  const isPausedRef    = useRef(false);
  const autoPlayRef    = useRef(null);

  // Mobile detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Animation loop — lerps currentAngle toward targetAngle each frame
  useEffect(() => {
    const animate = () => {
      currentAngle.current = lerp(currentAngle.current, targetAngle.current, 0.10);
      if (hubRef.current) {
        hubRef.current.style.transform = `rotateY(${currentAngle.current}deg)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Snap to nearest card
  const snapToNearest = useCallback(() => {
    const rawIndex  = -targetAngle.current / anglePerCard;
    const snapped   = Math.round(rawIndex);
    targetAngle.current = -snapped * anglePerCard;
    const idx = ((snapped % totalCards) + totalCards) % totalCards;
    setActiveIndex(idx);
  }, [anglePerCard, totalCards]);

  // Jump to index (dot click)
  const goTo = useCallback((targetIndex) => {
    setActiveIndex((prev) => {
      let diff = targetIndex - prev;
      if (diff >  totalCards / 2) diff -= totalCards;
      if (diff < -totalCards / 2) diff += totalCards;
      targetAngle.current -= diff * anglePerCard;
      return targetIndex;
    });
  }, [anglePerCard, totalCards]);

  // Auto-play
  useEffect(() => {
    if (autoPlaySpeed <= 0 || totalCards === 0) return;
    const tick = () => {
      if (isPausedRef.current) return;
      targetAngle.current -= anglePerCard;
      setActiveIndex((prev) => (prev + 1) % totalCards);
    };
    autoPlayRef.current = setInterval(tick, autoPlaySpeed);
    return () => clearInterval(autoPlayRef.current);
  }, [autoPlaySpeed, totalCards, anglePerCard]);

  // Pointer drag
  const onPointerDown = useCallback((e) => {
    if (e.button !== 0) return;
    isDragging.current    = true;
    isPausedRef.current   = true;
    dragStartX.current    = e.clientX;
    dragStartAngle.current = targetAngle.current;
    e.currentTarget.setPointerCapture(e.pointerId);
    clearInterval(autoPlayRef.current);
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStartX.current;
    targetAngle.current = dragStartAngle.current + dx * 0.30;
  }, []);

  const onPointerUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current  = false;
    isPausedRef.current = false;
    snapToNearest();
    clearInterval(autoPlayRef.current);
    if (autoPlaySpeed > 0) {
      autoPlayRef.current = setInterval(() => {
        if (isPausedRef.current) return;
        targetAngle.current -= anglePerCard;
        setActiveIndex((prev) => (prev + 1) % totalCards);
      }, autoPlaySpeed);
    }
  }, [snapToNearest, autoPlaySpeed, anglePerCard, totalCards]);

  const faceAngles = Array.from({ length: totalCards }, (_, i) => i * anglePerCard);

  if (totalCards === 0) return null;

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {isMobile ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {items.slice(0, totalCards).map((item, i) => (
            <MobileCard key={item.id ?? i} item={item} variant={variant} href={href} />
          ))}
        </div>
      ) : (
        <div style={{ position: 'relative', width: '100%', maxWidth: 1100, margin: '0 auto' }}>
          {/* Drag stage */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 500,
              perspective: '1100px',
              perspectiveOrigin: '50% 50%',
              cursor: isDragging.current ? 'grabbing' : 'grab',
              userSelect: 'none',
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            {/* Cylinder hub — direct DOM ref, no framer-motion */}
            <div
              ref={hubRef}
              style={{
                position: 'absolute',
                width: 310,
                height: 455,
                left: '50%',
                top: '50%',
                marginLeft: -155,
                marginTop: -227,
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
            >
              {items.slice(0, totalCards).map((item, i) => (
                <div
                  key={item.id ?? i}
                  style={{
                    position: 'absolute',
                    width: 310,
                    height: 455,
                    top: 0,
                    left: 0,
                    transform: `rotateY(${faceAngles[i]}deg) translateZ(${depth}px)`,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    // block pointer events on the wrapper so the drag stage
                    // gets them; re-enable on the card itself below
                    pointerEvents: 'none',
                  }}
                >
                  <div style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}>
                    <Card3D
                      item={item}
                      variant={variant}
                      href={href}
                      isActive={i === activeIndex}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 16, zIndex: 10, position: 'relative' }}>
            {Array.from({ length: totalCards }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to card ${i + 1}`}
                style={{
                  width: i === activeIndex ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  background: i === activeIndex ? 'rgba(225,224,204,0.85)' : 'rgba(255,255,255,0.15)',
                  transition: 'all 0.35s ease',
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
