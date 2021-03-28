import { BaseToggle } from '../../.'
const theme = {
  dimensions: {
    track: {
      width: 35,
      height: 20,
      borderRadius: 20,
      padding: 2,
    },
    thumb: {
      width: 16,
      height: 16,
      borderRadius: '50%',
    },
  },
  animation: {
    duration: 0.3,
  },
  palette: {
    track: {
      active: 'dodgerblue',
      inActive: 'lightgray',
    },
    thumb: {
      background: 'white',
    },
  },
}

export default function GlobalToggle({ on, ...rest }) {
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
          background-color: ${
            on ? palette.track.active : palette.track.inActive
          };
        `}
      thumbCss={`
          box-sizing: border-box;
          background-color: ${palette.thumb.background};
          display: flex;
          height: ${dimensions.thumb.height}px;
          width: ${dimensions.thumb.width}px;
          border-radius: ${dimensions.thumb.borderRadius};
          transition: box-shadow ${animation.duration}s;
        `}
      on={on}
      {...rest}
    />
  )
}
