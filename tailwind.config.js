/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      colors: {
        primary: {
          // DEFAULT: "rgb(3,0,109)",
          DEFAULT: "#03006D",
          50: "#f1f4ff",
          100: "#e5e7ff",
          200: "#ced4ff",
          300: "#a7afff",
          400: "#767cff",
          500: "#423fff",
          600: "#2818ff",
          700: "#1707fa",
          800: "#1205d2",
          900: "#1106ac",
          950: "#03006d",
        },
        secondary: {
          DEFAULT: "#2723ed",
          50: "#eaf1ff",
          100: "#d9e5ff",
          200: "#baceff",
          300: "#91adff",
          400: "#657eff",
          500: "#4250ff",
          600: "#2221ff",
          700: "#2723ed",
          800: "#1715be",
          900: "#1b1e94",
          950: "#101056",
        },
      },
    },
  },
  themes: {},
  important: true,
  plugins: [],
};
