import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { css, cx } from '@emotion/css'

export type ToggleProps = {
  value?: boolean
  activeColor?: React.CSSProperties['color']
  trackColor?: React.CSSProperties['color']
  onChange?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  textDirection?: 'ltr' | 'rtl'
}

type BaseToggleProps = {
  trackCss: string
  toggleCss: string
  animationDuration: number // Maybe have a default value?
  animationType?: 'spring' // Offer more types
  beginAnimationX?: number
  endAnimationX: number
}

// Opacity of a disabled switch, as eye-balled from iOS Simulator on Mac.
const disabledOpacity = 0.5

const BaseToggle: React.FC<BaseToggleProps & ToggleProps> = ({
  value = false,
  // textDirection = 'ltr',
  onChange,
  trackCss,
  toggleCss,
  animationDuration,
  animationType = 'spring',
  beginAnimationX = 0,
  endAnimationX,
}) => {
  const [animateX, setAnimateX] = useState(beginAnimationX)
  const disabled = !Boolean(onChange)

  useEffect(() => {
    setAnimateX(value ? endAnimationX : beginAnimationX)
  }, [value, endAnimationX, beginAnimationX])

  return (
    <motion.span
      onClick={onChange}
      className={cx(
        css(trackCss),
        css`
          ${disabled && `opacity: ${disabledOpacity};`}
        `
      )}
    >
      <motion.span
        animate={{ x: animateX }}
        transition={{ duration: animationDuration, type: animationType }}
        className={css(toggleCss)}
      />
    </motion.span>
  )
}

export default BaseToggle
