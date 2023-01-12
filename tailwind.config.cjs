/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#c9a227",
      background: "#1a1a1a",
      textcolor: "#e9ecef",
      darkbackground: "#101010",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      name: ["Monoton", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};
