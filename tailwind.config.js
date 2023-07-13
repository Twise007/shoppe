/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-white": "var(--color-white)",
        "bg-primary": "var(--color-primary)",
        "bg-btn": "var(--color-btn)",
        "bg-sec": "var(--color-sec)",
        "bg-hoverT": "var(--color-hoverT)",
      },
    },
  },
  plugins: [require("daisyui")],
};
