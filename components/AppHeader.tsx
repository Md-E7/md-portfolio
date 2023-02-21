import useTheme from '../hooks/useTheme'
import useToggle from '../hooks/useToggle'

const AppHeader = (): JSX.Element => {
  const [theme, toggleTheme] = useTheme()
  const [isMobileMenuOpen, toggleMobileMenu, setMobileMenuOpen] = useToggle()

  const closeMobileMenu = (): void => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={'sticky top-0 flex items-center justify-between p-4'}>
      <h1 className={'text-3xl font-bold'}>Md-E7</h1>

      <div className={'flex items-center gap-2'}>
        <button onClick={toggleTheme} className="rounded-md p-1">
          {theme === 'light' && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <title>Light</title>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
            </svg>
          )}

          {theme === 'dark' && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <title>Dark</title>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
            </svg>
          )}

          {theme === 'system' && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <title>System</title>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/>
            </svg>
          )}
        </button>

        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen
            ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          }
        </button>

        {isMobileMenuOpen &&
          <nav className={'absolute right-5 top-0 flex translate-y-1/2 flex-col rounded border border-slate-300 bg-white shadow'}>
            <a href="#about_me" onClick={closeMobileMenu} className={'py-1.5 px-3 font-medium'}>Tentang saya</a>
            <a href="#my_skills" onClick={closeMobileMenu} className={'py-1.5 px-3 font-medium'}>Kehalian saya</a>
            <a href="#my_projects" onClick={closeMobileMenu} className={'py-1.5 px-3 font-medium'}>Proyek saya</a>
          </nav>
        }
      </div>
    </header>
  )
}

export default AppHeader
