import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Environment from "@/components/server/Environment";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plat web app",
  description: "Plat 웹뷰",
  icons: {
    icon: [
      {
        url: '/static/favicon.ico',
        type: 'image/x-icon',
        sizes: '64x64',
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Environment>
        <body className={inter.className}>{children}</body>
      </Environment>
    </html>
  );
}
