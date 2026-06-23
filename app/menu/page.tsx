"use client";

import { motion } from "framer-motion";

const burgers = [
  {
    name: "The Tasty Classic",
    price: "$15",
    description:
      "Double smash patty, American cheese, special sauce, pickles, shredded lettuce on a brioche bun",
    tag: "SIGNATURE",
    tagColor: "bg-cheese-yellow text-grill-black",
  },
  {
    name: "The Bay Blazer",
    price: "$17",
    description:
      "Pepper jack, jalapeños, crispy onions, chipotle mayo, avocado",
    tag: "SPICY",
    tagColor: "bg-ketchup-red text-white",
  },
  {
    name: "The Sausalito Stack",
    price: "$18",
    description:
      "Triple patty, aged cheddar, caramelized onions, truffle aioli, arugula",
    tag: "LOCAL FAVE",
    tagColor: "bg-toasted-bun text-white",
  },
  {
    name: "The Local",
    price: "$16",
    description:
      "Single patty, fresh tomato, butter lettuce, house mustard, dill pickles",
    tag: "LOCAL FAVE",
    tagColor: "bg-toasted-bun text-white",
  },
  {
    name: "The Crispy Bird",
    price: "$15",
    description:
      "Crispy chicken, hot honey, pickles, slaw, brioche bun",
    tag: "SIGNATURE",
    tagColor: "bg-cheese-yellow text-grill-black",
  },
  {
    name: "Impossible Stack",
    price: "$17",
    description:
      "Plant-based patty, vegan cheese, avocado, roasted peppers",
    tag: "PLANT-BASED",
    tagColor: "bg-pickle-green text-white",
  },
];

const sides = [
  { name: "Crinkle Fries", price: "$5", desc: "Classic golden crinkle cut" },
  {
    name: "Sweet Potato Fries",
    price: "$6",
    desc: "Lightly seasoned with sea salt",
  },
  {
    name: "Onion Rings",
    price: "$7",
    desc: "Hand-battered, crispy perfection",
  },
  {
    name: "Loaded Fries",
    price: "$9",
    desc: "Cheese sauce, jalapeños, crispy onions",
  },
];

const drinks = [
  { name: "Craft Soda", price: "$4", desc: "Rotating selection of local crafts" },
  {
    name: "Milkshakes",
    price: "$8",
    desc: "Vanilla, Chocolate, or Strawberry",
  },
  {
    name: "Local Draft Beer",
    price: "$7",
    desc: "Rotating Marin County taps",
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-grill-black pt-28 pb-20">
      {/* Page hero */}
      <div className="relative overflow-hidden bg-surface-dark py-20 mb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-cheese-yellow opacity-[0.05] blur-[80px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-inter text-xs text-cheese-yellow uppercase tracking-[0.3em] mb-3">
              Full Menu
            </p>
            <h1 className="font-bebas text-[clamp(4rem,8vw,7rem)] tracking-widest text-cream-white leading-none">
              THE FULL LINEUP
            </h1>
            <p className="font-inter text-base text-muted-text mt-4 max-w-lg mx-auto">
              Everything made fresh daily. No shortcuts. No compromises.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Burgers section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-bebas text-4xl tracking-widest text-cream-white">
              BURGERS
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cheese-yellow/40 to-transparent" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {burgers.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group bg-surface-dark rounded-2xl p-6 border border-white/5 hover:border-cheese-yellow/30 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase font-inter ${item.tagColor}`}
                  >
                    {item.tag}
                  </span>
                  <span className="font-bebas text-2xl text-cheese-yellow tracking-wider">
                    {item.price}
                  </span>
                </div>
                <h3 className="font-bebas text-2xl tracking-widest text-cream-white mb-2 group-hover:text-cheese-yellow transition-colors">
                  {item.name}
                </h3>
                <p className="font-inter text-sm text-muted-text leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sides and Drinks in columns */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Sides */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-bebas text-3xl tracking-widest text-cream-white">
                SIDES
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-toasted-bun/40 to-transparent" />
            </div>
            <div className="flex flex-col gap-4">
              {sides.map((s) => (
                <div
                  key={s.name}
                  className="flex items-start justify-between py-4 border-b border-white/5 last:border-0 gap-4"
                >
                  <div>
                    <p className="font-inter text-sm font-medium text-cream-white">
                      {s.name}
                    </p>
                    <p className="font-inter text-xs text-muted-text mt-0.5">
                      {s.desc}
                    </p>
                  </div>
                  <span className="font-bebas text-xl text-cheese-yellow tracking-wider flex-shrink-0">
                    {s.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Drinks */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-bebas text-3xl tracking-widest text-cream-white">
                DRINKS
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-pickle-green/40 to-transparent" />
            </div>
            <div className="flex flex-col gap-4">
              {drinks.map((d) => (
                <div
                  key={d.name}
                  className="flex items-start justify-between py-4 border-b border-white/5 last:border-0 gap-4"
                >
                  <div>
                    <p className="font-inter text-sm font-medium text-cream-white">
                      {d.name}
                    </p>
                    <p className="font-inter text-xs text-muted-text mt-0.5">
                      {d.desc}
                    </p>
                  </div>
                  <span className="font-bebas text-xl text-cheese-yellow tracking-wider flex-shrink-0">
                    {d.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to order */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="font-inter text-muted-text mb-5">
            Want to order ahead? Give us a call.
          </p>
          <a href="tel:4157299328" className="btn-primary text-lg px-10 py-4">
            CALL (415) 729-9328
          </a>
        </motion.div>
      </div>
    </div>
  );
}
