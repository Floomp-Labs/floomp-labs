import { useEffect, useState } from 'react'
import { HomePage } from './pages/HomePage'
import { WebDesignPage } from './pages/WebDesignPage'

function usePathname() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    function sync() {
      setPath(window.location.pathname)
    }
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  return path.replace(/\/+$/, '') || '/'
}

function App() {
  const path = usePathname()

  if (path === '/web-design') {
    return <WebDesignPage />
  }

  return <HomePage />
}

export default App
