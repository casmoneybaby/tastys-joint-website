'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only show on first visit per session
    const hasLoaded = sessionStorage.getItem('tj_loaded');
    if (hasLoaded) {
      setVisible(false);
      return;
    }

    sessionStorage.setItem('tj_loaded', '1');

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setVisible(false);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setVisible(false);
        },
      });

      // Animate counter
      const counter = { val: 0 };
      tl.to(counter, {
        val: 100,
        duration: 1.8,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.round(counter.val).toString().padStart(3, '0');
          }
        },
      }, 0);

      // Line fill
      tl.to(lineRef.current, {
        scaleX: 1,
        duration: 1.8,
        ease: 'power2.inOut',
      }, 0);

      // Fade logo slightly at end
      tl.to(logoRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: 'power2.in',
      }, '+=0.1');

      // Slide overlay up (split reveal)
      tl.to(overlayRef.current, {
        y: '-100%',
        duration: 0.8,
        ease: 'power4.inOut',
      }, '-=0.1');
    });

    return () => ctx.revert();
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#0A0A0A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
      }}
      aria-label="Loading"
      aria-live="polite"
    >
      <div ref={logoRef} style={{ textAlign: 'center' }}>
        <div
          style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 700,
            color: 'var(--gold)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}
        >
          TASTY&apos;S JOINT
        </div>
        <div
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '0.6rem',
            letterSpacing: '0.35em',
            color: 'var(--gray)',
            textTransform: 'uppercase',
          }}
        >
          SAUSALITO, CALIFORNIA
        </div>

        {/* Loading bar */}
        <div
          style={{
            width: '200px',
            height: '1px',
            background: 'rgba(255,255,255,0.1)',
            margin: '2rem auto 0',
            overflow: 'hidden',
            position: 'relative',
          }}
          aria-hidden="true"
        >
          <div
            ref={lineRef}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'var(--gold)',
              transformOrigin: 'left',
              transform: 'scaleX(0)',
            }}
          />
        </div>

        {/* Counter */}
        <div
          style={{
            marginTop: '1rem',
            fontFamily: 'var(--font-bebas-neue), sans-serif',
            fontSize: '4rem',
            color: 'rgba(255,255,255,0.08)',
            lineHeight: 1,
            letterSpacing: '0.05em',
          }}
          aria-hidden="true"
        >
          <span ref={counterRef}>000</span>
        </div>
      </div>
    </div>
  );
}
