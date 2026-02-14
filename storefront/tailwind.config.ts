import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              50: "#EFF6FF",
              100: "#DBEAFE",
              200: "#BFDBFE",
              300: "#93C5FD",
              400: "#60A5FA",
              500: "#3B82F6",
              600: "#2563EB",
              700: "#1D4ED8",
              800: "#1E40AF",
              900: "#1E3A8A",
              DEFAULT: "#1d4ed8",
              foreground: "#FFFFFF",
            },
            secondary: {
              50: "#FFF7ED",
              100: "#FFEDD5",
              200: "#FED7AA",
              300: "#FDBA74",
              400: "#FB923C",
              500: "#F97316",
              600: "#EA580C",
              700: "#C2410C",
              800: "#9A3412",
              900: "#7C2D12",
              DEFAULT: "#ea580c",
              foreground: "#FFFFFF",
            },
            default: {
              50: "#FAFAFA",
              100: "#F4F4F5",
              200: "#E4E4E7",
              300: "#D4D4D8",
              400: "#A1A1AA",
              500: "#71717A",
              600: "#52525B",
              700: "#3F3F46",
              800: "#27272A",
              900: "#18181B",
              DEFAULT: "#E4E4E7",
              foreground: "#18181B",
            },
            background: "#FFFFFF",
            foreground: "#18181B",
            content1: "#FFFFFF",
            content2: "#F4F4F5",
            content3: "#E4E4E7",
            content4: "#D4D4D8",
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
            background: "#0a0f1a",
            foreground: "#ECEDEE",
            content1: "#18181B",
            content2: "#27272A",
            content3: "#3F3F46",
            content4: "#52525B",
          },
        },
      },
    }),
  ],
};

export default config;
