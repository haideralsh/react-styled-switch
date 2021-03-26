import React from 'react'
import BaseToggle, { ToggleProps } from '../BaseToggle'

const theme = {
  animation: {
    duration: 0.3,
  },
  dimensions: {
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

const IosToggle: React.FC<ToggleProps> = ({ on, ...rest }) => {
  const { animation, dimensions, palette } = theme

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
        width: ${dimensions.track.width}px;
        height: ${dimensions.track.height}px;
        align-items: center;
        padding: ${dimensions.track.padding}px; 
        border-radius: ${dimensions.track.borderRadius}px;
        transition: all ${animation.duration}s;
        transition-property: background-color, box-shadow;
        background-color: ${on ? palette.track.active : palette.track.inActive};
      `}
      thumbCss={`
        box-sizing: border-box;
        background-color: ${palette.thumb.background};
        display: flex;
        height: ${dimensions.thumb.height}px;
        width: ${dimensions.thumb.width}px;
        border-radius: ${dimensions.thumb.borderRadius};
        transition: box-shadow ${animation.duration}s;
        box-shadow: ${palette.thumb.shadow};
      `}
      on={on}
      {...rest}
    />
  )
}

export default IosToggle
