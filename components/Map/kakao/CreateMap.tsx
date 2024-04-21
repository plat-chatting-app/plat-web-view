"use client";
import { useEffect } from "react";
import settings from "@plat/settings";
import { Map as MapApi, Options } from "@plat/Map/kakao-map-api";

const {
  latLng: [DEFAULT_LAT, DEFAULT_LNG],
  level: DEFAULT_LEVEL,
} = settings.MAP_CONFIG;

interface Props extends React.PropsWithChildren {
  scriptRef: React.MutableRefObject<HTMLScriptElement | null>;
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
  mapApiState: [MapApi | null, (value: MapApi | null) => void];
}

const CreateMap = ({ scriptRef, containerRef, mapApiState, children }: Props) => {
  const [mapApi, setMapApi] = mapApiState;
  useEffect(() => {
    if (scriptRef.current === null || mapApi) return;

    scriptRef.current.onload = () => {
      window.kakao.maps.load(() => {
        const center = new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG);
        const mapOption: Options = {
          center,
          level: DEFAULT_LEVEL,
        };

        setMapApi(new window.kakao.maps.Map(containerRef.current, mapOption));
      });
    };
    // eslint-disable-next-line
  }, [mapApi]);

  return (
    <>
      <script ref={scriptRef} />
      {mapApi && children}
    </>
  );
};

export default CreateMap;
