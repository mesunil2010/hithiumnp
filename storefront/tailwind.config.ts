import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/react/node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hithium: {
          primary: "#1d4ed8",    // Warmer, deeper blue (blue-700)
          accent: "#3b82f6",     // Warm medium blue (blue-500)
          light: "#EFF6FF",      // Warm light blue tint
          dark: "#0f172a",       // Warm slate-900 (not cold near-black)
          navy: "#1e293b",       // Slate-800 for secondary dark sections
          orange: "#ea580c",     // Warm orange (orange-600)
          amber: "#f59e0b",      // Warm amber accent
          gray: "#F8F7F4",       // Warm off-white sections
          cyan: "#38bdf8",       // Softer sky blue
          glow: "#93c5fd",       // Warm glow blue
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      spacing: {
        'safe-x': 'max(1rem, env(safe-area-inset-left))',
        'safe-r': 'max(1rem, env(safe-area-inset-right))',
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
  plugins: [heroui() as any],
};

export default config;
