import type { DeviceType } from '@plat/device'
import { MapService, options } from '@plat/map'

type PageProps = {
  searchParams: {
    viewport: DeviceType
  }
}

const Page = ({ searchParams: { viewport } }: PageProps) => {
  if (viewport === 'mobile') {
    return '페이지 준비중입니다...'
  }
  return <MapService options={options} />
}

export default Page
