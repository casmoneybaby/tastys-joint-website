"use client";

import { motion } from "framer-motion";

function GrillFlame() {
  return (
    <motion.svg
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-16 h-20 opacity-80"
      initial={{ scaleY: 0.9 }}
      animate={{ scaleY: [0.9, 1.1, 0.95, 1.05, 0.9] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Main flame */}
      <path
        d="M60 155 C35 140 15 120 20 90 C25 65 45 55 40 30 C55 50 50 65 60 75 C70 55 65 35 75 15 C85 40 80 60 90 80 C100 100 100 125 85 140 C75 152 60 155 60 155Z"
        fill="url(#flameGrad)"
      />
      {/* Inner bright core */}
      <path
        d="M60 145 C45 130 40 110 48 90 C53 78 58 72 60 82 C62 72 67 78 72 90 C80 110 75 130 60 145Z"
        fill="url(#flameCoreGrad)"
        opacity="0.9"
      />
      <defs>
        <linearGradient id="flameGrad" x1="60" y1="155" x2="60" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E63946" />
          <stop offset="40%" stopColor="#F5A623" />
          <stop offset="80%" stopColor="#F5C518" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="flameCoreGrad" x1="60" y1="145" x2="60" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5C518" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

export default function BrandStory() {
  return (
    <section className="section-padding bg-grill-black relative overflow-hidden">
      {/* Sauce drip top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0H1440V20C1200 50 960 40 720 45C480 50 240 35 0 30V0Z"
            fill="#1A1A1A"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Card with grain texture effect */}
          <div className="relative bg-surface-dark rounded-3xl p-10 md:p-16 border border-white/5 overflow-hidden">
            {/* Grain overlay */}
            <div
              className="absolute inset-0 opacity-[0.025] rounded-3xl pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                backgroundSize: "256px",
              }}
            />

            {/* Yellow accent glow top-right */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-cheese-yellow opacity-[0.07] blur-[60px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-toasted-bun opacity-[0.05] blur-[60px] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-10">
              {/* Left: Icon area */}
              <div className="flex flex-col items-center gap-4 flex-shrink-0">
                <GrillFlame />
                <div className="w-px h-16 bg-gradient-to-b from-cheese-yellow/40 to-transparent" />
              </div>

              {/* Right: Content */}
              <div className="flex-1">
                <p className="font-inter text-xs text-cheese-yellow uppercase tracking-[0.3em] mb-3">
                  Est. Sausalito, CA
                </p>
                <h2 className="font-bebas text-[clamp(2.8rem,5vw,4.5rem)] tracking-widest text-cream-white leading-none mb-6">
                  OUR STORY
                </h2>

                <p className="font-playfair text-lg md:text-xl text-muted-text leading-relaxed italic mb-6">
                  &ldquo;Tasty&apos;s Joint was born from one simple belief:{" "}
                  <span className="text-cream-white not-italic font-semibold">
                    a great burger can make your whole day better.
                  </span>
                  &rdquo;
                </p>

                <p className="font-inter text-base text-muted-text leading-relaxed">
                  Nestled in the heart of Sausalito, we&apos;re your neighborhood spot for bold
                  flavors, real ingredients, and the kind of food that keeps you coming back. From
                  the waterfront to your hands — every burger we make is built with pride.
                </p>

                <div className="flex flex-wrap gap-6 mt-8">
                  {[
                    { num: "100%", label: "Fresh Ingredients" },
                    { num: "Daily", label: "Made Fresh" },
                    { num: "Local", label: "Community First" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex flex-col">
                      <span className="font-bebas text-4xl text-cheese-yellow tracking-wider leading-none">
                        {stat.num}
                      </span>
                      <span className="font-inter text-xs text-muted-text uppercase tracking-widest mt-1">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
