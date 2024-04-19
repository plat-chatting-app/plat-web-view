"use client";
import { useEffect } from "react";
import settings from "@plat/settings";
import { Map as MapApi, LatLng, Options } from "./api";

const { latLng: [DEFAULT_LAT, DEFAULT_LNG], level: DEFAULT_LEVEL } = settings.MAP_CONFIG;

const useCreateMap = (
  scriptRef: React.MutableRefObject<HTMLScriptElement | null>,
  mapApiRef: React.MutableRefObject<MapApi | null>
) => {
  useEffect(() => {
    if (!scriptRef.current || mapApiRef.current) return;

    scriptRef.current.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("container");

        const center: LatLng = new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG);
        const mapOption: Options = {
          center,
          level: DEFAULT_LEVEL,
        };

        mapApiRef.current = new window.kakao.maps.Map(mapContainer, mapOption);
      });
    };
  }, [scriptRef, mapApiRef]);
};

export default useCreateMap;
