'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReduced) {
      const words = wordsRef.current?.querySelectorAll<HTMLSpanElement>('.word-mask-inner');

      const tl = gsap.timeline({ delay: 0.2 });

      if (words && words.length > 0) {
        tl.from(words, {
          y: '110%',
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'power4.out',
        });
      }

      tl.from(badgeRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.6');

      tl.from(subRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.4');

      tl.from(ctaRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.3');

      tl.from(scrollIndicatorRef.current, {
        opacity: 0,
        duration: 0.5,
      }, '-=0.2');

      // Burger floating animation
      if (burgerRef.current) {
        gsap.to(burgerRef.current, {
          y: -14,
          duration: 2.2,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1,
        });

        // Parallax on scroll
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            if (burgerRef.current) {
              gsap.set(burgerRef.current, {
                scale: 1 + self.progress * 0.08,
              });
            }
          },
        });
      }
    }
  }, { scope: sectionRef });

  const words = ['THE', 'FUTURE', 'OF', 'BURGERS'];

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      style={{
        position: 'relative',
        minHeight: '100svh',
        backgroundColor: 'var(--black)',
        display: 'grid',
        gridTemplateColumns: '48% 52%',
        overflow: 'hidden',
      }}
    >
      {/* Left column */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(3rem, 5vw, 6rem) 4rem clamp(3rem, 5vw, 5rem) clamp(1.5rem, 5%, 5%)',
          gap: '1.75rem',
        }}
        className="hero-left-col"
      >
        {/* Location badge */}
        <div ref={badgeRef} className="hero-location-badge" style={{ opacity: 1 }}>
          <PinIcon />
          Sausalito, California
        </div>

        {/* Headline with word masks */}
        <div ref={wordsRef} style={{ overflow: 'hidden' }}>
          <h1
            style={{
              fontFamily: 'var(--font-bebas-neue), sans-serif',
              fontSize: 'clamp(5rem, 10vw, 9.5rem)',
              lineHeight: 0.88,
              letterSpacing: '0.02em',
              margin: 0,
            }}
          >
            {words.map((word, i) => (
              <span
                key={word}
                className="word-mask"
                style={{
                  display: 'block',
                  overflow: 'hidden',
                  lineHeight: 1.05,
                }}
              >
                <span
                  className="word-mask-inner"
                  style={{
                    display: 'block',
                    color: i === words.length - 1 ? 'var(--gold)' : 'var(--white)',
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>
        </div>

        {/* Sub */}
        <p
          ref={subRef}
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '0.72rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gray)',
            maxWidth: '360px',
            lineHeight: 1.8,
            opacity: 1,
          }}
        >
          Bold Flavor.&nbsp; Premium Ingredients.&nbsp; Unforgettable Experience.
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', opacity: 1 }}
        >
          <a
            href="tel:4157299328"
            className="hero-btn-primary"
            aria-label="Order online"
            data-cursor-label="ORDER"
          >
            ORDER ONLINE
            <ArrowRightIcon />
          </a>
          <a
            href="/menu"
            className="hero-btn-outline"
            aria-label="View our menu"
            data-cursor-label="VIEW"
          >
            VIEW MENU
          </a>
        </div>

        {/* Beef badge */}
        <div className="hero-beef-badge">
          <span className="hero-beef-badge-dot" aria-hidden="true" />
          100% Premium Beef
        </div>
      </div>

      {/* Right column — Burger photo */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gradient fade overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, var(--black) 0%, transparent 30%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        {/* Bottom fade */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30%',
            background: 'linear-gradient(to top, var(--black) 0%, transparent 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        <div
          ref={burgerRef}
          style={{
            position: 'absolute',
            inset: 0,
            willChange: 'transform',
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000&q=90&auto=format&fit=crop"
            alt="Premium juicy burger — Tasty's Joint signature"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 52vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 1,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '0.55rem',
            letterSpacing: '0.3em',
            color: 'var(--gray)',
            textTransform: 'uppercase',
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--gold), transparent)',
            animation: 'scrollPulse 1.8s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
        @media (max-width: 1023px) {
          .hero-left-col {
            grid-column: 1 / -1;
            padding: 3rem 1.5rem 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

function PinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={10} height={10} aria-hidden="true" style={{ color: 'var(--gold)' }}>
      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14} aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
