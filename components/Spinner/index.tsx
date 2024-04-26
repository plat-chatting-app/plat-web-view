'use client'

import clsx from 'clsx'
import SpinnerLogo from './spinner-logo.svg'
import './Spinner.style.scss'

export type SpinnerProps = {
  className?: string
  theme?: 'primary' | 'custom' | 'default'
  size?: 'sm' | 'md' | 'lg' | 'custom' | 'default'
}

const Spinner = ({
  className,
  theme = 'default',
  size = 'default',
}: SpinnerProps) => {
  return (
    <div role="status">
      <SpinnerLogo
        className={clsx(
          'plat-spinner-style',
          theme === 'default' ? 'primary' : theme,
          size === 'default' ? 'md' : size,
          className,
        )}
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Spinner
