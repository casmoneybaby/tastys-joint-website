'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'MENU', href: '/menu' },
  { label: 'ABOUT', href: '/about' },
  { label: 'VISIT', href: '#visit' },
  { label: 'REVIEWS', href: '#reviews' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const lastY = useRef(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);

      if (!prefersReduced && navRef.current) {
        if (y > lastY.current && y > 120) {
          // Scrolling down — hide
          gsap.to(navRef.current, { y: '-110%', duration: 0.35, ease: 'power2.in' });
        } else {
          // Scrolling up — show
          gsap.to(navRef.current, { y: '0%', duration: 0.45, ease: 'power2.out' });
        }
      }
      lastY.current = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span>NOW SERVING SAUSALITO, CA &nbsp;|&nbsp; DINE-IN &bull; TAKEOUT &bull; DELIVERY</span>
      </div>

      {/* Navbar wrapper — GSAP targets this for hide/show */}
      <div ref={navRef} style={{ position: 'sticky', top: 0, zIndex: 50, willChange: 'transform' }}>
        <nav
          className={`navbar${scrolled ? ' scrolled' : ''}`}
          role="navigation"
          aria-label="Main navigation"
          style={{ position: 'relative', top: 'auto' }}
        >
          <div className="navbar-inner">
            {/* Logo */}
            <Link href="/" className="nav-logo" aria-label="Tasty's Joint — Home">
              <span className="nav-logo-top">TASTY&apos;S</span>
              <div className="nav-logo-bottom">
                <span className="nav-logo-line" />
                <span>JOINT</span>
                <span className="nav-logo-line" />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="nav-links hidden md:flex" aria-label="Site navigation">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} style={{ position: 'relative' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Order Button */}
            <a
              href="tel:4157299328"
              className="nav-order-btn hidden md:inline-flex"
              aria-label="Order online"
              data-cursor-label="ORDER"
            >
              <BagIcon />
              ORDER ONLINE
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer focus:outline-none"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                className="block w-5 h-[1.5px] bg-white origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.18 }}
                className="block w-5 h-[1.5px] bg-white"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                className="block w-5 h-[1.5px] bg-white origin-center"
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 flex flex-col pt-20 pb-10 px-6"
            style={{ background: '#000000' }}
          >
            <ul className="flex flex-col gap-2 flex-1" role="menu">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  role="menuitem"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.28 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-bebas text-5xl tracking-widest text-white hover:text-gold transition-colors py-2"
                    style={{ color: 'var(--white)', fontFamily: 'var(--font-bebas-neue)' }}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.28 }}
              className="mt-8"
            >
              <a
                href="tel:4157299328"
                className="nav-order-btn w-full justify-center text-base py-4"
                onClick={() => setMobileOpen(false)}
              >
                <BagIcon />
                ORDER ONLINE
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function BagIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={14}
      height={14}
      aria-hidden="true"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
