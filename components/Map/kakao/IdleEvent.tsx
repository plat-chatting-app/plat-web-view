'use client'
import { useEffect } from 'react'
import { Map as MapApi } from '@plat/Map/kakao-map-api'

interface Props {
  mapApi: MapApi
  events: ((target: MapApi) => Promise<void>)[]
}

const IdleEvent = ({ mapApi, events }: Props) => {
  useEffect(() => {
    if (mapApi === null) return
    const getHandler = (mapApi: MapApi) => () => {
      const promises = events.map((event) => event(mapApi))
      Promise.all(promises)
    }

    window.kakao.maps.event.addListener(mapApi, 'idle', getHandler(mapApi))

    return () => {
      window.kakao.maps.event.removeListener(mapApi, 'idle', getHandler(mapApi))
    }
  }, [mapApi, events])

  return null
}

export default IdleEvent
