/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#c9a227",
      background: "#343a40",
      textcolor: "#e9ecef",
      darkbackground: "#212529",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      name: ["Monoton", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};
