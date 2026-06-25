'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STATS = [
  { num: 12000, suffix: '+', label: 'BURGERS SERVED', sublabel: 'and counting' },
  { num: 100, suffix: '%', label: 'PREMIUM BEEF', sublabel: 'never frozen' },
  { num: 4.9, suffix: '★', label: 'AVG RATING', sublabel: 'across all platforms', isDecimal: true },
  { num: 2019, suffix: '', label: 'EST. SAUSALITO', sublabel: 'serving the bay' },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    STATS.forEach((stat, i) => {
      const el = numRefs.current[i];
      if (!el) return;

      if (prefersReduced) {
        el.textContent = stat.isDecimal ? stat.num.toFixed(1) : stat.num.toLocaleString();
        return;
      }

      const counter = { val: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            val: stat.num,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              if (stat.isDecimal) {
                el.textContent = counter.val.toFixed(1);
              } else if (stat.num > 1000) {
                el.textContent = Math.round(counter.val).toLocaleString();
              } else {
                el.textContent = Math.round(counter.val).toString();
              }
            },
          });
        },
      });
    });

    // Stagger reveal
    gsap.from(sectionRef.current?.querySelectorAll('.stat-item') ?? [], {
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <div
      ref={sectionRef}
      style={{
        background: 'var(--black)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
    >
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          className="stat-item"
          style={{
            padding: 'clamp(3rem, 5vw, 5rem) clamp(1.5rem, 3vw, 3rem)',
            borderRight: i < STATS.length - 1 ? '1px solid var(--border)' : 'none',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Number */}
          <div
            style={{
              fontFamily: 'var(--font-bebas-neue), sans-serif',
              fontSize: 'clamp(3rem, 6vw, 6rem)',
              color: 'var(--white)',
              lineHeight: 1,
              letterSpacing: '0.02em',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              gap: '0.1em',
              marginBottom: '0.5rem',
            }}
          >
            <span
              ref={(el) => { numRefs.current[i] = el; }}
            >
              0
            </span>
            <span style={{ color: 'var(--gold)', fontSize: '0.7em', marginTop: '0.1em' }}>
              {stat.suffix}
            </span>
          </div>

          {/* Label */}
          <div
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              color: 'var(--white)',
              textTransform: 'uppercase',
              marginBottom: '0.3rem',
            }}
          >
            {stat.label}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.65rem',
              color: 'var(--gray)',
              letterSpacing: '0.08em',
            }}
          >
            {stat.sublabel}
          </div>

          {/* Decorative line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '1px',
              height: '40%',
              background: 'linear-gradient(to bottom, var(--gold), transparent)',
              opacity: 0.15,
            }}
          />
        </div>
      ))}

      <style>{`
        @media (max-width: 768px) {
          .stat-item:nth-child(2) { border-right: none !important; }
          .stat-item { border-bottom: 1px solid var(--border); }
        }
        @media (max-width: 768px) {
          div[style*="repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
