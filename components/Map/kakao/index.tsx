"use client";
import { useEffect, useRef } from "react";
import { getProcessEnv } from "@plat/utils";
import { Map as MapApi } from "./api";
import useCreateMap from "./useCreateMap";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Map = (props: Props) => {
  const processEnv = getProcessEnv();
  const container = useRef(null);

  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const mapApiRef = useRef<MapApi | null>(null);

  useEffect(() => {
    if (!!scriptRef.current) return;

    scriptRef.current = document.createElement("script");
    scriptRef.current.id = "kakao-map-api";
    scriptRef.current.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${processEnv.KAKAO_JAVASCRIPT_APP_KEY}&autoload=false`;

    document.head.appendChild(scriptRef.current);
    // eslint-disable-next-line
  }, [container]);

  useCreateMap(scriptRef, mapApiRef);

  return <div {...props} id="container" ref={container} />;
};

export default Map;
