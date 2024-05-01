'use client'

import Loading from '@plat/Loading'
import Map from '@plat-ui/Map'
import { Geolocation } from '@modules/geolocation'
import type { DeviceType } from '@plat/device'
import { options } from '@plat/map/options'

interface Props {
  device: DeviceType
  os?: string
}

const MapService = ({ device, os }: Props) => {
  if (device === 'mobile') {
    return (
      <div>
        <p>페이지 준비중입니다...</p>
        <p>현재 OS: {os}</p>
      </div>
    )
  }
  if (device === 'desktop') {
    return (
      <Geolocation options={options.geolocation}>
        {({ isLoading, position }) => (
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
        )}
      </Geolocation>
    )
  }
}

export default MapService
