'use client'

import Link from 'next/link'
import Button from '@plat-ui/Button'
import Title from '@plat-ui/SeeOther/Title'
import clsx from 'clsx'

export type ErrorProps = {
  pageType?: 'not-found' | 'error'
  title?: React.ReactNode
  description?: React.ReactNode
  onReset?: () => void
  noReplace?: boolean
  replace?: {
    path?: string
    text?: string
  }
}

const SeeOther = ({
  pageType,
  description,
  onReset,
  noReplace,
  replace,
  title,
}: ErrorProps) => {
  return (
    <div className="bg-gray-200 w-full px-8 mobile-l:px-20 sm:px-0 h-screen flex items-center justify-center">
      <div className="bg-white border border-gray-200 w-full sm:max-w-md flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        {pageType && !title ? (
          <Title>
            {pageType === 'error'
              ? 'Error!'
              : pageType === 'not-found'
                ? '404'
                : null}
          </Title>
        ) : (
          <Title>{title}</Title>
        )}
        <span className="text-gray-500 mt-4 text-center">
          {pageType === 'not-found'
            ? description ?? 'Page Not Found'
            : pageType === 'error'
              ? description ?? '에러가 발생했습니다'
              : description}
        </span>
        <div
          className={clsx(
            'flex flex-col space-y-4 w-full py-2',
            !noReplace && 'border-b-2',
          )}
        >
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
        {!noReplace && (
          <Button
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150"
            as={(props) => (
              <Link href={replace?.path ?? '/'} {...props}>
                {replace?.text ?? '홈으로 돌아가기'}
              </Link>
            )}
          />
        )}
      </div>
    </div>
  )
}

export default SeeOther
