import clsx from 'clsx'
import SpinnerLogo from './spinner-logo.svg'

interface Props {
  className?: string
}

const Spinner = ({ className }: Props) => {
  return (
    <div role="status">
      <SpinnerLogo
        className={clsx(
          'animate-spin w-12 h-12 text-gray-200 dark:text-gray-600 fill-primary',
          className,
        )}
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Spinner
