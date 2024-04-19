"use client";
import { useEffect } from "react";
import { AMap as MapApi } from "@plat/Map/kakao-map-api";

interface Props {
  mapApiRef: React.MutableRefObject<MapApi | null>;
}

const MapEvent = ({
  mapApiRef
}: Props) => {
  useEffect(() => {
    window.kakao.maps.event.addListener(mapApiRef)
  }, []);
};

export default MapEvent;
