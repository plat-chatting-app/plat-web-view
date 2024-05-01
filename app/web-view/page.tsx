import type { DeviceType } from '@usecase/device'
import { MapService, options } from '@usecase/map'

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
