import React from 'react'
import BaseToggle, { ToggleProps } from '../BaseToggle'
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
    toggle: {
      active: '#1970e3',
      inActive: '#ececec',
      border: '#000000',
      shadow: '0px 2px 4px rgb(0 0 0 / 20%)',
    },
  },
}

const labelCss = (
  toggleState: 'on' | 'off',
  direction: ToggleProps['textDirection'] = 'ltr'
) => {
  const {
    dimensions: { thumb, track },
  } = theme

  const side = getCssSide(toggleState, direction)

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

const MacOsToggle: React.FC<ToggleProps> = ({
  value,
  textDirection,
  ...rest
}) => {
  const { dimensions, palette, animation } = theme

  return (
    <BaseToggle
      animationDuration={animation.duration}
      endAnimationX={
        dimensions.track.width -
        dimensions.thumb.width -
        dimensions.track.padding * 2
      }
      trackCss={`
        box-sizing: border-box;
        display: inline-flex;
        border-radius: 4px;
        width: ${dimensions.track.width}px;
        height: ${dimensions.track.height}px;
        align-items: center;
        padding: ${dimensions.track.padding}px; 
        transition: background-color ${animation.duration}s;
        background-color: ${
          value ? palette.track.active : palette.track.inActive
        };
      `}
      thumbCss={`
        box-sizing: border-box;
        background-color: #ffffff;
        border-radius: 4px;
        display: flex;
        height: ${dimensions.thumb.height}px;
        width: ${dimensions.thumb.width}px;
        transition: box-shadow ${animation.duration}s;
        box-shadow: 0px 2px 4px rgb(0 0 0 / 20%);
    `}
      onLabelCss={labelCss('on', textDirection)}
      offLabelCss={labelCss('off', textDirection)}
      value={value}
      enableLabels
      {...rest}
    />
  )
}

export default MacOsToggle
