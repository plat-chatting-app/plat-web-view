'use client'
import { useEffect, useRef, useState } from 'react'
import { Map as MapApi, Marker } from '@plat/Map/kakao-map-api'
import { Position } from '@plat/Map/types'
import CreateMap from '@plat/Map/kakao/CreateMap'
import IdleEvent from '@plat/Map/kakao/IdleEvent'
import MoveMap from '@plat/Map/kakao/MoveMap'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  config: Position
  apiKey: string
}

const Map = ({ apiKey, config, ...restProps }: Props) => {
  const containerRef = useRef(null)

  const scriptRef = useRef<HTMLScriptElement | null>(null)
  const [mapApi, setMapApi] = useState<MapApi | null>(null)
  const [marker, setMarker] = useState<Marker | null>(null)

  useEffect(() => {
    const scriptId = 'kakao-map-api'

    const kakaoMapScript = document.getElementById(scriptId)
    if (kakaoMapScript) return

    scriptRef.current = document.createElement('script')
    scriptRef.current.id = scriptId
    scriptRef.current.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`

    document.head.appendChild(scriptRef.current)
    // eslint-disable-next-line
  }, [])

  return (
    <div {...restProps} ref={containerRef}>
      <CreateMap
        scriptRef={scriptRef}
        containerRef={containerRef}
        mapApiState={[mapApi, setMapApi]}
        markerState={[marker, setMarker]}
        config={config}
      >
        <MoveMap mapApi={mapApi as MapApi} marker={marker as Marker} location={config.latLng}>
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
        </MoveMap>
      </CreateMap>
    </div>
  )
}

export default Map
