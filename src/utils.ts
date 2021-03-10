import { ToggleProps } from './BaseToggle'

export const getCssSide = (
  toggleState: 'on' | 'off',
  direction: ToggleProps['textDirection'] = 'ltr'
) => {
  const config: Record<
    typeof direction,
    Record<typeof toggleState, 'left' | 'right'>
  > = {
    ltr: {
      on: 'left',
      off: 'right',
    },
    rtl: {
      on: 'right',
      off: 'left',
    },
  }

  return config[direction][toggleState]
}
