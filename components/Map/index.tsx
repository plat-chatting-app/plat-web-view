'use client'
import KakaoMap from '@modules/kakao-map'

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
  error?: Error
}

const Map = ({
  apiType,
  apiKey,
  location,
  zoom,
  isLoading,
  fallback,
  error,
  ...divProps
}: MapProps) => {
  if (error) throw error

  if (isLoading) return fallback ?? null
  if (!location) return fallback ?? null

  if (apiType === 'kakao') {
    return (
      <KakaoMap apiKey={apiKey} location={location} zoom={zoom} {...divProps} />
    )
  }

  throw new Error('맵 타입을 찾을 수 없습니다')
}

export default Map
