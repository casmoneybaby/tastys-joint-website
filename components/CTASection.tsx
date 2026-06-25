'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    gsap.from(sectionRef.current?.querySelectorAll('.cta-reveal') ?? [], {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        once: true,
      },
    });

    // Magnetic button
    const btn = btnRef.current;
    if (!btn) return;

    function onMove(e: MouseEvent) {
      const rect = btn!.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: 'power2.out',
      });
    }

    function onLeave() {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    }

    btn.addEventListener('mousemove', onMove);
    btn.addEventListener('mouseleave', onLeave);

    return () => {
      btn.removeEventListener('mousemove', onMove);
      btn.removeEventListener('mouseleave', onLeave);
    };
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        position: 'relative',
        background: 'var(--black)',
        borderTop: '1px solid var(--border)',
        padding: 'clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5%, 5rem)',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,26,26,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p
          className="cta-reveal"
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: 'var(--crimson)',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}
        >
          Ready to eat?
        </p>

        <h2
          className="cta-reveal"
          style={{
            fontFamily: 'var(--font-bebas-neue), sans-serif',
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            color: 'var(--white)',
            letterSpacing: '0.03em',
            lineHeight: 0.92,
            marginBottom: '3rem',
          }}
        >
          HUNGRY?
          <br />
          <span style={{ color: 'var(--gold)' }}>LET&apos;S FIX</span>
          <br />
          THAT.
        </h2>

        <a
          ref={btnRef}
          href="tel:4157299328"
          className="cta-reveal"
          aria-label="Order now by phone"
          data-cursor-label="ORDER"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1.1rem 2.75rem',
            background: 'var(--crimson)',
            color: 'var(--white)',
            fontFamily: 'var(--font-bebas-neue), sans-serif',
            fontSize: '1.25rem',
            letterSpacing: '0.12em',
            textDecoration: 'none',
            borderRadius: '6px',
            border: '1px solid transparent',
            transition: 'background 0.2s ease',
            willChange: 'transform',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'var(--crimson-hover)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'var(--crimson)';
          }}
        >
          ORDER NOW
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        <p
          className="cta-reveal"
          style={{
            marginTop: '2rem',
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '0.68rem',
            color: 'var(--gray)',
            letterSpacing: '0.12em',
          }}
        >
          43 Caledonia St, Sausalito CA &nbsp;|&nbsp; (415) 729-9328 &nbsp;|&nbsp; Open Daily 11AM–10PM
        </p>
      </div>
    </section>
  );
}
