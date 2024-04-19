import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Environment, { getProcessEnv } from "@/components/server/Environment";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plat web app",
  description: "Plat 웹뷰",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const processEnv = getProcessEnv();
  return (
    <html lang="ko">
      <Environment>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${processEnv.KAKAO_JAVASCRIPT_APP_KEY}`}
          strategy="beforeInteractive"
        />
        <body className={inter.className}>{children}</body>
      </Environment>
    </html>
  );
}
