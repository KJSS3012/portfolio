/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        header: "12vh",
      },
    },
    colors: {
      "custom-black": "#16181a",
      ...colors,
    },
  },
  plugins: [],
};
