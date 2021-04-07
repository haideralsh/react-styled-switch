import React from 'react'
import BaseSwitch, { SwitchProps, SwitchSize } from '../BaseSwitch'
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
      width: 110 * 0.8,
      height: 41 * 0.8,
      borderRadius: 4 * 0.8,
      padding: 2 * 0.8,
    },
    thumb: {
      width: 55 * 0.8,
      height: 37 * 0.8,
      borderRadius: 4 * 0.8,
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
      width: 110 * 1.5,
      height: 41 * 1.5,
      borderRadius: 4 * 1.5,
      padding: 2 * 1.5,
    },
    thumb: {
      width: 55 * 1.5,
      height: 37 * 1.5,
      borderRadius: 4 * 1.5,
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
