import { SwitchProps } from './BaseSwitch'

export const getCssSide = (
  switchState: 'on' | 'off',
  direction: SwitchProps['textDirection'] = 'ltr'
) => {
  const config: Record<
    typeof direction,
    Record<typeof switchState, 'left' | 'right'>
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

  return config[direction][switchState]
}
