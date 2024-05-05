export interface WebViewData<T> {
  readonly type: WebViewActionKey
  readonly result: T
}

export type WebViewMessage = string | null

export const WebViewAction = {
  LOCATION: 'LOCATION',
} as const

export type WebViewActionKey =
  (typeof WebViewAction)[keyof typeof WebViewAction]

export const WebViewState = {
  Loading: 'loading',
  Error: 'error',
}
