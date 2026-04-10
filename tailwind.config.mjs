/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#0a0a0f', card: '#12121a', deep: '#1a1a26' },
        accent: { DEFAULT: '#c084fc', indigo: '#818cf8', pink: '#f472b6' },
        fn: { green: '#34d399', amber: '#fbbf24', red: '#f87171', cyan: '#22d3ee' },
        txt: { DEFAULT: '#e2e8f0', sec: '#94a3b8', ter: '#64748b' },
        border: '#2a2a3a',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['Outfit', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        float: 'float 15s ease-in-out infinite',
        'float-rev': 'float 18s ease-in-out infinite reverse',
        pulse2: 'pulse2 2s infinite',
        fadeUp: 'fadeUp 0.8s ease both',
        shimmer: 'shimmer 3s linear infinite',
        breathe: 'breathe 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(30px, -30px)' },
        },
        pulse2: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};
