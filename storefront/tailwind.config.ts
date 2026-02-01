import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hithium: {
          primary: "#00A651",    // HiTHIUM green
          secondary: "#003B73",  // Deep navy blue
          accent: "#00C853",     // Bright green accent
          dark: "#1A1A2E",       // Dark background
          light: "#F0F9F4",      // Light green background
          gold: "#FFB800",       // Accent gold
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              50: "#E8F5E9",
              100: "#C8E6C9",
              200: "#A5D6A7",
              300: "#81C784",
              400: "#66BB6A",
              500: "#00A651",
              600: "#008C44",
              700: "#007537",
              800: "#005E2A",
              900: "#00471E",
              DEFAULT: "#00A651",
              foreground: "#FFFFFF",
            },
            secondary: {
              50: "#E3F2FD",
              100: "#BBDEFB",
              200: "#90CAF9",
              300: "#64B5F6",
              400: "#42A5F5",
              500: "#003B73",
              600: "#003266",
              700: "#002855",
              800: "#001F44",
              900: "#001633",
              DEFAULT: "#003B73",
              foreground: "#FFFFFF",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              50: "#00471E",
              100: "#005E2A",
              200: "#007537",
              300: "#008C44",
              400: "#00A651",
              500: "#00C853",
              600: "#66BB6A",
              700: "#81C784",
              800: "#A5D6A7",
              900: "#C8E6C9",
              DEFAULT: "#00C853",
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
};

export default config;
