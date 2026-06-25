'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Only on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Hide default cursor on body
    document.body.style.cursor = 'none';

    const xDot = gsap.quickTo(dot, 'x', { duration: 0.15, ease: 'power3' });
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.15, ease: 'power3' });
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3' });
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3' });

    function onMove(e: MouseEvent) {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    }

    function onEnterLink(e: MouseEvent) {
      const target = e.currentTarget as HTMLElement;
      const label = target.dataset.cursorLabel || 'VIEW';
      if (labelRef.current) labelRef.current.textContent = label;
      gsap.to(ring, { scale: 2.5, opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(dot, { scale: 0, duration: 0.2 });
    }

    function onLeaveLink() {
      gsap.to(ring, { scale: 1, opacity: 0.6, duration: 0.3, ease: 'power2.out' });
      gsap.to(dot, { scale: 1, duration: 0.2 });
      if (labelRef.current) labelRef.current.textContent = '';
    }

    window.addEventListener('mousemove', onMove);

    // Attach to interactive elements
    function attachListeners() {
      const els = document.querySelectorAll<HTMLElement>(
        'a, button, [data-cursor]'
      );
      els.forEach((el) => {
        el.addEventListener('mouseenter', onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
        // Suppress default cursor on elements too
        (el as HTMLElement).style.cursor = 'none';
      });
    }

    attachListeners();

    // Re-run when DOM updates (simple MutationObserver)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.body.style.cursor = '';
      observer.disconnect();
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'var(--gold)',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '1px solid var(--gold)',
          pointerEvents: 'none',
          zIndex: 99997,
          transform: 'translate(-50%, -50%)',
          opacity: 0.6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mixBlendMode: 'difference',
        }}
      >
        <span
          ref={labelRef}
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '0.45rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            pointerEvents: 'none',
          }}
        />
      </div>
    </>
  );
}
