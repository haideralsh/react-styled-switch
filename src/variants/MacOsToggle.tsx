import React from 'react'
import BaseToggle, { ToggleProps } from '../BaseToggle'

const switchWidth = 110
const switchHeight = 41

const toggleWidth = 55
const toggleHeight = 37

const duration = 0.3 // ms
const padding = 2

const MacOsToggle: React.FC<ToggleProps> = ({ value, ...rest }) => {
  return (
    <BaseToggle
      animationDuration={duration}
      endAnimationX={switchWidth - toggleWidth - padding * 2}
      trackCss={`
        box-sizing: border-box;
        display: inline-flex;
        border-radius: 3px;
        width: ${switchWidth}px;
        height: ${switchHeight}px;
        align-items: center;
        padding: ${padding}px; 
        transition: all ${duration}s;
        transition-property: background-color, box-shadow;
        background-color: ${value ? 'rgb(52, 199, 89)' : '#E9E9EA'};
      `}
      toggleCss={`
      box-sizing: border-box;
      background-color: #ffffff;
      border-radius: 3px;
      display: flex;
      height: ${toggleHeight}px;
      width: ${toggleWidth}px;
      transition: box-shadow ${duration}s;
      box-shadow: 0px 2px 4px rgb(0 0 0 / 20%);
    `}
      value={value}
      {...rest}
    />
  )
}

export default MacOsToggle
