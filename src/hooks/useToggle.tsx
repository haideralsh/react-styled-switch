import { useMemo, useState } from 'react'

const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState(initialValue)

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

  return {
    value,
    ...handlers,
  }
}

export default useToggle
