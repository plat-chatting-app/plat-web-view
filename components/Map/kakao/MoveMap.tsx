import { Map, Marker } from '@plat/Map/kakao-map-api'
import { useEffect } from 'react'

interface Props {
  mapApi: Map
  marker: Marker
  location: [number, number]
  children?: React.ReactNode
}

const MoveMap = ({ mapApi, marker, location, children }: Props) => {
  useEffect(() => {
    const latLng = new window.kakao.maps.LatLng(...location)
    mapApi.panTo(latLng)
    marker.setMap(null)
    marker.setPosition(latLng)
    marker.setMap(mapApi)
    // eslint-disable-next-line
  }, [location])
  return <>{children}</>
}

export default MoveMap
