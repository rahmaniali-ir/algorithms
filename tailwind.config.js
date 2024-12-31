/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E4EDCF",
          100: "#C1DEAA",
          200: "#92CE86",
          300: "#62BE6B",
          400: "#3FAC67",
          500: "#1D9A6C",
          600: "#17836E",
          700: "#116B69",
          800: "#0C4953",
          900: "#082A3A",
          950: "#041321",
        },
      },
      borderRadius: {
        inherit: "inherit",
      },
      keyframes: {
        "opacity-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "translate-y-up": {
          "0%": {
            translate: "0 1em",
          },
          "100%": {
            translate: "0 0",
          },
        },
        attract: {
          "0%": { scale: "1" },
          "40%": { scale: "1.2" },
          "100%": { scale: "1" },
        },
      },
      animation: {
        appear:
          "opacity-in .3s ease forwards, translate-y-up .3s ease forwards",
        attract: "attract .3s ease forwards",
      },
    },
  },
  plugins: [],
};
