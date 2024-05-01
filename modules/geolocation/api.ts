export type GeolocationOptions = {
  enableHighAccuracy?: boolean
  maximumAge?: number
  timeout?: number
}

export type GeolocationCoordinates = Readonly<{
  latitude: number
  longitude: number
  altitude: number | null
  accuracy: number
  altitudeAccuracy: number | null
  heading: number | null
  speed: number | null
}>

export type GeolocationPosition = Readonly<{
  coords: GeolocationCoordinates
  timestamp: number
}>

export enum ErrorCode {
  API_NOT_SUPPORTED,
  PERMISSION_DENIED,
  POSITION_UNAVAILABLE,
  TIMEOUT,
}

export type GeolocationPositionError = Readonly<{
  code: ErrorCode
  message: string
}>
