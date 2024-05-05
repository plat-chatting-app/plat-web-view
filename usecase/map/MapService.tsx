'use client'

import Image from 'next/image'
import { useContext } from 'react'
import Loading from '@plat/Loading'
import Map from '@plat-ui/Map'
import {
  ErrorCode,
  Geolocation,
  GeolocationPositionError,
} from '@modules/geolocation'
import options from '@plat/map/options'
import SeeOther from '@plat-ui/SeeOther'
import { WebViewDataContext } from '@plat/webview'

type Props = {
  isWebView: boolean
}

const MapService = ({ isWebView }: Props) => {
  const message = useContext(WebViewDataContext)

  const handleError = (error?: GeolocationPositionError) => {
    if (!error) return undefined
    if (error.code === ErrorCode.PERMISSION_DENIED) {
      throw new Error('위치 권한을 거부했습니다. 권한을 재설정해주세요.')
    }
    throw new Error(error.message)
  }

  if (isWebView === null) return
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
          <p>메시지: {JSON.stringify(message)}</p>
          <p>메시지 타입: {typeof message}</p>
        </span>
      }
    />
  ) : (
    <Geolocation options={options.geolocation}>
      {({ isLoading, position, error }) => (
        <Map
          isLoading={isLoading}
          fallback={<Loading />}
          error={handleError(error)}
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
