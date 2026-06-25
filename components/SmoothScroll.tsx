'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<InstanceType<typeof import('lenis').default> | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let lenis: InstanceType<typeof import('lenis').default>;

    async function initLenis() {
      const LenisModule = await import('lenis');
      const Lenis = LenisModule.default;

      lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
      });

      lenisRef.current = lenis;

      lenis.on('scroll', ScrollTrigger.update);

      const rafCallback = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(rafCallback);
      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove(rafCallback);
        lenis.destroy();
      };
    }

    let cleanup: (() => void) | undefined;
    initLenis().then((fn) => {
      cleanup = fn;
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return <>{children}</>;
}
