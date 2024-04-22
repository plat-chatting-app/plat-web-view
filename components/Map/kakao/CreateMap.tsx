'use client'
import { useEffect } from 'react'
import { Map as MapApi, Options } from '@plat/Map/kakao-map-api'
import { Position } from '@plat/Map/types'

interface Props extends React.PropsWithChildren {
  scriptRef: React.MutableRefObject<HTMLScriptElement | null>
  containerRef: React.MutableRefObject<HTMLDivElement | null>
  mapApiState: [MapApi | null, (value: MapApi | null) => void]
  config: Position
}

const CreateMap = ({
  scriptRef,
  containerRef,
  mapApiState,
  config,
  children,
}: Props) => {
  const [mapApi, setMapApi] = mapApiState
  useEffect(() => {
    if (scriptRef.current === null || mapApi) return

    scriptRef.current.onload = () => {
      window.kakao.maps.load(() => {
        const center = new window.kakao.maps.LatLng(...config.latLng)
        const mapOption: Options = {
          center,
          level: config.zoom,
        }

        setMapApi(new window.kakao.maps.Map(containerRef.current, mapOption))
      })
    }
    // eslint-disable-next-line
  }, [mapApi])

  return (
    <>
      <script ref={scriptRef} />
      {mapApi && children}
    </>
  )
}

export default CreateMap
