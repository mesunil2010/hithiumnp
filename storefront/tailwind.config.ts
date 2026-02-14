import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hithium: {
          primary: "#0047AB",    // Deep cobalt blue — brand primary
          accent: "#0066CC",     // Medium cobalt for hover states
          light: "#E8F0FE",      // Very light blue tint for backgrounds
          dark: "#0A1628",       // Near-black navy for footer/text
          navy: "#0D2347",       // Deep navy for headings
          green: "#00A651",      // HiTHIUM brand green (eco/energy)
          lime: "#52C41A",       // Light green for success/highlights
          orange: "#FF6B00",     // Warm orange accent for CTAs
          gray: "#F5F6F8",       // Light cool-gray section backgrounds
          muted: "#6B7280",      // Muted text color
          border: "#E5E7EB",     // Border color
          surface: "#FFFFFF",    // Card/surface white
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
              50: "#E8F0FE",
              100: "#C5D8FC",
              200: "#9BBEF9",
              300: "#6FA3F7",
              400: "#4589F5",
              500: "#0066CC",
              600: "#0052A3",
              700: "#0047AB",
              800: "#003D8F",
              900: "#0D2347",
              DEFAULT: "#0047AB",
              foreground: "#FFFFFF",
            },
            secondary: {
              50: "#F0FFF4",
              100: "#C6F6D5",
              200: "#9AE6B4",
              300: "#68D391",
              400: "#48BB78",
              500: "#38A169",
              600: "#00A651",
              700: "#276749",
              800: "#1C4532",
              900: "#1A3328",
              DEFAULT: "#00A651",
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
