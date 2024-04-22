import Map from '@plat/Map'
import { getProcessEnv } from '@plat/utils'

const Page = () => {
  const processEnv = getProcessEnv()

  return (
    <Map
      apiType="kakao"
      apiKey={processEnv.KAKAO_JAVASCRIPT_APP_KEY as string}
      className="w-full h-screen"
    />
  )
}

export default Page
