import type { Config } from 'tailwindcss'

export const breakpoints = {
  'mobile-s': 320,
  mobile: 375,
  'mobile-l': 425,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export const colors = {
  success: '#84cc16', // lime-500
  info: '#3b82f6', // blue-500
  warning: '#f59e0b', // amber-500
  error: '#dc2626', // red-600
}

const screens = Object.fromEntries(
  Object.entries(breakpoints).map(([key, value]) => [key, `${value}px`]),
)

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens,
    colors,
  },
  plugins: [],
}
export default config
