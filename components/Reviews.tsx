'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const REVIEWS = [
  {
    quote: 'Hands down the best burger in Marin County. The Sausalito is absolutely incredible — I drive from Mill Valley just for it.',
    author: 'Jordan M.',
    source: 'Yelp',
    stars: 5,
  },
  {
    quote: 'Fresh, bold, and totally unforgettable. The Truffle Smash changed my life. Incredible atmosphere too.',
    author: 'Priya K.',
    source: 'Google',
    stars: 5,
  },
  {
    quote: 'The perfect smash burger. Crispy edges, juicy center, incredible house sauce. This place is a gem.',
    author: 'Marcus T.',
    source: 'Yelp',
    stars: 5,
  },
  {
    quote: 'We came for lunch, stayed for dessert. The Plant Power burger is absolutely shocking — so good. Best in the Bay.',
    author: 'Sara L.',
    source: 'Google',
    stars: 5,
  },
  {
    quote: 'Every time I\'m in Sausalito, I make a beeline for Tasty\'s Joint. The consistency is unmatched.',
    author: 'David R.',
    source: 'Yelp',
    stars: 5,
  },
  {
    quote: 'The Spicy Cali is not for the faint of heart, but it\'s incredible. Worth every bite.',
    author: 'Aiko N.',
    source: 'Google',
    stars: 5,
  },
];

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const cards = cardsRef.current?.querySelectorAll<HTMLElement>('.review-card-item');
    if (!cards) return;

    gsap.from(cards, {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 75%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'var(--dark)',
        borderTop: '1px solid var(--border)',
        padding: 'clamp(5rem, 8vw, 7rem) clamp(1.5rem, 5%, 5rem)',
      }}
      id="reviews"
      aria-label="Customer reviews"
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '3.5rem',
          gap: '2rem',
          flexWrap: 'wrap',
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
              marginBottom: '0.6rem',
            }}
          >
            What people are saying
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
            LOVED BY SAUSALITO
          </h2>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
          <span
            style={{
              fontFamily: 'var(--font-bebas-neue), sans-serif',
              fontSize: '1.8rem',
              color: 'var(--white)',
              letterSpacing: '0.04em',
            }}
          >
            4.9
          </span>
          <span
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.65rem',
              color: 'var(--gray)',
              letterSpacing: '0.1em',
            }}
          >
            AVG RATING
          </span>
        </div>
      </div>

      {/* Cards grid */}
      <div
        ref={cardsRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {REVIEWS.map((review, i) => (
          <article
            key={review.author}
            className="review-card-item"
            style={{
              padding: '1.75rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              transition: 'border-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.3)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
            }}
          >
            {/* Stars */}
            <div style={{ display: 'flex', gap: '0.25rem' }} aria-label="5 out of 5 stars">
              {[...Array(review.stars)].map((_, j) => (
                <StarIcon key={j} />
              ))}
            </div>

            {/* Quote */}
            <p
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                color: 'rgba(245,240,232,0.85)',
                lineHeight: 1.7,
                flex: 1,
              }}
            >
              &ldquo;{review.quote}&rdquo;
            </p>

            {/* Author row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--border)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--white)',
                  textTransform: 'uppercase',
                }}
              >
                {review.author}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '0.58rem',
                  color: 'var(--gray)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                via {review.source}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      width={13}
      height={13}
      aria-hidden="true"
      style={{ color: 'var(--gold)' }}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
