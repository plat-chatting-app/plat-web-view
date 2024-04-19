"use client";

import KakaoMap from "./kakao";

interface Props {
  apiType: "kakao" | "naver" | "google";
}

const Map = ({ apiType }: Props) => {
  if (apiType === "kakao") {
    return <KakaoMap />
  }
  return null;
}

export default Map;
