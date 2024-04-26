'use client'
import Loading from '@plat/Loading'
import Map from '@plat/Map'
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
      isLoading={isLoading}
      fallback={<Loading />}
      apiType="kakao"
      apiKey={processEnv.KAKAO_JAVASCRIPT_APP_KEY as string}
      location={
        position && [position.coords.latitude, position.coords.longitude]
      }
      zoom={3}
      className="w-full h-screen"
    />
  )
}

export default Page
