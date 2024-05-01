'use client'

import clsx from 'clsx'
import SpinnerLogo from './spinner-logo.svg'
import './Spinner.style.scss'

export type SpinnerProps = {
  className?: string
  color?: 'primary' | 'custom' | 'default'
  size?: 'sm' | 'md' | 'lg' | 'custom' | 'default'
}

const Spinner = ({
  className,
  color = 'default',
  size = 'default',
}: SpinnerProps) => {
  return (
    <div role="status">
      <SpinnerLogo
        className={clsx(
          'plat-spinner-style',
          color === 'default' ? 'primary' : color,
          size === 'default' ? 'md' : size,
          className,
        )}
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Spinner
