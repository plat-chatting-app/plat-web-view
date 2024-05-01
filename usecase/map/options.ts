import type { GeolocationOptions } from '@modules/geolocation'
import { getProcessEnv } from '@plat/server/Environment'

const geolocation: GeolocationOptions = {
  enableHighAccuracy: true,
  maximumAge: 10000,
  timeout: 5000,
} as const

const _processEnv = getProcessEnv()
if (typeof _processEnv.KAKAO_JAVASCRIPT_APP_KEY !== 'string') {
  throw new Error('Environment 설정이 필요합니다')
}

const kakao = {
  apiKey: _processEnv.KAKAO_JAVASCRIPT_APP_KEY,
  zoom: 3,
} as const

const options = {
  geolocation,
  kakao,
}

export default options
