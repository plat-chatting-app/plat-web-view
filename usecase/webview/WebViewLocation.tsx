'use client'

import { useContext, useEffect, useState } from 'react'
import { WebViewDataContext } from '@plat/webview/context'
import { WebViewAction, WebViewState, WebViewData } from '@plat/webview/api'

export interface WebViewLocationState {
  isLoading: boolean
  data?: [number, number]
  error?: string | unknown
}

type Props = {
  children?: (context: WebViewLocationState) => React.ReactNode
}

const WebViewLocation = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<[number, number]>()
  const [error, setError] = useState<string | unknown>()

  const message = useContext(WebViewDataContext)

  useEffect(() => {
    if (!message) {
      setData(undefined)
      setIsLoading(false)
      setError(undefined)
      return
    }

    if (!message.includes(WebViewAction.LOCATION)) {
      return
    }

    if (message.startsWith(WebViewState.Loading)) {
      setIsLoading(true)
      return
    }

    if (message.includes(WebViewState.Error)) {
      setError(JSON.parse(message))
      return
    }

    const payload: WebViewData<[number, number]> = JSON.parse(message)
    setData(payload.result)
  }, [message])

  return (
    <>
      {children?.({
        isLoading,
        data,
        error,
      })}
    </>
  )
}

export default WebViewLocation
