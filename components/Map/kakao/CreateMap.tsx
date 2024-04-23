'use client'
import { useEffect } from 'react'
import { Map as MapApi, Marker, Options } from '@plat/Map/kakao-map-api'
import { Position } from '@plat/Map/types'

interface Props extends React.PropsWithChildren {
  scriptRef: React.MutableRefObject<HTMLScriptElement | null>
  containerRef: React.MutableRefObject<HTMLDivElement | null>
  mapApiState: [MapApi | null, (value: MapApi | null) => void]
  markerState: [Marker | null, (value: Marker | null) => void]
  config: Position
}

const CreateMap = ({
  scriptRef,
  containerRef,
  mapApiState,
  markerState,
  config,
  children,
}: Props) => {
  const [mapApi, setMapApi] = mapApiState
  const [marker,setMarker] = markerState
  
  useEffect(() => {
    if (scriptRef.current === null || mapApi || marker) return
    scriptRef.current.onload = () => {
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
  }, [mapApi, marker])

  return (
    <>
      {mapApi && children}
    </>
  )
}

export default CreateMap
