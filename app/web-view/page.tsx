import type { UserAgent } from '@plat/server'
import { MapService } from '@plat/map'
import { checkIsWebView } from '@plat/utils/webview'

const Page = ({
  searchParams,
}: {
  searchParams: {
    userAgent: string
  }
}) => {
  const userAgent: UserAgent = JSON.parse(searchParams.userAgent)

  return (
    <MapService
      isWebView={checkIsWebView(userAgent.os.name, userAgent.browser.name)}
    />
  )
}

export default Page
