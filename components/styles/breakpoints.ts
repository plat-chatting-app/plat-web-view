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

export type ScreenSize = keyof typeof breakpoints
