'use client'

import { useEffect, useMemo, useState } from 'react'
import { Anchor, SwipeDirection } from '@plat-ui/SwipeableDrawer/utils'
import clsx from 'clsx'

export const PULLER_SIZE = 40

export interface PullerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  onSwipeStart?: () => void
  onSwipe: (value: number) => void
  onSwipeEnd?: () => void
  direction: (typeof SwipeDirection)[Anchor]
  pullerHandle?: React.ReactNode
  size?: number
  className?: string
}

const Puller = ({
  onSwipeStart,
  onSwipe,
  onSwipeEnd,
  direction,
  pullerHandle,
  size,
  className,
  ...restProps
}: PullerProps) => {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const distance = useMemo(() => {
    if (!touchStart || !touchEnd) return 0
    return touchEnd - touchStart
  }, [touchStart, touchEnd])

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (ev) => {
    ev.stopPropagation()

    setTouchEnd(null)
    setTouchStart(
      Boolean(direction[0])
        ? ev.targetTouches[0].clientX
        : ev.targetTouches[0].clientY,
    )
    onSwipeStart?.()
  }

  const handleMove: React.TouchEventHandler<HTMLDivElement> = (ev) => {
    ev.stopPropagation()

    setTouchEnd(
      Boolean(direction[0])
        ? ev.targetTouches[0].clientX
        : ev.targetTouches[0].clientY,
    )
  }

  const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = (ev) => {
    ev.stopPropagation()

    setTouchStart(null)
    setTouchEnd(null)
    onSwipeEnd?.()
  }

  useEffect(() => {
    if (!touchStart || !touchEnd) return
    const multiple = direction[0] || direction[1]
    onSwipe(distance * multiple)
    // eslint-disable-next-line
  }, [distance, touchStart, touchEnd])

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleMove}
      onTouchEnd={handleTouchEnd}
      style={{
        ...(Boolean(direction[0])
          ? { width: size ?? PULLER_SIZE, height: '100%' }
          : { height: size ?? PULLER_SIZE, width: '100%' }),
        ...restProps.style,
      }}
      {...restProps}
    >
      {pullerHandle ?? (
        <span
          className={clsx(
            'absolute rounded-lg bg-gray-300',
            Boolean(direction[1])
              ? 'w-1/12 h-1 -translate-x-1/2 left-1/2'
              : 'w-10 h-1 -translate-y-1/2 top-1/2 rotate-90',
            direction[1] > 0 && 'bottom-3',
            direction[1] < 0 && 'top-3',
            direction[0] > 0 && 'left-1',
            direction[0] < 0 && 'right-1',
          )}
        />
      )}
    </div>
  )
}

export default Puller
