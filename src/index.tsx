import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { css } from '@emotion/css'

export type ToggleProps = {
  value?: boolean
  activeColor?: React.CSSProperties['color']
  trackColor?: React.CSSProperties['color']
  onChange?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  textDirection?: 'ltr' | 'rtl'
  disabled?: boolean
}

export type BaseToggleProps = {
  trackCss: string
  toggleCss: string
}

const BaseToggle: React.FC<BaseToggleProps & ToggleProps> = props => {
  const [on, setOn] = useState(props.value)
  const [animateX, setAnimateX] = useState(0)

  const toggle = () => {
    setOn(!on)
  }

  useEffect(() => {
    setOn(props.value)
  }, [props.value])

  useEffect(() => {
    setAnimateX(on ? 40 : 0)
  }, [on])

  return (
    <motion.span onClick={toggle} className={css(props.trackCss)}>
      <motion.span
        animate={{ x: animateX }}
        transition={{ duration: 0.3, type: 'spring' }}
        className={css(props.toggleCss)}
      />
    </motion.span>
  )
}

export default BaseToggle
