'use client'

import { useEffect } from 'react'
import { getProcessEnv, useGeolocation } from '@plat/utils'
import Map from '@plat/Map'
import ErrorBoundary from '@plat/ErrorBoundary'
import Spinner from '@plat/Spinner/index'

const _MapUseCase = () => {
  const processEnv = getProcessEnv()
  const { isLoading, position, error } = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 10000,
    timeout: 5000,
  })

  useEffect(() => {
    if (error) {
      throw new Error(error.message)
    }
  }, [error])

  if (isLoading || !position) return <Spinner />
  return (
    <Map
      apiType="kakao"
      apiKey={processEnv.KAKAO_JAVASCRIPT_APP_KEY as string}
      config={{
        latLng: [position.coords.latitude, position.coords.longitude],
        zoom: 3,
      }}
      className="w-full h-screen"
    />
  )
}

const MapUseCase = () => (
  <ErrorBoundary>
    <_MapUseCase />
  </ErrorBoundary>
)

export default MapUseCase
