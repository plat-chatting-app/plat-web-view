'use client'

import Spinner from '@plat-ui/Spinner'
import Image from 'next/image'

const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-8 items-center justify-center">
      <Image
        src="/static/plat-logo-nobg.svg"
        alt="plat-logo"
        width={40}
        height={40}
      />
      <div className="flex flex-row items-center space-x-2">
        <span>로딩중입니다...</span>
        <Spinner size="custom" className="w-6 h-6" />
      </div>
    </div>
  )
}

export default Loading
