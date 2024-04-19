"use client";
import KakaoMap from "@plat/Map/kakao";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  apiType: "kakao" | "naver" | "google";
}

const Map = ({ apiType, ...restProps }: Props) => {
  if (apiType === "kakao") {
    return <KakaoMap {...restProps} />;
  }
  return null;
};

export default Map;
