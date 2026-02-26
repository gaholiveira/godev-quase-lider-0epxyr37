import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'leadership-blue': '#1e40af',
        'leadership-blue-light': '#3b82f6',
        'leadership-orange': '#ea580c',
        'leadership-orange-light': '#f97316',
        'leadership-gold': '#d97706',
        'leadership-gold-light': '#fbbf24',
      },
    },
  },
  plugins: [],
};
export default config;