'use client'

interface Context {}

interface Toast {
  message?: string
  isOpen: boolean
  onConfirm?: () => void
  duration?: number
}
