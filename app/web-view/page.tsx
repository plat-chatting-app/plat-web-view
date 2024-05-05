import { MapService } from '@plat/map'
import type { UserAgent } from '@plat/server'
import { checkIsWebView } from '@plat/utils/webview'

const Page = ({
  searchParams,
}: {
  searchParams: {
    userAgent: string
  }
}) => {
  const userAgent: UserAgent = JSON.parse(searchParams.userAgent)
  const { os, browser } = userAgent

  return (
    <MapService
      isWebView={checkIsWebView(os.name, browser.name)}
      os={os.name}
      deviceEnv={browser.name}
    />
  )
}

export default Page
