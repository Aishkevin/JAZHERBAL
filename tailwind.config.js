/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#0B1F16",
        "forest-2": "#122A1F",
        "forest-3": "#1B3B29",
        cream: "#F7F1E2",
        "cream-2": "#FBF8F0",
        gold: "#C9A44B",
        "gold-soft": "#E3CD9A",
        verdant: "#3F7A54",
        earth: "#8B5E34",
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.045)" },
        },
        drift: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
          "15%": { opacity: "1" },
          "100%": { transform: "translateY(-60px) scale(1.6)", opacity: "0" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
      },
      animation: {
        breathe: "breathe 8s ease-in-out infinite",
        drift: "drift 10s linear infinite",
        sway: "sway 6s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "spin-slow": "spin-slow 60s linear infinite",
        kenburns: "kenburns 20s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
