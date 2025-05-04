/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: "#0a192f", // Primary color - dark blue
          800: "#0e2240", // Slightly lighter
          700: "#162e4d", // For buttons and hover states
          600: "#1c3a5f", // Lighter version for hover states
        },
        yellow: {
          500: "#d4af37", // Secondary color - gold
          600: "#c4a030", // Darker gold for hover states
        },
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      borderRadius: {
        md: "0.375rem",
        lg: "0.5rem",
      },
      boxShadow: {
        custom: "0 10px 25px rgba(0, 33, 71, 0.15)",
      },
    },
  },
  plugins: [],
};
