import { NextRequest, NextResponse, userAgent } from 'next/server'

export const middleware = (request: NextRequest) => {
  const url = request.nextUrl
  const userAgentPayload = userAgent(request)
  url.searchParams.set('userAgent', JSON.stringify(userAgentPayload))
  return NextResponse.rewrite(url)
}
