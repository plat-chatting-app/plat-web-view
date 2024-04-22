'use client'

import { useEffect } from 'react'
import { getProcessEnv, useGeolocation } from '@plat/utils'
import Map from '@plat/Map'
import ErrorBoundary from '@plat/ErrorBoundary'

const _MapUseCase = () => {
  const processEnv = getProcessEnv()
  const { isLoading, position, error } = useGeolocation()

  useEffect(() => {
    if (error) {
      throw new Error(error.message)
    }
  }, [error])

  if (isLoading) return null
  return (
    <Map
      apiType="kakao"
      apiKey={processEnv.KAKAO_JAVASCRIPT_APP_KEY as string}
      config={{
        latLng: position
          ? [position.coords.latitude, position.coords.longitude]
          : [33.450701, 126.570667],
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
