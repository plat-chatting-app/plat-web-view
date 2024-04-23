'use client'
import KakaoMap from '@plat/Map/kakao'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  apiType: 'kakao' | 'naver' | 'google'
  config: {
    latLng: [number, number]
    zoom: number
  }
  apiKey: string
  isLoading?: boolean
  fallback?: React.ReactNode
}

const Map = ({ apiType, apiKey, config, isLoading, fallback, ...restProps }: Props) => {
  if (isLoading) return fallback ?? null
  if (apiType === 'kakao') {
    return (
      <KakaoMap apiKey={apiKey} config={config} {...restProps} />
    )
  }
  return null
}

export default Map
