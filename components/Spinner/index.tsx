'use client'

import clsx from 'clsx'
import SpinnerLogo from './spinner-logo.svg'
import './Spinner.style.scss'

interface Props {
  className?: string
  theme?: 'primary' | 'custom' | 'default'
  size?: 'sm' | 'md' | 'lg' | 'custom' | 'default'
}

const Spinner = ({ className, theme = 'default', size = 'default' }: Props) => {
  return (
    <div role="status">
      <SpinnerLogo
        className={clsx(
          'animate-spin',
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
