"use client";

import { useEffect, useRef } from "react";
import { getProcessEnv } from "@plat/utils";
import { LatLng, Map as MapInstance, Options } from "./api";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  const processEnv = getProcessEnv();
  const container = useRef(null);

  useEffect(() => {
    const isCreated = !!document.getElementById("kakao-map-api");
    if (isCreated) return;

    const script = document.createElement("script");
    script.id = "kakao-map-api";
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${processEnv.KAKAO_JAVASCRIPT_APP_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("container");

        const center: LatLng = new window.kakao.maps.LatLng(37.450701, 126.570667);
        const mapOption: Options = {
          center,
          level: 3,
        };

        const map: MapInstance = new window.kakao.maps.Map(mapContainer, mapOption);
      });
    };
  }, [container]);

  return <div id="container" ref={container} className="w-screen h-screen" />;
};

export default Map;
