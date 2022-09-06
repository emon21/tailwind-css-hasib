/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ["active"],
    extend: {
      textOpacity: {
        10: "0.1",
        20: "0.2",
        95: "0.95",
      },
    },
  },
  plugins: [],
};
