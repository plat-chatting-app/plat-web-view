import { Environment } from '@plat/server'

const RootTemplate = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <Environment>{children}</Environment>
}

export default RootTemplate
