"use client";
import { useEffect, useRef, useState } from "react";
import { getProcessEnv } from "@plat/utils";
import { Map as MapApi } from "@plat/Map/kakao-map-api";
import CreateMap from "@plat/Map/kakao/CreateMap";
import IdleEvent from "@plat/Map/kakao/IdleEvent";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Map = (props: Props) => {
  const processEnv = getProcessEnv();
  const containerRef = useRef(null);

  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const [mapApi, setMapApi] = useState<MapApi | null>(null);

  useEffect(() => {
    if (!scriptRef.current) return;

    scriptRef.current.id = "kakao-map-api";
    scriptRef.current.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${processEnv.KAKAO_JAVASCRIPT_APP_KEY}&autoload=false`;

    document.head.appendChild(scriptRef.current);
    // eslint-disable-next-line
  }, []);

  return (
    <div {...props} ref={containerRef}>
      <CreateMap
        scriptRef={scriptRef}
        containerRef={containerRef}
        mapApiState={[mapApi, setMapApi]}
      >
        <IdleEvent
          mapApi={mapApi!}
          events={[
            (_map) => {
              const level = _map.getLevel();
              const latlng = _map.getCenter();

              const message = `지도 레벨은 ${level} 이고, 중심 좌표는 위도 ${latlng.getLat()}, 경도 ${latlng.getLng()} 입니다.`;

              return Promise.resolve(console.log(message));
            },
          ]}
        />
      </CreateMap>
    </div>
  );
};

export default Map;
