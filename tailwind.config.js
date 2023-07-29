/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      orangeDark: "#B55B0C",
      neutral: "#6C7275",
      white: "#FFFFFF",
      whiteRgb: "rgba(255, 255, 255, 0.72)",
      whiteRegRgb: "rgba(255, 255, 255, 0.50)",
      primary: "#FF9501",
      secondary: "#29292A",
      black: "#000000",
      blackHigh: "#0E0F11",
      blackSemi: "#1C1C1C",
      blackMid: "#262626",
      blackBold: "#212121",
      blackReg: "#1C1D1F",
      blackLow: "#363636",
      fade: "#A2A2A2",
      fadeHigh: "#585A5C",
      fadeSemi: "#444444",
      fadeMid: "#B8B8B8",
      fadeReg: "#A9A9A9",
      fadeLight: "#475467",
      fadeLow: "#C3C3C3",
      fadeMidRgb: "rgba(255, 255, 255, 0.08)",
      fadeRgb: "rgba(255, 255, 255, 0.06)",
      fadeLightRgb: "rgba(255, 255, 255, 0.15)",
      // colorGradient:
      //   "linear-gradient(168deg, #FF4593 0%, #FFE713 33.00%, #17D7FF 66.00%, #17D7FF 100%)",
    },

    backgroundImage: {
      orangeGradient:
        "linear-gradient(224deg, rgba(255, 149, 1, 0.12) 0%, rgba(255, 149, 1, 0.00) 100%)",
      fadeGradient:
        "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)",
      dotBg: "url('./assets/images/background.png')",
      footerBg: "url('./assets/images/footer.png')",
      copyBg: "url('./assets/images/copyright.png')",
      authBg: "url('./assets/images/authbg.png')",
      heroBg: "url('./assets/images/hero.png')",
    },

    fontFamily: {
      openSans: ["Open Sans", "sans-serif"],
      publicSans: ["Public Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      segoe: ["Segoe UI This", "sans-serif"],
    },

    extend: {},
  },
  plugins: [require("preline/plugin")],
};
