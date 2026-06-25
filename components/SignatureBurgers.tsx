'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BURGERS = [
  {
    num: '01',
    name: 'The Sausalito',
    price: '$16',
    desc: 'Double smash, pepper jack, crispy jalapeños, waterfront sauce, toasted brioche',
    tag: 'SIGNATURE',
    photo: 'https://images.unsplash.com/photo-1550317138-10000687a72b?w=700&q=85&auto=format&fit=crop',
    alt: 'The Sausalito burger',
  },
  {
    num: '02',
    name: 'Truffle Smash',
    price: '$18',
    desc: 'Prime beef, aged gruyère, black truffle aioli, caramelized onion, arugula',
    tag: "CHEF'S PICK",
    photo: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=700&q=85&auto=format&fit=crop',
    alt: 'Truffle Smash burger',
  },
  {
    num: '03',
    name: 'Spicy Cali',
    price: '$15',
    desc: 'Ghost pepper patty, habanero cheddar, pickled fresno, avocado crema',
    tag: 'HOT',
    photo: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=700&q=85&auto=format&fit=crop',
    alt: 'Spicy Cali burger',
  },
  {
    num: '04',
    name: 'The Classic',
    price: '$13',
    desc: 'Single smash, American cheese, house pickles, yellow mustard, onion',
    tag: 'BESTSELLER',
    photo: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=700&q=85&auto=format&fit=crop',
    alt: 'The Classic burger',
  },
  {
    num: '05',
    name: 'Plant Power',
    price: '$14',
    desc: 'Beyond Meat smash, vegan cheddar, avocado, sprouts, chipotle mayo',
    tag: 'PLANT-BASED',
    photo: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=700&q=85&auto=format&fit=crop',
    alt: 'Plant Power burger',
  },
];

export default function SignatureBurgers() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!section || !pin || !track) return;

    const totalScroll = track.scrollWidth - pin.clientWidth;

    gsap.to(track, {
      x: () => -totalScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${totalScroll + window.innerWidth * 0.5}`,
        scrub: 1,
        pin: pin,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} style={{ position: 'relative' }} id="menu">
      <div
        ref={pinRef}
        style={{
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: 'var(--dark)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '0 clamp(1.5rem, 5%, 5rem)',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexShrink: 0,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                color: 'var(--crimson)',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              Scroll to explore
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-bebas-neue), sans-serif',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                color: 'var(--white)',
                letterSpacing: '0.06em',
                lineHeight: 1,
              }}
            >
              SIGNATURE BURGERS
            </h2>
          </div>
          <a
            href="/menu"
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              color: 'var(--gold)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            data-cursor-label="VIEW"
          >
            Full Menu
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Horizontal track */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '1.5rem',
            paddingLeft: 'clamp(1.5rem, 5%, 5rem)',
            paddingRight: 'clamp(1.5rem, 5%, 5rem)',
            willChange: 'transform',
            flexShrink: 0,
          }}
        >
          {BURGERS.map((burger) => (
            <div
              key={burger.num}
              className="burger-h-card"
              style={{
                flexShrink: 0,
                width: 'clamp(280px, 30vw, 400px)',
                height: '480px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                background: 'var(--card-bg)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--gold)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              }}
              data-cursor-label="ORDER"
            >
              {/* Image */}
              <div
                style={{
                  position: 'relative',
                  height: '60%',
                  overflow: 'hidden',
                }}
              >
                <div
                  className="card-inner-img"
                  style={{
                    position: 'absolute',
                    inset: '-10%',
                    willChange: 'transform',
                  }}
                >
                  <Image
                    src={burger.photo}
                    alt={burger.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, 400px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                {/* Gradient */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(to top, var(--card-bg), transparent)',
                    zIndex: 1,
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-bebas-neue), sans-serif',
                      fontSize: '0.75rem',
                      letterSpacing: '0.2em',
                      color: 'var(--gray)',
                    }}
                  >
                    {burger.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '0.55rem',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      color: 'var(--crimson)',
                      textTransform: 'uppercase',
                      border: '1px solid var(--crimson)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '3px',
                    }}
                  >
                    {burger.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-bebas-neue), sans-serif',
                    fontSize: 'clamp(1.4rem, 2vw, 1.9rem)',
                    color: 'var(--gold)',
                    letterSpacing: '0.06em',
                    marginBottom: '0.5rem',
                    lineHeight: 1,
                  }}
                >
                  {burger.name}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '0.72rem',
                    color: 'var(--gray)',
                    lineHeight: 1.65,
                    marginBottom: '1rem',
                  }}
                >
                  {burger.desc}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-bebas-neue), sans-serif',
                      fontSize: '1.4rem',
                      color: 'var(--white)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {burger.price}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '0.6rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      color: 'var(--gold)',
                      textTransform: 'uppercase',
                      opacity: 0.8,
                    }}
                  >
                    ADD TO ORDER →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
