import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'garden': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#145231',
          950: '#052e16',
        },
        'earth': {
          50: '#faf5f0',
          100: '#f4e8dd',
          200: '#e9d1bd',
          300: '#dbb098',
          400: '#cf8f6e',
          500: '#c25a41',
          600: '#b54328',
          700: '#923624',
          800: '#712c24',
          900: '#5d2620',
          950: '#3a1810',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'grow': 'grow 1.5s ease-out',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'leaf-fall': 'leaf-fall 6s ease-in forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        drift: {
          '0%': { transform: 'translateX(-100%) translateY(0)' },
          '100%': { transform: 'translateX(100vh) translateY(100vh)' },
        },
        grow: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'leaf-fall': {
          '0%': {
            transform: 'translateY(-100vh) rotateZ(0deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100vh) rotateZ(360deg)',
            opacity: '0',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [animate],
} satisfies Config;

export default config;
