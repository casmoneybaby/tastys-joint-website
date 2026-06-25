import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy (keep for menu/about pages)
        "grill-black": "#0A0A0A",
        "cheese-yellow": "#C9A84C",
        "ketchup-red": "#8B1A1A",
        "pickle-green": "#4CAF50",
        "surface-dark": "#111111",
        "surface-card": "#1A1A1A",
        "cream-white": "#F5F0E8",
        "muted-text": "#888888",
        "toasted-bun": "#C97B2A",
        // New design tokens
        black: "#0A0A0A",
        dark: "#111111",
        "card-bg": "#1A1A1A",
        crimson: "#8B1A1A",
        gold: "#C9A84C",
        border: "#2A2A2A",
      },
      fontFamily: {
        bebas: ["var(--font-bebas-neue)", "sans-serif"],
        anton: ["var(--font-anton)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "grain": "grain 8s steps(10) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "20%": { transform: "translate(3%, 2%)" },
          "30%": { transform: "translate(-1%, 4%)" },
          "40%": { transform: "translate(4%, -1%)" },
          "50%": { transform: "translate(-3%, 3%)" },
          "60%": { transform: "translate(2%, -4%)" },
          "70%": { transform: "translate(-4%, 1%)" },
          "80%": { transform: "translate(3%, -2%)" },
          "90%": { transform: "translate(-2%, 4%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
