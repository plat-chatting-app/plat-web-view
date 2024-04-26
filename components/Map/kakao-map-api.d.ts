// abstract class

abstract class ALatLng {
  getLat: () => number
  getLng: () => number
  equals: (latlng: LatLng) => boolean
  toString: () => string
  toCoords: () => Coords
}

export class LatLng extends ALatLng {
  constructor(
    private latitude: number,
    private longitude: number,
  ) {
    super()
  }
}

type TLatLng = typeof LatLng

abstract class ACoords {
  getX: () => number
  getY: () => number
  equals: (coords: Coords) => boolean
  toString: () => string
  toLatLng: () => LatLng
}

export class Coords extends ACoords {
  constructor(
    private x: number,
    private y: number,
  ) {
    super()
  }
}

type TCoords = typeof Coords

abstract class AMap {
  setCenter: (latlng: LatLng) => void
  getCenter: () => LatLng
  setLevel: (
    level: number,
    options?: {
      animate?: boolean | { duration: number }
      anchor?: LatLng
    },
  ) => void
  getLevel: () => number
  setMapTypeId: (mapTypeId: MapTypeId) => void
  getMapTypeId: () => MapTypeId
  setBounds: (bounds: LatLngBounds) => void
  getBounds: () => LatLngBounds
  setMinLevel: (minLevel: number) => void
  setMaxLevel: (maxLevel: number) => void
  panBy: (dx: number, dy: number) => void
  panTo: (latlng_or_bounds: LatLng | LatLngBounds, padding?: number) => void
  addControl: (
    control: MapTypeControl | ZoomControl,
    position: ControlPosition,
  ) => void
  removeControl: (control: MapTypeControl | ZoomControl) => void
  setDraggable: (draggable: boolean) => void
  getDraggable: () => boolean
  setZoomable: (zoomable: boolean) => void
  getZoomable: () => boolean
  setProjectionId: (projectionId: ProjectionId) => void
  getProjectionId: () => ProjectionId
  relayout: () => void
  addOverlayMapTypeId: (mapTypeId: MapTypeId) => void
  removeOverlayMapTypeId: (mapTypeId: MapTypeId) => void
  setKeyboardShortcuts: (active: boolean) => void
  getKeyboardShortcuts: () => boolean
  setCopyrightPosition: (
    copyrightPosition: CopyrightPosition,
    reversed?: boolean,
  ) => void
  getProjection: () => MapProjection
  setCursor: (style: string) => void
}

export class Map extends AMap {
  constructor(
    private container: any,
    private options: Options,
  ) {
    super()
  }
}

type TMap = typeof Map

abstract class AMarker {
  setMap: (map_or_roadview: Map | unknown | null) => void
  getMap: () => Map
  setPosition: (position: LatLng | unknown) => void
  getPosition: () => LatLng
}

export class Marker extends AMarker {
  constructor(
    private map?: Map,
    private position?: LatLng,
  ) {
    super()
  }
}

type TMarker = typeof Marker

export interface Options {
  center: LatLng
  level?: number
  mapTypeId?: unknown
  draggable?: boolean
  scrollwheel?: boolean
  disableDoubleClick?: boolean
  disableDoubleClickZoom?: boolean
  projectionId?: string
  tileAnimation?: boolean
  keyboardShortcuts?: boolean | { speed: number }
}

export type MapBaseType = 'ROADMAP' | 'SKYVIEW' | 'HYBRID'
export type OverlayType =
  | 'OVERLAY'
  | 'TERRAIN'
  | 'TRAFFIC'
  | 'BICYCLE'
  | 'BICYCLE_HYBRID'
  | 'USE_DISTRICT'

export type MapTypeId = {
  MAP_TYPE_ID: MapBaseType | OverlayType | 'ROADVIEW'
}

export type LatLngBounds = unknown
export type MapTypeControl = unknown
export type ZoomControl = unknown
export type ControlPosition = unknown
export type CopyrightPosition = unknown

export type MapProjection = unknown
export type ProjectionId = unknown

export type MapEventAction =
  | 'center_changed'
  | 'zoom_start'
  | 'zoom_changed'
  | 'bounds_changed'
  | 'click'
  | 'dblclick'
  | 'rightclick'
  | 'mousemove'
  | 'dragstart'
  | 'drag'
  | 'dragstart'
  | 'dragend'
  | 'idle'
  | 'tilesloaded'
  | 'maptypeid_changed'

export type kakao = {
  maps: {
    LatLng: TLatLng
    Map: TMap
    Marker: TMarker
    load: (callback?: () => void) => void
    event: {
      addListener: (
        target: Map,
        type: MapEventAction,
        handler: () => void,
      ) => void
      removeListener: (
        target: Map,
        type: MapEventAction,
        handler: () => void,
      ) => void
    }
  }
}
