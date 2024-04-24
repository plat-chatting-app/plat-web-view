'use client'
import { useEffect } from 'react'
import { Map as MapApi, Marker, Options } from '@plat/Map/kakao-map-api'
import { Position } from '@plat/Map/types'

interface Props extends React.PropsWithChildren {
  script: HTMLScriptElement | null
  containerRef: React.MutableRefObject<HTMLDivElement | null>
  mapApiState: [MapApi | null, (value: MapApi | null) => void]
  markerState: [Marker | null, (value: Marker | null) => void]
  config: Position
}

const CreateMap = ({
  script,
  containerRef,
  mapApiState,
  markerState,
  config,
  children,
}: Props) => {
  const [mapApi, setMapApi] = mapApiState
  const [marker, setMarker] = markerState

  useEffect(() => {
    if (script === null || mapApi || marker) return
    script.onload = () => {
      window.kakao.maps.load(() => {
        const center = new window.kakao.maps.LatLng(...config.latLng)
        const mapOption: Options = {
          center,
          level: config.zoom,
        }

        setMapApi(new window.kakao.maps.Map(containerRef.current, mapOption))
        setMarker(new window.kakao.maps.Marker())
      })
    }
    // eslint-disable-next-line
  }, [mapApi, marker, script])

  return <>{mapApi && children}</>
}

export default CreateMap
