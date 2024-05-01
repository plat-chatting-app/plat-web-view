import { NextRequest, NextResponse, userAgent } from 'next/server'
import { DEVICE_TYPE } from '@plat/device'

export const middleware = (request: NextRequest) => {
  const url = request.nextUrl
  if (!url.searchParams.get('_viewport') || !url.searchParams.get('_os')) {
    const { device, os } = userAgent(request)
    const viewport =
      device.type === DEVICE_TYPE.mobile
        ? DEVICE_TYPE.mobile
        : DEVICE_TYPE.desktop
    url.searchParams.set('_viewport', viewport)
    url.searchParams.set('_os', os.name ?? '')
    return NextResponse.rewrite(url)
  }
}

export const config = {
  matcher: '/web-view/:path*',
}
