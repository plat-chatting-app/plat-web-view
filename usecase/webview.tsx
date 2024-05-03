'use client'

import { createContext, useEffect, useState } from 'react'

export interface WebViewContextValue {
  message: string | null
}

export const WebViewContext = createContext<WebViewContextValue>({
  message: null,
})

export const WebViewProvider = ({
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
    <WebViewContext.Provider
      value={{
        message,
      }}
    >
      {children}
    </WebViewContext.Provider>
  )
}
