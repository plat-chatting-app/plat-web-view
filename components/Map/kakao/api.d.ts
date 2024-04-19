export interface LatLng {
  getLat: () => number;
  getLng: () => number;
  equals: (latlng: LatLng) => boolean;
  toString: () => string;
  toCoords: () => Coords;
}

export interface Coords {
  getX: () => number;
  getY: () => number;
  equals: (coords: Coords) => boolean;
  toString: () => string;
  toLatLng: () => LatLng;
}

export interface Options {
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

export type MapBaseType = 'ROADMAP' | 'SKYVIEW' | 'HYBRID';
export type OverlayType = 'OVERLAY' | 'TERRAIN' | 'TRAFFIC' | 'BICYCLE' | 'BICYCLE_HYBRID' | 'USE_DISTRICT';

export type MapTypeId = {
  MAP_TYPE_ID: MapBaseType | OverlayType | 'ROADVIEW';
}

export interface Map {
  setCenter: (latlng: LatLng) => void;
  getCenter: () => LatLng;
  setLevel: (level: number, options?: {
    animate?: boolean | { duration: number };
    anchor?: LatLng;
  }) => void;
  getLevel: () => number;
  setMapTypeId: (mapTypeId: MapTypeId) => void;
  getMapTypeId: () => MapTypeId;
}

export interface kakao {
  maps: {
    Map: Map;
    LatLng: LatLng;
  }
}
