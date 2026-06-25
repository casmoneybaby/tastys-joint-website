'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STORY_LINES = [
  'Tasty\'s Joint was born',
  'from a simple obsession:',
  'the perfect burger.',
  'Nestled in the heart',
  'of Sausalito, we source',
  'the finest local ingredients',
  'and craft every patty',
  'with pride.',
];

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sigRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Parallax background
    gsap.to(bgRef.current, {
      y: '20%',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Word lines reveal
    const lines = linesRef.current.filter(Boolean);
    if (lines.length > 0) {
      gsap.from(lines, {
        opacity: 0,
        y: 24,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          once: true,
        },
      });
    }

    gsap.from(headlineRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        once: true,
      },
    });

    gsap.from(sigRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--black)',
      }}
      id="about"
    >
      {/* Parallax background */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: '-20%',
          zIndex: 0,
          willChange: 'transform',
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85&auto=format&fit=crop"
          alt="Sausalito waterfront — home of Tasty's Joint"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.8) 50%, rgba(10,10,10,0.92) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5%, 5rem)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}
      >
        {/* Left: Headline */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              color: 'var(--crimson)',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            Our Story
          </p>
          <h2
            ref={headlineRef}
            style={{
              fontFamily: 'var(--font-bebas-neue), sans-serif',
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              color: 'var(--white)',
              letterSpacing: '0.04em',
              lineHeight: 0.95,
              marginBottom: '2.5rem',
            }}
          >
            BUILT ON
            <br />
            <span style={{ color: 'var(--gold)' }}>PASSION.</span>
            <br />
            MADE TO
            <br />
            INSPIRE.
          </h2>
          <p
            ref={sigRef}
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              color: 'var(--gold)',
              opacity: 0.9,
            }}
          >
            Tasty&apos;s Joint
          </p>
        </div>

        {/* Right: story text */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '1.05rem',
              color: 'rgba(245,240,232,0.75)',
              lineHeight: 2,
              letterSpacing: '0.01em',
            }}
          >
            {STORY_LINES.map((line, i) => (
              <span
                key={i}
                ref={(el) => { linesRef.current[i] = el; }}
                style={{ display: 'block' }}
              >
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section[id="about"] > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
