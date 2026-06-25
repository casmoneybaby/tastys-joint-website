'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const LAYERS = [
  {
    id: 'bun-bottom',
    label: 'BRIOCHE BUN',
    desc: 'Toasted golden, baked fresh daily with a whisper of butter.',
    color: '#C8860A',
    highlight: '#E8A020',
    shadow: '#8B5E08',
    height: 52,
    width: 240,
    borderRadius: '50%',
    isRound: true,
    offsetY: 0,
  },
  {
    id: 'patty',
    label: 'PRIME PATTY',
    desc: '100% premium beef, smashed to order at 500°F for the perfect crust.',
    color: '#5C2D0A',
    highlight: '#7A3F14',
    shadow: '#3A1A04',
    height: 28,
    width: 224,
    borderRadius: '10px',
    isRound: false,
    offsetY: 0,
  },
  {
    id: 'cheese',
    label: 'AGED CHEDDAR',
    desc: 'Melted to perfection — luscious, sharp, and completely irresistible.',
    color: '#E8920A',
    highlight: '#F5A820',
    shadow: '#B86D05',
    height: 14,
    width: 248,
    borderRadius: '4px',
    isRound: false,
    offsetY: 0,
  },
  {
    id: 'lettuce',
    label: 'CRISP LETTUCE',
    desc: 'Garden-fresh, added cold for the perfect crunch contrast.',
    color: '#2D6A1A',
    highlight: '#3D8A24',
    shadow: '#1A4010',
    height: 20,
    width: 236,
    borderRadius: '50%',
    isRound: true,
    offsetY: 0,
  },
  {
    id: 'tomato',
    label: 'VINE TOMATO',
    desc: 'Sun-ripened, sliced thick. Bright acidity, natural sweetness.',
    color: '#C02020',
    highlight: '#E03030',
    shadow: '#8B1010',
    height: 18,
    width: 220,
    borderRadius: '50%',
    isRound: true,
    offsetY: 0,
  },
  {
    id: 'sauce',
    label: 'HOUSE SAUCE',
    desc: 'Secret recipe — tangy, smoky, slightly sweet. The signature touch.',
    color: '#E8C060',
    highlight: '#F0D080',
    shadow: '#B89030',
    height: 10,
    width: 212,
    borderRadius: '50%',
    isRound: true,
    offsetY: 0,
  },
  {
    id: 'bun-top',
    label: 'SESAME CROWN',
    desc: 'Pillowy soft top bun, toasted and crowned with sesame seeds.',
    color: '#C8860A',
    highlight: '#E8A020',
    shadow: '#8B5E08',
    height: 70,
    width: 230,
    borderRadius: '50% 50% 20% 20% / 60% 60% 20% 20%',
    isRound: true,
    offsetY: 0,
  },
];

export default function BurgerBuilder() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinnerRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const burgerWrapRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const section = sectionRef.current;
    const pinner = pinnerRef.current;
    if (!section || !pinner) return;

    const layers = layerRefs.current.filter(Boolean) as HTMLDivElement[];
    const texts = textRefs.current.filter(Boolean) as HTMLDivElement[];

    // Set initial states
    gsap.set(layers, { opacity: 0, y: (i) => i === LAYERS.length - 1 ? -120 : 80 });
    gsap.set(texts, { opacity: 0, y: 20 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=250%',
        scrub: 1.2,
        pin: pinner,
        anticipatePin: 1,
      },
    });

    // Each layer gets a slice of the scroll
    const sliceSize = 1 / LAYERS.length;

    LAYERS.forEach((_, i) => {
      const start = i * sliceSize;

      // Bring in layer
      tl.to(layers[i], {
        opacity: 1,
        y: 0,
        duration: sliceSize * 0.6,
        ease: 'back.out(1.4)',
      }, start);

      // Show text for this layer, hide previous
      if (i > 0) {
        tl.to(texts[i - 1], { opacity: 0, y: -16, duration: sliceSize * 0.3 }, start);
      }
      tl.to(texts[i], { opacity: 1, y: 0, duration: sliceSize * 0.5 }, start + sliceSize * 0.2);
    });

    // Subtle burger glow at end
    if (burgerWrapRef.current) {
      tl.to(burgerWrapRef.current, {
        filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.25))',
        duration: sliceSize,
      }, (LAYERS.length - 1) * sliceSize);
    }

  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} style={{ position: 'relative' }}>
      <div
        ref={pinnerRef}
        style={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--black)',
          padding: '4rem 2rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background radial glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,26,26,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Section header */}
        <div
          style={{
            position: 'absolute',
            top: '3rem',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            zIndex: 10,
          }}
        >
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
            Scroll to build
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
            ANATOMY OF A LEGEND
          </h2>
        </div>

        {/* Layout: burger center, text right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr minmax(280px, 380px) 1fr',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1200px',
            gap: '3rem',
            marginTop: '4rem',
          }}
        >
          {/* Left: ingredient number */}
          <div style={{ textAlign: 'right', paddingRight: '2rem' }}>
            {LAYERS.map((layer, i) => (
              <div
                key={layer.id}
                ref={(el) => { textRefs.current[i] = el; }}
                style={{
                  position: i === 0 ? 'relative' : 'absolute',
                  top: i !== 0 ? 0 : undefined,
                  left: i !== 0 ? 0 : undefined,
                  right: i !== 0 ? 0 : undefined,
                  opacity: 0,
                  paddingRight: '2rem',
                  textAlign: 'right',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-bebas-neue), sans-serif',
                    fontSize: 'clamp(0.7rem, 1.2vw, 0.85rem)',
                    letterSpacing: '0.25em',
                    color: 'var(--gold)',
                    marginBottom: '0.5rem',
                  }}
                >
                  0{i + 1} / {LAYERS.length.toString().padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-bebas-neue), sans-serif',
                    fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                    color: 'var(--white)',
                    letterSpacing: '0.06em',
                    marginBottom: '0.6rem',
                  }}
                >
                  {layer.label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '0.78rem',
                    color: 'var(--gray)',
                    lineHeight: 1.7,
                    maxWidth: '240px',
                    marginLeft: 'auto',
                  }}
                >
                  {layer.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Center: Burger stack */}
          <div
            ref={burgerWrapRef}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              height: '320px',
              perspective: '800px',
            }}
          >
            {/* Render layers bottom to top (reverse for visual stack) */}
            {[...LAYERS].reverse().map((layer, reverseIdx) => {
              const i = LAYERS.length - 1 - reverseIdx;
              return (
                <div
                  key={layer.id}
                  ref={(el) => { layerRefs.current[i] = el; }}
                  style={{
                    position: 'absolute',
                    bottom: `${reverseIdx * 22 + (layer.id === 'bun-bottom' ? 0 : 6)}px`,
                    width: `${layer.width}px`,
                    height: `${layer.height}px`,
                    borderRadius: layer.borderRadius,
                    background: `linear-gradient(180deg, ${layer.highlight} 0%, ${layer.color} 50%, ${layer.shadow} 100%)`,
                    boxShadow: `0 4px 16px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.08) inset`,
                    willChange: 'transform, opacity',
                    transformOrigin: 'center bottom',
                  }}
                  aria-hidden="true"
                />
              );
            })}
          </div>

          {/* Right spacer / progress dots */}
          <div style={{ paddingLeft: '2rem' }}>
            <div
              ref={progressRef}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              {LAYERS.map((layer, i) => (
                <div
                  key={layer.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'var(--border-light)',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '0.6rem',
                      letterSpacing: '0.15em',
                      color: 'var(--gray)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {layer.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'var(--border)',
          }}
        />
      </div>
    </div>
  );
}
