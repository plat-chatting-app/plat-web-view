'use client'

import Loading from '@plat/Loading'
import Map, { MapProps } from '@plat-ui/Map'
import { useGeolocation, GeolocationOptions } from '@modules/geolocation'

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
