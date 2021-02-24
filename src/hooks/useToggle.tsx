import { useMemo, useState } from 'react'

type ToggleHandlers = {
  setOn: () => void
  setOff: () => void
  toggle: () => void
  reset: () => void
}

const useToggle = (
  initialValue: boolean = false
): [boolean, ToggleHandlers] => {
  const [value, setValue] = useState<boolean>(initialValue)

  const handlers = useMemo(
    () => ({
      setOn: () => {
        setValue(true)
      },
      setOff: () => {
        setValue(false)
      },
      toggle: () => {
        setValue(value => !value)
      },
      reset: () => {
        setValue(initialValue)
      },
    }),
    [initialValue]
  )

  return [value, handlers]
}

export default useToggle
