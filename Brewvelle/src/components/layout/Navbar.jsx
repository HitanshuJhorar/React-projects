import Container from '../ui/Container'
import Button from '../ui/Button'

function Navbar({ isMenuPage, navigate }) {
  const links = [
    { label: isMenuPage ? 'Home' : 'Menu', href: isMenuPage ? '/' : '/#menu' },
    { label: 'Our Story', href: '/#process' },
    { label: 'Reservations', href: '/#find-us' },
    { label: 'Journal', href: '/#footer' },
  ]

  const handleClick = (event, href) => {
    event.preventDefault()
    navigate(href)
  }

  return (
    <header className="site-header">
      <Container className="site-header__inner site-header__inner--exact">
        <a className="brand" href="/" onClick={(event) => handleClick(event, '/')}>
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
      </Container>
    </header>
  )
}

export default Navbar
