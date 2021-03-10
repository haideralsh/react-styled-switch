import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { css, cx } from '@emotion/css'

export type ToggleProps = {
  value?: boolean
  activeColor?: React.CSSProperties['color']
  trackColor?: React.CSSProperties['color']
  onChange?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  textDirection?: 'ltr' | 'rtl'
} & HTMLSpanElement

type BaseToggleProps = {
  trackCss: string
  toggleCss: string

  enableLabels?: boolean
  onLabel?: string
  offLabel?: string
  labelsWrapperCss?: string
  onLabelCss?: string
  offLabelCss?: string

  animationDuration: number // Maybe have a default value?
  animationType?: 'spring' // Offer more types
  startAnimationX?: number
  endAnimationX: number
}

// Opacity of a disabled switch, as eye-balled from iOS Simulator on Mac.
const disabledOpacity = 0.5

const defaultLabelsWrapperCss = `
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BaseToggle: React.FC<BaseToggleProps & ToggleProps> = ({
  value = false,
  // textDirection = 'ltr',
  onChange,
  trackCss,
  toggleCss,
  labelsWrapperCss = defaultLabelsWrapperCss,
  onLabelCss,
  offLabelCss,
  animationDuration = 0.3,
  animationType = 'spring',
  startAnimationX = 0,
  endAnimationX,
  enableLabels = false,
  onLabel = 'On',
  offLabel = 'Off',
}) => {
  const [animateX, setAnimateX] = useState(startAnimationX)
  const disabled = !Boolean(onChange)

  useEffect(() => {
    setAnimateX(value ? endAnimationX : startAnimationX)
  }, [value, endAnimationX, startAnimationX])

  return (
    <motion.span
      onClick={onChange}
      className={cx(
        css(trackCss),
        css`
          ${disabled && `opacity: ${disabledOpacity};`}
          position: relative;
        `
      )}
    >
      {enableLabels && (
        <span className={css(labelsWrapperCss)}>
          <span className={css(onLabelCss)}>{onLabel}</span>
          <span className={css(offLabelCss)}>{offLabel}</span>
        </span>
      )}
      <motion.span
        initial={{ x: animateX }}
        animate={{ x: animateX }}
        transition={{ duration: animationDuration, type: animationType }}
        className={css(toggleCss)}
      />
    </motion.span>
  )
}

export default BaseToggle
