'use client'
import Map from '@plat/Map'
import Spinner from '@plat/Spinner'
import { getProcessEnv } from '@plat/utils'
import { useGeolocation } from '@plat/utils/geolocation'

const Page = () => {
  const processEnv = getProcessEnv()

  const { position, isLoading } = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 10000,
    timeout: 5000,
  })

  return (
    <Map
      apiType="kakao"
      apiKey={processEnv.KAKAO_JAVASCRIPT_APP_KEY as string}
      isLoading={isLoading}
      fallback={<Spinner />}
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

export default Page
