'use client'

import Loading from '@usecase/Loading'
import Map, { MapProps } from '@plat/Map'
import {
  useGeolocation,
  type GeolocationOptions,
} from '@plat/utils/geolocation'

interface Props {
  options: {
    geolocation: GeolocationOptions
    kakao: Pick<MapProps, 'apiKey' | 'zoom'>
  }
}

const MapService = ({ options }: Props) => {
  const { position, isLoading } = useGeolocation(options.geolocation)

  return (
    <Map
      isLoading={isLoading}
      fallback={<Loading />}
      apiType="kakao"
      apiKey={options.kakao.apiKey}
      location={
        position && [position.coords.latitude, position.coords.longitude]
      }
      zoom={options.kakao.zoom}
      className="w-full h-screen"
    />
  )
}

export default MapService
