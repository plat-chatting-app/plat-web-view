export const SwipeDirection = {
  right: [-1, 0],
  left: [1, 0],
  top: [0, 1],
  bottom: [0, -1],
} as const

export type Anchor = keyof typeof SwipeDirection

export const getScreenSizeByDirection = (
  direction: (typeof SwipeDirection)[Anchor],
) => {
  if (!window) {
    return 0
  }

  if (!!direction[0]) {
    return window.screen.width
  }

  return window.screen.height
}
