"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import AnimatedIngredients from "./AnimatedIngredients";

const BurgerCanvas = dynamic(() => import("./BurgerCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[480px] flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border-4 border-cheese-yellow border-t-transparent animate-spin" />
    </div>
  ),
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-grill-black flex items-center overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cheese-yellow opacity-[0.04] blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-toasted-bun opacity-[0.06] blur-[80px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-ketchup-red opacity-[0.04] blur-[80px]" />
      </div>

      {/* Floating ingredient particles */}
      <AnimatedIngredients />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left: Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            {/* Address badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-card border border-cheese-yellow/20 font-inter text-xs text-muted-text tracking-widest uppercase">
                <PinIcon />
                43 Caledonia St, Sausalito &nbsp;·&nbsp; Open 11AM–9PM
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div variants={itemVariants}>
              <h1 className="font-bebas text-[clamp(4rem,9vw,7.5rem)] leading-none tracking-widest text-glow-yellow">
                <span className="text-cream-white block">WHERE</span>
                <span className="text-cheese-yellow block">FLAVOR</span>
                <span className="text-cream-white block">LIVES.</span>
              </h1>
            </motion.div>

            {/* Sub headline */}
            <motion.p
              variants={itemVariants}
              className="font-inter text-lg md:text-xl text-muted-text leading-relaxed max-w-md"
            >
              Sausalito&apos;s boldest burger spot.{" "}
              <span className="text-cream-white font-medium">Fresh. Local. Unforgettable.</span>
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <a href="tel:4157299328" className="btn-primary text-lg px-8 py-4">
                <PhoneIcon />
                CALL TO ORDER
              </a>
              <a href="/menu" className="btn-outline text-lg px-8 py-4">
                VIEW MENU
                <ArrowRightIcon />
              </a>
            </motion.div>

            {/* Stat pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-2"
            >
              {[
                { label: "Fresh Daily", value: "100%" },
                { label: "Local Ingredients", value: "Always" },
                { label: "Open Daily", value: "11–9PM" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-start px-4 py-3 rounded-xl bg-surface-card border border-white/5"
                >
                  <span className="font-bebas text-2xl text-cheese-yellow leading-none">
                    {s.value}
                  </span>
                  <span className="font-inter text-xs text-muted-text uppercase tracking-widest mt-0.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D Burger */}
          <motion.div
            className="relative order-1 lg:order-2 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Glow behind burger */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-cheese-yellow opacity-10 blur-[80px] animate-pulse-glow" />
            </div>
            <div className="relative z-10 w-full" style={{ height: "520px" }}>
              <BurgerCanvas />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sauce drip bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0H1440V30C1200 70 960 55 720 60C480 65 240 45 0 40V0Z"
            fill="#1A1A1A"
          />
          {/* Drip accents */}
          <path
            d="M200 40 Q210 70 220 68 Q230 66 235 55 Q240 70 248 72 Q256 74 260 58"
            stroke="#F5C518"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M650 55 Q658 78 666 76 Q674 74 678 62 Q683 79 690 78 Q697 77 700 65"
            stroke="#E63946"
            strokeWidth="1.5"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M1100 42 Q1108 68 1115 67 Q1122 66 1126 55 Q1131 70 1138 69 Q1145 68 1148 57"
            stroke="#F5C518"
            strokeWidth="1.5"
            fill="none"
            opacity="0.35"
          />
        </svg>
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
      className="w-3 h-3 text-cheese-yellow"
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
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

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      className="w-5 h-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
