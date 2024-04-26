'use client'

import { colors } from 'tailwind.config'

export type ToastProps = {
  message?: string
  isOpen: boolean
  onConfirm?: () => void
  duration?: number
  color?: keyof typeof colors
  className?: React.ReactNode
}

const Toast = (props: ToastProps) => {
  return <></>
}
