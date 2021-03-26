import { useMemo, useState } from 'react'

type ToggleHandlers = {
  setOn: () => void
  setOff: () => void
  toggle: () => void
  reset: () => void
}

const useToggle = (
  initialState: boolean = false
): [boolean, ToggleHandlers] => {
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

export default useToggle
