'use client'

import SeeOther from '@plat-ui/SeeOther'

type Props = {
  error: Error
  reset: () => void
}

const GlobalError = ({ error, reset }: Props) => {
  return (
    <SeeOther pageType="error" description={error.message} onReset={reset} />
  )
}

export default GlobalError
