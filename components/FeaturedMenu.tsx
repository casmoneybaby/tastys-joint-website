"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const menuItems = [
  {
    id: 1,
    name: "The Tasty Classic",
    price: "$15",
    description:
      "Double smash patty, American cheese, special sauce, pickles, shredded lettuce on a brioche bun",
    tag: "SIGNATURE",
    tagColor: "bg-cheese-yellow text-grill-black",
    emoji: "⭐",
  },
  {
    id: 2,
    name: "The Bay Blazer",
    price: "$17",
    description:
      "Pepper jack, jalapeños, crispy onions, chipotle mayo, avocado",
    tag: "SPICY",
    tagColor: "bg-ketchup-red text-white",
    emoji: "🌶️",
  },
  {
    id: 3,
    name: "The Sausalito Stack",
    price: "$18",
    description:
      "Triple patty, aged cheddar, caramelized onions, truffle aioli, arugula",
    tag: "LOCAL FAVE",
    tagColor: "bg-toasted-bun text-white",
    emoji: "🏆",
  },
  {
    id: 4,
    name: "The Local",
    price: "$16",
    description:
      "Single patty, fresh tomato, butter lettuce, house mustard, dill pickles",
    tag: "LOCAL FAVE",
    tagColor: "bg-toasted-bun text-white",
    emoji: "🌿",
  },
  {
    id: 5,
    name: "The Crispy Bird",
    price: "$15",
    description:
      "Crispy chicken, hot honey, pickles, slaw, brioche bun",
    tag: "SIGNATURE",
    tagColor: "bg-cheese-yellow text-grill-black",
    emoji: "🍗",
  },
  {
    id: 6,
    name: "Impossible Stack",
    price: "$17",
    description:
      "Plant-based patty, vegan cheese, avocado, roasted peppers",
    tag: "PLANT-BASED",
    tagColor: "bg-pickle-green text-white",
    emoji: "🌱",
  },
];

const sides = [
  { name: "Crinkle Fries", price: "$5" },
  { name: "Sweet Potato Fries", price: "$6" },
  { name: "Onion Rings", price: "$7" },
  { name: "Loaded Fries", price: "$9" },
];

const drinks = [
  { name: "Craft Soda", price: "$4" },
  { name: "Milkshakes", price: "$8" },
  { name: "Local Draft Beer", price: "$7" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function FeaturedMenu() {
  return (
    <section id="menu" className="section-padding bg-surface-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-cheese-yellow/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-cheese-yellow opacity-[0.03] blur-[100px]" />
      </div>

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
            Fresh Every Day
          </p>
          <h2 className="font-bebas text-[clamp(3.5rem,7vw,6rem)] tracking-widest text-cream-white leading-none">
            THE LINEUP
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cheese-yellow/60" />
            <div className="w-2 h-2 rounded-full bg-cheese-yellow" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cheese-yellow/60" />
          </div>
        </motion.div>

        {/* Burger grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative bg-surface-card rounded-2xl p-6 border border-white/5 card-glow cursor-pointer transition-all duration-300"
            >
              {/* Hover border glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-cheese-yellow/40 pointer-events-none" />

              {/* Tag */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-[10px] font-inter font-bold tracking-[0.15em] uppercase ${item.tagColor}`}
                >
                  {item.tag}
                </span>
                <span className="text-2xl">{item.emoji}</span>
              </div>

              {/* Item info */}
              <h3 className="font-bebas text-2xl tracking-widest text-cream-white mb-2 group-hover:text-cheese-yellow transition-colors duration-200">
                {item.name}
              </h3>
              <p className="font-inter text-sm text-muted-text leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Price */}
              <div className="flex items-center justify-between">
                <span className="font-bebas text-3xl text-cheese-yellow tracking-widest">
                  {item.price}
                </span>
                <span className="font-inter text-xs text-muted-text uppercase tracking-wider">
                  + Tax
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sides and Drinks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Sides */}
          <div className="bg-surface-card rounded-2xl p-7 border border-white/5">
            <h3 className="font-bebas text-3xl tracking-widest text-cream-white mb-5">
              SIDES
            </h3>
            <div className="flex flex-col gap-3">
              {sides.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                >
                  <span className="font-inter text-sm text-muted-text">
                    {s.name}
                  </span>
                  <span className="font-bebas text-xl text-cheese-yellow tracking-wider">
                    {s.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Drinks */}
          <div className="bg-surface-card rounded-2xl p-7 border border-white/5">
            <h3 className="font-bebas text-3xl tracking-widest text-cream-white mb-5">
              DRINKS
            </h3>
            <div className="flex flex-col gap-3">
              {drinks.map((d) => (
                <div
                  key={d.name}
                  className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                >
                  <span className="font-inter text-sm text-muted-text">
                    {d.name}
                  </span>
                  <span className="font-bebas text-xl text-cheese-yellow tracking-wider">
                    {d.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* View full menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link href="/menu" className="btn-outline text-base px-10 py-4">
            VIEW FULL MENU
            <ArrowRightIcon />
          </Link>
        </motion.div>
      </div>
    </section>
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
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
}
