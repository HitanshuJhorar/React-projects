import Container from '../ui/Container'
import Button from '../ui/Button'

const links = [
  { label: 'Process', href: '#process' },
  { label: 'Menu', href: '#menu' },
  { label: 'Find Us', href: '#find-us' },
]

function Navbar() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a className="brand" href="#home">
          Brewvelle
        </a>
        <nav className="site-nav" aria-label="Primary">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <Button href="#menu">Order Now</Button>
      </Container>
    </header>
  )
}

export default Navbar
