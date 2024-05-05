'use client'

import Loading from '@plat/Loading'
import Map from '@plat-ui/Map'
import { Geolocation } from '@modules/geolocation'
import options from '@plat/map/options'
import SeeOther from '@plat-ui/SeeOther'
import Image from 'next/image'

type Props = {
  isWebView: boolean
  os?: string
  deviceEnv?: string
}

const MapService = ({ isWebView, os, deviceEnv }: Props) => {
  return isWebView ? (
    <SeeOther
      title={
        <Image
          src="/static/plat-logo-nobg.svg"
          alt="plat-logo"
          width={40}
          height={40}
        />
      }
      description={
        <span>
          <p>페이지 준비중입니다...</p>
          <p>현재 OS: {os}</p>
          <p>현재 환경: {deviceEnv}</p>
        </span>
      }
    />
  ) : (
    <Geolocation options={options.geolocation}>
      {({ isLoading, position, error }) => (
        <Map
          isLoading={isLoading}
          fallback={<Loading />}
          error={error && new Error(error.message)}
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

export default MapService
