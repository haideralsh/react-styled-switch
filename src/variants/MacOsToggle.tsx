import React from 'react'
import BaseSwitch, { SwitchProps } from '../BaseSwitch'
import { getCssSide } from '../utils'

const theme = {
  animation: {
    duration: 0.3,
  },
  dimensions: {
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
  direction: SwitchProps['textDirection'] = 'ltr'
) => {
  const {
    dimensions: { thumb, track },
  } = theme

  const side = getCssSide(switchState, direction)

  return `
    padding-${side}: ${(track.width - thumb.width - 2) / 4}px;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, "Apple Color Emoji";
    text-transform: uppercase;
    font-weight: 500;
    user-select: none;
    cursor: default;
  `
}

const MacOsSwitch: React.FC<SwitchProps> = ({ textDirection, on, ...rest }) => {
  const { dimensions, palette, animation } = theme

  return (
    <BaseSwitch
      animationDuration={animation.duration}
      endAnimationX={
        dimensions.track.width -
        dimensions.thumb.width -
        dimensions.track.padding * 2
      }
      trackCss={`
        box-sizing: border-box;
        display: inline-flex;
        border-radius: ${dimensions.track.borderRadius}px;
        width: ${dimensions.track.width}px;
        height: ${dimensions.track.height}px;
        align-items: center;
        padding: ${dimensions.track.padding}px; 
        transition: background-color ${animation.duration}s;
        background-color: ${on ? palette.track.active : palette.track.inActive};
      `}
      thumbCss={`
        box-sizing: border-box;
        background: ${palette.thumb.background};
        border-radius: ${palette.thumb.borderRadius}px;
        display: flex;
        height: ${dimensions.thumb.height}px;
        width: ${dimensions.thumb.width}px;
        transition: box-shadow ${animation.duration}s;
        box-shadow: ${palette.thumb.shadow};
      `}
      onLabelCss={labelCss('on', textDirection)}
      offLabelCss={labelCss('off', textDirection)}
      enableLabels
      on={on}
      {...rest}
    />
  )
}

export default MacOsSwitch
