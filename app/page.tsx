'use client'

import Button from '@plat/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      role="navigation"
      className="w-full h-full flex items-center justify-center"
    >
      <div className="flex flex-col items-center space-y-8">
        <div className="flex flex-row items-center space-x-2">
          <Image
            src="/static/plat-logo-nobg.svg"
            alt="logo"
            width={40}
            height={40}
          />
          <div role="heading" aria-level={1} className="text-2xl">
            Plat 플랫
          </div>
        </div>
        <Button as={(props) => <Link href="/web-view" {...props} />}>
          플랫 바로가기
        </Button>
      </div>
    </div>
  )
}
