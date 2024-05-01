import type { DeviceType } from '@plat/device'
import { MapService, options } from '@plat/map'

type PageProps = {
  searchParams: {
    _viewport: DeviceType
    _os: string
  }
}

const Page = ({ searchParams: { _viewport, _os } }: PageProps) => {
  if (_viewport === 'mobile') {
    return (
      <div>
        <p>페이지 준비중입니다...</p>
        <p>현재 OS: {_os}</p>
      </div>
    )
  }
  return <MapService options={options} />
}

export default Page
