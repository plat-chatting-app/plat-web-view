'use client'
import KakaoMap from '@plat/Map/kakao'

export type MapProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  apiType: 'kakao' | 'naver' | 'google'
  location?: [number, number]
  zoom?: number
  apiKey: string
  isLoading?: boolean
  fallback?: React.ReactNode
}

const Map = ({
  apiType,
  apiKey,
  location,
  zoom,
  isLoading,
  fallback,
  ...divProps
}: MapProps) => {
  if (isLoading) return fallback ?? null
  if (!location) return fallback ?? null

  if (apiType === 'kakao') {
    return (
      <KakaoMap apiKey={apiKey} location={location} zoom={zoom} {...divProps} />
    )
  }
  return null
}

export default Map
