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
  
  if (isLoading) return <Spinner />
  if (!position) return <Spinner />
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

export default Page
