import Map from "@plat/Map";
import { getProcessEnv } from "@plat/utils";

const Page = () => {
  const processEnv = getProcessEnv();

  return (
    <Map
      apiType="kakao"
      apiKey={processEnv.KAKAO_JAVASCRIPT_APP_KEY as string}
      className="w-screen h-screen"
    />
  );
};

export default Page;
