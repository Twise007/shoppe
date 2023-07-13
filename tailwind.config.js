/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "cl-acn": "var(--color-action)",
        "white": "var(--color-white)",
      },
    },
  },
  plugins: [require("daisyui")],
};
