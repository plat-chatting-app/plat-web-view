'use client'

import PlatError from '@plat-ui/Error'

type Props = {
  error: Error
  reset: () => void
}

const GlobalError = ({ error, reset }: Props) => {
  return (
    <PlatError pageType="error" description={error.message} onReset={reset} />
  )
}

export default GlobalError
