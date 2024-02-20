import { useEffect, useState } from 'react'
import { variantsRoot } from '../styles/variants'

const { base, container, content, title, action } = variantsRoot()

export function Root() {
  const [theme, setTheme] = useState(localStorage.theme === 'light')

  useEffect(() => {
    const prevTheme = theme ? 'dark' : 'light'
    document.documentElement.classList.remove(prevTheme)

    const nextTheme = theme ? 'light' : 'dark'
    document.documentElement.classList.add(nextTheme)

    localStorage.setItem('theme', nextTheme)
  }, [theme])

  const handleThemeSwitcher = () => setTheme(prevMode => !prevMode)

  return (
    <div className={base()}>
      <div className={container()}>
        <div className={content()}>
          <h1 className={title()}>{theme ? 'Light Mode' : 'Dark Mode'}</h1>
          <button className={action()} onClick={handleThemeSwitcher}>Theme Switcher</button>
        </div>
      </div>
    </div>
  )
}