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
          primary: "#00843D",    // HiTHIUM corporate green (from brand)
          secondary: "#0D1117",  // Deep dark (near-black)
          accent: "#00B050",     // Bright green accent
          dark: "#0D1117",       // Dark backgrounds
          light: "#F0FAF4",      // Light green tint background
          orange: "#F26522",     // HeroEE product accent orange
          gray: "#F7F8FA",       // Light gray sections
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
              50: "#E6F4EC",
              100: "#C0E5D0",
              200: "#96D4B2",
              300: "#6BC394",
              400: "#4CB77D",
              500: "#00843D",
              600: "#007537",
              700: "#006330",
              800: "#005228",
              900: "#003A1C",
              DEFAULT: "#00843D",
              foreground: "#FFFFFF",
            },
            secondary: {
              50: "#E8E8E9",
              100: "#C5C6C8",
              200: "#9EA0A4",
              300: "#777A80",
              400: "#595E64",
              500: "#0D1117",
              600: "#0B0F14",
              700: "#090C10",
              800: "#07090C",
              900: "#040507",
              DEFAULT: "#0D1117",
              foreground: "#FFFFFF",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              50: "#003A1C",
              100: "#005228",
              200: "#006330",
              300: "#007537",
              400: "#00843D",
              500: "#00B050",
              600: "#4CB77D",
              700: "#6BC394",
              800: "#96D4B2",
              900: "#C0E5D0",
              DEFAULT: "#00B050",
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
};

export default config;
