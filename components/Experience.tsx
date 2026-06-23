"use client";

import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    icon: <BurgerIcon />,
    title: "FRESH INGREDIENTS",
    description: "Every patty made fresh. Every day.",
    accent: "#F5C518",
  },
  {
    id: 2,
    icon: <PinIcon />,
    title: "WATERFRONT LOCATION",
    description: "Steps from Sausalito's famous marina.",
    accent: "#E63946",
  },
  {
    id: 3,
    icon: <BoltIcon />,
    title: "QUICK & SATISFYING",
    description: "Dine in or call ahead. Fast, hot, incredible.",
    accent: "#C97B2A",
  },
  {
    id: 4,
    icon: <HandshakeIcon />,
    title: "LOCAL LOVE",
    description: "Serving Sausalito one burger at a time since day one.",
    accent: "#4CAF50",
  },
];

export default function Experience() {
  return (
    <section className="section-padding bg-surface-dark relative overflow-hidden">
      {/* Decorative line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cheese-yellow/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-xs text-cheese-yellow uppercase tracking-[0.3em] mb-3">
            The Tasty's Difference
          </p>
          <h2 className="font-bebas text-[clamp(3rem,6vw,5.5rem)] tracking-widest text-cream-white leading-none">
            WHY TASTY&apos;S?
          </h2>
        </motion.div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative bg-grill-black rounded-2xl p-7 border border-white/5 overflow-hidden cursor-default transition-all duration-300"
              style={{
                ["--accent" as string]: f.accent,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px ${f.accent}40, 0 20px 60px rgba(0,0,0,0.5)`,
                  background: `radial-gradient(ellipse at 30% 30%, ${f.accent}08 0%, transparent 70%)`,
                }}
              />

              {/* Icon container */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${f.accent}15`, border: `1px solid ${f.accent}30` }}
              >
                <div style={{ color: f.accent }}>{f.icon}</div>
              </div>

              {/* Title */}
              <h3 className="font-bebas text-2xl tracking-widest text-cream-white mb-3 group-hover:text-[var(--accent)] transition-colors duration-200">
                {f.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-sm text-muted-text leading-relaxed">
                {f.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-400 rounded-b-2xl"
                style={{ backgroundColor: f.accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BurgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
    >
      <path d="M3 11h18" />
      <path d="M3 15h18" />
      <path d="M5 19h14a2 2 0 0 0 2-2v-2H3v2a2 2 0 0 0 2 2z" />
      <path d="M3 11a7 7 0 0 1 14 0" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
    >
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
      <path d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3.02 0L12 11l1.11 .5a2.13 2.13 0 0 0 3.02 0h0a2.13 2.13 0 0 0 0-3L13 5.36" />
    </svg>
  );
}
