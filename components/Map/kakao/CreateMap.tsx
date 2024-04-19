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
  mapApiRef: React.MutableRefObject<MapApi | null>;
}

const CreateMap = ({
  scriptRef,
  mapApiRef,
  children
}: Props) => {
  useEffect(() => {
    if (!scriptRef.current || mapApiRef.current) return;

    scriptRef.current.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("container");

        const center = new window.kakao.maps.LatLng(
          DEFAULT_LAT,
          DEFAULT_LNG
        );
        const mapOption: Options = {
          center,
          level: DEFAULT_LEVEL,
        };

        mapApiRef.current = new window.kakao.maps.Map(mapContainer, mapOption);
      });
    };
  }, [scriptRef, mapApiRef]);

  return <>{children}</>
};

export default CreateMap;
