import { useEffect, useState } from 'react'

export function Root() {
  const [darkMode, setDarkMode] = useState(localStorage.darkMode === 'light')

  useEffect(() => {
    const prevTheme = darkMode ? 'dark' : 'light'
    document.documentElement.classList.remove(prevTheme)

    const nextTheme = darkMode ? 'light' : 'dark'
    document.documentElement.classList.add(nextTheme)

    localStorage.setItem('darkMode', nextTheme)
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode)

  return (
    <div className='bg-light text-dark dark:bg-dark dark:text-light'>
      <div className='relative h-full min-h-screen w-full grid content-center'>
        <div className='w-full max-w-screen-2xl mx-auto px-6'>
          <div className='flex flex-col items-center text-center gap-8 py-16'>
            <h1 className='tracking-wide lg:text-7xl'>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </h1>
            <button onClick={toggleDarkMode}>
              Click to change theme
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}