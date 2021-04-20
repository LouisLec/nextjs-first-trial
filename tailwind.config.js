const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          // Articonnex orange is tomato-500 (we call it primary), and articonnex green is teal-700 (we call it secondary)
          50: "#fdfcfa",
          100: "#fbf0e5",
          200: "#f7d2ca",
          300: "#eca69e",
          400: "#e67671",
          500: "#e05d43",
          600: "#be3934",
          700: "#962b27",
          800: "#6b1e1b",
          900: "#421310",
        },
        secondary: {
          50: "#f5f8f7",
          100: "#e4f1f4",
          200: "#c3e2e6",
          300: "#90c3c8",
          400: "#549fa2",
          500: "#3e7f7e",
          600: "#436665",
          700: "#2a4c4b",
          800: "#1e3335",
          900: "#131f24",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/ui"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio", require("@tailwindcss/typography")),
  ],
};
