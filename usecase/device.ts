export const DEVICE_TYPE = {
  mobile: 'mobile',
  desktop: 'desktop',
} as const

export type DeviceType = (typeof DEVICE_TYPE)[keyof typeof DEVICE_TYPE]
