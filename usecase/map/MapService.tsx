'use client'

import Image from 'next/image'
import { useContext } from 'react'
import Loading from '@plat/Loading'
import Map from '@plat-ui/Map'
import { Geolocation } from '@modules/geolocation'
import options from '@plat/map/options'
import SeeOther from '@plat-ui/SeeOther'
import { WebViewDataContext } from '@plat/webview'

const MapService = () => {
  const message = useContext(WebViewDataContext)

  return window.ReactNativeWebView ? (
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
