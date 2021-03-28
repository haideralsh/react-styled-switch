import { useMemo, useState } from 'react'

type SwitchHandlers = {
  setOn: () => void
  setOff: () => void
  toggle: () => void
  reset: () => void
}

const useSwitch = (
  initialState: boolean = false
): [boolean, SwitchHandlers] => {
  const [state, setState] = useState<boolean>(initialState)

  const handlers = useMemo(
    () => ({
      setOn: () => {
        setState(true)
      },
      setOff: () => {
        setState(false)
      },
      toggle: () => {
        setState(on => !on)
      },
      reset: () => {
        setState(initialState)
      },
    }),
    [initialState]
  )

  return [state, handlers]
}

export default useSwitch
