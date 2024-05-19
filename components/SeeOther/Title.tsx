type Props = {
  children?: React.ReactNode | string
}

const Title = ({ children }: Props) => {
  return typeof children === 'string' ? (
    <p className="text-5xl md:text-7xl font-bold tracking-wider text-gray-300">
      {children}
    </p>
  ) : (
    children
  )
}

export default Title
