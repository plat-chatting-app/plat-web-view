'use client';

import { useRef } from "react";

declare global {
  interface Window {
    kakao: any;
  }

  interface Document {}
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
  const container = useRef(null);

  return (
    <div ref={container} className="w-full h-full" />
  )
}

export default Map;

const MAP_ID = 'map';
const DEFAULT_LAT_LNG = [33.450701, 126.570667];

const container = document.getElementById(MAP_ID);
const options: Options = {
  center: new window.kakao.maps.LatLng(DEFAULT_LAT_LNG[0], DEFAULT_LAT_LNG[1]),
  level: 3,
}

export const mapApi = new window.kakao.maps.Map(container, options);
