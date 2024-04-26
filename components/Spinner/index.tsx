import clsx from 'clsx'
import SpinnerLogo from './spinner-logo.svg'
import './Spinner.style.scss'

interface Props {
  className?: string
  theme?: 'primary' | 'custom'
  size?: 'sm' | 'md' | 'lg' | 'custom'
}

const Spinner = ({ className, theme, size }: Props) => {
  const defaultTheme = 'primary'
  const defaultSize = 'sm'

  return (
    <div role="status">
      <SpinnerLogo
        className={clsx(
          'animate-spin',
          theme ?? defaultTheme,
          size ?? defaultSize,
          className,
        )}
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Spinner
