'use client'

import { useEffect, useState } from 'react'
import { WebViewDataContext } from '@plat/webview/context'
import WebViewLocation from '@plat/webview/WebViewLocation'

export const WebViewDataProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    const handler = (ev: any) => {
      if (typeof ev === 'undefined') {
        console.error('message event is undefined')
        return
      }
      setMessage(ev.data)
    }
    window.addEventListener('message', handler)
    return window.removeEventListener('message', handler)
  }, [])
  return (
    <WebViewDataContext.Provider value={message}>
      {children}
    </WebViewDataContext.Provider>
  )
}

export { WebViewDataContext, WebViewLocation }
