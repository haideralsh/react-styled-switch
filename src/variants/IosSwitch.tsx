import React from 'react'
import BaseSwitch, { SwitchProps, SwitchSize } from '../BaseSwitch'

type IosSwitchDimention = {
  track: {
    width: number
    height: number
    borderRadius: number
    padding: number
  }
  thumb: {
    width: number
    height: number
    borderRadius: string
  }
}

const dimensions: Record<SwitchSize, IosSwitchDimention> = {
  small: {
    track: {
      width: 59 * 0.8,
      height: 39 * 0.8,
      borderRadius: 40 * 0.8,
      padding: 2 * 0.8,
    },
    thumb: {
      width: 35 * 0.8,
      height: 35 * 0.8,
      borderRadius: '50%',
    },
  },

  medium: {
    track: {
      width: 59,
      height: 39,
      borderRadius: 40,
      padding: 2,
    },
    thumb: {
      width: 35,
      height: 35,
      borderRadius: '50%',
    },
  },

  large: {
    track: {
      width: 59 * 1.5,
      height: 39 * 1.5,
      borderRadius: 40 * 1.5,
      padding: 2 * 1.5,
    },
    thumb: {
      width: 35 * 1.5,
      height: 35 * 1.5,
      borderRadius: '50%',
    },
  },
}

const theme = {
  dimensions,
  animation: {
    duration: 0.3,
  },
  palette: {
    track: {
      active: '#34c759',
      inActive: '#e9e9ea',
    },
    thumb: {
      background: '#ffffff',
      shadow: '0px 2px 4px rgb(0 0 0 / 20%);',
    },
  },
}

const IosSwitch: React.FC<SwitchProps> = ({ on, size = 'medium', ...rest }) => {
  const { animation, dimensions, palette } = theme

  return (
    <BaseSwitch
      animationDuration={animation.duration}
      endAnimationX={
        dimensions[size].track.width -
        dimensions[size].thumb.width -
        dimensions[size].track.padding * 2
      }
      trackCss={`
        box-sizing: border-box;
        display: inline-flex;
        width: ${dimensions[size].track.width}px;
        height: ${dimensions[size].track.height}px;
        align-items: center;
        padding: ${dimensions[size].track.padding}px; 
        border-radius: ${dimensions[size].track.borderRadius}px;
        transition: all ${animation.duration}s;
        transition-property: background-color, box-shadow;
        background-color: ${on ? palette.track.active : palette.track.inActive};
      `}
      thumbCss={`
        box-sizing: border-box;
        background-color: ${palette.thumb.background};
        display: flex;
        height: ${dimensions[size].thumb.height}px;
        width: ${dimensions[size].thumb.width}px;
        border-radius: ${dimensions[size].thumb.borderRadius};
        transition: box-shadow ${animation.duration}s;
        box-shadow: ${palette.thumb.shadow};
      `}
      on={on}
      {...rest}
    />
  )
}

export default IosSwitch
