import { WebViewDataProvider } from '@plat/webview'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <WebViewDataProvider>{children}</WebViewDataProvider>
}

export default Layout
