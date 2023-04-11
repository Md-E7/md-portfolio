import { MutableRefObject, useEffect, useRef } from 'react'

const useClickOutside = (method: Function): Array<MutableRefObject<HTMLElement | null>> => {
  const ref = useRef<HTMLElement | null>(null)

  const handleClickOutside = (event: MouseEvent): void => {
    if ((ref.current != null) && !ref.current.contains(event.target as Node)) {
      method()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return [ref]
}

export default useClickOutside
