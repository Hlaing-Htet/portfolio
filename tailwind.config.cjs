/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark_background_soft: "#1a1a1a",
      dark_textcolor: "#e9ecef",
      dark_background: "#101010",
      light_background_soft: "#ddd",
      light_background: "#fefefe",
      light_textcolor: "#333333",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      name: ["Monoton", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};
