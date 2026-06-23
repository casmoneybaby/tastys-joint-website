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
        "grill-black": "#0D0D0D",
        "cheese-yellow": "#F5C518",
        "ketchup-red": "#E63946",
        "pickle-green": "#4CAF50",
        "surface-dark": "#1A1A1A",
        "surface-card": "#242424",
        "cream-white": "#F5F0E8",
        "muted-text": "#A0998F",
        "toasted-bun": "#C97B2A",
      },
      fontFamily: {
        bebas: ["var(--font-bebas-neue)", "sans-serif"],
        anton: ["var(--font-anton)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        "grill-glow":
          "radial-gradient(ellipse at center, rgba(245, 197, 24, 0.15) 0%, transparent 70%)",
        "red-glow":
          "radial-gradient(ellipse at center, rgba(230, 57, 70, 0.2) 0%, transparent 70%)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "yellow-glow": "0 0 30px rgba(245, 197, 24, 0.3)",
        "yellow-glow-lg": "0 0 60px rgba(245, 197, 24, 0.4)",
        "red-glow": "0 0 30px rgba(230, 57, 70, 0.3)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
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
