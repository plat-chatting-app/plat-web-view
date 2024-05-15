import type { UserAgent } from '@plat/server'
import { MapService } from '@plat/map'
import { checkIsWebView } from '@plat/utils/webview'
import SwipeableDrawer from '@plat-ui/SwipeableDrawer'

const Page = ({
  searchParams,
}: {
  searchParams: {
    userAgent: string
  }
}) => {
  const userAgent: UserAgent = JSON.parse(searchParams.userAgent)

  return (
    <div className="w-full h-full">
      <MapService
        isWebView={checkIsWebView(userAgent.os.name, userAgent.browser.name)}
      />
      <SwipeableDrawer
        className="md:max-w-screen-md mx-auto h-full"
        startPoint={150}
      >
        <div className="w-full h-full"></div>
      </SwipeableDrawer>
    </div>
  )
}

export default Page
