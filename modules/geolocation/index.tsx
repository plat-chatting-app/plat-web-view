'use client'

import { useEffect, useState } from 'react'
import {
  GeolocationOptions,
  GeolocationPosition,
  GeolocationPositionError,
  GeolocationCoordinates,
  ErrorCode,
} from '@modules/geolocation/api'

export type {
  GeolocationOptions,
  GeolocationCoordinates,
  GeolocationPosition,
  GeolocationPositionError,
}

export { ErrorCode }

export type GeolocationState = {
  isLoading: boolean
  position?: GeolocationPosition
  error?: GeolocationPositionError
}

export const useGeolocation = (
  options?: GeolocationOptions,
): GeolocationState => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<GeolocationPositionError | undefined>(
    undefined,
  )
  const [position, setPosition] = useState<GeolocationPosition | undefined>(
    undefined,
  )

  const handleSuccess = (result: GeolocationPosition) => {
    setPosition(result)
    setIsLoading(false)
  }

  const handleError = (error: GeolocationPositionError) => {
    setError(error)
    setIsLoading(false)
  }

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      handleError({
        code: ErrorCode.API_NOT_SUPPORTED,
        message: 'Geolocation not supported',
      })
    }
    navigator.geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      options,
    )
    // eslint-disable-next-line
  }, [])

  return {
    isLoading,
    position,
    error,
  }
}

export type GeolocationProps = {
  options: GeolocationOptions
  children?: (context: GeolocationState) => React.ReactNode
}

export const Geolocation = ({ options, children }: GeolocationProps) => {
  const state = useGeolocation(options)
  return <>{children?.(state)}</>
}
