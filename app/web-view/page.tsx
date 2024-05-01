import type { DeviceType } from '@plat/device'
import { MapService } from '@plat/map'

type PageProps = {
  searchParams: {
    _viewport: DeviceType
    _os: string
  }
}

const Page = ({ searchParams: { _viewport, _os } }: PageProps) => {
  return <MapService device={_viewport} os={_os} />
}

export default Page
