import { useState } from 'react'

const useToggle = (): [boolean, (() => void), ((value: (((prevState: boolean) => boolean) | boolean)) => void)] => {
  const [value, setValue] = useState(false)

  const toggle = (): void => {
    setValue(!value)
  }

  return [value, toggle, setValue]
}

export default useToggle
