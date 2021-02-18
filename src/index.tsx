import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { css } from '@emotion/css'

export type ToggleProps = {
  value?: boolean
  activeColor?: React.CSSProperties['color']
  trackColor?: React.CSSProperties['color']
  onChange?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  dir?: 'ltr' | 'rtl'
  disabled?: boolean
}

export type BaseToggleProps = {
  trackCss: string
  toggleCss: string
  animationDuration: number
  animationType: 'spring' // Offer more types
  beginAnimationX: number
  endAnimationX: number
}

const BaseToggle: React.FC<BaseToggleProps & ToggleProps> = ({
  value = false,
  dir = 'ltr',
  disabled = false,
  onChange,
  trackCss,
  toggleCss,
  animationDuration,
  animationType,
  beginAnimationX,
  endAnimationX,
}) => {
  const [animateX, setAnimateX] = useState(beginAnimationX)

  useEffect(() => {
    setAnimateX(value ? endAnimationX : beginAnimationX)
  }, [value, endAnimationX, beginAnimationX])

  return (
    <motion.span onClick={onChange} className={css(trackCss)}>
      <motion.span
        animate={{ x: animateX }}
        transition={{ duration: animationDuration, type: animationType }}
        className={css(toggleCss)}
      />
    </motion.span>
  )
}

export default BaseToggle
