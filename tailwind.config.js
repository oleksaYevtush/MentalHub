/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', "sans-serif"],
        heading: ['"Nunito"', "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
        },
        secondary: "var(--color-secondary)",
        surface: "var(--color-surface)",
        muted: "var(--color-text-muted)",
        bg: "var(--color-bg)",
        default: "var(--color-text)",
      },
      textColor: {
        default: "var(--color-text)",
        muted: "var(--color-text-muted)",
      },
      borderColor: {
        DEFAULT: "var(--color-border)",
        default: "var(--color-border)",
      },
    },
  },
  plugins: [],
}
