"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Hero">
      {/* ── LEFT COLUMN ── */}
      <motion.div
        className="hero-left"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Location badge */}
        <motion.div variants={item}>
          <div className="hero-location-badge" aria-label="Location: Sausalito, California">
            <PinIcon />
            Sausalito, California
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div variants={item}>
          <h1 className="hero-headline">
            <span className="hero-headline-white">THE FUTURE</span>
            <span className="hero-headline-gold">OF BURGERS</span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p className="hero-sub" variants={item}>
          Bold Flavor.&nbsp; Premium Ingredients.&nbsp; Unforgettable Experience.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="hero-cta-group" variants={item}>
          <a href="tel:4157299328" className="hero-btn-primary" aria-label="Order online by phone">
            ORDER ONLINE
            <ArrowRightIcon />
          </a>
          <a href="/menu" className="hero-btn-outline" aria-label="View our menu">
            VIEW MENU
          </a>
        </motion.div>

        {/* Beef badge */}
        <motion.div className="hero-beef-badge" variants={item}>
          <span className="hero-beef-badge-dot" aria-hidden="true" />
          <CowIcon />
          100% Premium Beef
        </motion.div>
      </motion.div>

      {/* ── RIGHT COLUMN — PHOTO ── */}
      <div className="hero-right">
        {/* Left-edge gradient fade */}
        <div className="hero-image-fade" aria-hidden="true" />

        {/* Main burger photo */}
        <Image
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=90&auto=format&fit=crop"
          alt="Premium juicy burger — the centerpiece of Tasty's Joint"
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 55vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={10}
      height={10}
      aria-hidden="true"
      style={{ color: "var(--gold)" }}
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={14}
      height={14}
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function CowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={14}
      height={14}
      aria-hidden="true"
      style={{ color: "var(--gold)" }}
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
