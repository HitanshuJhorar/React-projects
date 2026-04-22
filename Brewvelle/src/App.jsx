import { useEffect, useState } from 'react'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'

const MENU_PAGE_HASH = '#menu-page'

const getCurrentView = () => {
  if (window.location.pathname === '/menu' || window.location.hash === MENU_PAGE_HASH) {
    return 'menu'
  }

  return 'home'
}

function App() {
  const [view, setView] = useState(getCurrentView)
  const [pageStage, setPageStage] = useState('entered')

  useEffect(() => {
    const handleNavigation = () => {
      setView(getCurrentView())
    }

    window.addEventListener('popstate', handleNavigation)

    return () => window.removeEventListener('popstate', handleNavigation)
  }, [])

  useEffect(() => {
    if (window.location.pathname === '/menu') {
      window.history.replaceState({}, '', `/${MENU_PAGE_HASH}`)
    }

    if (view === 'menu') {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      })
    } else if (window.location.hash && view === 'home') {
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
  }, [view])

  const isMenuPage = view === 'menu'

  const navigate = (href) => {
    const url = new URL(href, window.location.origin)
    const nextPathname = url.pathname
    const nextHash = url.hash
    const isNextMenuPage = nextPathname === '/menu' || nextHash === MENU_PAGE_HASH
    const nextUrl = isNextMenuPage
      ? `/${MENU_PAGE_HASH}`
      : nextHash
        ? `/${nextHash}`
        : '/'
    const currentUrl = `${window.location.pathname}${window.location.hash}`

    if (currentUrl === nextUrl) {
      if (nextHash && nextHash !== MENU_PAGE_HASH) {
        const element = document.getElementById(nextHash.replace('#', ''))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else if (isNextMenuPage) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    if (!isMenuPage && nextPathname === '/' && nextHash && nextHash !== MENU_PAGE_HASH) {
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
      setView(isNextMenuPage ? 'menu' : 'home')
      setPageStage('entered')

      if (isNextMenuPage || (!nextHash && nextPathname === '/')) {
        window.requestAnimationFrame(() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        })
      }
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
