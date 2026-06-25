'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const NAV_LINKS = [
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Visit Us', href: '#visit' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    gsap.from(sectionRef.current?.querySelectorAll('.footer-reveal') ?? [], {
      opacity: 0,
      y: 20,
      stagger: 0.08,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <footer
      ref={sectionRef}
      style={{
        background: '#070707',
        borderTop: '1px solid var(--border)',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5%, 5rem) 2rem',
      }}
      role="contentinfo"
    >
      {/* Big wordmark */}
      <div
        className="footer-reveal"
        style={{
          marginBottom: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid var(--border)',
          overflow: 'hidden',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            fontWeight: 700,
            color: 'rgba(245,240,232,0.06)',
            letterSpacing: '0.05em',
            lineHeight: 1,
            userSelect: 'none',
            margin: 0,
          }}
          aria-hidden="true"
        >
          TASTY&apos;S JOINT
        </p>
      </div>

      {/* Main footer row */}
      <div
        className="footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem',
        }}
      >
        {/* Brand col */}
        <div className="footer-reveal">
          <div
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--white)',
              letterSpacing: '0.08em',
              marginBottom: '1rem',
            }}
          >
            Tasty&apos;s Joint
          </div>
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.75rem',
              color: 'var(--gray)',
              lineHeight: 1.7,
              maxWidth: '260px',
              margin: 0,
            }}
          >
            Premium burgers in the heart of Sausalito, CA. Bold flavor, fresh ingredients, unforgettable experience.
          </p>
        </div>

        {/* Nav col */}
        <div className="footer-reveal">
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.6rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              color: 'var(--gray)',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              margin: '0 0 1.25rem',
            }}
          >
            Navigate
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0, margin: 0 }}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '0.75rem',
                    color: 'var(--gray)',
                    textDecoration: 'none',
                    letterSpacing: '0.04em',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--white)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--gray)'; }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours col */}
        <div className="footer-reveal">
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.6rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              color: 'var(--gray)',
              textTransform: 'uppercase',
              margin: '0 0 1.25rem',
            }}
          >
            Hours
          </p>
          <div
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.75rem',
              color: 'var(--gray)',
              lineHeight: 2,
            }}
          >
            <div>Mon–Thu 11AM–9PM</div>
            <div>Fri–Sat 11AM–10PM</div>
            <div>Sun 11AM–8PM</div>
          </div>
        </div>

        {/* Address col */}
        <div className="footer-reveal">
          <p
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.6rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              color: 'var(--gray)',
              textTransform: 'uppercase',
              margin: '0 0 1.25rem',
            }}
          >
            Find Us
          </p>
          <address
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.75rem',
              color: 'var(--gray)',
              lineHeight: 1.8,
              fontStyle: 'normal',
            }}
          >
            43 Caledonia St<br />
            Sausalito, CA 94965<br />
            <a
              href="tel:4157299328"
              style={{ color: 'var(--gold)', textDecoration: 'none' }}
            >
              (415) 729-9328
            </a>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="footer-reveal"
        style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '0.65rem',
            color: 'var(--gray)',
            letterSpacing: '0.04em',
            margin: 0,
          }}
        >
          &copy; 2025 Tasty&apos;s Joint &nbsp;&middot;&nbsp; All rights reserved
        </p>
        <p
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '0.65rem',
            color: 'rgba(136,136,136,0.5)',
            letterSpacing: '0.04em',
            margin: 0,
          }}
        >
          Crafted with pride in Sausalito, CA
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
