'use client'
import { useEffect } from 'react'
import { Map as MapApi, Marker, Options } from '@plat/Map/kakao-map-api'

interface Props extends React.PropsWithChildren {
  script: HTMLScriptElement | null
  containerRef: React.MutableRefObject<HTMLDivElement | null>
  mapApiState: [MapApi | null, (value: MapApi | null) => void]
  markerState: [Marker | null, (value: Marker | null) => void]
  location: [number, number]
  zoom?: number
}

const MapSetting = ({
  script,
  containerRef,
  mapApiState,
  markerState,
  location,
  zoom,
  children,
}: Props) => {
  const [mapApi, setMapApi] = mapApiState
  const [marker, setMarker] = markerState

  useEffect(() => {
    if (script === null || mapApi || marker) return
    script.onload = () => {
      window.kakao.maps.load(() => {
        const center = new window.kakao.maps.LatLng(...location)
        const mapOption: Options = {
          center,
          level: zoom ?? 3,
        }

        setMapApi(new window.kakao.maps.Map(containerRef.current, mapOption))
        setMarker(new window.kakao.maps.Marker())
      })
    }
    // eslint-disable-next-line
  }, [mapApi, marker, script])

  return <>{mapApi && children}</>
}

export default MapSetting
