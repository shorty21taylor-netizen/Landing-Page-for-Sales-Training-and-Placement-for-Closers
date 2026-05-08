/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Space Grotesk"', "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        accent: "#60a5fa",
      },
    },
  },
  plugins: [],
};
