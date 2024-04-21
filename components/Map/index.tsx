"use client";
import KakaoMap from "@plat/Map/kakao";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  apiType: "kakao" | "naver" | "google";
  apiKey: string;
}

const Map = ({ apiType, apiKey, ...restProps }: Props) => {
  if (apiType === "kakao") {
    return <KakaoMap apiKey={apiKey} {...restProps} />;
  }
  return null;
};

export default Map;
