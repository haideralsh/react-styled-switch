import React from 'react'
import BaseToggle, { ToggleProps } from '../BaseToggle'

const theme = {
  animation: {
    duration: 0.3, // seconds
  },
  dimentions: {
    track: {
      width: 66,
      height: 28,
      borderRadius: 20,
    },
    toggle: {
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
    toggle: {
      active: '#1970E3',
      inActive: '#ececec',
      border: '#000',
    },
  },
}

const MaterialToggle: React.FC<ToggleProps> = ({ value, ...rest }) => {
  const { animation, dimentions, palette } = theme

  return (
    <BaseToggle
      animationDuration={animation.duration}
      startAnimationX={-dimentions.toggle.width / 4}
      endAnimationX={
        dimentions.track.width -
        dimentions.toggle.width +
        dimentions.toggle.width / 4
      }
      trackCss={`
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;

        width: ${dimentions.track.width}px;
        height: ${dimentions.track.height}px;
        margin: 0 ${dimentions.toggle.width / 4}px; 
        border-radius: ${dimentions.track.borderRadius}px;
        background-color: ${
          value ? palette.track.active : palette.track.inActive
        };
      `}
      toggleCss={`
        display: inline-flex;
        box-sizing: border-box;
        background-color: ${
          value ? palette.toggle.active : palette.toggle.inActive
        };
        height: ${dimentions.toggle.height}px;
        width: ${dimentions.toggle.width}px;
        border-radius: ${dimentions.toggle.borderRadius};
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    `}
      value={value}
      {...rest}
    />
  )
}

export default MaterialToggle
