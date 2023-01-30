/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark_background_soft: "#252525",
      dark_textcolor: "#e9ecef",
      dark_background: "#151515",
      light_background_soft: "#d5d5d5",
      light_background: "#f0f0f0",
      light_textcolor: "#222",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      name: ["Monoton", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};
