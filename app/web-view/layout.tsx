import ErrorBoundary from '@plat/ErrorBoundary'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <ErrorBoundary>{children}</ErrorBoundary>
}

export default Layout
