/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E3887B",
          light: "#f0b454",
          dark: "#452b02",
        },
        accent: "#E6F1F1",
      },
    },
  },
  plugins: [],
};
