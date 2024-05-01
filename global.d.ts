import { kakao } from '@modules/kakao-map/api'

export {}

declare global {
  interface Window {
    kakao: kakao
  }
}
