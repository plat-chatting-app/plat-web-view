import type { Config } from 'tailwindcss'
import _colors from 'tailwindcss/colors'

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
  ..._colors,
  success: '#84cc16', // lime-500
  info: '#3b82f6', // blue-500
  warning: '#f59e0b', // amber-500
  error: '#dc2626', // red-600
  primary: '#8765CF',
  'primary-light': '#9C83D1',
  'primary-dark': '#7649D3',
  'primary-100': '#B3A3D6',
  'primary-300': '#9C83D1',
  'primary-400': '#8E6FCF',
  'primary-500': '#8765CF',
  'primary-700': '#7649D3',
}

const screens = Object.entries(breakpoints).reduce(
  (prev, curr) => ({
    ...prev,
    [curr[0]]: `${curr[1]}px`,
  }),
  {},
)

const config: Config = {
  content: [
    './usecase/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
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
