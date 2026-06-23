"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#", icon: <InstagramIcon /> },
  { label: "Facebook", href: "#", icon: <FacebookIcon /> },
  { label: "Yelp", href: "#", icon: <YelpIcon /> },
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-white/5">
      {/* Sauce drip from CTA section */}
      <div className="overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0C240 30 480 20 720 25C960 30 1200 15 1440 20V0H0Z"
            fill="#0D0D0D"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div className="relative inline-flex">
              <span className="font-bebas text-3xl tracking-widest text-cream-white">
                TASTY&apos;S JOINT
              </span>
              <span className="absolute -top-1 -right-3 w-2 h-2 rounded-full bg-cheese-yellow" />
            </div>
            <p className="font-inter text-sm text-muted-text leading-relaxed max-w-xs">
              Sausalito&apos;s boldest burger spot. Fresh ingredients, great
              flavors, local vibes.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-grill-black border border-white/10 flex items-center justify-center text-muted-text hover:text-cheese-yellow hover:border-cheese-yellow/30 transition-all duration-200 cursor-pointer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bebas text-xl tracking-widest text-cream-white mb-5">
              NAVIGATE
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-muted-text hover:text-cheese-yellow transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-bebas text-xl tracking-widest text-cream-white mb-5">
              VISIT US
            </h4>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-inter text-xs text-muted-text uppercase tracking-widest mb-1">
                  Address
                </p>
                <p className="font-inter text-sm text-cream-white">
                  43 Caledonia St
                  <br />
                  Sausalito, CA 94965
                </p>
              </div>
              <div>
                <p className="font-inter text-xs text-muted-text uppercase tracking-widest mb-1">
                  Phone
                </p>
                <a
                  href="tel:4157299328"
                  className="font-inter text-sm text-cream-white hover:text-cheese-yellow transition-colors"
                >
                  (415) 729-9328
                </a>
              </div>
              <div>
                <p className="font-inter text-xs text-muted-text uppercase tracking-widest mb-1">
                  Hours
                </p>
                <p className="font-inter text-sm text-cream-white">
                  Open Daily · 11 AM – 9 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-7 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-muted-text">
            © 2025 Tasty&apos;s Joint, Sausalito CA. Website design preview.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-pickle-green animate-pulse" />
            <p className="font-inter text-xs text-muted-text">
              Open now · 11 AM – 9 PM daily
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YelpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5l-4 2.5 4 2.5zm2 0l4-2.5-4-2.5v5zm-1-7.5V4l-4 2.5 4 2.5zm2 0l4-2.5L14 4v5z" />
    </svg>
  );
}
