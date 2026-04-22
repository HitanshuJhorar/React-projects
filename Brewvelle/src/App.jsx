import { useEffect, useState } from 'react'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)
  const [pageStage, setPageStage] = useState('entered')

  useEffect(() => {
    const handleNavigation = () => {
      setPathname(window.location.pathname)
    }

    window.addEventListener('popstate', handleNavigation)

    return () => window.removeEventListener('popstate', handleNavigation)
  }, [])

  useEffect(() => {
    if (window.location.hash && pathname === '/') {
      const id = window.location.hash.replace('#', '')
      const element = document.getElementById(id)

      if (element) {
        window.requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }
    } else if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname])

  const isMenuPage = pathname === '/menu'

  const navigate = (href) => {
    const url = new URL(href, window.location.origin)
    const nextPathname = url.pathname
    const nextHash = url.hash
    const currentUrl = `${window.location.pathname}${window.location.hash}`
    const nextUrl = `${nextPathname}${nextHash}`

    if (currentUrl === nextUrl) {
      if (nextHash) {
        const element = document.getElementById(nextHash.replace('#', ''))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    if (nextPathname === pathname && nextHash) {
      window.history.pushState({}, '', nextUrl)
      const element = document.getElementById(nextHash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      return
    }

    setPageStage('exiting')

    window.setTimeout(() => {
      window.history.pushState({}, '', nextUrl)
      setPathname(nextPathname)
      setPageStage('entered')
    }, 180)
  }

  return (
    <div className="app-shell">
      <Navbar isMenuPage={isMenuPage} navigate={navigate} />
      <div className={`page-shell page-shell--${pageStage}`}>
        {isMenuPage ? <MenuPage /> : <Home />}
      </div>
      <Footer />
    </div>
  )
}

export default App
