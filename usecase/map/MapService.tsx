'use client'

import Loading from '@plat/Loading'
import Map from '@plat-ui/Map'
import { Geolocation } from '@modules/geolocation'
import type { DeviceType } from '@plat/device'
import options from '@plat/map/options'
import SeeOther from '@plat-ui/SeeOther'
import Image from 'next/image'

interface Props {
  device: DeviceType
  os?: string
}

const MapService = ({ device, os }: Props) => {
  return (
    <SeeOther
      title={
        <Image
          src="/static/plat-logo-nobg.svg"
          alt="plat-logo"
          width={40}
          height={40}
        />
      }
      description={
        <span>
          <p>페이지 준비중입니다...</p>
          <p>현재 OS: {os}</p>
        </span>
      }
    />
  )
  // if (device === 'mobile') {
  //   return (
  //     <SeeOther
  //       description={
  //         <span>
  //           <p>페이지 준비중입니다...</p>
  //           <p>현재 OS: {os}</p>
  //         </span>
  //       }
  //     />
  //   )
  // }

  // if (device === 'desktop') {
  //   return (
  //     <Geolocation options={options.geolocation}>
  //       {({ isLoading, position, error }) => (
  //         <Map
  //           isLoading={isLoading}
  //           fallback={<Loading />}
  //           error={error && new Error(error.message)}
  //           apiType="kakao"
  //           apiKey={options.kakao.apiKey}
  //           location={
  //             position && [position.coords.latitude, position.coords.longitude]
  //           }
  //           zoom={options.kakao.zoom}
  //           className="w-full h-screen"
  //         />
  //       )}
  //     </Geolocation>
  //   )
  // }
  // throw new Error('맵 로딩 중에 에러가 발생했습니다')
}

export default MapService
