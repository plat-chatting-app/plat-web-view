'use client'

import { useEffect, useState } from "react"

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

export const useGeolocation = (): {
  isLoading: boolean
  position?: GeolocationPosition
  error?: GeolocationPositionError
} => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<GeolocationPositionError | undefined>(undefined)
  const [position, setPosition] = useState<GeolocationPosition | undefined>(undefined)

  const handleSuccess = (result: GeolocationPosition) => {
    setPosition(result)
    setIsLoading(false)
  }

  const handleError = (error: GeolocationPositionError) => {
    setError(error)
    setIsLoading(false)
  }

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      handleError({
        code: ErrorCode.API_NOT_SUPPORTED,
        message: 'Geolocation not supported',
      })
    }
    setIsLoading(true)
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
  }, [])

  return {
    isLoading,
    position,
    error,
  }
}
