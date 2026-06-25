'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ITEMS = ['FRESH', 'BOLD', 'LOCAL', '100% PREMIUM BEEF', 'SAUSALITO', 'SMASH BURGERS', 'MADE TO ORDER'];

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: `-${totalWidth}px`,
      duration: 28,
      ease: 'none',
      repeat: -1,
    });

    // Speed up / reverse on scroll
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        if (tweenRef.current) {
          const velocity = self.getVelocity();
          gsap.to(tweenRef.current, {
            timeScale: 1 + Math.abs(velocity) / 800,
            duration: 0.4,
            ease: 'power2.out',
          });
        }
      },
    });
  }, { scope: sectionRef });

  // Duplicate items for seamless loop
  const allItems = [...ITEMS, ...ITEMS];

  return (
    <div
      ref={sectionRef}
      style={{
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'var(--crimson)',
        padding: '1.1rem 0',
      }}
      aria-label="Marquee"
    >
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0',
          willChange: 'transform',
          whiteSpace: 'nowrap',
        }}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2rem',
              fontFamily: 'var(--font-bebas-neue), sans-serif',
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              letterSpacing: '0.14em',
              color: 'rgba(245,240,232,0.92)',
              paddingRight: '2.5rem',
            }}
          >
            {item}
            <span
              aria-hidden="true"
              style={{ color: 'rgba(201,168,76,0.7)', fontSize: '0.7em', flexShrink: 0 }}
            >
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
