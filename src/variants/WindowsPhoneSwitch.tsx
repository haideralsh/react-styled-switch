import React from 'react'
import BaseSwitch, { SwitchProps } from '../BaseSwitch'

const theme = {
  animation: {
    duration: 0.3, // seconds
  },
  dimensions: {
    track: {
      width: 86,
      height: 33,
      padding: 0,
    },
    thumb: {
      width: 20,
      height: 37,
      borderGap: 2,
    },
  },
  palette: {
    track: {
      active: '#2AA0E3',
      inActive: '#fff',
      border: '#000000',
      shadow: '#ffffff',
    },
    thumb: {
      active: '#fff',
      inActive: '#fff',
      border: '#000',
      shadow: '#fff',
    },
  },
}

const WindowsPhoneSwitch: React.FC<SwitchProps> = ({ on, ...rest }) => {
  const { animation, dimensions, palette } = theme

  return (
    <BaseSwitch
      animationDuration={animation.duration}
      endAnimationX={dimensions.track.width - dimensions.thumb.width}
      trackCss={`
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        width: ${dimensions.track.width}px;
        height: ${dimensions.track.height}px;
        padding: ${dimensions.track.padding}px; 
        box-shadow: inset 0 0 0 2px ${palette.track.shadow};
        border: 2px solid ${palette.track.border};
        background-color: ${on ? palette.track.active : palette.track.inActive};
      `}
      thumbCss={`
      box-sizing: border-box;
      background-color: #ffffff;
      display: flex;
      width: ${dimensions.thumb.width}px;
      height: ${dimensions.thumb.height}px;
      border: ${dimensions.thumb.borderGap}px solid #000;
      box-shadow: 0px 0px 0px ${dimensions.thumb.borderGap}px #fff;
      margin-left: -${dimensions.thumb.borderGap}px;
    `}
      on={on}
      {...rest}
    />
  )
}

export default WindowsPhoneSwitch
