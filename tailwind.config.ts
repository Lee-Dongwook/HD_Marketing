import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        arial: ["Arial", "Helvetica", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        navy: {
          900: "#0A1929",
          800: "#1a2332",
          700: "#1e293b",
        },
        accent: {
          gold: "#fbbf24",
          yellow: "#f59e0b",
        },
      },
    },
  },
};

export default config;
