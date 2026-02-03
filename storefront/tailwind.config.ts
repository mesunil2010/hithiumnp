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
          primary: "#0F62FE",    // HiTHIUM brand blue
          accent: "#4589FF",     // Lighter blue accent
          light: "#EDF5FF",      // Very light blue tint
          dark: "#161616",       // Dark for footers/contrast sections
          orange: "#F26522",     // HeroEE product accent orange
          gray: "#F4F4F4",       // Light gray sections
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
              50: "#EDF5FF",
              100: "#D0E2FF",
              200: "#A6C8FF",
              300: "#78A9FF",
              400: "#4589FF",
              500: "#0F62FE",
              600: "#0043CE",
              700: "#002D9C",
              800: "#001D6C",
              900: "#001141",
              DEFAULT: "#0F62FE",
              foreground: "#FFFFFF",
            },
            secondary: {
              50: "#F4F4F4",
              100: "#E0E0E0",
              200: "#C6C6C6",
              300: "#A8A8A8",
              400: "#8D8D8D",
              500: "#6F6F6F",
              600: "#525252",
              700: "#393939",
              800: "#262626",
              900: "#161616",
              DEFAULT: "#393939",
              foreground: "#FFFFFF",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              50: "#001141",
              100: "#001D6C",
              200: "#002D9C",
              300: "#0043CE",
              400: "#0F62FE",
              500: "#4589FF",
              600: "#78A9FF",
              700: "#A6C8FF",
              800: "#D0E2FF",
              900: "#EDF5FF",
              DEFAULT: "#4589FF",
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
};

export default config;
