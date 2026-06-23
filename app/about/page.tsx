"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Fresh Daily",
    description:
      "Every patty is pressed and seasoned the morning of service. No frozen shortcuts. Ever.",
    color: "#F5C518",
  },
  {
    title: "Local Sourcing",
    description:
      "We partner with Northern California farmers and purveyors to bring you the best ingredients from our backyard.",
    color: "#4CAF50",
  },
  {
    title: "Community First",
    description:
      "Sausalito is our home. We give back through local events, partnerships, and making sure every guest feels welcome.",
    color: "#E63946",
  },
  {
    title: "Bold Flavor",
    description:
      "We don't do bland. Every component of every burger is designed for maximum flavor impact.",
    color: "#C97B2A",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-grill-black pt-28 pb-20">
      {/* Hero banner */}
      <div className="relative overflow-hidden py-20 mb-16 bg-surface-dark">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-toasted-bun opacity-[0.06] blur-[80px]" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-cheese-yellow opacity-[0.04] blur-[80px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-inter text-xs text-cheese-yellow uppercase tracking-[0.3em] mb-3">
              Our Story
            </p>
            <h1 className="font-bebas text-[clamp(3.5rem,7vw,6.5rem)] tracking-widest text-cream-white leading-none mb-6">
              BUILT FOR BURGER LOVERS.
            </h1>
            <p className="font-playfair text-xl text-muted-text italic leading-relaxed max-w-2xl mx-auto">
              &ldquo;We believe a great burger can make your whole day better.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-16 items-center mb-24"
        >
          <div>
            <h2 className="font-bebas text-4xl tracking-widest text-cream-white mb-6">
              THE BEGINNING
            </h2>
            <div className="flex flex-col gap-5 font-inter text-base text-muted-text leading-relaxed">
              <p>
                Tasty&apos;s Joint was born from one simple belief: a great burger can make your
                whole day better. Nestled in the heart of Sausalito, we&apos;re your neighborhood
                spot for bold flavors, real ingredients, and the kind of food that keeps you coming
                back.
              </p>
              <p>
                From the waterfront to your hands — every burger we make is built with pride. We
                started as a small operation with a big vision: to create the kind of burger joint
                that becomes a local institution.
              </p>
              <p>
                Sausalito has a way of drawing in people who care deeply about quality and community.
                That spirit is baked into every decision we make, from choosing our produce suppliers
                to perfecting our special sauce recipe.
              </p>
            </div>
          </div>

          {/* Decorative card */}
          <div className="relative">
            <div className="bg-surface-dark rounded-3xl p-10 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-cheese-yellow opacity-[0.06] blur-[40px]" />
              <div className="relative z-10">
                <div className="font-bebas text-8xl text-cheese-yellow opacity-20 leading-none mb-4">
                  &ldquo;
                </div>
                <p className="font-playfair text-xl text-cream-white italic leading-relaxed">
                  Every patty we make is a statement. Fresh. Bold. Unapologetically delicious.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="font-bebas text-lg tracking-widest text-cheese-yellow">
                    TASTY&apos;S JOINT
                  </p>
                  <p className="font-inter text-sm text-muted-text">
                    43 Caledonia St, Sausalito, CA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl tracking-widest text-cream-white">
              WHAT WE STAND FOR
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-surface-dark rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300 group"
              >
                <div
                  className="w-10 h-1 rounded-full mb-4 transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: v.color }}
                />
                <h3 className="font-bebas text-2xl tracking-widest text-cream-white mb-3">
                  {v.title}
                </h3>
                <p className="font-inter text-sm text-muted-text leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visit us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-center bg-surface-dark rounded-3xl p-14 border border-white/5"
        >
          <h2 className="font-bebas text-4xl tracking-widest text-cream-white mb-4">
            COME SAY HELLO
          </h2>
          <p className="font-inter text-muted-text mb-8 max-w-md mx-auto leading-relaxed">
            We&apos;re at 43 Caledonia St in Sausalito, open every day from 11 AM to 9 PM.
            Walk-ins always welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="tel:4157299328" className="btn-primary px-8 py-4">
              CALL (415) 729-9328
            </a>
            <a
              href="https://maps.google.com/?q=43+Caledonia+St+Sausalito+CA+94965"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-8 py-4"
            >
              GET DIRECTIONS
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
