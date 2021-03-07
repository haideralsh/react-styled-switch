import React from 'react'
import BaseToggle, { ToggleProps } from '../BaseToggle'

const switchWidth = 110
const switchHeight = 41

const toggleWidth = 55
const toggleHeight = 37

const duration = 0.3 // seconds
const padding = 2

const stateLabelCss = (
  toggleState: 'on' | 'off',
  direction: ToggleProps['textDirection'] = 'ltr'
) => {
  const config: Record<
    typeof direction,
    Record<typeof toggleState, 'left' | 'right'>
  > = {
    ltr: {
      on: 'left',
      off: 'right',
    },
    rtl: {
      on: 'right',
      off: 'left',
    },
  }

  const side = config[direction][toggleState]
  return `
    padding-${side}: ${(switchWidth - toggleWidth - 2) / 4}px;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, "Apple Color Emoji";
    text-transform: uppercase;
    font-weight: 500;
    user-select: none;
    cursor: default;
  `
}

const MacOsToggle: React.FC<ToggleProps> = ({
  value,
  textDirection,
  ...rest
}) => {
  return (
    <BaseToggle
      animationDuration={duration}
      endAnimationX={switchWidth - toggleWidth - padding * 2}
      trackCss={`
        box-sizing: border-box;
        display: inline-flex;
        border-radius: 4px;
        width: ${switchWidth}px;
        height: ${switchHeight}px;
        align-items: center;
        padding: ${padding}px; 
        transition: all ${duration}s;
        transition-property: background-color, box-shadow;
        background-color: ${value ? 'rgb(52, 199, 89)' : '#D2D2D2'};
      `}
      toggleCss={`
        box-sizing: border-box;
        background-color: #ffffff;
        border-radius: 4px;
        display: flex;
        height: ${toggleHeight}px;
        width: ${toggleWidth}px;
        transition: box-shadow ${duration}s;
        box-shadow: 0px 2px 4px rgb(0 0 0 / 20%);
    `}
      onLabelCss={stateLabelCss('on', textDirection)}
      offLabelCss={stateLabelCss('off', textDirection)}
      value={value}
      enableLabels
      {...rest}
    />
  )
}

export default MacOsToggle
