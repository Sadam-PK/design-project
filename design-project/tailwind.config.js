/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customTeal: "#65c0ba",
      },
      fontFamily: {
        fatface: ['"Abril Fatface"', "serif"],
        mukta: ['"Mukta Mahee"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
