"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  type: "seed" | "pickle" | "dot";
  opacity: number;
}

const generateParticles = (count: number): Particle[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 4,
    delay: Math.random() * 4,
    duration: Math.random() * 4 + 4,
    type: (["seed", "pickle", "dot"] as const)[Math.floor(Math.random() * 3)],
    opacity: Math.random() * 0.4 + 0.1,
  }));
};

export default function AnimatedIngredients() {
  const particles = generateParticles(22);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
          }}
          animate={{
            y: [-12, 12, -12],
            x: [-5, 5, -5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {p.type === "seed" && (
            <div
              style={{
                width: p.size * 0.8,
                height: p.size * 1.5,
                borderRadius: "50%",
                backgroundColor: "#F5F0E8",
              }}
            />
          )}
          {p.type === "pickle" && (
            <div
              style={{
                width: p.size,
                height: p.size,
                borderRadius: "50%",
                backgroundColor: "#4CAF50",
                border: "1.5px solid #2E7D32",
              }}
            />
          )}
          {p.type === "dot" && (
            <div
              style={{
                width: p.size * 0.6,
                height: p.size * 0.6,
                borderRadius: "50%",
                backgroundColor: "#F5C518",
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
