'use client'
import KakaoMap from '@plat/Map/kakao'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
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
  ...restProps
}: Props) => {
  if (isLoading) return fallback ?? null
  if (!location) return fallback ?? null

  if (apiType === 'kakao') {
    return (
      <KakaoMap
        apiKey={apiKey}
        location={location}
        zoom={zoom}
        {...restProps}
      />
    )
  }
  return null
}

export default Map
