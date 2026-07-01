import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0054A6",
          50: "#E6F6FD",
          100: "#CCECFA",
          200: "#99D9F5",
          300: "#66C6F0",
          400: "#00AEEF",
          500: "#0054A6",
          600: "#004388",
          700: "#003266",
          800: "#002244",
          900: "#001122",
        },
        ink: "#1A1A1B",
        "bg-soft": "#F7F8FA",
        whatsapp: {
          DEFAULT: "#22C55E",
          hover: "#16A34A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        soft: "0 1px 3px rgba(15,23,42,.08), 0 1px 2px rgba(15,23,42,.04)",
        card: "0 8px 24px rgba(15,23,42,.08)",
        brand: "0 8px 24px rgba(0,84,166,.25)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg,#00AEEF 0%,#0054A6 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up .5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
