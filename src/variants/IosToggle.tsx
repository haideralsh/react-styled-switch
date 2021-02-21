import React from 'react'
import BaseToggle, { ToggleProps } from '../BaseToggle'

// const trackHeight = 31.0
// const trackRadius = trackHeight / 2.0
// const trackInnerStart = trackHeight / 2.0
// const trackInnerEnd = trackWidth - trackInnerStart
// const trackInnerLength = trackInnerEnd - trackInnerStart

const switchWidth = 59.0
const switchHeight = 39.0

const trackWidth = 51.0
const trackHeight = 35.0

const duration = 0.3 // ms
const padding = (switchWidth - trackWidth) / 4 // (top, bottom, left, right)

const IosToggle: React.FC<ToggleProps> = ({ value, ...rest }) => {
  return (
    <BaseToggle
      animationDuration={duration}
      endAnimationX={switchWidth - trackHeight - padding * 2}
      trackCss={`
        box-sizing: border-box;
        display: inline-flex;
        width: ${switchWidth}px;
        height: ${switchHeight}px;
        align-items: center;
        padding: ${padding}px; 
        border-radius: 40px;
        transition: all ${duration}s;
        transition-property: background-color, box-shadow;
        background-color: ${value ? 'rgb(52, 199, 89)' : '#E9E9EA'};
      `}
      toggleCss={`
      box-sizing: border-box;
      background-color: #ffffff;
      display: flex;
      height: ${trackHeight}px;
      width: ${trackHeight}px;
      border-radius: 50%;
      transition: box-shadow ${duration}s;
      box-shadow: 0px 2px 4px rgb(0 0 0 / 20%);
    `}
      value={value}
      {...rest}
    />
  )
}

export default IosToggle
