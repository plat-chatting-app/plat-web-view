'use client'
import KakaoMap from '@plat/Map/kakao'
import { memo } from 'react'

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
}

const Map = ({ apiType, apiKey, config, ...restProps }: Props) => {
  if (apiType === 'kakao') {
    return <KakaoMap apiKey={apiKey} config={config} {...restProps} />
  }
  return null
}

export default memo(Map)
