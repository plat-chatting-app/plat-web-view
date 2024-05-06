import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.scss'
import clsx from 'clsx'

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '플랫',
  description: '지도 안에서 만나는 이야기',
  icons: {
    icon: [
      {
        url: '/static/favicon.ico',
        type: 'image/x-icon',
        sizes: '64x64',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body
        className={clsx(notoSansKr.className, 'w-screen h-screen bg-orange-50')}
        suppressHydrationWarning={true}
      >
        <main className="pt-1.5 w-full xl:max-w-screen-md mx-auto h-full bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  )
}
