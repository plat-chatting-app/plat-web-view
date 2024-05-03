import { WebViewProvider } from '@plat/webview'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <WebViewProvider>{children}</WebViewProvider>
}

export default Layout
