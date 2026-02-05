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
          dark: "#0a0f1a",       // Dark for footers/contrast sections
          orange: "#F26522",     // HeroEE product accent orange
          gray: "#F4F4F4",       // Light gray sections
          cyan: "#00D4FF",       // Electric cyan
          glow: "#78A9FF",       // Glow effect color
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'energy-pulse': 'energyPulse 2s ease-in-out infinite',
        'electric-flow': 'electricFlow 3s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(15, 98, 254, 0.4), 0 0 40px rgba(15, 98, 254, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(15, 98, 254, 0.6), 0 0 60px rgba(15, 98, 254, 0.3), 0 0 90px rgba(15, 98, 254, 0.15)',
          },
        },
        energyPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        electricFlow: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '400% 0%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'energy-radial': 'radial-gradient(ellipse at center, rgba(15, 98, 254, 0.15) 0%, transparent 70%)',
        'hero-pattern': 'url("/images/hero/pattern.svg")',
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
              50: "#FFF4ED",
              100: "#FFE4D6",
              200: "#FFCCB3",
              300: "#FFAA80",
              400: "#FF8A50",
              500: "#F26522",
              600: "#D94D0D",
              700: "#B53D0A",
              800: "#8C3008",
              900: "#662306",
              DEFAULT: "#F26522",
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
