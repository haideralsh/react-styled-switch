import React from 'react'
import BaseSwitch, { SwitchProps, SwitchSize } from '../BaseSwitch'
import { lg, sm } from '../constants'

type MaterialSwitchDimention = {
  track: {
    width: number
    height: number
    borderRadius: number
  }
  thumb: {
    width: number
    height: number
    borderRadius: string
  }
}

const dimensions: Record<SwitchSize, MaterialSwitchDimention> = {
  small: {
    track: {
      width: 66 * sm,
      height: 28 * sm,
      borderRadius: 20 * sm,
    },
    thumb: {
      width: 40 * sm,
      height: 40 * sm,
      borderRadius: '50%',
    },
  },

  medium: {
    track: {
      width: 66,
      height: 28,
      borderRadius: 20,
    },
    thumb: {
      width: 40,
      height: 40,
      borderRadius: '50%',
    },
  },

  large: {
    track: {
      width: 66 * lg,
      height: 28 * lg,
      borderRadius: 20 * lg,
    },
    thumb: {
      width: 40 * lg,
      height: 40 * lg,
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
      active: '#c3dafc',
      inActive: '#bdbdbd',
      border: '#000000',
      shadow: '#ffffff',
    },
    thumb: {
      active: '#1970e3',
      inActive: '#ececec',
      border: '#000000',
      shadow1: 'rgba(0,0,0,0.12)',
      shadow2: 'rgba(0,0,0,0.24)',
    },
  },
}

const MaterialSwitch: React.FC<SwitchProps> = ({
  on,
  size = 'medium',
  ...rest
}) => {
  const { animation, dimensions, palette } = theme

  return (
    <BaseSwitch
      on={on}
      animationDuration={animation.duration}
      startAnimationX={-dimensions[size].thumb.width / 4}
      endAnimationX={
        dimensions[size].track.width -
        dimensions[size].thumb.width +
        dimensions[size].thumb.width / 4
      }
      trackCss={`
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        width: ${dimensions[size].track.width}px;
        height: ${dimensions[size].track.height}px;
        margin: 0 ${dimensions[size].thumb.width / 4}px; 
        border-radius: ${dimensions[size].track.borderRadius}px;
        background-color: ${on ? palette.track.active : palette.track.inActive};
      `}
      thumbCss={`
        display: inline-flex;
        box-sizing: border-box;
        background-color: ${on ? palette.thumb.active : palette.thumb.inActive};
        height: ${dimensions[size].thumb.height}px;
        width: ${dimensions[size].thumb.width}px;
        border-radius: ${dimensions[size].thumb.borderRadius};
        box-shadow: 0 1px 3px ${palette.thumb.shadow1}, 0 1px 2px ${
        palette.thumb.shadow2
      };
    `}
      {...rest}
    />
  )
}

export default MaterialSwitch
