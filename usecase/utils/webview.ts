export const checkIsWebView = (os?: string, browser?: string) => {
  return (
    (os === 'iOS' && browser === 'WebKit') ||
    (os === 'Android' && browser === 'Chrome WebView')
  )
}
