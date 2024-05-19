'use client'

import Loading from '@plat/Loading'
import Map from '@plat-ui/Map'
import {
  ErrorCode,
  Geolocation,
  GeolocationPositionError,
} from '@modules/geolocation'
import options from '@plat/map/options'
import { WebViewDataProvider, WebViewLocation } from '@plat/webview'

type Props = {
  isWebView: boolean
}

const MapService = ({ isWebView }: Props) => {
  const handleError = (error?: GeolocationPositionError) => {
    if (!error) return undefined
    if (error.code === ErrorCode.PERMISSION_DENIED) {
      throw new Error('위치 권한을 거부했습니다. 권한을 재설정해주세요.')
    }
    throw new Error(error.message)
  }

  return isWebView ? (
    <WebViewDataProvider>
      <WebViewLocation>
        {({ isLoading, data }) => (
          <Map
            isLoading={isLoading}
            fallback={<Loading />}
            apiType="kakao"
            apiKey={options.kakao.apiKey}
            location={data}
            zoom={options.kakao.zoom}
            className="w-full h-screen"
          />
        )}
      </WebViewLocation>
    </WebViewDataProvider>
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
