'use client'

import Link from 'next/link'
import Button from '@plat-ui/Button'

export type ErrorProps = {
  pageType?: 'not-found' | 'error'
  description?: React.ReactNode
  onReset?: () => void
  replace?: {
    path?: string
    text?: string
  }
}

const SeeOther = ({ pageType, description, onReset, replace }: ErrorProps) => {
  return (
    <div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
      <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        {pageType && (
          <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
            {pageType === 'error'
              ? 'Error!'
              : pageType === 'not-found'
                ? '404'
                : null}
          </p>
        )}
        <p className="text-gray-500 mt-4 text-center">
          {pageType === 'not-found'
            ? description ?? 'Page Not Found'
            : pageType === 'error'
              ? description ?? '에러가 발생했습니다'
              : description}
        </p>
        <div className="flex flex-col space-y-4 w-full py-2 border-b-2">
          <div className="flex flex-row justify-center w-full">
            {onReset && (
              <Button
                variant="outlined"
                size="sm"
                className=""
                onClick={onReset}
              >
                재시도
              </Button>
            )}
          </div>
        </div>
        <Button
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150"
          as={(props) => (
            <Link href={replace?.path ?? '/'} {...props}>
              {replace?.text ?? '홈으로 돌아가기'}
            </Link>
          )}
        />
      </div>
    </div>
  )
}

export default SeeOther
