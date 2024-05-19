import { createContext } from 'react'
import { WebViewMessage } from '@plat/webview/api'

export const WebViewDataContext = createContext<WebViewMessage>(null)
