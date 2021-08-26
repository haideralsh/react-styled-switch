import React from 'react'
import BaseSwitch, { SwitchProps, SwitchSize } from '../BaseSwitch'
import { lg, sm } from '../constants'
import { getCssSide } from '../utils'

type MacOsSwitchDimention = {
  track: {
    width: number
    height: number
    borderRadius: number
    padding: number
  }
  thumb: {
    width: number
    height: number
    borderRadius: number
  }
  label: {
    fontSize: number
  }
}

const dimensions: Record<SwitchSize, MacOsSwitchDimention> = {
  small: {
    track: {
      width: 110 * sm,
      height: 41 * sm,
      borderRadius: 4 * sm,
      padding: 2 * sm,
    },
    thumb: {
      width: 55 * sm,
      height: 37 * sm,
      borderRadius: 4 * sm,
    },
    label: {
      fontSize: 14,
    },
  },

  medium: {
    track: {
      width: 110,
      height: 41,
      borderRadius: 4,
      padding: 2,
    },
    thumb: {
      width: 55,
      height: 37,
      borderRadius: 4,
    },
    label: {
      fontSize: 16,
    },
  },

  large: {
    track: {
      width: 110 * lg,
      height: 41 * lg,
      borderRadius: 4 * lg,
      padding: 2 * lg,
    },
    thumb: {
      width: 55 * lg,
      height: 37 * lg,
      borderRadius: 4 * lg,
    },
    label: {
      fontSize: 24,
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
      inActive: '#d2d2d2',
    },
    thumb: {
      background: '#ffffff',
      border: '#000000',
      borderRadius: 4,
      shadow: '0px 2px 4px rgb(0 0 0 / 20%)',
    },
  },
}

const labelCss = (
  switchState: 'on' | 'off',
  direction: SwitchProps['textDirection'] = 'ltr',
  size: SwitchSize
) => {
  const { dimensions } = theme

  const side = getCssSide(switchState, direction)

  return `
    padding-${side}: ${(dimensions[size].track.width -
    dimensions[size].thumb.width -
    2) /
    4}px;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, "Apple Color Emoji";
    font-weight: 500;
    font-size: ${dimensions[size].label.fontSize}px;
    text-transform: uppercase;
    user-select: none;
    cursor: default;
  `
}

const MacOsSwitch: React.FC<SwitchProps> = ({
  textDirection,
  on,
  size = 'medium',
  ...rest
}) => {
  const { dimensions, palette, animation } = theme

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
        border-radius: ${dimensions[size].track.borderRadius}px;
        width: ${dimensions[size].track.width}px;
        height: ${dimensions[size].track.height}px;
        align-items: center;
        padding: ${dimensions[size].track.padding}px; 
        transition: background-color ${animation.duration}s;
        background-color: ${on ? palette.track.active : palette.track.inActive};
      `}
      thumbCss={`
        box-sizing: border-box;
        background: ${palette.thumb.background};
        border-radius: ${palette.thumb.borderRadius}px;
        display: flex;
        height: ${dimensions[size].thumb.height}px;
        width: ${dimensions[size].thumb.width}px;
        transition: box-shadow ${animation.duration}s;
        box-shadow: ${palette.thumb.shadow};
      `}
      onLabelCss={labelCss('on', textDirection, size)}
      offLabelCss={labelCss('off', textDirection, size)}
      enableLabels
      on={on}
      {...rest}
    />
  )
}

export default MacOsSwitch
