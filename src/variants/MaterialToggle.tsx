import React from 'react'
import BaseToggle, { ToggleProps } from '../BaseToggle'

const theme = {
  animation: {
    duration: 0.3,
  },
  dimensions: {
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

const MaterialToggle: React.FC<ToggleProps> = ({ on, ...rest }) => {
  const { animation, dimensions, palette } = theme

  return (
    <BaseToggle
      animationDuration={animation.duration}
      startAnimationX={-dimensions.thumb.width / 4}
      endAnimationX={
        dimensions.track.width -
        dimensions.thumb.width +
        dimensions.thumb.width / 4
      }
      trackCss={`
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        width: ${dimensions.track.width}px;
        height: ${dimensions.track.height}px;
        margin: 0 ${dimensions.thumb.width / 4}px; 
        border-radius: ${dimensions.track.borderRadius}px;
        background-color: ${on ? palette.track.active : palette.track.inActive};
      `}
      thumbCss={`
        display: inline-flex;
        box-sizing: border-box;
        background-color: ${on ? palette.thumb.active : palette.thumb.inActive};
        height: ${dimensions.thumb.height}px;
        width: ${dimensions.thumb.width}px;
        border-radius: ${dimensions.thumb.borderRadius};
        box-shadow: 0 1px 3px ${palette.thumb.shadow1}, 0 1px 2px ${
        palette.thumb.shadow2
      };
    `}
      on={on}
      {...rest}
    />
  )
}

export default MaterialToggle
