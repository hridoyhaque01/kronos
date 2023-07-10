/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    colors: {
      black: "#000",
      transparent: "transparent",
      white: "#fff",
      "white-08": "rgba(255, 255, 255, 0.08)",
      "white-10": "rgba(255, 255, 255, 0.10)",
      "white-20": "rgba(255, 255, 255, 0.20)",
      "white-30": "rgba(255, 255, 255, 0.30)",
      "success-50": "rgba(34, 197, 94, 0.50)",

      fade: "#9F8F81",
      secondary: "#B55B0C",
      brown: "#3F2004",
    },
    backgroundImage: {
      dotBg: "url('./assets/images/background.png')",
      heroBg: "url('./assets/images/hero.png')",
    },
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [require("preline/plugin")],
  daisyui: {
    themes: false,
    darkTheme: false,
  },
};
