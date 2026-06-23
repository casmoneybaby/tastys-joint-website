"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(245,197,24,0.12) 0%, rgba(201,123,42,0.06) 40%, transparent 70%), #0D0D0D",
      }}
    >
      {/* Grill grate decoration */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,197,24,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,197,24,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top sauce drip */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path d="M0 0H1440V20L0 50V0Z" fill="#1A1A1A" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Flame decoration */}
          <div className="flex gap-3 items-end">
            {[0.6, 1, 0.75].map((scale, i) => (
              <motion.div
                key={i}
                animate={{ scaleY: [scale, scale * 1.2, scale] }}
                transition={{
                  duration: 1.5 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
                className="origin-bottom"
              >
                <svg
                  viewBox="0 0 24 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: 24 * scale, height: 32 * scale }}
                >
                  <path
                    d="M12 30 C6 25 3 18 5 11 C7 7 10 6 9 2 C13 6 11 10 12 14 C13 10 15 6 18 3 C19 8 17 12 18 16 C20 20 20 26 15 29 C14 30 12 30 12 30Z"
                    fill="url(#ctaFlame)"
                  />
                  <defs>
                    <linearGradient
                      id="ctaFlame"
                      x1="12"
                      y1="30"
                      x2="12"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#E63946" />
                      <stop offset="50%" stopColor="#F5A623" />
                      <stop offset="100%" stopColor="#F5C518" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            ))}
          </div>

          {/* Headline */}
          <div>
            <h2 className="font-bebas text-[clamp(3rem,8vw,7rem)] tracking-widest text-cream-white leading-none">
              HUNGRY?
            </h2>
            <h2 className="font-bebas text-[clamp(3rem,8vw,7rem)] tracking-widest leading-none">
              <span className="text-cheese-yellow">LET&apos;S</span>{" "}
              <span className="text-cream-white">FIX THAT.</span>
            </h2>
          </div>

          {/* Subtext */}
          <p className="font-inter text-lg text-muted-text max-w-xl leading-relaxed">
            Call ahead, come in, or just show up.{" "}
            <span className="text-cream-white">We&apos;re here until 9 PM.</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <motion.a
              href="tel:4157299328"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-xl px-10 py-5"
            >
              <PhoneIcon />
              CALL (415) 729-9328
            </motion.a>
            <motion.a
              href="https://maps.google.com/?q=43+Caledonia+St+Sausalito+CA+94965"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline text-xl px-10 py-5"
            >
              <DirectionsIcon />
              GET DIRECTIONS
            </motion.a>
          </div>

          {/* Hours note */}
          <p className="font-inter text-sm text-muted-text flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-pickle-green animate-pulse" />
            Open Today · 11 AM – 9 PM · 43 Caledonia St, Sausalito CA
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function DirectionsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}
