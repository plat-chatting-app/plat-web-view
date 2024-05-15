'use client'

import clsx from 'clsx'
import { useMemo, useState } from 'react'
import '@plat-ui/SwipeableDrawer/SwipeableDrawer.style.scss'
import {
  SwipeDirection,
  getScreenSizeByDirection,
  type Anchor,
} from '@plat-ui/SwipeableDrawer/utils'
import Puller, {
  PullerProps,
  PULLER_SIZE,
} from '@plat-ui/SwipeableDrawer/Puller'

export interface SwipeableDrawerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  anchor?: Anchor
  startPoint?: number
  onFull?: () => void
  pullerProps?: PullerProps
}

const SwipeableDrawer = ({
  anchor = 'bottom',
  startPoint = 0,
  onFull,
  children,
  className,
  pullerProps,
  ...restProps
}: SwipeableDrawerProps) => {
  const pullerSize = pullerProps?.size ?? PULLER_SIZE
  const availableSize =
    getScreenSizeByDirection(SwipeDirection[anchor]) - pullerSize

  const [tipLength, setTipLength] = useState<number>(startPoint)
  const [offset, setOffset] = useState<number>(0)

  const [isSwiping, setIsSwiping] = useState<boolean>(false)

  const dynamicTipLength = useMemo(() => {
    if (isSwiping) {
      const newLength = tipLength + offset
      return newLength > 0 && newLength <= availableSize ? newLength : tipLength
    }
    return tipLength
    // eslint-disable-next-line
  }, [tipLength, offset, isSwiping])

  const handleSwipeStart = () => {
    return setIsSwiping(true)
  }

  const handleSwipe = (value: number) => {
    setOffset(value)
  }

  const handleSwipeEnd = () => {
    const newLength = tipLength + offset
    if (newLength < 0) {
      setTipLength(0)
    } else if (newLength > 0 && newLength <= availableSize) {
      setTipLength(newLength)
    } else {
      setTipLength(availableSize)
      onFull?.()
    }

    setOffset(0)
    return setIsSwiping(false)
  }

  return (
    <div className="drawer-mask">
      <div
        {...restProps}
        className={clsx(
          'drawer-container',
          anchor === 'left' && 'h-full inset-y-0 border-r rounded-r-lg',
          anchor === 'right' &&
            'translate-x-full h-full inset-y-0 border-l rounded-l-lg',
          anchor === 'top' && 'w-full inset-x-0 border-b rounded-b-lg',
          anchor === 'bottom' &&
            'translate-y-full w-full inset-x-0 border-t rounded-t-lg',
          className,
        )}
        tabIndex={-1}
        style={{
          [anchor]:
            ((SwipeDirection[anchor][0] || SwipeDirection[anchor][1]) < 0
              ? pullerSize
              : 0) + dynamicTipLength,
        }}
      >
        <Puller
          onSwipeStart={handleSwipeStart}
          onSwipeEnd={handleSwipeEnd}
          onSwipe={handleSwipe}
          direction={SwipeDirection[anchor]}
          {...pullerProps}
        />
        {children}
      </div>
    </div>
  )
}

export default SwipeableDrawer
