'use client'

import clsx from 'clsx'
import './Button.style.scss'

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  theme?: 'primary' | 'default' | 'custom'
  size?: 'sm' | 'md' | 'lg' | 'default' | 'custom'
}

const Button = ({
  theme = 'default',
  size = 'default',
  children,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'focus:outline-none',
        theme === 'default' ? 'primary' : theme,
        size === 'default' ? 'md' : size,
      )}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

export default Button
