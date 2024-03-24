/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,ts,md}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A5E63",
          50: "#5FCDD5",
          100: "#4FC8D1",
          200: "#33BAC4",
          300: "#2B9BA4",
          400: "#227D83",
          500: "#1A5E63",
          600: "#0E3437",
          700: "#030A0A",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },

        secondary: {
          DEFAULT: "#E6AF2E",
          50: "#FAEED2",
          100: "#F7E7C0",
          200: "#F3D99B",
          300: "#EFCB77",
          400: "#EABD52",
          500: "#E6AF2E",
          600: "#C49117",
          700: "#926C11",
          800: "#60470C",
          900: "#2E2206",
          950: "#150F03",
        },
        tertiary: {
          DEFAULT: "#1061BD",
          50: "#8FBFF6",
          100: "#7CB4F4",
          200: "#579FF1",
          300: "#3189EE",
          400: "#1374E3",
          500: "#1061BD",
          600: "#0C4689",
          700: "#072C56",
          800: "#031122",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
