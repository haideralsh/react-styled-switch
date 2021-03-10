import React from 'react'
import BaseToggle, { ToggleProps } from '../BaseToggle'

const switchWidth = 86,
  switchHeight = 33,
  toggleWidth = 20,
  toggleHeight = 37,
  duration = 0.3, // seconds
  padding = 0,
  borderGap = 2

const WindowsPhoneToggle: React.FC<ToggleProps> = ({ value, ...rest }) => {
  return (
    <BaseToggle
      animationDuration={duration}
      endAnimationX={switchWidth - toggleWidth}
      trackCss={`
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;

        width: ${switchWidth}px;
        height: ${switchHeight}px;
        padding: ${padding}px; 
        box-shadow: inset 0 0 0 2px #ffffff;
        border: 2px solid #000000;
        border-radius: 0;
        background-color: ${value ? '#2AA0E3' : '#fff'};
      `}
      thumbCss={`
      box-sizing: border-box;
      background-color: #ffffff;
      display: flex;
      height: ${toggleHeight}px;
      width: ${toggleWidth}px;
      border: ${borderGap}px solid #000;
      border-radius: 0;
      box-shadow: 0px 0px 0px ${borderGap}px #fff;
      margin-left: -${borderGap}px;
    `}
      value={value}
      {...rest}
    />
  )
}

export default WindowsPhoneToggle
