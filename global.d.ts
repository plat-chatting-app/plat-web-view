import { kakao } from "@plat/Map/kakao-map-api";

export {};

declare global {
  interface Window {
    kakao: kakao;
  }
}
