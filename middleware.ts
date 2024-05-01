import { NextRequest, NextResponse, userAgent } from 'next/server'
import { DEVICE_TYPE } from '@plat/device'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  if (!url.searchParams.get('viewport')) {
    const { device } = userAgent(request)
    const viewport =
      device.type === DEVICE_TYPE.mobile
        ? DEVICE_TYPE.mobile
        : DEVICE_TYPE.desktop
    url.searchParams.set('viewport', viewport ?? '')
    return NextResponse.rewrite(url)
  }
}

export const config = {
  matcher: '/web-view/:path*',
}
