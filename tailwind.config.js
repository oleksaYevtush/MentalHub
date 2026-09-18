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
        sans: ['"Manrope"', "sans-serif"],
        serif: ['"Lora"', "serif"],
        heading: ['"Lora"', "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
        },
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        surface: "var(--color-surface)",
        surfaceSubtle: "var(--color-surface-subtle)",
        muted: "var(--color-text-muted)",
        bg: "var(--color-bg)",
        default: "var(--color-text)",
        // Custom Requested Palette (Bioluminescent Ocean):
        phlox: {
          DEFAULT: "#CAA9F3",
          soft: "#F6F0FD",
          dark: "#4E2B7A",
        },
        verbena: {
          DEFAULT: "#B37AD4",
          soft: "#F3EBF9",
          dark: "#4A1B6B",
        },
        periwinkle: {
          DEFAULT: "#7997E6",
          soft: "#EBF1FC",
          dark: "#1E367A",
        },
        atlantis: {
          DEFAULT: "#206ABC",
          soft: "#E6F0FA",
          dark: "#0D3A6B",
        },
        phthalo: {
          DEFAULT: "#0E155E",
          hover: "#206ABC",
          soft: "#EAEBF7",
          deep: "#070A26",
        },
      },
      textColor: {
        default: "var(--color-text)",
        muted: "var(--color-text-muted)",
      },
      borderColor: {
        DEFAULT: "var(--color-border)",
        default: "var(--color-border)",
        subtle: "var(--color-card-border)",
      },
    },
  },
  plugins: [],
}
