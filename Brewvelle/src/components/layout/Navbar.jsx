import { useState } from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import useScroll from '../../hooks/useScroll'

function Navbar({ isMenuPage, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const isScrolled = useScroll(20)

  const links = [
    { label: isMenuPage ? 'Home' : 'Menu', href: isMenuPage ? '/' : '/#menu' },
    { label: 'Our Process', href: '/#process' },
    { label: 'Reservations', href: '/#find-us' },
    { label: 'Journal', href: '/#footer' },
  ]

  const handleClick = (event, href) => {
    event.preventDefault()
    setMenuOpen(false)
    navigate(href)
  }

  return (
    <>
      <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''} ${menuOpen ? 'site-header--menu-open' : ''}`}>
        <Container className="site-header__inner site-header__inner--exact">
          <a className={`brand ${menuOpen ? 'brand--menu-open' : ''}`} href="/" onClick={(event) => handleClick(event, '/')}>
            Brewvelle
          </a>
          
          <nav className="site-nav" aria-label="Primary">
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={(event) => handleClick(event, link.href)}>
                {link.label}
              </a>
            ))}
          </nav>
          
          <Button
            href={isMenuPage ? '/' : '/menu'}
            size="sm"
            className="nav-cta"
            onClick={(event) => handleClick(event, isMenuPage ? '/' : '/menu')}
          >
            {isMenuPage ? 'Home' : 'Order Now'}
          </Button>

          <button
            className={`mobile-toggle ${menuOpen ? 'mobile-toggle--open' : ''}`}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </Container>
      </header>

      <div className={`mobile-menu-overlay ${menuOpen ? 'mobile-menu-overlay--open' : ''}`} onClick={() => setMenuOpen(false)}></div>
      
      <div className={`mobile-menu-tray ${menuOpen ? 'mobile-menu-tray--open' : ''}`}>
        <div className="mobile-menu-tray__inner">
          <nav className="mobile-nav">
             {links.map((link, i) => (
              <a 
                style={{'--delay': `${i * 80 + 100}ms`}} 
                className={`mobile-nav__link ${menuOpen ? 'revealed' : ''}`}
                key={link.label} 
                href={link.href} 
                onClick={(event) => handleClick(event, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div style={{'--delay': `${links.length * 80 + 100}ms`}} className={`mobile-cta-wrap ${menuOpen ? 'revealed' : ''}`}>
            <Button
              href={isMenuPage ? '/' : '/menu'}
              size="md"
              className="mobile-cta"
              onClick={(event) => handleClick(event, isMenuPage ? '/' : '/menu')}
            >
              {isMenuPage ? 'Home' : 'Order Now'}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

