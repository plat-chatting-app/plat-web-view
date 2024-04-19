'use client';

import { useEffect, useRef } from "react";
import { getProcessEnv } from "@/components/server/Environment";

declare global {
  interface Window {
    kakao: any;
  }
}

interface LatLng {
  getLat: () => number;
  getLng: () => number;
  equals: (latlng: LatLng) => boolean;
  toString: () => string;
  toCoords: () => Coords;
}

interface Coords {
  getX: () => number;
  getY: () => number;
  equals: (coords: Coords) => boolean;
  toString: () => string;
  toLatLng: () => LatLng;
}

interface Options {
  center: LatLng;
  level?: number;
  mapTypeId?: unknown;
  draggable?: boolean;
  scrollwheel?: boolean;
  disableDoubleClick?: boolean;
  disableDoubleClickZoom?: boolean;
  projectionId?: string;
  tileAnimation?: boolean;
  keyboardShortcuts?: boolean | { speed: number };
}

const Map = () => {
  const processEnv = getProcessEnv();
  const container = useRef(null);

  useEffect(() => {
    const isCreated = !!document.getElementById('kakao-map-api');
    if (isCreated) return;

    const script = document.createElement('script');
    script.id = 'kakao-map-api';
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${processEnv.KAKAO_JAVASCRIPT_APP_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('container');
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.450701, 126.570667),
          level: 3
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);
      })
    }
  }, [container]);

  return (
    <div id="container" ref={container} className="w-screen h-screen" />
  )
}

export default Map;
