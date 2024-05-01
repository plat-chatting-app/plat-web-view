'use client'

import clsx from 'clsx'
import './Button.style.scss'

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'contained' | 'outlined'
  color?: 'primary' | 'default' | 'custom'
  size?: 'sm' | 'md' | 'lg' | 'default' | 'custom'
  as?: <T = any>(props: T) => JSX.Element
}

const Button = ({
  variant = 'contained',
  color = 'default',
  size = 'default',
  className,
  children,
  as,
  ...buttonProps
}: ButtonProps) => {
  const tailwindCss: string = clsx(
    'plat-button-style',
    color === 'default' ? 'primary' : color,
    size === 'default' ? 'md' : size,
    variant,
  )

  if (as) {
    const Parent = as
    return (
      <Parent className={clsx(tailwindCss, className)} {...buttonProps}>
        {children}
      </Parent>
    )
  }
  return (
    <button className={clsx(tailwindCss, className)} {...buttonProps}>
      {children}
    </button>
  )
}

export default Button
