'use client'
import { useEffect, useRef, useState } from 'react'
import { Map as MapApi, Marker } from '@modules/kakao-map/api'
import MapSetting from '@modules/kakao-map/MapSetting'
import MarkerSetting from '@modules/kakao-map/MarkerSetting'
import IdleEvent from '@modules/kakao-map/IdleEvent'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  location: [number, number]
  zoom?: number
  apiKey: string
}

const Map = ({ apiKey, location, zoom, ...restProps }: Props) => {
  const containerRef = useRef(null)

  const [script, setScript] = useState<HTMLScriptElement | null>(null)
  const [mapApi, setMapApi] = useState<MapApi | null>(null)
  const [marker, setMarker] = useState<Marker | null>(null)

  useEffect(() => {
    if (script) return

    const scriptId = 'kakao-map-api'
    const scriptElement = document.createElement('script')
    scriptElement.id = scriptId
    scriptElement.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`

    document.head.appendChild(scriptElement)

    setScript(scriptElement)
    // eslint-disable-next-line
  }, [script])

  return (
    <div {...restProps} ref={containerRef}>
      <MapSetting
        script={script}
        containerRef={containerRef}
        mapApiState={[mapApi, setMapApi]}
        markerState={[marker, setMarker]}
        location={location}
        zoom={zoom}
      >
        <MarkerSetting
          mapApi={mapApi as MapApi}
          marker={marker as Marker}
          location={location}
        >
          <IdleEvent
            mapApi={mapApi!}
            events={[
              (_map) => {
                const level = _map.getLevel()
                const latlng = _map.getCenter()

                const message = `지도 레벨은 ${level} 이고, 중심 좌표는 위도 ${latlng.getLat()}, 경도 ${latlng.getLng()} 입니다.`

                return Promise.resolve(console.log(message))
              },
            ]}
          />
        </MarkerSetting>
      </MapSetting>
    </div>
  )
}

export default Map
