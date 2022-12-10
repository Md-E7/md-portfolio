import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system' | undefined

const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>()

  const setDarkTheme = (): void => {
    document.documentElement.classList.add('dark')
  }

  const setLightTheme = (): void => {
    document.documentElement.classList.remove('dark')
  }

  const getThemeFromCache = (): string | Theme | null => {
    return localStorage.getItem('theme')
  }

  const setThemeToCache = (theme: Theme): void => {
    if (theme != null) {
      localStorage.setItem('theme', theme)
    }
  }

  useEffect(() => {
    const themeInCache = getThemeFromCache()

    if (themeInCache === 'light') {
      setTheme(themeInCache)
    } else if (themeInCache === 'dark') {
      setTheme(themeInCache)
    } else {
      setTheme('system')
    }
  }, [])

  useEffect((): void => {
    if (theme === 'light') {
      setLightTheme()
      setTheme(theme)
      setThemeToCache('light')
    } else if (theme === 'dark') {
      setDarkTheme()
      setTheme(theme)
      setThemeToCache('dark')
    } else if (theme === 'system') {
      window.matchMedia('(prefers-color-scheme: dark)').matches ? setDarkTheme() : setLightTheme()
      setTheme('system')
      setThemeToCache('system')
    }
  }, [theme])

  const toggle = (): void => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else if (theme === 'system') {
      setTheme('light')
    }
  }

  return [theme, toggle]
}

export default useTheme
