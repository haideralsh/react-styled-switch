import React from 'react'
import BaseSwitch, { SwitchProps, SwitchSize } from '../BaseSwitch'
import { lg, sm } from '../constants'

type WindowsPhoneSwitchDimention = {
  track: {
    width: number
    height: number
    padding: number
    borderWidth: number
  }
  thumb: {
    width: number
    height: number
    borderGap: number
  }
}

const dimensions: Record<SwitchSize, WindowsPhoneSwitchDimention> = {
  small: {
    track: {
      width: 86 * sm,
      height: 33 * sm,
      padding: 0,
      borderWidth: 2,
    },
    thumb: {
      width: 20 * sm,
      height: 37 * sm,
      borderGap: 2,
    },
  },

  medium: {
    track: {
      width: 86,
      height: 33,
      padding: 0,
      borderWidth: 2,
    },
    thumb: {
      width: 20,
      height: 37,
      borderGap: 2,
    },
  },

  large: {
    track: {
      width: 86 * lg,
      height: 33 * lg,
      padding: 0,
      borderWidth: 3,
    },
    thumb: {
      width: 20 * lg,
      height: 37 * lg,
      borderGap: 3,
    },
  },
}

const theme = {
  dimensions,
  animation: {
    duration: 0.3, // seconds
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

const WindowsPhoneSwitch: React.FC<SwitchProps> = ({
  on,
  size = 'medium',
  ...rest
}) => {
  const { animation, dimensions, palette } = theme

  return (
    <BaseSwitch
      animationDuration={animation.duration}
      endAnimationX={
        dimensions[size].track.width - dimensions[size].thumb.width
      }
      trackCss={`
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        width: ${dimensions[size].track.width}px;
        height: ${dimensions[size].track.height}px;
        padding: ${dimensions[size].track.padding}px;
        box-shadow: inset 0 0 0 2px ${palette.track.shadow};
        border: ${dimensions[size].track.borderWidth}px solid ${
        palette.track.border
      };
        background-color: ${on ? palette.track.active : palette.track.inActive};
      `}
      thumbCss={`
      box-sizing: border-box;
      background-color: #ffffff;
      display: flex;
      width: ${dimensions[size].thumb.width}px;
      height: ${dimensions[size].thumb.height}px;
      border: ${dimensions[size].thumb.borderGap}px solid #000;
      box-shadow: 0px 0px 0px ${dimensions[size].thumb.borderGap}px #fff;
      margin-left: -${dimensions[size].thumb.borderGap}px;
    `}
      on={on}
      {...rest}
    />
  )
}

export default WindowsPhoneSwitch
