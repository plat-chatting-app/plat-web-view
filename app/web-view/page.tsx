import type { DeviceType } from '@plat/device'
import { MapService } from '@plat/map'

type PageProps = {
  searchParams: {
    _viewport: DeviceType
    _os: string
    _browser?: string | undefined
  }
}

const Page = ({ searchParams: { _viewport, _os, _browser } }: PageProps) => {
  return <MapService device={_viewport} os={_os} browser={_browser} />
}

export default Page
