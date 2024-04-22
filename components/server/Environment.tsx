export const getProcessEnv = () => ({
  KAKAO_JAVASCRIPT_APP_KEY: process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_APP_KEY,
});

const Environment = ({ children }: { children: React.ReactNode }) => {
  const processEnv = getProcessEnv();
  const isEnvSettled = Object.values(processEnv).every(
    (value) => typeof value === "string",
  );
  return isEnvSettled && <>{children}</>;
};

export default Environment;
